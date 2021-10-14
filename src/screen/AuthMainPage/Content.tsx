import React from 'react'
import ContentAuthPage from 'components/ContentAuthPage'
import { authContentData } from 'global/ContentData'
import { reverse } from 'dns'
export default function Content() {
    return (
        <div className='authContentPage'>
            {authContentData?.map((item, i) => {
                return <ContentAuthPage
                    key={i}
                    reverse={item.reverse && item.reverse}
                    img={item.img && item.img}
                    title={item.title}
                    description={item.description}
                    decor={item.decor && item.decor}
                    video={item.video && item.video}
                />
            })}
        </div>
    )
}
