import React from 'react'
import {Link} from 'react-router-dom'
import UseQuestions from './components/UseQuestions.jsx';
import problems from './data/problems.json';
const Dashboard = () => {
    const {data, ispending, error}=UseQuestions('http://localhost:5000/problems');
  return (
    <div className='dashboard' style={{ textAlign: 'center', marginTop: '100px', fontSize: '2rem' }}>
      {error && <div>{error}</div> }
      {ispending && <div>Loading question...</div> }
      
      <h2>Problems List</h2>
      <ul>
        {problems.map((problem) => (
          <li key={problem.id}>
            <Link to={`/problem/${problem.id}`}>
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
         
    </div>
  )
}

export default Dashboard
