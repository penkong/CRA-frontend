/* eslint-disable no-lone-blocks */
import React from 'react'
import SocialIcon from '../components/SocialIcon';



const ContactPage = () => {
  return (
    <section className="tc center">
      <div className="db dt-l w-100 border-box pa3 ph5-l">
        <div className="w-100 w-50-l pa4 center">
          <blockquote className="athelas ml0 mt0 pl3 black-90 bl bw2 b--green tracked-mega-m tracked-mega-l">
            <p className="f4 f4-m f3-l lh-copy measure mt0">
              “The world breaks everyone, and afterward, some are strong at the broken places.”
            </p>
            <br/>
            <cite className="f6 f5-l fw2 ttu tracked fs-normal lh-copy tracked-mega"> – Ernest Hemingway</cite>
          </blockquote>
        </div>
      </div>
      <div className="db dt-l w-100 border-box pa3 ph5-l">
        <div className="w-100 pa3 center">
          <SocialIcon/>
        </div>
      </div>

    </section>
  )
}

export default ContactPage;

{/* <section class="cf">
      <div class="fl w-50-l w-50-m">
        <div class="db w-100 pa4 center">
          <blockquote class="athelas ml0 mt0 pl4 black-90 bl bw2 b--green">
            <p class="f5 f4-m f3-l lh-copy measure mt0">
              “The world breaks everyone, and afterward, some are strong at the broken places.”
            </p>
            <cite class="ma3 ph3 f6 ttu tracked fs-normal"> – Ernest Hemingway</cite>
          </blockquote>
        </div>
      </div>
      <div class="fl w-50-l w-50-m">
        <div class="db w-100 pa4 center">
          <SocialIcon/>
        </div>
      </div>
      
    </section> */}
