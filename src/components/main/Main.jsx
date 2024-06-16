import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>

        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>What is the importance of cash flow analysis in evaluating the liquidity and solvency of a business?</p>
                    <img src={assets.finance_icon} alt="" />
                </div>
                <div className="card">
                    <p>How does film marketing influence audience expectations and perceptions of a movie before its release?</p>
                    <img src={assets.movie_icon} alt="" />
                </div>
                <div className="card">
                    <p>What are the fundamental components of an atom according to the modern atomic theory?</p>
                    <img src={assets.scientific_icon} alt="" />
                </div>
                <div className="card">
                    <p>What are the symptoms of a common cold versus the flu?</p>
                    <img src={assets.health_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Astrological readings, including those for Gemini, are based on interpretations and observations. Results may vary, and predictions may not always be accurate.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main