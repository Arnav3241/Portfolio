import { useEffect } from 'react';
import React from 'react';

const Admin = () => {
  useEffect(() => {
    window.location = "http://localhost:3333/desk";
  }, [])
  return (
    <div>
      Hello Admin!
    </div>
  )
}

export default Admin;