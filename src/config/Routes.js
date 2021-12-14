import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoader } from '../components/Loaders';
import PrivateRoute from '../layouts/PrivateRoute';
import AuthRoute from '../layouts/AuthRoute';
// import PublicRoute from '../layouts/PublicRoute';
import Error404 from '../components/Error404';

// create Loadable pages
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard'));
const Users = lazy(() => import('../pages/users/Users'));
const AddUser = lazy(() => import('../pages/users/AddUser'));
const UserDetails = lazy(() => import('../pages/users/UserDetails'));
const Trainings = lazy(() => import('../pages/trainings/Trainings'));
const Projects = lazy(()=> import('../pages/projects/Projects'));
const CreateTraining = lazy(()=> import('../pages/trainings/CreateTraining'));
const CreateProject = lazy(()=> import('../pages/projects/CreateProject'));
const Updates = lazy(()=> import('../pages/updates/Updates'));
const CreateNews = lazy(()=> import('../pages/updates/CreateNewUpdate'));
const CreateJob = lazy(()=> import('../pages/updates/CreateJobUpdate'));
const StatesInfo = lazy(()=> import('../pages/stateInformation'));
const CreateNotification = lazy(()=> import('../pages/updates/CreateNotification'));
const TrainingChats = lazy(()=> import('../pages/trainingChats'));
const OnboardedBusinesses = lazy(()=>import('../pages/projects/OnboardedBusinesses'));


const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router>
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* can't access them when you are logged in */}
        <AuthRoute exact path='/login' component={Login} />

        {/* can only access them when you are logged in */}
        {/* <PrivateRoute exact path='/home' component={Home} /> */}
        <PrivateRoute exact path='/dashboard' component={Dashboard} />


        {/* public route: accessible to both !!authenticated users */}
        <PrivateRoute exact path='/' component={Home} />
        <PrivateRoute exact path='/users' component={Users} />
        <PrivateRoute exact path='/users/add' component={AddUser} />
        <PrivateRoute exact path='/users/user' component={UserDetails} />
        <PrivateRoute exact path='/trainings' component={Trainings} />
        <PrivateRoute exact path='/trainings/create' component={CreateTraining} />
        <PrivateRoute exact path='/projects' component={Projects} />
        <PrivateRoute exact path='/projects/create' component={CreateProject} />
        <PrivateRoute exact path='/updates' component={Updates} />
        <PrivateRoute exact path='/updates/create/news' component={CreateNews} />
        <PrivateRoute exact path='/updates/create/job' component={CreateJob} />
        <PrivateRoute exact path='/statesinfo' component={StatesInfo} />
        <PrivateRoute exact path='/updates/create/notification' component={CreateNotification} />
        <PrivateRoute exact path='/trainings/chat' component={TrainingChats} />
        <PrivateRoute exact path='/projects/onboardedbusiness' component={OnboardedBusinesses} />

        {/* catch all invalid urls */}
        <Route component={Error404} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
