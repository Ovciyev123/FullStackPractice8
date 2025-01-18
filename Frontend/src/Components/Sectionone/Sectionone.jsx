import React from 'react'
import { FaPlay, FaSoundcloud} from "react-icons/fa"

function Sectionone() {
  return (
    <>
    <div className="sectionone">
        <img src="https://preview.colorlib.com/theme/podca/images/hero_bg_1.jpg.webp" alt="" />
        <div className="sectiononetext">
            <h2>Episode 09: How To Create <br /> Web Page Using Bootstrap 4</h2>
            <p>By Mike Smith | 16 September 2017 | 1:30:20</p>
            <button><b>Read The Transcript</b></button>
            <div className="sounddiv">
                <FaPlay/>
                <span>00:00</span>
                <p className='pline'></p>
                <span>00:00</span>
                <FaSoundcloud/>
                <p className='pline1'></p>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Sectionone