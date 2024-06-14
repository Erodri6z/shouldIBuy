import React from "react"
import './survey.css'


const Survey = () => {
  let questions = [{
    q:"Is this something you have been thinking about for more than two weeks?"
  },{
    q:"Does it solve a real problem that you've genuenley noticed?"
  },{
    q:"Do you already own something similiar?"
  },{
    q:"Is it worth giving up progress towards your next finacial goal for?"
  },{
    q:"Where will it be in 5 years"
  }, {
    q:"How long would you have to work in order to pay for it?"
  },{
    q:"Can you not be productive and happy without it?"
  }, {
    q:"What is the cost per use?"
  },{
    q:"Doe's buying this support your priorities?"
  }, {
    q:"Is this the best way to obtain it?"
  },{
    q:"Is it quality for the price tag?"
  }, {
    q:"Are you mentally stable and calm?"
  }, {
    q:"This is not an impulsive buy, right?"
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
              <div className="question-in-question">
                <h3>{q.q}</h3>
              </div> 
              <div className="checkbox-div">
                <label>Yes</label>
                <input type="checkbox" name="yes" id="yes" />
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