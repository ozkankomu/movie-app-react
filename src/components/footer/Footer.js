import React from "react";
import "../../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
  return (
    <footer className="m-0">
      <p>Ozkan Web Design, Copyright &copy; {new Date().getFullYear()}</p>
      <div className="footer">
        <a href="https://www.linkedin.com/in/ozkankomu/" target="_blanked">
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          className="p-3"
          href="https://github.com/ozkankomu"
          target="_blanked"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://ozkankomu35@gmail.com" target="_blanked">
          <MailIcon fontSize="large" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
