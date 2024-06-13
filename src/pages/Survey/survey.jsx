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
        </div>
        {
          questions.map(q => 
            <div key={q.q} className="chart-legend">
              <h3>{q.q}</h3>
              <span></span>
              <div className="checkbox-div">
                <label>Yes</label>
                <input type="checkbox" name="yes" id="yes" />
              </div>
              <span></span>
              <div className="checkbox-div">
                <label>No</label>
                <input type="checkbox" name="no" id="no" />
              </div>
            </div>
          )
        }
      </div>
    </div>
  </>
  )
}

export default Survey