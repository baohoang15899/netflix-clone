import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootReducerModel } from 'Redux/rootReducer'

interface Ilogo{
    custom?:Boolean
}

export default function Logo({custom}:Ilogo) {
    const { isLoggedIn} = useSelector((state: RootReducerModel) => state.authReducer)
    return (
        <Link className={custom ? 'logoCustom' : 'logoBrand'  } to={isLoggedIn ? '/home' : '/'}>Netflix</Link>
    )
}
