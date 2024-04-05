import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handelSendMessage = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="conatiner">
        <div className="banner">
          <form onSubmit={handelSendMessage}>
            <h1>Contact Us</h1>
            <div>
              <input type="text" value={name} placeholder="your name" onChange={(e)=>setName(e.target.value)} />
              <input type="email"  value={email} placeholder="your email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="number"  value={phone} placeholder="your phone number" onChange={(e)=>setPhone(e.target.value)} />
            </div>
            <textarea rows="10" value={message} placeholder="message" onChange={(e)=>setMessage(e.target.value)}/>
            <button className="btn" type=" submit"> Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
