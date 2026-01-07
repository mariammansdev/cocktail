import React from 'react'
import leftLeafImg from '../../public/images/hero-left-leaf.png'
import rightLeafImg from '../../public/images/hero-right-leaf.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {SplitText} from 'gsap/all'

const Hero = () => {
    useGSAP(()=>{
        const heroSplit = new SplitText('.title', {type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'});
    }, [])
  return (
    <>
    <section id='hero' className='noisy'>
        <h1 className='title'>MOJITO</h1>
        <img 
        src={leftLeafImg}
        alt='left-leaf'
        className='left-leaf' />

         <img 
        src={rightLeafImg}
        alt='right-leaf'
        className='right-leaf' />


        <div className="body">
            <div className="content">
                <div className="space-y-5 hidden md:block">
                    <p>Cool. Crisp. Classic.</p>
                    <p className="subtitle">
                        Sip the Spirit <br /> of Summer
                    </p>
                </div>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">
                    Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed youe sense.
                </p>
                <a href='#cocktails'>View Cocktails</a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero