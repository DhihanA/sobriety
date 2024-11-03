import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [count, setCount] = useState(0)
  const [timeElapsed, setTimeElasped] = useState(0);
  const [startDate, setStartDate] = useState(new Date().toDateString());

  
  useEffect(() => {
    let daysP = daysPassed(new Date(), new Date(startDate));
    setTimeElasped(daysP);
  }, [startDate]);

  const daysPassed = (d1, d2) => {
    const oneDay = 24 * 60 * 60 * 1000; // milliseconds in a day

    // abs diff in ms between the 2 dates
    const diff = Math.abs(d1.getTime() - d2.getTime());

    // # of days between the 2 dates
    return Math.round(diff / oneDay);
  }

  // resetting timeElapsed back to 0, as well as making the current day the new starting sobriety date
  const reset = () => {
    setTimeElasped(0);
    setStartDate(new Date().toDateString());
  }

  return (
    <>
      <div>
      </div>
      <h1>{timeElapsed} {timeElapsed === 1 ? 'Day' : 'Days'} Sober</h1>
      <div className="card">
        <button onClick={() => setTimeElasped((timeElapsed) => timeElapsed + 1)}>
          Add 1 Day
        </button>

        <button onClick={() => reset()}>
          Reset
        </button>
      </div>

      {/* <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">What is your name?</span>
        </div>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <div className="label">
        </div>
      </label> */}


        {/* <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
          </div>
          <input datepicker id="default-datepicker" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"   />
        </div> */}


        <h2>Select your starting sobriety date here.</h2>
        <h1>{startDate}</h1>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date.toDateString())}
          className="border border-gray-300 rounded-md p-2"
        />

    </>
  )
}

export default App
