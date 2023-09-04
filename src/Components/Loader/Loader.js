import React from 'react'
import "./Loader.css"

function Loader({mcq,activeindex}) {
    //top loader
    const loaderProcess = () => {
        const flexDivs = [];
    
        for (let i = 1; i < mcq.length; i++) {
          const style = {
            flexGrow: '1',
            backgroundColor: i <= activeindex ? 'gray' : 'white',
            height: '20px',
          };
    
          flexDivs.push(<div key={i} style={style}></div>);
        }
    
        return flexDivs;
      };
  return (
    <div className="main_loader">
        {loaderProcess()}
    </div>
  )
}

export default Loader