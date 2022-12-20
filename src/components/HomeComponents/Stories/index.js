import React from 'react'
import "./style.scss"
function Stories() {
    return (
        <div className='Stories'>
            <h1>RECENT STORIES</h1>
            <div className='tamcard'>

                <div className='card1'>
                    <div>
                        <img src="https://dlcdnrog.asus.com/rog/media/1670893994624.webp" alt="" />
                        <p></p>
                    </div>
                    <div>
                        <img src="https://dlcdnrog.asus.com/rog/media/1669857154768.webp" alt="" />
                        <p></p>
                    </div>
                    <div>
                        <img src="https://dlcdnrog.asus.com/rog/media/166864109730.webp" alt="" />
                        <p></p>
                    </div>
                </div>
                <div className='card2'>
                    <div>
                        <img src="https://dlcdnrog.asus.com/rog/media/1667344658657.webp" alt="" />
                        <p></p>
                    </div>
                    <div>
                        <img src="https://dlcdnrog.asus.com/rog/media/1665200765593.webp" alt="" />
                        <p></p>
                    </div>
                </div>
            </div>
            <a href="">LEARN MORE <i class="fa-solid fa-chevron-right"></i></a>
        </div>
    )
}

export default Stories