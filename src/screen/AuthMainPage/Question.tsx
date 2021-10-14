import React from 'react'
import DropDownQuestion from 'components/DropDownAuth'
import { IauthQuestion } from 'global/Interfaces'
import { questionData } from 'global/ContentData'
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
            </div>
        </div>
    )
}
