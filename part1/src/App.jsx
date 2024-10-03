/* import Header from './Header.jsx'
import Content from './Content.jsx'
import Total from './Total.jsx'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App */

import { useState } from 'react'
import Feedback from './Feedback'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let total = good + neutral + bad
  let average = average(good, neutral, bad)
  let positive = (100 / total) * good

  const feedback = {
    name: 'give feedback',
  }

  const statistics = {
    name: 'statistics',
  }

  return (
    <div>
      <Feedback feedback={feedback.name}/>
      
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>

      <Statistics statistics={statistics.name}/>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>total {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>


    </div>
  )
}

export default App