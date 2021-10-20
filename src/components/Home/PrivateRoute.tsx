import { IprivateRouter } from 'global/Home/Interfaces'
import React from 'react'
import {
    Route,
    Redirect
} from "react-router-dom";


export default function PrivateRoute({component:Component, auth, ...rest}:any) {
    return (
        <Route
        {...rest}
        render={(props) => auth
          ? <Component {...props} />
          : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
      />
    )
}
