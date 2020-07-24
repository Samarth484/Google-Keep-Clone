import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} <br></br>Made by Samarth Srivastava</p>
    </footer>
  );
}

export default Footer;
