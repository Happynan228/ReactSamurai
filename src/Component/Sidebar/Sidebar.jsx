import React from 'react'
import {NavLink} from "react-router-dom"
import s from "./Sidebar.module.css"
let Sidebar = props=>{
  return (
    <div className={s.Sidebar}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.active}>
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/message" activeClassName={s.active}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.active}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.active}>
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings"  activeClassName={s.active}>
          Settings
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.active}>
          Friends
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar