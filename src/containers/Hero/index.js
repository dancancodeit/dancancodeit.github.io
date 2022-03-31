import React from "react"
import './hero.css'
import me from '../../resources/me.svg'

function Hero(props) {
	return <div>
    <div className="socials">
      <a href="https://twitter.com/dancancodeit" className="social-item link">Twitter</a>
      <a href="https://www.tiktok.com/@codingproblems" className="social-item link">TikTok</a>
      <a href="https://www.instagram.com/dancancodeit/" className="social-item link">Instagram</a>
    </div>
		<div class="hero-container">
      <div class="name-container">
        <span>Daniel Miller</span>
      </div>
        <img class="me-pic" src={me} alt="me"/>
      <div class="nav">
        <a className="link" href="https://medium.com/@dancancodeit">Blog</a>
        <a className="link" href="https://github.com/dancancodeit">Github</a>
        <a className="link" href="https://www.youtube.com/channel/UCsymgNWEdy7qQuVz3jGOAbA">Youtube</a>
        <a className="link" href="mailto:hello@dancancodeit.com">Contact</a>
      </div>
		</div>

	</div>
}

export default Hero;