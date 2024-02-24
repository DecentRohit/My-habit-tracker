import React from "react";
import './Footer.css'

const Footer = () => {

  return (
    //colored icons and links to my social media handles
    <div className='page-title' style={{ position: 'fixed', bottom: 0, width: '100%', height: "40px" }}>

      <span> Contact Creator at: </span>
      <span className="icon"><a href="https://www.facebook.com/decent.rohitsoni" rel="noreferrer" target="_blank"><i className="fab fa-facebook" style={{ color: "#0a70f5" }}></i></a></span>
      <span className="icon"><a href="https://www.instagram.com/decent_rohit_/" rel="noreferrer" target="_blank"><i className="fab fa-instagram" style={{ color: "#a52236" }}></i></a></span>
      <span className="icon"><a href="https://www.aedin.com/in/rohit-soni-81957828a/" rel="noreferrer" target="_blank"><i className="fab fa-aedin" style={{ color: "#1e30b8" }}></i></a></span>
      <span className="icon"><a href="https://twitter.com/decentRohit47" rel="noreferrer" target="_blank"><i className="fab fa-twitter-square" style={{ color: "#02c2f2" }}></i></a></span>
      <span className="icon"><a href="https://mail.google.com/mail/u/0/#inbox?compose=jrjtWvNBrVNTxwQhvTGFMThqfthQJsztphvbDSzxLtqZTLvBTNRfVrjhJzcpzdCvKQXSwLjx" rel="noreferrer" target="_blank"><i className="fas fa-envelope" style={{ color: "#d0c11b" }}></i></a></span>
    </div>
  )
}

export default Footer;
