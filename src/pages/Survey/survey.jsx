import React from "react"
import './survey.css'


const Survey = () => {
  let questions = [{
    q:'1'
  },{
    q:'2'
  },{
    q:'3'
  }]

  return (
    <>
    <div>
      <h1>Fill this out.</h1>
      <div className="survey">
        <div className="chart-legend">
          <h2>Question</h2>
          <span></span>
          <h2>Yes</h2>
          <span></span>
          <h2>No</h2>
        </div>
        {
          questions.map(q => 
            <div key={q.q}>
              <h3>{q.q}</h3>
            </div>
          )
        }
      </div>
    </div>
  </>
  )
}

export default Survey