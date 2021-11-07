import React, {useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';

const PrivateRoute = ({ component: Component, auth, alert, ...rest }) => {
  useEffect(()=>{
    if (alert.message==='Unauthenticated.') {
      localStorage.setItem('token', '');
      window.location.reload(false);
    }
  }, [alert.message]);

  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated) {
          return (
            <ErrorBoundary>
              <main id="private-route-layout">
                <Component {...props} />
              </main>
            </ErrorBoundary>
          );
        } else {
          //enable this line below to make route protected
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

PrivateRoute.propTypes = {
  auth: propTypes.shape({
    isAuthenticated: propTypes.bool.isRequired,
  }),
  component: propTypes.func.isRequired,
};

const mapStateToProps = ({ auth, alert }) => ({
  auth,
  alert
});

export default connect(mapStateToProps)(PrivateRoute);
