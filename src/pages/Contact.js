import React, { useRef } from "react";
import emailjs from "emailjs-com";

const formStyles = {
  labelStyle: "block text-primary text-md font-bold mb-2",
  inputStyle:
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight",
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then((result) => {
        console.log("SUCCESS!", result.status, result.text);
      })
      .catch((err) => {
        console.log("FAILED...", err.text);
      });
    alert("Thank you, your message has been submitted!");
    e.target.reset();
  };

  return (
    <div className="app-style py-2 my-6">
      <h1 className="mx-auto font-bold text-center py-4 text-2xl border-solid border-b-2 border-sky-600 rounded-sm w-[260px]">
        Get In Touch With Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className={formStyles.labelStyle} htmlFor="name">
            Name
          </label>
          <input
            className={formStyles.inputStyle}
            type="text"
            name="from_name"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-4">
          <label className={formStyles.labelStyle} htmlFor="email">
            Email
          </label>
          <input
            className={formStyles.inputStyle}
            type="email"
            name="from_email"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="mb-4">
          <label className={formStyles.labelStyle} htmlFor="message">
            Message
          </label>
          <textarea
            className={formStyles.inputStyle}
            rows="8"
            type="textarea"
            name="message"
            placeholder="Enter Your Message"
          />
        </div>
        <div className="text-center py-4">
          <button
            type="submit"
            className="bg-primary font-bold border-[2px] border-primary px-6 py-2 hover:bg-button hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
