import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'

const Notification = ({ position, autoClose, hideProgressBar, pauseOnHover, type, message }) => {

  if (!position) { position = "top-left" };
  if (!autoClose) { autoClose = "3000" };
  if (!hideProgressBar) { hideProgressBar = false };
  if (!pauseOnHover) { pauseOnHover = true };
  if (!type) { type = "info" };

  if (type === "default") { toast(message) }
  if (type === "info") { toast.info(message) }
  if (type === "success") { toast.success(message) }
  if (type === "warning") { toast.warning(message) }
  if (type === "error") { toast.error(message) }

  return (
    <div className="Notification" >
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnHover={pauseOnHover}
        draggable={true}
        theme="dark"
        limit={1}
      />
    </div>
  );
};

export default Notification;