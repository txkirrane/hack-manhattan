import * as React from 'react'

import { StaticImage } from 'gatsby-plugin-image'

import { headerLogo, headerTextContainer } from "./Header.module.css"
import { Link } from 'gatsby'

import { SocialIcon } from 'react-social-icons'

const SocialURLs = [
    "https://www.instagram.com/hack.manhattan/",
    "http://twitter.com/hackmanhattan",
    "http://facebook.com/hackmanhattan",
    "http://github.com/hackmanhattan"
]

const Header = () => (
    <header>
        <Link to='/' className={headerLogo}>
            <StaticImage
                src='../images/logo.png'
                alt='logo'
            />
        </Link>
        <div className={headerTextContainer}>
            <h1>34 W 37th St. New York, NY</h1>
            <div style={{ display: "flex", gap: "0.5rem" }}>
                {SocialURLs.map((url) => <SocialIcon target="_blank" style={{ height: "32px", width: "32px" }} url={url} />)}
            </div>
        </div>
    </header>
)

export default Header