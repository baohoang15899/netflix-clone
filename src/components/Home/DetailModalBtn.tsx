import React from 'react'
interface btnModal {
    component: any,
    onClick?: () => void,
    cb?: any,
}

export default function DetailModalBtn({ component: Component, onClick }: btnModal) {
    return (
        <>
            <div onClick={onClick} className='detailModal__inner-btnAdd'>
                {Component}
            </div>
        </>
    )
}
