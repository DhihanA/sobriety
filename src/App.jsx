import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [startDate, setStartDate] = useState(new Date().toDateString());
  const [reassurance, setReassurance] = useState(false);

  const reassuringMessages = [
    "It's okay to start over. Progress isn't always a straight line.",
    "You've already shown strength by taking the first step. Keep going!",
    "Every journey has bumps along the way. You've got this!",
    "Don't be hard on yourself. Restarting means you haven't given up.",
    "You’re still moving forward, even if it doesn’t feel like it right now.",
    "Take it one day at a time. Tomorrow is a new opportunity.",
    "Your resilience is inspiring. Keep believing in yourself!",
    "Progress is progress, no matter how many times you start again.",
    "Remember, setbacks are just setups for a stronger comeback.",
    "You are stronger than any setback. Keep pushing forward."
  ];
  
  useEffect(() => {
    let daysP = daysPassed(new Date(), new Date(startDate));
    setTimeElapsed(daysP);
  }, [startDate]);

  const daysPassed = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000; // ms in a day

    // abs diff in ms between the 2 dates
    const diff = Math.abs(d1.getTime() - d2.getTime());

    // # of days between the 2 dates
    return Math.floor(diff / oneDay);
  }

  // resetting timeElapsed back to 0, as well as making the current day the new starting sobriety date
  const reset = () => {
    setStartDate(new Date().toDateString());
    setTimeElapsed(0);
    setReassurance(true);
  };

  const newStart = (date) => {
    setStartDate(date.toDateString());
    setReassurance(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-500 to-pink-300 text-white font-sans">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg text-gray-800 text-center">
        <h1 className="text-3xl font-bold mb-4">{timeElapsed} {timeElapsed === 1 ? 'Day' : 'Days'} Sober</h1>
        
        <div className="space-y-4 mb-4">
          {/* <button
            onClick={() => setTimeElapsed((timeElapsed) => timeElapsed + 1)}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
          >
            Add 1 Day
          </button> */}

          <button
            onClick={() => reset()}
            className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition duration-200"
          >
            Reset
          </button>

          {reassurance ? <p>{reassuringMessages[Math.floor(Math.random() * reassuringMessages.length)]}</p> : undefined}
        </div>

        <div className="text-center mb-4">
          <h2 className="text-lg font-semibold">Your starting sobriety date:</h2>
          <h3 className="text-2xl font-bold">{startDate}</h3>
        </div>

        <DatePicker
          selected={new Date(startDate)}
          onChange={(date) => newStart(date)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-center bg-gray-100 text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default App
