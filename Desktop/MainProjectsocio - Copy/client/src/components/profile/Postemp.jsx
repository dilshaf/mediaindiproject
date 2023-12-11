import React, { useState } from 'react';
import './Postemp.css'

const UserPost = () => {
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md mt-8">
      <div className="flex items-center mb-4">
        <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Profile Image" className="w-10 h-10 rounded-full mr-4" />
        <div>
          <h2 className="text-lg font-semibold">User Post Title</h2>
          <p className="text-gray-600">Posted by John Doe on December 8, 2023</p>
        </div>
      </div>
      <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg" alt="Post Image" className="mb-4 rounded-lg w-full" />
      <div className="mb-4">
        <p className="text-gray-800">This is the content of the user post. It can contain text, images, or other media.</p>
      </div>
      <div className="flex justify-between items-center text-gray-600">
        <div className="flex items-center" style={{display:"contents"}}>
          <div className="mr-4 flex items-center space-x-2">
            {/* <svg className="w-4 h-4 fill-current text-blue-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg> */}
            <span><i class="fa-regular fa-heart"></i>Like 0</span>
            
          </div>
          <div className="mr-4 flex items-center space-x-2">
            {/* <svg className="w-4 h-4 fill-current text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg> */}
            <span onClick={toggleComments}><i class="fa-regular fa-comment"></i>Comment 0</span>
          </div>
          <div className="mr-4 flex items-center space-x-2 ">
            {/* <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6z" />
            </svg> */}
            <span><i class="fa-solid fa-share"></i>Share 0</span>
          </div>
        </div>
        {/* <div className="text-sm">
          <span className="mr-2">42 Likes</span>
          <span className="mr-2">18 Comments</span>
          <span>7 Shares</span>
        </div> */}
      </div>

      {showComments && (
        <div className="comments-section border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold mb-2">Comments</h3>
          <div className="comment mb-4">
            <p className="font-semibold">Commenter Name</p>
            <p>This is a comment on the user post. It can contain text and additional information.</p>
          </div>
          {/* More comments can be added here */}
        </div>
      )}
    </div>
  );
};

export default UserPost;
