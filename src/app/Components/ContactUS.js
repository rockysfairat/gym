"use client";

import { useState, useContext } from "react";
// Language context:
import { AppContext } from "../layout";
// Email JS:
import { send } from "@emailjs/browser";

function ContactUs() {
  // language switch handler:
  const { englishVersion } = useContext(AppContext);

  // Email JS functionality:

  const sendEmail = (e) => {
    e.preventDefault();

    send(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      { senderName, senderEmail, msg },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  // Handling the user msg:
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Grabbing user's input:
  const handleSenderName = (e) => {
    setSenderName(e.target.value);
  };
  const handleSenderEmail = (e) => {
    setSenderEmail(e.target.value);
  };
  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  return (
    <div
      id="contactUs"
      className="w-full md:w-3/4 bg-babyBlue rounded-md my-0 md:my-3 flex flex-col items-center"
    >
      <h2 className="w-[60%] text-navyBlue my-4">
        {englishVersion ? "Contact us:" : "Skriv till oss:"}
      </h2>
      <form
        onSubmit={sendEmail}
        className="w-[95%] md:w-[60%] md:px-5 flex flex-col items-center [&>label]:w-full [&>label]:font-secondary [&>input]:w-full [&>input]:bg-backgroundColor/25 [&>input]:rounded-md [&>input]:p-2 [&>input]:mb-4 [&>input]:font-secondary"
      >
        <label for="userName">{englishVersion ? "Name:" : "Namn:"}</label>
        <input
          type="text"
          name="senderName"
          value={senderName}
          onChange={handleSenderName}
          required
        ></input>

        <label for="userEmail" required>
          E-mail:
        </label>
        <input
          type="email"
          name="senderEmail"
          required
          value={senderEmail}
          onChange={handleSenderEmail}
        ></input>

        <label for="subject">{englishVersion ? "Subject" : "Ämne:"}</label>
        <input type="text" name="subject"></input>

        <label for="message">
          {englishVersion ? "Message:" : "Meddelande:"}
        </label>
        <textarea
          name="msg"
          value={msg}
          onChange={handleMsg}
          className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full"
          rows="20"
          cols="10"
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="m-5 border-solid border-backgroundColor border-2 rounded-md p-5"
        >
          {englishVersion ? "Send" : "Skicka"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
