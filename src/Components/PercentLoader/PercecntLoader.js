import React, { useEffect, useState } from 'react'
import "./PercecntLoader.css"
function PercecntLoader({percent,mcq,showPercent}) {
    //loader for percentage bar
    const percentloadder = () => {
        const flexDivs = [];
    
        for (let i = 1; i <= mcq.length; i++) {
          const style = {
            flexGrow: '1',
            backgroundColor: i <= percent ? 'green' : 'white',
            height: '20px',
          };
    
          flexDivs.push(<div key={i} style={style}></div>);
        }
    
        return flexDivs;
      };
  return (
    <div className='outer_container'>
        <div style={{width:"100%",display:'flex',justifyContent:"space-between"}}>
            <div>
                <span style={{fontSize:"15px"}}>Score: {showPercent}%</span>
            </div>
            <div>
                <span style={{fontSize:"15px"}}>Max Score: 100%</span>
            </div>
        </div>
    <div className="container">
        {percentloadder()}
        </div>
    </div>
  )
}

export default PercecntLoader