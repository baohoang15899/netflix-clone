import React, { useRef, useState } from 'react'


export default function EmailBar() {
    const [placeholder, setPlaceholder] = useState<Boolean>(false)
    return (
        <div className='emailBar'>
            <div className='inputWrapper'>
                <input
                    onBlur={() => setPlaceholder(false)}
                    onFocus={() => setPlaceholder(true)}
                    className='inputWrapper__input'
                    type="text" />
                <p className={
                    placeholder ?
                        'inputWrapper__placeholder add' :
                        'inputWrapper__placeholder'}>
                    Email address
                </p>
            </div>
            <button type="button" className='sendBtn'>Get Started</button>
        </div>
    )
}
