import React from 'react'
import Main from '../components/section/Main'
import Today from '../components/contents/Today.jsx'
import Developer from '../components/contents/Developer.jsx'
import Webd from '../components/contents/Webd.jsx'
import Website from '../components/contents/Website.jsx'
import Gsap from '../components/contents/Gsap.jsx'
import Portfolio from '../components/contents/Portfolio.jsx'
import Youtube from '../components/contents/Youtube.jsx'

const Home = () => {
    return (
        <Main 
            title = "웹스토리보이 유튜브"
            description="웹스토리보이 유튜버 사이트에 오신 것을 환영합니다.">
            <Today/>
            <Developer/>
            <Webd/>
            <Website/>
            <Gsap/>
            <Portfolio/>
            <Youtube/>
        </Main>
    )
}

export default Home