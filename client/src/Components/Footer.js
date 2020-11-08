import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <h3>Social Media</h3>
                    <ui className="social-list">
                        <li><i class="fa fa-instagram" aria-hidden="true">@socal_kopites</i></li>
                        <li><i class="fa fa-twitter" aria-hidden="true">@SoCal_Kopites</i></li>
                        <li>Email <link></link></li>
                    </ui>
                </div>
                <div className="container">
                    <h3>Sponsors</h3>
                    {/* <p>Senor Grubby's <a href=""></a></p> */}
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Footer