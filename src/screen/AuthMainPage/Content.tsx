import React from 'react'
import ContentAuthPage from 'components/ContentAuthPage'
export default function Content() {
    return (
        <div className='authContentPage'>
            <div className='container' >
                <ContentAuthPage
                    title='Enjoy on your TV.'
                    description='Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
                    img='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png?fbclid=IwAR3kXJMdN9ymijpBEFXI7zbDEez4q5mVg06M2aYWgWS82DZ-0b4MR1fR42w'
                />
            </div>
        </div>
    )
}
