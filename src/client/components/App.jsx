import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/footer';
import './App.scss'
import PostsContainer from './posts-container';

function App() {
  return (
    <div className="App">
      <Header/>
      <PostsContainer/>
      <Footer/> 
    </div>
  );
}

export default App;
