import React from 'react'
import p1 from './images/logo.svg'
import p2 from './images/illustration-intro.svg'
import p3 from './images/bg-tablet-pattern.svg'

const App = () => {
  return (
    <>
    <header className='container'>
    
    <div className='navbar'>
    <img src={p1} alt=''></img>
    </div>
     
    </header>

    <section className='container'>
    <div className='hero-content'>
    <h1>Bring everyone together to build better products</h1>
    <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
    <button>Get Started</button>
    </div>
    <div className='hero-img'>
    <img className='hero-image' src={p2} alt=''></img>
    </div>
    
    </section>
    <section className='container'>
    <div>
    <h3>What's different about Manage?</h3>
    <p>Manage provides all the functionalities your team needs, without the complexity. Our software is faster-made for modern digital product teams</p>
    </div>
    <div>
    <ul>
    <li>
    <button>01</button>
    <div>
      <h4></h4>
    </div>
    </li>
    </ul>
    </div>
    </section>
  
    </>
    )
  }
  
  export default App