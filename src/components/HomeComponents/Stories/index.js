import React from 'react'
import "./style.scss"
function Stories() {
    return (
        <div className='Stories'>
            <h1>RECENT STORIES</h1>
            <div className='tamcard'>

                <div className='card1'>
                    <div className='cards1'>
                        <img src="https://dlcdnrog.asus.com/rog/media/1670893994624.webp" alt="" />
                        <p>Stream with confidence and clarity with the ROG Eye S webcam</p>
                        <p>Up your streaming game with the sleek and powerful ROG Eye S webcam</p>
                    </div>
                    <div className='cards1'>
                        <img src="https://dlcdnrog.asus.com/rog/media/1669857154768.webp" alt="" />
                        <p>Steal the spotlight with the new ROG Strix GeForce RTX 4090 and RTX 4080 White Edition cards</p>
                        <p>Brand new White editions of the ROG Strix GeForce RTX 4090 and 4080 make their debut.</p>
                    </div>
                    <div className='cards1'>
                        <img src="https://dlcdnrog.asus.com/rog/media/166864109730.webp" alt="" />
                        <p>What is a vapor chamber, and how does it improve my PC’s cooling?</p>
                        <p>Every computer needs cooling. But here at ROG, we’re always pushing boundaries, which is why we've installed vapor chambers on many of our current devices for the best possible performance.</p>
                    </div>
                </div>
                <div className='card2'>
                    <div className='cards2'>
                        <img src="https://dlcdnrog.asus.com/rog/media/166864109730.webp" alt="" />
                    </div>
                    <div className='cards2'>
                        <img src="https://dlcdnrog.asus.com/rog/media/1667344658657.webp" alt="" />
                    </div>
                </div>
            </div>
            <a href="">LEARN MORE <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    )
}

export default Stories