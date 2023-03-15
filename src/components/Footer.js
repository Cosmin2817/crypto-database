import React from "react";
import "../styles/Footer.css" 
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    function toUp (){
        window.scrollTo(0,0)
    }
    return(
        <>
        <div className="footer">
            <div onClick={toUp} className="footer-function">
                <KeyboardArrowUpIcon />
            </div>
            <div className="footer-bottom">
                <div className="footer-left">
                    <div>
                        <a href="https://www.linkedin.com/in/cosmin-ionic%C4%83-16471521b/" target="_blank" rel="noreferrer"><span> Cosmin Ionica</span></a>
                        <a href="https://www.linkedin.com/in/cosmin-ionic%C4%83-16471521b/" target="_blank" rel="noreferrer"><LinkedInIcon className="linkedIn-icon" /></a>
                    </div>
                    <div>
                        <a href="https://github.com/Cosmin2817/crypto-database.git" target="_blank" rel="noreferrer">See code on GitHub</a>
                        <a href="https://github.com/Cosmin2817/crypto-database.git" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                    </div>
                </div>
                <div className="footer-right">
                    <p>2023</p>
                    <p>Scoala Informala de IT</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Footer