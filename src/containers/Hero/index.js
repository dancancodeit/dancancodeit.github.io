import React from "react"
import './hero.css'
import me from '../../resources/me.svg'

function Hero(props) {
	return <div>
    <div className="socials">
      <a className="social-item">Twitter</a>
      <a className="social-item">TikTok</a>
      <a className="social-item">Instagram</a>
    </div>
		<div class="hero-container">
      <div class="name">
        <a>Daniel Miller</a>
      </div>
      <div>
        <img src={me} alt="me"/>
      </div>
      <div class="nav">
        <a>Blog</a>
        <a>Github</a>
        <a>Youtube</a>
        <a>Contact</a>
      </div>
		</div>

	</div>
}

export default Hero;