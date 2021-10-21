import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


export default function EmailBar() {
    const [placeholder, setPlaceholder] = useState<Boolean>(false)
    const [email, setEmail] = useState<string>('')
    return (
        <div className='emailBar'>
            <div className='inputWrapper'>
                <input
                    onBlur={() => setPlaceholder(false)}
                    onFocus={() => setPlaceholder(true)}
                    onChange={(e) => setEmail(e.target.value)}
                    className='inputWrapper__input'
                    type="text" />
                <p className={
                    placeholder ?
                        'inputWrapper__placeholder add' :
                        'inputWrapper__placeholder'}>
                    Email address
                </p>
            </div>
            <Link  className='sendBtn' to={{pathname:'/sign-in', state:email}} >Get Started</Link>
        </div>
    )
}
