import React from 'react'
import DropDownQuestion from 'components/Auth/DropDownAuth'
import { IauthQuestion } from 'global/Auth/Interfaces'
import { questionData } from 'global/Auth/ContentData'
import EmailBar from 'components/Auth/EmailBar'
export default function Question() {
    return (
        <div className='questionAuth'>
            <div className='container'>
                <div className='questionAuth__content'>
                    <h6 className='questionAuth__content-title'>Frequently Asked Questions</h6>
                    {questionData?.map((item, index) => {
                        return <DropDownQuestion
                            key={index}
                            secondContent={item.secondContent && item.secondContent}
                            title={item.title}
                            content={item.content}
                        />
                    })}
                </div>
                <div className='questionAuth__email'>
                    <p className='questionAuth__email-title'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <EmailBar />
                </div>
            </div>
        </div>
    )
}
