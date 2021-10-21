import React from 'react'
import { Link } from 'react-router-dom'

interface Ilogo{
    custom?:Boolean
}

export default function Logo({custom}:Ilogo) {
    return (
        <Link className={custom ? 'logoCustom' : 'logoBrand'  } to={"/"}>Netflix</Link>
    )
}
