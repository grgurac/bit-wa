import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./partials/Header.js";
import PostsList from "./partials/PostsList.js";
import posts from "../data/posts.js";
import Footer from "./partials/Footer.js"

const App = (props) => {
  return (<div>
              <Header title="My React Blog"/>
              <PostsList myPosts={posts} />
              <Footer />
          </div>
      );
  }

export default App;
