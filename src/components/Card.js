import React from 'react';

const Card = ({children}) => (
  <div className="card-container">
    {children}
  </div>
);

const CardWithoutPadding = ({children}) => (
  <div className="card-without-padding">
    {children}
  </div>
);

export {
  Card,
  CardWithoutPadding
};


