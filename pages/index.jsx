import { useState } from 'react';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  return (
    <Login />
    // <Dashboard />
  );
}