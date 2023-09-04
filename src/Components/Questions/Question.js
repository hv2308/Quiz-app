import React, { useEffect } from 'react'
import "../Questions.css"
import Icon from '../Icon/Icon'

export default function Question({ mcq, questionhandler, nextbtn, handleNext, handleOption, showResult, disabled,activeindex }) {

  return (
    <div className='outer_cover'>
      {
        mcq && mcq.map((item, index) => (
          <>
            <div key={index}>
              {
                index === questionhandler && (
                  <>
                    <div style={{ marginBottom: "30px" }}>
                      <span style={{ fontSize: "20px", fonstWeight: "bold" }}>Question {index + 1} of {mcq.length} </span>
                      <br/>
                      <span style={{fontSize:"10px",color:"gray"}}>Entertainment Board Game</span>
                      <Icon item={item} mcq={mcq} />
                    </div>
                    <span>
                      {item.que}
                    </span>
                    <div className="option_container">
                      {
                        item.options.map((option, opindex) => (
                          <div className='option_btn' key={opindex} style={{ justifyContent: opindex % 2 === 0 ? "flex-start" : "flex-end" }}>
                            <button className="option_context" onClick={() => { !disabled && handleOption(option, item) }} disabled={disabled}>
                              <span style={{ fontSize: "14px" }}>{option && option.option}</span>
                            </button>
                          </div>
                        ))
                      }
                    </div>
                    <div className="center_align" style={{height:"30px"}}>
                      {/* if you change showresult edit style here too hardcoded*/}
                      {showResult && <span style={{ color: showResult == "Correct" ? "green" : "red", fontSize: "18px" }}>{showResult}</span>}
                    </div>
                    {nextbtn && (
                      <div className="center_align">
                        <div>
                          <button onClick={() => { handleNext() }}>{ activeindex < mcq.length-1 ? "Next Question" : "Submit"}</button>
                        </div>
                      </div>
                    )}
                  </>
                )
              }

            </div>
          </>
        ))

      }
    </div>
  )
}
