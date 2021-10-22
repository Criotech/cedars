import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageLoader } from '../components/Loaders';
// import PrivateRoute from '../layouts/PrivateRoute';
import AuthRoute from '../layouts/AuthRoute';
import PublicRoute from '../layouts/PublicRoute';
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
const CreateUpdate = lazy(()=> import('../pages/updates/CreateNewUpdate'));


const Routes = () => (
  // eslint-disable-next-line no-undef
  <Router basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<PageLoader />}>
      <Switch>
        {/* can't access them when you are logged in */}
        <AuthRoute exact path='/login' component={Login} />

        {/* can only access them when you are logged in */}
        {/* <PrivateRoute exact path='/home' component={Home} /> */}

        {/* public route: accessible to both !!authenticated users */}
        <PublicRoute exact path='/' component={Home} />
        <PublicRoute exact path='/dashboard' component={Dashboard} />
        <PublicRoute exact path='/users' component={Users} />
        <PublicRoute exact path='/users/add' component={AddUser} />
        <PublicRoute exact path='/users/user' component={UserDetails} />
        <PublicRoute exact path='/trainings' component={Trainings} />
        <PublicRoute exact path='/trainings/create' component={CreateTraining} />
        <PublicRoute exact path='/projects' component={Projects} />
        <PublicRoute exact path='/projects/create' component={CreateProject} />
        <PublicRoute exact path='/updates' component={Updates} />
        <PublicRoute exact path='/updates/create' component={CreateUpdate} />


        {/* catch all invalid urls */}
        <Route component={Error404} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
