import { useState } from 'react';
import { evaluate} from 'mathjs';
const App = (value) => {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
  const [display, setDisplay] = useState("")

  const handler = (value) => {
    if (value === '='){
      setDisplay(evaluate(display))
    } else if (value === 'c') {
      setDisplay("")    
    }else {
      setDisplay(display + value)    
    }  
  }
  return(
    <div>
      <h1>REACT to this calculator </h1>
      <div>
        <h2>{display}</h2>
        {buttons.map((button, index) => {
          return <Button key={index} button={button} handler={handler}/>
        })}
      </div>
    </div>
  )
}

const Button = ({ button, handler }) => {
  return(
    <div>
      <button onClick={() => handler(button)}>{button}</button>
    </div>
  )
}
export default App;

// import './App.css';
// import { useState } from 'react';
// import { evaluate } from 'mathjs';



// const buttonValues = [  
//   [7, 8, 9, "C"],
//   [4, 5, 6, "*"],
//   [1, 2, 3, "/"],
//   ["+", "0", "="],
// ];

// /* const digits  = [];
// const createDigits = () =>{
//   for (let i = 1; i<10; i++){
//     digits.push(
//       <button key={i}>{i}</button>
//     )
//   }
//   return digits
// } */

// const App = () => {  
//   const [calc, setCalc] = useState("")
//   const [result, setResult] = useState("")

//   const ops = ["+", "-", "*", "/", "."]
  
//   const updateCalc = (value) => {
//     if (value ==="="){
//       //evaluate(result)
//       setCalc(evaluate(result))
//     }else if (value === "C"){
//       //setCalc
//     } else{
//       setCalc(result + value)
//     }
//     //setCalc(evaluate(result))
//   }
  
//   const createDigits = () =>{
//     const digits  = [];
//     for (let i = 1; i < 10; i++){
//       digits.push(
//         <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
//       )
//     }
//     return digits
//   }

//   return(
//     <div className="App">      
//       <div className="calculator">
//         <h1>React Calculator by ARW Industries ©</h1>
//         <div className="display">
//           {result ? <span>(0)</span>: ""} 
//           {calc || "0"}
//           <span>(0)</span>0
//         </div>

//         <div className="operators">
//           <button onClick={() => updateCalc("/")}>/</button>
//           <button onClick={() => updateCalc("*")}>*</button>
//           <button onClick={() => updateCalc("+")}>+</button>
//           <button onClick={() => updateCalc("-")}>-</button>          
          
//           <button>C</button>
//         </div>

//         <div className="digits">
//           {createDigits()}
//           <button onClick={() => updateCalc("0")}>0</button>          
//           <button onClick={() => updateCalc(".")}>.</button>          
                    
//           <button>=</button>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App;
 