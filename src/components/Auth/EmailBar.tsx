import React, { useRef, useState } from 'react'
import { Link,Redirect } from 'react-router-dom'


export default function EmailBar() {
    const [placeholder, setPlaceholder] = useState<Boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [move,setMove] = useState<Boolean>(false)

    const handleKeyPress = (e:any) =>{
        if (e.code === 'Enter') {
            if (email.length > 0) {
                setMove(true)
            }
            else{
                setMove(false)
            }
        }
    }

    if(move) return <Redirect to={{pathname:'sign-in' ,state:email}} />

    return (
        <div className='emailBar'>
            <div className='inputWrapper'>
                <input
                    onBlur={() => setPlaceholder(false)}
                    onFocus={() => setPlaceholder(true)}
                    onChange={(e) => setEmail(e.target.value.trim())}
                    className='inputWrapper__input'
                    onKeyDown={(e)=> handleKeyPress(e)}
                    type="text" />
                <p className={
                    placeholder ?
                        'inputWrapper__placeholder add' :
                        'inputWrapper__placeholder'}>
                    Username or phone
                </p>
            </div>
            <Link  className='sendBtn' to={{pathname:'/sign-in', state:email}} >Get Started</Link>
        </div>
    )
}
