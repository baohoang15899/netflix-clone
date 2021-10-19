import { IinputLogin } from 'global/Signin/interfaces'
import React, { useState } from 'react'

export default function InputLogin({
    placeholder,
    onChangeText,
    text,
    passwordInput,
    showErr }: IinputLogin) {
    const [show, setShow] = useState<Boolean>(false)
    const [passwordCheck, setPasswordCheck] = useState<Boolean>(true)
    const handleBlur = () => {
        if (text?.length > 0) {
            setShow(true)
        }
        else {
            setShow(false)
        }
    }
    return (
        <div className={`Ninput`}>
            <input
                className={showErr}
                type={passwordInput && passwordCheck ? "password" :'text'}
                onFocus={() => setShow(true)}
                onBlur={() => handleBlur()}
                onChange={onChangeText} />
            <p className={
                show ?
                    "Ninput_placeholder add"
                    :
                    "Ninput_placeholder"}>
                {placeholder}
            </p>
            {passwordInput &&
                <p onClick={() => setPasswordCheck(!passwordCheck)} className="Ninput_password">
                    {passwordCheck ? 'SHOW' : 'HIDE'}
                </p>
            }
        </div>
    )
}
