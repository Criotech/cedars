import React, { useEffect, useState, useRef } from 'react';
import moment from 'moment';
import swal from 'sweetalert';
import DashboardLayout from '../../layouts/Dasboard_Layout';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore, getDocs, doc, updateDoc, addDoc, collection, query, onSnapshot, serverTimestamp, orderBy, deleteDoc } from 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAfOD0YL2cC5s0eDoYu7l2zkyoBhuc6rfE',
  authDomain: 'dodeel-cds.firebaseapp.com',
  projectId: 'dodeel-cds',
  storageBucket: 'dodeel-cds.appspot.com',
  messagingSenderId: '60292476262',
  appId: '1:60292476262:web:e74f8f938da332429faca7',
  measurementId: 'G-Z175Z158DS'
});

const db = getFirestore();


const TrainingChats = () => {
  const [chats, setChats] = useState([]);
  const [text, setText] = useState('');
  const messagesEndRef = useRef(null);
  const [showDropDown, toggleDropdown] = useState(false);
  const [status, setStatus] = useState('all users');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  
  async function fetchChats () {
    const q = await query(collection(db, 'chats'), orderBy('createdAt'));
    onSnapshot(q, (querySnapshot) => {
      let arr = [];

      querySnapshot.forEach((doc) => {
        arr.push({ id: doc.id, value: doc.data() });
      });
      setChats(arr);
    });
  }

  async function fetchChatSettings () {
    const q = await collection(db, 'settings');
    onSnapshot(q, (querySnapshot) => {

      querySnapshot.forEach((doc) => {
        setStatus(doc.data().status);
        // console.log(doc.data());
      });
    });
  }

  useEffect(() => {
    fetchChats();
    fetchChatSettings();
    // eslint-disable-next-line
    }, []);

  useEffect(() => {
    if (messagesEndRef) {
      messagesEndRef.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, []);

  const sendMessage = async (e) => {
    if (e.key === 'Enter') {
      await addDoc(collection(db, 'chats'), {
        text,
        name: 'Admin',
        isAdmin: true,
        createdAt: serverTimestamp()
      });
      setText('');
    }
  };



  const updateChatSettings = async (val) => {
    const settingsRef = doc(db, 'settings', 'Z0loDfGgk4myMYa9bctL');
    await updateDoc(settingsRef, {
      'status': val
    });
    setStatus(val);
    toggleDropdown(false);
  };

  const chatSettings = (val) => {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure you want to update chat status.',
      icon: 'warning',
      buttons: true,
      dangerMode: false,
    })
      .then((willUpdte) => {
        if (willUpdte) {
          updateChatSettings(val);
        } else {
          swal('Operation canceled!');
        }
      });
  };

  

  const clearChats = async () => {
    const q = query(collection(db, 'chats'));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (x) => {
      await deleteDoc(doc(db, 'chats', x.id));
    });
  };

  const clearAllChats = () => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          clearChats();
        } else {
          swal('Operation canceled!');
        }
      });
  };

  const renderChats = () => {
    return chats.map(chat => (
      <div className={chat.value.isAdmin?'d-flex justify-content-end':'d-flex'} key={chat.id}>
        <div className={chat.value.isAdmin?'chatcont darker': 'chatcont'}>
          {/* {
          chat.value.imageUrl ? <img src={chat.value.imageUrl} alt="Avatar" className="right"/> :
            <img src='https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png' alt="Avatar" className="right"/>
        } */}
          <p className="fw-bold">{chat.value.text}</p>
          <span className={chat.value.isAdmin?'time-left text-white': 'time-left'}>{chat.value.name} {chat.value.stateCode} {chat.value.createdAt&&moment(chat.value.createdAt.toDate()).fromNow()}</span>
        </div>
      </div>

    ));
  };

  return (
    <DashboardLayout title='TrainingChat'>
      <section className="chat-section">
        <div className='d-flex justify-content-between align-items-center'>
          {/* <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Disable Chat Feature</label>
          </div> */}
          
          <div className="position-relative">
            <button onClick={()=>toggleDropdown(!showDropDown)} className="btn btn-secondary dropdown-toggle" type="button">
              Chats Settings
            </button>
            <div className={showDropDown?'position-absolute bg-white border':'position-absolute bg-white border d-none'}>
              <p onClick={()=>chatSettings('all users')} className="dropdown-item">All Users</p>
              <p onClick={()=>chatSettings('admin only')} className="dropdown-item">Admin Only</p>
              <p onClick={()=>chatSettings('disable chat')} className="dropdown-item">Disable Chat</p>
            </div>
          </div>
          <button onClick={clearAllChats} className='btn bg-danger text-white'>
            Clear Chats
          </button>
        </div>

        <div className='mt-5 px-5 ag'>
          <div ref={messagesEndRef} className="flex-1 h-90 overflow-auto">
            {chats.length===0?<div className='d-flex justify-content-center align-items-center h-90'><p>Empty chats</p></div>
              :
              renderChats()}
          </div>
          {
            status !== 'disable chat' &&
              <div className="flex-row align-items-center">
                <input type="text" onKeyDown={sendMessage} onChange={handleChange} value={text} className="form-control chatInput" placeholder="Enter Message" />
              </div>
          }

        </div>
      </section>
    </DashboardLayout>
  );
};

export default TrainingChats;
