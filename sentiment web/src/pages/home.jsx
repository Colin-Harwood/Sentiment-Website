import React from 'react'
import './home.css'

const Home = () => {
  return (
    <div>
      <h1>
        Hi
      </h1>
      <div id="formDiv">
        <form>
          <input type="text" placeholder='Enter what you want analysised' id='formInput'>
          </input>
          <button type='submit' id='formSubmit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home
