"use client";

import { useContext } from "react";
import { AppContext } from "../layout";

function ContactUs() {
  const { englishVersion, setEnglishVersion } = useContext(AppContext);
  return (
    <div className="w-3/4 bg-babyBlue rounded-md my-3 flex flex-col items-center">
      <h2 className="w-[60%] text-navyBlue my-4">
        {englishVersion ? "Contact us:" : "Skriv till oss:"}
      </h2>
      <form className="w-[60%] md:w-full md:px-5 flex flex-col items-center [&>label]:w-full [&>label]:font-secondary [&>input]:w-full [&>input]:bg-backgroundColor/25 [&>input]:rounded-md [&>input]:p-2 [&>input]:mb-4 [&>input]:font-secondary">
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
        <button className="m-5 font-secondary border-solid border-backgroundColor border-2 rounded-md p-5 w-1/4">
          {englishVersion ? "Send" : "Skicka"}
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
