import React from 'react'
import { useSelector } from 'react-redux'
import { RootReducerModel } from 'Redux/rootReducer'

export default function Index() {
    const { user } = useSelector((state: RootReducerModel) => state.authReducer)
    console.log(user, 'data');
    return (
        <div>
            {user &&
                <p>{user.username}</p>
            }
        </div>
    )
}
