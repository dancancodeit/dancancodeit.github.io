import React, { useState } from "react"



function Hero(props) {
  const [ isOpen, setOpen ] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);

  const fadeStyle = { 
    'opacity': isOpen ? 1 : 0,
    'pointerEvents': isOpen ? 'auto' : 'none'
  }

	return <div className="container">
    <div className="socials">
      <a className="social-item link" href="https://github.com/dancancodeit">Github</a>
      <a className="social-item link" href="https://medium.com/@dancancodeit">Blog</a>
      <a href="https://twitter.com/dancancodeit" className="social-item link">Twitter</a>
      <a className="social-item link" href="mailto:hello@dancancodeit.com">Contact</a>
    </div>
    <div className="ham" onClick={toggleMenu}><h2>≡</h2></div>
    <div id="mobile-drop" style={fadeStyle}>
      <a href="https://github.com/dancancodeit" className="mobile-link">Github</a>
      <a href="https://medium.com/@dancancodeit" className="mobile-link">Blog</a>
      <a href="https://twitter.com/dancancodeit" className="mobile-link">Twitter</a>
      <a href="mailto:hello@dancancodeit.com" className="mobile-link">Contact</a>
    </div>
		<div className="hero-container">
      <div className="name-container">
        <h2 className="main-text">Hello, I'm Daniel Miller</h2>
        <h5 className="sub-text">Despite this awesome looking website, my passion lies in building scalable distributed systems (getting this website to look like this took way too long)</h5> 
      </div>
      <img className="me-pic" src="/rocket-me.png" alt="me"/>
		</div>

	</div>
}

export default Hero;