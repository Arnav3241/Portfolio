import Styles from "./index.module.css";
import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <section className="contact text-center mt-5" id="contact">
        <div className={`${Styles.Row}`}>
          <div className={`${Styles.Image}`}>
            <img className="mx-8" src="/assets/Contact.svg" alt="Contact Img" />
          </div>
          <div className={`${Styles.Form}`} style={{ marginRight: "5vw", marginLeft: "5vw", maxHeight: "80vh" }} >
            <h1 className="heading text-4xl font-medium capitalize mt-1 mb-3"> contact <span className="text-blue-500" > me </span> </h1>
            <div className={`${Styles.FormInputBox}`}>
              <input type="text" placeholder="Name" className={`${Styles.InputBox}`} style={{ maxHeight: "50px" }} />
              <input type="email" placeholder="E-mail" className={`${Styles.InputBox}`} />
            </div>
            <input type="text" placeholder="Subject" className={`${Styles.InputBox}`} />
            <textarea style={{ resize: "none" }} placeholder="Message" cols="20" rows="4" className={`${Styles.InputBox}`} />
            <button className={`bg-blue-900 text-white p-2 rounded`}>Send Message</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact;