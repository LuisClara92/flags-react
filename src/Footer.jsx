import React from "react";
import styled from "styled-components";


const StyledFooter = styled.div`
    width: 100%;
    height: 12rem;
    margin-top: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .footer-content { 
        color: black;
        align-items: center;
        justify-content: center;
        display: center;
        flex-direction: column;
    }

    .footer-nav {
        margin-top: 20px;
    }

    .copyright {
        font-size: 1.2em;
    }

    .name {
        font-weight: bold;
        margin-left: 5px;
    }

    .fab{
        margin: 0 1.5rem;
    }

    .logos {
        display: flex;
        justify-content: center;
        font-size: 2.5em;
        text-decoration: none;
        margin: 1rem;
        
    }

    .navbar_item {
        text-decoration: none;
        color: black;
        margin-left: 10px;
        margin-right: 10px;

    }

    .navbar_item:hover {
        text-decoration: underline;
    }

    .logos i {
        color: black;
        transition: 0.5s;
    }
    .design{
      color: black;
      text-decoration:none;
    }
`;

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <StyledFooter>
      <div className="footer-content">
        <div>
          <span className="copyright">
            © {year}
            <span>|</span>
            <span className="name">Luis Clara</span>
          </span>
        </div>
        <div className="logos">
          <a href="https://github.com/LuisClara92" target="blank">
            <i className="fab fa-github" />
          </a>
          <a href="https://linkedin.com/in/luis-clara" target="blank">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
