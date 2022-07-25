import React from "react";
import ReactMarkdown from "react-markdown";
import Loader from "./Loader";

function About({ data }) {
  if (!data) {
    return (
      <div className="container about-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="container about-container">
      <div className="about-item about">
        <img src="about-image.png" alt="about-image" />
        <div className="about-text-container">
          <p className="about-container-title">{data && data[0].Title}</p>
          <p className="about-container-description">
            <ReactMarkdown>{data && data[0].Description}</ReactMarkdown>
          </p>
          <div className="about-container-social">
            <a
              href="https://www.linkedin.com/in/lauren-pickering-879763179/"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"
                  fill="#615e5a"
                />
              </svg>
            </a>
            <a href="mailto:laurenpickering07@gmail">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="48"
                height="48"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z"
                  fill="#615e5a"
                />
              </svg>
            </a>
            <a
              className="resume-icon"
              href="http://laurenpickering.art/Pickering_Lauren_Resume.pdf"
              target="blank"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="about-item contact">
        <div className="contact-container">
          <p>CONTACT ME</p>
          <form action="https://formspree.io/f/xnqokqbn" method="POST">
            <label className="contact-input">
              <input placeholder="Name..." type="text" name="name" />
            </label>
            <label className="contact-input">
              <input placeholder="Email..." type="text" name="_replyto" />
            </label>
            <label className="contact-textarea">
              <textarea placeholder="Description..." name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default About;
