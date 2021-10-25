
import React, { useEffect } from 'react'
export default function ClickOutSide(ref : any, cb:(e:Boolean) => void,mobileRef?:any,secondCb?:any,) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                cb(false)
            }
            if (mobileRef.current && !mobileRef.current.contains(event.target)) {
                secondCb(false)
            }
            
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}
