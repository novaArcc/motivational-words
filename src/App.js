import Josh from "./images/Josh.jpg"
import './App.css';
import { useEffect, useState } from 'react';

const motivationalQuotes = [
  "You are braver than you believe", "This too shall pass", "You have traits others admire", "You are the best dressed at Morrisons", "You are stronger than you seem", "You are smarter than you think", "You are loved more than you know", "Life is tough but you are tougher", "There will be milk at the end of this", "Mistakes are proof you are trying", "Bad people don't worry they're bad people", "It might not be easy but it will be worth it", "Don't get caught for puss", "Don't die for nyash", "We slide and crash", "The best views come after the hardest climb", "You don' have to have it all figured out", "Cum in the sink before you sink in the cum", "Any holes the goal", "Imperfection is a form of freedom", "1% better every day", "Younger you is proud you're still here", "Strength is not physical", "Progress isn't linear", "You are the best dressed at Lidl", "You're the best dressed in your room", "Do or do not, there is no try"
]


function getTwoDifferentQuotes() {
  const first = Math.floor(Math.random() * motivationalQuotes.length);
  let second = Math.floor(Math.random() * motivationalQuotes.length);
  while (second === first) second = Math.floor(Math.random() * motivationalQuotes.length);
  return [motivationalQuotes[first], motivationalQuotes[second]];
}


function App() {

const [[quote1, quote2], setQuotes] = useState(getTwoDifferentQuotes);

  useEffect(() => {
    const id = setInterval(() => setQuotes(getTwoDifferentQuotes()), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="App">
      <h1 className="motivation">Motivation</h1>
      <img className="joshimg" src={Josh}></img>
      <div className="quoteContainer1">{quote1}</div>
      <div className="quoteContainer2">{quote2}</div>
      <h1 className="withJosh">With Josh</h1>
    </div>
  );
}

export default App;
