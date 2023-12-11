import React from 'react'
import './Search.css'
import PostSession from './PostSession'
import Postemp from './Postemp'

const Search = () => {
  return (
    <div style={{display: "flex",
      flexDirection: "column",
      justifyContent: "unset",
      alignItems: "center"}}>
         <div className="post-container">
    <div className="post-header">
      <img className="post-avatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User Avatar"/>
      <div className="post-user-info">
      <input type='text'placeholder='Post here...'/>
      </div>
    </div>
  
    <div className="post-actions">
      <div className="action-button">
      
        <i className="fa-solid fa-camera"></i>
    
      
        <i className="fa-solid fa-photo-film"></i>
        
      </div>

      <div>
        <button>Post</button>
      </div>
      
    </div>
   
  </div>

  {/* <PostSession/> */}
  <Postemp/>
    </div>
  )
}

export default Search