import React from "react"
import './hero.css'
import me from '../../resources/me.svg'

function Hero(props) {
	return <div>
    <div className="socials">
      <a href="https://twitter.com/dancancodeit" className="social-item link">Twitter</a>
      <a href="https://www.tiktok.com/@codingproblems" className="social-item link">TikTok</a>
      <a href="https://www.instagram.com/dancancodeit/" className="social-item link">Instagram</a>
      <a className="social-item link" href="https://medium.com/@dancancodeit">Blog</a>
      <a className="social-item link" href="https://github.com/dancancodeit">Github</a>
      <a className="social-item link" href="https://www.youtube.com/channel/UCsymgNWEdy7qQuVz3jGOAbA">Youtube</a>
      <a className="social-item link" href="mailto:hello@dancancodeit.com">Contact</a>
    </div>
    <div className="ham"><h2>≡</h2></div>
		<div className="hero-container">
      <div className="name-container">
        <h2 className="main-text">Hello, I'm Daniel Miller</h2>
        <h5 className="sub-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque magna justo, sit amet pharetra urna aliquam ut.</h5> 
      </div>
      <img className="me-pic" src={me} alt="me"/>
		</div>

	</div>
}

export default Hero;