import * as React from 'react'
import Header from './Header'
import NavBar from './NavBar'

import { main } from "./PageRoot.module.css"

const PageRoot = ({ children, pageTitle }) => (
    <main className={main}>
        <Header />
        <NavBar />
        { children }
    </main>
)

export default PageRoot