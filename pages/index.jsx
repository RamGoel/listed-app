import { useState } from 'react';
import Login from './auth/Login/Login';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function HomePage() {

  return (
    <Login />
  );
}