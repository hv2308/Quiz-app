import React from 'react'

export default function Icon({mcq,item}) {
    const showStars = () => {
        let stars = '';
    
        for (let i = 0; i < 5; i++) {
          if (i < item.difficulty) {
            stars += '★'; 
          } else {
            stars += '☆'; 
          }
        }
    
        return stars;
      };
  return (
    <div>{showStars()}</div>
  )
}
