import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/footer';
import PostsContainer from './posts-container';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <PostsContainer/>
      <Footer/> 
      <style jsx>
          {`
          .App{
            margin: 0 5rem;
            font-family: Helvetica,Arial, sans-serif;
            font-size: 14px;
            display:flex;
            flex-direction: column;
          }
          
          .App a{
            cursor: pointer;
            text-decoration: none;
            color:rgb(0,0,0);
          }
          .App li a{
            padding: 0 5px;
            text-decoration: none;
            color:rgb(0,0,0);
          }
          `}
      </style>
    </div>
  );
}

export default App;
