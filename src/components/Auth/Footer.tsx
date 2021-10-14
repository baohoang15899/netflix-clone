import { firstFooterData, fourthFooterData, secondFooterData, thirdFooterData } from 'global/Auth/ContentData'
import React from 'react'
import FooterContent from './FooterContent'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__content">
                    <p className="footer__content-title">Questions? Contact us.</p>
                    <div className="footer__content-category">
                        <FooterContent contentData={firstFooterData}/>
                        <FooterContent contentData={secondFooterData}/>
                        <FooterContent contentData={thirdFooterData}/>
                        <FooterContent contentData={fourthFooterData}/>
                    </div>
                    <small className="footer__content-brand">Netflix</small>
                </div>
            </div>
        </div>
    )
}
