import { useEffect } from 'react';
import React from 'react';

const Admin = () => {
  useEffect(() => {
    const win: Window = window;
    win.location = "http://localhost:3333/desk";
  }, [])
  return (
    <div>
      Hello Admin!
    </div>
  )
}

export default Admin;