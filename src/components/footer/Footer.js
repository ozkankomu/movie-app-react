import React from "react";
import "../../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className="m-0">
      <p>Ozkan Web Design, Copyright &copy; {new Date().getFullYear()}</p>
      <a href="https://www.linkedin.com/in/ozkankomu/">
        <LinkedInIcon fontSize="large" color="error" />
      </a>
      <a href="https://github.com/ozkankomu">
        <GitHubIcon fontSize="large" color="error" />
      </a>
      <a href="ozkankomu35@gmail.com">
        <MailIcon fontSize="large" color="error" />
      </a>
    </footer>
  );
};

export default Footer;
