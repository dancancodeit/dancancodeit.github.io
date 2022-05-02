import React, { useState } from "react"



function Hero(props) {
  const [ isOpen, setOpen ] = useState(true);
  const toggleMenu = () =>  {
    console.log('im here');
    setOpen(!isOpen);
  }
  const fadeStyle = { 'opacity': isOpen ? 1 : 0}

	return <div className="container">
    <div className="socials">
      <a className="social-item link" href="https://github.com/dancancodeit">Github</a>
      <a className="social-item link" href="https://medium.com/@dancancodeit">Blog</a>
      <a href="https://twitter.com/dancancodeit" className="social-item link">Twitter</a>
      <a className="social-item link" href="https://www.youtube.com/channel/UCsymgNWEdy7qQuVz3jGOAbA">Youtube</a>
      <a href="https://www.instagram.com/dancancodeit/" className="social-item link">Instagram</a>
      <a href="https:/p/www.tiktok.com/@codingproblems" className="social-item link">TikTok</a>
      <a className="social-item link" href="mailto:hello@dancancodeit.com">Contact</a>
    </div>
    <div className="ham" onClick={toggleMenu}><h2>≡</h2></div>
    <div id="mobile-drop" style={fadeStyle}>
      <div className="mobile-link">Github</div>
      <div className="mobile-link">Blog</div>
      <div className="mobile-link">Twitter</div>
      <div className="mobile-link">Youtube</div>
      <div className="mobile-link">Instagram</div>
      <div className="mobile-link">TikTok</div>
      <div className="mobile-link">Contact</div>
    </div>
		<div className="hero-container">
      <div className="name-container">
        <h2 className="main-text">Hello, I'm Daniel Miller</h2>
        <h5 className="sub-text">Despite this awesome looking website, my passion lies in building highly scalable distributed systems (getting this website to look like this took way too long)</h5> 
      </div>
      <img className="me-pic" src="/rocket-me.png" alt="me"/>
		</div>

	</div>
}

export default Hero;