import React from 'react'
import './index.css'

export default function LandingPage() {
  return (
    <section className='hero-section'>
    <div className='hero-container'>
      <div className='hero-info-card'>
        <h1>Designed to transform you into a highly skilled Software Professional</h1>
        <div className='info-image-card'>
          <p>Recognized as the Greatest Brand in Education</p>
          <img src='https://nxtwave.imgix.net/ccbp-website/Home/award-design-line-desktop-2x.png?auto=format,compress&q=80' alt='Award Design' />
          <div className='hero-img-cards'>
            <img src='https://nxtwave.imgix.net/ccbp-website/intensive/landingpage/award1-design-desktop-2x.png?auto=format,compress&q=80' alt='Award 1 Design' />
            <img src='https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/most-preffered-brands-award.png?auto=format,compress&q=80' alt='Most Preferred Brands Award' />
          </div>
        </div>
      </div>
      <div className='hero-profile-cards'>
        <div className='card'>
          <div className='type-img-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Academy-blue-logo.svg' alt='Academy Logo' width='150' className='type-img' />
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/academy-peron-photo.png?auto=format,compress&q=80' alt='Academy Person' className='avatar' />
          </div>
          <div className='card-info'>
            <span>post 10/ intermediate </span>
            <span>1st , 2nd , 3rd year</span>
            <h1>Learn like top IITians <br/>
            and achieve high-paid <br/> software jobs</h1>
            <div className='start-seat-card'>
              <div>
                <p className='batch-start'>BATCH STARTS ON</p>
                <p className='batch-date'>25th Mar 2024</p>
              </div>
              <div className='fire-seat-card'>
                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg' alt='Fire Icon' />
                <p>Limited Seats<br/> Available</p>
              </div>
            </div>
            <button type='button' className='callback'>Request Callback</button>
            <button type='button' className='knowmore'>Know More</button>
          </div>
        </div>
        <div className='card'>
          <div className='type-img-card'>
            <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/nxtwave-intensive-2.0/intensive-2.0-logo.svg' alt='Intensive Logo' width='150' className='type-img' />
            <img src='https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png?auto=format,compress&q=80' alt='Intensive Person' className='avatar' />
          </div>
          <div className='card-info'>
            <span>post 10/ intermediate </span>
            <span>1st , 2nd , 3rd year</span>
            <h1>Learn like top IITians <br/>
            and achieve high-paid <br/> software jobs</h1>
            <div className='start-seat-card'>
              <div>
                <p className='batch-start'>BATCH STARTS ON</p>
                <p className='batch-date'>25th Mar 2024</p>
              </div>
              <div className='fire-seat-card'>
                <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Home/hero-section-vector-fire.svg' alt='Fire Icon' />
                <p>Limited Seats<br/> Available</p>
              </div>
            </div>
            <button type='button' className='callback'>Book A Free Demo</button>
            <button type='button' className='knowmore'>Know More</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
