// // import { FaStar,FaStarHalfAlt } from "react-icons/fa";
// // import { AiOutlineStar } from "react-icons/ai";

// //  import React from 'react'

// // function Star({stars,reviews}) {
// // const rating=Array.from({length:5},(elem,index)=>{
// //   let number=index + 0.5;

// //   return(
// //     <p key={index}>{stars>= index+1 ?(<FaStar/>):stars>=number ?(<FaStarHalfAlt/>):(<AiOutlineStar/>)}</p>
// //   )
// // })


// //   return (
// //     <div>Star</div>
// //   )
// // }

// // export default Star



import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({ stars, reviews }) {
  // Create an array of star ratings
  const rating = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= number ? (
          <FaStarHalfAlt />
        ) : (
          <AiOutlineStar />
        )}
      </span>
    );
  });

  return (
    <div className="stars">    <div className="star-rating" style={{display:"flex"}}>
      {rating}
      <p style={{display:"flex"}}>({reviews} reviews)</p>
    </div>
    </div>

  );
}

export default Star;
