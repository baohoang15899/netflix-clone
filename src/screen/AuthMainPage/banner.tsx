import React from 'react'
import EmailBar from 'components/EmailBar'

export default function index() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="banner__content">
                    <div className='banner__content-header'>
                        <div className="banner__content-logo">
                            <h1>Netflix</h1>
                        </div>
                        <div className="banner__content-signin">
                            <p>Sign in</p>
                        </div>
                    </div>
                    <div className="banner__content-wrapperText">
                        <div className="banner__content-text">
                            <div className="banner__content-mainText">
                                <h5>
                                    Unlimited movies, TV shows, and more.
                                </h5>
                                <h6>
                                    Watch anywhere. Cancel anytime.
                                </h6>
                            </div>
                            <div className="banner__content-description">
                                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                                <div style={{ textAlign: 'center',marginTop:20 }}>
                                    <EmailBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
