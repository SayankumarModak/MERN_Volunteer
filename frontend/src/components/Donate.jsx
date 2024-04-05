import React, { useState } from "react";

const Donate = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [name, setName] = useState();
  const [disableBtn, setDisableBtn] = useState(false);
  return (
    <section className="donate">
      <form>
        <div>
          <img src="../../public/assets/logo.png" alt="donatelogo" />
        </div>
        <div>
          <label>Show your love for poors</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Donation amount(usd)"
          />
        </div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder=" Email Address"
        />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
        />
        <button type="sumbit" className="btn" disabled={disableBtn}>
          Donate {amount ? `$${amount}` : "$0"}
        </button>
      </form>
    </section>
  );
};

export default Donate;
