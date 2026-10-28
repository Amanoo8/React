import React from 'react'
import withAuth from '../utils/withAuth';

function Profile(props) {
  return (
    <>
    <h1>Profile</h1>
    <h2>Name: {props.name}</h2>
    <h2>Role: {props.role}</h2>
    </>
  )
}

export let AuthProfile=withAuth(Profile);