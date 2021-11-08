import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router';

export default function Index(props: any) {
    const history = useHistory()
    const ref = useRef<any>()
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset' }
    }, [])
    
    const handleGoback = (e:any) =>{
        if(e.target.className === ref.current.className){
            history.goBack()
        }
    }
    return (
        <div ref={ref} onClick={(e)=>handleGoback(e)} className='detailModal'>
                <div className='detailModal__inner'>
                        âdadadad
                </div>
        </div>
    )
}
