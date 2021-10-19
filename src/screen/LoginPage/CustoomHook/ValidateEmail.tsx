import { validateEmail } from 'global/Signin/Validate'
import React, { useEffect, useState } from 'react'

export default function Validate(username:any) {
    const [emailCheck,setEmailCheck] = useState<Boolean>(false)
    useEffect(()=>{
        const emailRes = validateEmail(username)
        setEmailCheck(emailRes)
    },[username])

    return emailCheck
}
