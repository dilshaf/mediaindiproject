import React from "react";

// import AppRouter from './routes/AppRouter'
// import { AuthContext } from './context/AuthContext'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Home from "./containers/Home/Home";
import Search from "./components/profile/Search";
import Settings from "./components/profile/Settings/Settings";
import CommentSection from "./components/profile/CommentSection";
import Posts from "./components/profile/posts/Posts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />

        <Route path="/home" element={<Home />}>
          <Route path="settings" element={<Settings />} />
          <Route
            index
            path=""
            element={
              <>
                {" "}
                <Search /> {" "}
              </>
            }
          />
          <Route path="comments" element={<><Search/><CommentSection /></>} />

          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
