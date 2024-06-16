import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import {Context} from '../../context/context'

const Main = () => {

    const {onSent, recentPrompt, showResult, loading, resultData, input, setInput} = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>GenieMind</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult?<>
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
                </>:<div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>
                                {recentPrompt}
                            </p>
                        </div>

                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?<div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div>:
                            <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                            
                        </div>
                    </div> }

                

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">
                        Astrological readings, including those for GenieMind, are based on interpretations and observations. Results may vary, and predictions may not always be accurate.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main