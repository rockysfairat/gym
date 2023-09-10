"use client";

import { useContext, useRef } from "react";
import { AppContext } from "../layout";
import emailjs from "@emailjs/browser";

function ContactUs() {
  // language switch handler:
  const { englishVersion, setEnglishVersion } = useContext(AppContext);

  // Email JS functionality:
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        form.current,
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-3/4 bg-babyBlue rounded-md my-3 flex flex-col items-center">
      <h2 className="w-[60%] text-navyBlue my-4">
        {englishVersion ? "Contact us:" : "Skriv till oss:"}
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-[60%] md:w-full md:px-5 flex flex-col items-center [&>label]:w-full [&>label]:font-secondary [&>input]:w-full [&>input]:bg-backgroundColor/25 [&>input]:rounded-md [&>input]:p-2 [&>input]:mb-4 [&>input]:font-secondary"
      >
        <label for="userName">{englishVersion ? "Name:" : "Namn:"}</label>
        <input type="text" name="userName" required></input>

        <label for="userEmail" required>
          E-mail:
        </label>
        <input type="email" name="userEmail"></input>

        <label for="subject">{englishVersion ? "Subject" : "Ämne:"}</label>
        <input type="text" name="subject"></input>

        <label for="message">
          {englishVersion ? "Message:" : "Meddelande:"}
        </label>
        <textarea
          name="message"
          className="bg-backgroundColor/25 rounded-md p-2 font-secondary w-full"
          rows="20"
          cols="10"
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="m-5 font-secondary border-solid border-backgroundColor border-2 rounded-md p-5 w-1/4"
        >
          {englishVersion ? "Send" : "Skicka"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
