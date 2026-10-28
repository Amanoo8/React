import React from 'react'
import withAuth from '../utils/withAuth'

function Dashboard() {
  return (
    <h1>Dashboard</h1>
  )
}

export let AuthDashboard=withAuth(Dashboard);