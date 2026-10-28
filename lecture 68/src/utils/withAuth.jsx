import React from 'react'

function withAuth(Component) {
  let isLogged=true;
  return function(props) {
    if(isLogged)return <Component {...props}/>;
    else return <h1>Please login to see.</h1> 
  }
}

export default withAuth