import useMediaQuery from '../contexts/CheckScreenSize';
import React from 'react';

const Admin = () => {
  const isSmallDevice = useMediaQuery(850);

  return (
    <React.Fragment>
      <div className={`${!isSmallDevice ? `flex` : ``} justify-around mt-3`} >
        <iframe style={{ width: !isSmallDevice?`40vw`:`100vw`, height: "85vh", border: "5px solid black", borderRadius: "10px" }} src="https://onlinehtmleditor.dev/" title="description"></iframe>
        <br />
        <iframe style={{ width: !isSmallDevice?`57vw`:`100vw`, height: "85vh", border: "5px solid black", borderRadius: "10px" }} src="http://localhost:3333/desk" title="description"></iframe>
      </div>
    </React.Fragment>
  )
}

export default Admin;