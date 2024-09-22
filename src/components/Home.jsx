import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Card from './Card';
import Flip from './Flip';



function Home() {
  const [text] = useTypewriter({
    words: ['Hi My Name is Ashif', "I'am Full Stack Devloper", ],
    loop: true,  // Enables looping of words
    typeSpeed: 180,
    deleteSpeed: 150,
    delaySpeed: 1000,  // Delay between changing words
  });


  return (
    <>
    <div className="container">
    <div className="main">
      <h1 >
        {' '}
        <span style={{ fontWeight: 'bold', color: 'green' }}>{text}</span>
        <span style={{ color: 'red' }}>
          <Cursor cursorStyle='|' />
        </span>
      </h1>
      </div>
      <div className="file">
        <img src="" alt="" />
      </div>
     
</div>
<Card/>
<Flip/>

    </>
  );
}


export default Home;
