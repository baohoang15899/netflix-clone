import { IfooterContent } from 'global/Auth/Interfaces'
import React from 'react'

export default function FooterContent({ contentData }: IfooterContent) {
    return (
        <div className="footerData">
            <div className="footerData__content">
                {contentData?.length > 0 &&
                    contentData?.map((item, i) => {
                        return <p className="footerData__content-data" key={i}>{item.title}</p>
                    })
                }
            </div>
        </div>
    )
}
