
import React, { useEffect, useState } from 'react'
export default function ClickOutSide(ref: any) {
    const [status, setStatus] = useState<Boolean>(false)
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                setStatus(false)
            }
            else {
                setStatus(true)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return status
}
