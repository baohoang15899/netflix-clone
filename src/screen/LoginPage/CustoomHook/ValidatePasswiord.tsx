import { validatePassword } from 'global/Signin/Validate'
import React, { useEffect, useState } from 'react'

export default function Validate(password:any) {
    const [passCheck,setPassCheck] = useState<Boolean>(false)
    useEffect(()=>{
        const emailRes = validatePassword(password)
        setPassCheck(emailRes)
    },[password])

    return passCheck
}