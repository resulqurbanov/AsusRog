import React from 'react'
import "./style.scss"
function Footer() {
    return (
        <footer>
            <div className='kecid'>
                <div className='ulli'>
                    <ul>
                        <a href=""><li>ABOUT ROG</li></a>
                        <a href=""><li>HOME</li></a>
                        <a href=""><li>NEWSROOM</li></a>
                        <a href=""><li>ACCESSIBILITY HELP</li></a>
                    </ul>
                </div>
                <h3>FOLLOW ROG</h3>
                <div className='k_icon'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-discord"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-twitch"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className='xett'></div>
            <div className='son_hisse'>
            <a href=''>
                <i class="fa-solid fa-globe"></i>Global/English
                </a>
            <div className='son_noqte'>
                <a href=''>TERMS OF USE NOTICE</a>
                <a href=''>PRIVACY POLICY</a>
                <p>©ASUSTEK COMPUTER INC. ALL RIGHTS RESERVED</p>
            </div>
            </div>
        </footer>
    )
}

export default Footer