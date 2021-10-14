import React from 'react'
import Banner from './banner'
import Content from './Content'
import Question from './Question'
import Footer from 'components/Auth/Footer'

export default function index() {
    return (
        <>
            <Banner/>
            <Content/>
            <Question/>
            <Footer />
        </>
    )
}
