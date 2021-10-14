import Footer from 'components/Auth/Footer'
import React from 'react'
import LogoBrand from 'components/Logo'

export default function Index() {
    return (
        <div className="login">
            <div className="container">
                <div className="login__content">
                    <LogoBrand />
                    <div className="login__content-form">
                        <h6 className="formTitle">Sign In</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
