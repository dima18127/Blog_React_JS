import React from 'react';
import m from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function NavBar() {
return (
<nav className={m.nav} >
    <ul>
        <div>
            <NavLink to='/'  className = { navData => navData.isActive ? m.active : m.item } > Profile </NavLink>
        </div>
        <div className={m.item}>
            <NavLink to='/dialogs' className = { navData => navData.isActive ? m.active : m.item }>Messages</NavLink>
        </div>
        <div className={m.item}>
            <NavLink to='/'  className = {m.item }>News</NavLink>
        </div>
        <div className={m.item}>
            <a>Music</a>
        </div>
        <div className={m.item}>
            <a>Settings</a>
        </div>
    </ul>
</nav>
)
}

export default NavBar