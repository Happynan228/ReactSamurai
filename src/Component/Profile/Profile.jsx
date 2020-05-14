import React from 'react'
import s from "./Profile.module.css"
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Post from './Posts/Posts'
let Profile = props=>{
  return(
    <div className={s.Profile}>
      <ProfileInfo/>
      <Post/>
    </div>
  )
}

export default Profile