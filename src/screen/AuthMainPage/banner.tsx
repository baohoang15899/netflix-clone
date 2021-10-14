import React from 'react'
import EmailBar from 'components/Auth/EmailBar'
import { Link } from 'react-router-dom'
import LogoBrand from 'components/Logo'

export default function index() {
    return (
        <div className='banner'>
            <div className="container">
                <div className="banner__content">
                    <div className='banner__content-header'>
                        <LogoBrand/>
                        <div className="banner__content-signin">
                            <Link className='p' to='sign-in'>Sign in</Link>
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
