import './App.css';
import Box from "./component/Box";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandScissors } from '@fortawesome/free-regular-svg-icons';// <-- import styles to be use

const choice = {
  rock: {
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name:"Scissors",
    img:"https://www.ikea.com/us/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name:"Paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._AC_SX466_.jpg",
  },
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");


  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
      console.log("user", user, "computer", computer);

      // user == computer tie
      // user == rock, computer == scissors user win
      // user == rock, computer == paper user lose
      // user == scissors, computer == paper user win
      // user == scissors, computer == rock user lose
      // user == paper, computer == rock user win
      // user == paper, computer == scissors user lose

      if(user.name == computer.name) {
        return "TIE";
      } else if(user.name == "Rock") 
          return computer.name=="Scissors"?"WIN":"LOSE";
        else if(user.name == "Scissors") 
          return computer.name=="Paper"?"WIN":"LOSE";
        else if(user.name == "Paper") 
          return computer.name=="Rock"?"WIN":"LOSE";
        
      
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random value", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  }


  return (

    <div>
        <div class="title">
            <h1>버튼을 클릭하세요!!</h1>
        </div>

        <div className="main">
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={result}/>
        </div>

        <div className="button-location">
          <button className="button-style" onClick={() => play("scissors")}>가위</button>
          <button className="button-style" onClick={() => play("rock")}>바위</button>
          <button className="button-style" onClick={() => play("paper")}>보</button>
        </div>
    </div>
  );
}

export default App;