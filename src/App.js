import { useEffect, useState } from 'react';
import './App.css';
import Question from './Components/Questions/Question';
import { mcq } from './utils/json';
import Loader from './Components/Loader/Loader';
import PercecntLoader from './Components/PercentLoader/PercecntLoader';

function App() {
  //for each next question this will be increased
  const [questionhandler,setQuestionHandler] = useState(0)
  //next button text
  const [nextbtn] = useState(true)
  //for showing result edit this and you have to edit styling condition for result too in question.js
  const [showResult,setShowResult]  = useState("")
  //disabling options in question.js when once user cick option
  const[disabled,setDisabled] = useState(false)
  //for loader it tracks which question you are on
  const[activeindex,setActiveIndex] = useState(0)
  //to show percent bar
  const [percent,setPercent] = useState(0)
  //for showing final percentage
  const [showPercent,setShowpercent] = useState()
  ///calculate percent onclickof options
    useEffect(()=>{
        const calculatePercent = (percent/mcq.length)*100
        setShowpercent(calculatePercent)
    },[percent])
  //next button hander
  const handleNext = () =>{
    if(questionhandler < mcq.length -1){
      setQuestionHandler((prev)=>prev+1)
    }
    if(activeindex < mcq.length  ){
      setActiveIndex((prev)=>prev+1)
    }
    setDisabled(false)
    setShowResult("")
  }

  //when you click on option then actions will be performed
  const handleOption = (option,item) =>{
    console.log(option,item)
    if(option.option == item.answer){
      setShowResult("Correct")
      setPercent((prev)=>prev+1)
    }
    else{
      setShowResult("Sorry")
    }
    setDisabled(true)
  }
  return (
    <>
    {
      activeindex < mcq.length  ? (
        <>
        <Loader mcq={mcq} activeindex={activeindex}/>
        <div style={{width:"50vw",margin:"auto"}}>
          <Question mcq={mcq}  questionhandler={questionhandler} nextbtn={nextbtn} handleNext={handleNext} handleOption={handleOption} showResult={showResult} disabled={disabled} activeindex={activeindex}/>
        </div>
        <div style={{width:"50vw",margin:"auto"}}>
          <PercecntLoader percent={percent} mcq={mcq} showPercent={showPercent}/>
        </div> 
        </>
      ) : (
        <div className="result_page">
        <div>
          <span style={{fontSize:"20px"}}>
            Thank You For Attempting This Test And Your Result is: <br/>
            <span>{showPercent}%</span>
          </span>
        </div>
        </div>
        )
    }
   
      
    </>
  );
}

export default App;
