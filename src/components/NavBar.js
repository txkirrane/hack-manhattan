import * as React from 'react'

import { Link } from 'gatsby'

import { navBar, navLink } from "./NavBar.module.css"

const links = [
    {
        name: 'Visiting',
        url: '/#visiting'
    },
    {
        name: 'Events and Classes',
        url: '/#events'
    },
    {
        name: 'Equipment',
        url: '/#equipment'
    },
    {
        name: 'Membership',
        url: '/#membership'
    },
    {
        name: 'Contact Us',
        url: '/#questions'
    },
    {
        name: 'Donations and Dues',
        url: '/donations'
    },
    {
        name: 'FAQ',
        url: '/faq'
    },
    {
        name: 'Media/Collabs',
        url: '/media'
    },
]

const NavBar = () => (
    <nav className={navBar}>
        {links.map((link) => <Link className={navLink} to={link.url}>{link.name}</Link>)}
    </nav>
)

export default NavBar