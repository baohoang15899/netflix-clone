import { IauthQuestion } from 'global/Interfaces'
import React, { useState } from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
export default function DropDownAuth({ title, content,secondContent }: IauthQuestion) {
    const [open, setOpen] = useState<Boolean>(false)
    return (
        <>
            <div className='questionAuth__content-dropdown'>
                <div className="questionAuth__content-main">
                    <h6>{title}</h6>
                    <Icon
                        style={{ cursor: 'pointer' }}
                        onClick={() => setOpen(!open)}
                        icon={open ? faTimes : faPlus}
                        size="lg"
                        color='white' />
                </div>
                <div className={
                    open ?
                        'questionAuth__content-description show' :
                        'questionAuth__content-description'}>
                    <p>{content}{secondContent &&  <> <br/><br/> {secondContent}</> }</p>
                </div>
            </div>
        </>
    )
}
