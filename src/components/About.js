import React from "react";
import Links from "./Links";


function Bio({ bio }) {
  if (!bio) {
    return null;
  } else {
    return (
      <div>
        <p>{bio}</p>
      </div>
    );
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Use the Bio component here */}
      <Bio bio={props.bio} />

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Use the Links component */}
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
