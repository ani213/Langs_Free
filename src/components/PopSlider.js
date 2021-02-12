import React from 'react'
import '../App.css';

function PopSlider() {
  return (
    <div>
      <section class="culture-section">
        <div class="container">
          <div class="col-md-8 col-md-offset-2">
            <h2>Slider Popup</h2>
            <h3>Easily Customized to Meet Your Needs</h3>
            <p>Create a unique slider embedded in a popup. Include valuable information while perserving space and optimizing your deisgn.</p>
          </div>
          <span class="btn btn-slider">Are You Ready?</span>
        </div>
      </section>

      <div class="sliderPop" style={{ display: "none" }}>
        <div class="ct-sliderPop-container">
          <div class="ct-sliderPop ct-sliderPop-slide1 open">
            <div class="inner">
              <i class="fa fa-code" aria-hidden="true"></i>
              <h1>Code</h1>
              <div class="map-white-border"></div>
              <h2>Programming Not Required</h2>
              <p>WebCorpCo enables marketers to manage their entire stack in one place without needing the ability to program as all code is automatically written by webcorpco.</p>
              <a class="ct-newsletter-close ct-sliderPop-close" href="#">
                <img alt="close" src="https://www.solodev.com/assets/popup-slider/popup-close.png" /></a>
            </div>
          </div>
          <div class="ct-sliderPop ct-sliderPop-slide2">
            <div class="inner">
              <i class="fa fa-paint-brush" aria-hidden="true"></i>
              <h1>Design</h1>
              <div class="map-white-border"></div>
              <h2>A Touch of Detail</h2>
              <p>With a team of award-winning designers behind every possible design and layout, you are sure to find success in our automated design process.</p>
              <a class="ct-newsletter-close ct-sliderPop-close" href="#">
                <img alt="close" src="https://www.solodev.com/assets/popup-slider/popup-close.png" /></a>
            </div>
          </div>
          <div class="ct-sliderPop ct-sliderPop-slide3">
            <div class="inner">
              <i class="fa fa-users" aria-hidden="true"></i>
              <h1>Marketing</h1>
              <div class="map-white-border"></div>
              <h2>Marketing in Alignment</h2>
              <p>There is no 'one size fits all' approach to marketing. Every business is unique, customers are unique, and your marketing should be as well.</p>
              <a class="ct-newsletter-close ct-sliderPop-close" href="#">
                <img alt="close" src="https://www.solodev.com/assets/popup-slider/popup-close.png" /></a>
            </div>
          </div>
          <div class="ct-sliderPop ct-sliderPop-slide1">
            <div class="inner">
              <i class="fa fa-life-ring" aria-hidden="true"></i>
              <h1>Support</h1>
              <div class="map-white-border"></div>
              <h2>Available 24/7</h2>
              <p>WebCorpCo offers state of the art support and training to enable users to make the most out of the platform and learn all of the functionality under the hood.</p>
              <a class="ct-newsletter-close ct-sliderPop-close" href="#">
                <img alt="close" src="https://www.solodev.com/assets/popup-slider/popup-close.png" /></a>
            </div>
          </div>
          <div class="ct-sliderPop ct-sliderPop-slide2">
            <div class="inner">
              <i class="fa fa-university" aria-hidden="true"></i>
              <h1>Training</h1>
              <div class="map-white-border"></div>
              <h2>Take Control Yourself</h2>
              <p>Training can be "as requested" although there are regular webinars, code tutorials, and training courses offered for free on our website.</p>
              <a class="ct-newsletter-close ct-sliderPop-close" href="#">
                <img alt="close" src="https://www.solodev.com/assets/popup-slider/popup-close.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopSlider
