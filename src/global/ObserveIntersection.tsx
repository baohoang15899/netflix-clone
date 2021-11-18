import React, { useEffect, useRef, useState } from 'react'

export default function ObserveIntersection(lastElement:any,loading?:Boolean) {
    const [page,setPage] = useState<number>(1)
    const observer = useRef(new IntersectionObserver(item => {
        if (item[0].isIntersecting) {
            if (!loading) {
                setPage(prev => prev + 1)
            }
        }
    }))

    useEffect(() => {
        const currentLastElement = observer.current
        if (lastElement) {
            currentLastElement.observe(lastElement)
        }
        return () => {
            if (lastElement) {
                currentLastElement.unobserve(lastElement)
            }
        }
    }, [lastElement])

    return page
}
