import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

import {card, cardText} from "./ImageCard.module.css"

const ImageCard = ({ image, children, reversed, ...props }) => (
    <section className={card} {...props} >
        {!reversed ? image : null}
        <div
            className={cardText}
        >
            {children}
        </div>
        {reversed ? image : null}
    </section>
)

export default ImageCard