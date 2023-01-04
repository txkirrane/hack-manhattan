import * as React from 'react'

import { heroTitle } from "./HeroTitle.module.css"

const HeroTitle = ({ text }) => (
    <h1 className={heroTitle} >{text}</h1>
)

export default HeroTitle