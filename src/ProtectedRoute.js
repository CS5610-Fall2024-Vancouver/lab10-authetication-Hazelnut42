// ProtectedRoute.js
import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Loading...</div>,
    ...args,
  });

  return <Component />;
};

export default ProtectedRoute;