import React, { Fragment,} from 'react';
import { MdDevicesOther } from "react-icons/md";
import Spin from 'react-reveal/Spin';
// import Fade from 'react-reveal/Fade';

import Slider from './Slider';
import SliderAnimation from './SliderAnimation';

const images = [
  // '/img/north-star-2869817_1920.jpg',
  '/img/front-slider.jpg',
  'img/globe.jpg',
  // 'img/direction_path.jpg',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]

function Home() {
  return (
    <div className="main-container">

      <Slider slides={images} />
      

      {/* <header className="bgimg-1 w3-display-container w3-grayscale-min" id="home">
  <div className="w3-display-left w3-text-white" style={{padding:"48px" }}>
    <span className="w3-jumbo w3-hide-small">Start something that matters</span><br />
    <span className="w3-xxlarge w3-hide-large w3-hide-medium">Start something that matters</span><br />
    <span className="w3-large">Stop wasting valuable time with projects that just isn't you.</span>
    <p><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-opacity w3-hover-opacity-off">Learn more and start today</a></p>
  </div> 
  <div className="w3-display-bottomleft w3-text-grey w3-large" style={{padding:"24px 48px" }}>
    <i className="fa fa-facebook-official w3-hover-opacity"></i>
    <i className="fa fa-instagram w3-hover-opacity"></i>
    <i className="fa fa-snapchat w3-hover-opacity"></i>
    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
    <i className="fa fa-twitter w3-hover-opacity"></i>
    <i className="fa fa-linkedin w3-hover-opacity"></i>
  </div>
</header> */}



      <div className="w3-container" id="about">
        <h3 className="w3-center"  data-aos="zoom-in-down">Our Services</h3>
        <p className="w3-center w3-large" data-aos="zoom-in-up">IT SOLUTIONS THAT MAKE A DIFFERENCE</p>
        <div className="w3-row-padding w3-center" style={{ marginTop: "64px" }}>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Web Development</p>
            <p data-aos="zoom-in-right">Web has evolved substantially in the last decade and is now part of our everyday lives through smartphones, TVs, laptops and other digital devices. Its imperative that businesses are serious about their online presence as that is the first impression a prospect could get...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-mobile w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">App Development</p>
            <p data-aos="zoom-in-left">LANG'SFREE mobile application development and mobile platform expertise have provided exemplary and cutting-edge solutions to our global client base for over five years delivering 200+ mobile projects.Lang'sFree helps you make the best of choices from a wide variety of mobile...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-cubes w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Data Services</p>
            <p data-aos="zoom-in-right">Get the most out of your data by having our trained specialists clean, verify, and enriched your data sets.Take repositories of data that have little to no value on their own, and perform the research that enriches that data and turns it into the backbone of a business...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-cogs w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Software Development</p>
            <p data-aos="zoom-in-left">LANG'SFREE Technology Pvt. Ltd. has specialized skills in Software Development, Customized Software Development, Ecommerce Software Development using custom software programming including PHP, ASP.Net, JAVA, MySQL and MS SQL Server Technologies. Our web applications are ...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w3-row-padding w3-center" style={{ marginTop: "64px" }}>
          <div className="w3-quarter services services-card-container">
            <div className="ui-ux-design" data-aos="fade-up">
               <MdDevicesOther className="w3-margin-bottom w3-jumbo icon-color"/>
            </div>
            <i className="fa fa-dev w3-margin-bottom w3-jumbo w3-center icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">UI/UX Design & Development</p>
            <p data-aos="zoom-in-right">At LANG'SFREE, you get A-Z user interface design solutions specialized in Web/Desktop/Mobile User Interface (UI/UX) design and development and visual design services. We provide custom built applications which are user friendly and quite feasible...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-line-chart w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Digital Marketing</p>
            <p data-aos="zoom-in-left">We have a vibrant digital marketing specialist, weat Lang'sFree IT services focuses on every step of business from conceptualization of business, development, and marketing the business. Looking for digital marketing firms to work exactly like local SEO services, we give that... </p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-diamond w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Graphic Designing</p>
            <p data-aos="zoom-in-right">Here at Lang'sFree Technology PVT LTD, we offer Graphic Design services that work with organizations of every kind. We deliver quality and this is our mainstay. With us, you get a striking graphic design for marketing materials and branding crafted by our design professionals...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
          <div className="w3-quarter services services-card-container">
            <i className="fa fa-cog w3-margin-bottom w3-jumbo icon-color" data-aos="fade-up"></i>
            <p className="w3-large" data-aos="zoom-out-down">Product & Support</p>
            <p data-aos="zoom-in-left">Today's IT departments are asked to do more with less. To stay competitive, you need your internal resources focused on delivering new value - while still maintaining your existing systems and infrastructure. When resources are stretched too thin, rely on Lang's Free application ...</p>
            <ul className="w3-ul w3-white w3-hover-shadow known-more-container" data-aos="zoom-out-down">
              <li className="w3-light-grey w3-padding-24">
              <a href="https://www.langsfree.com/services">  <button className="w3-button w3-black w3-padding-large">Know more</button></a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <div className="w3-container w3-light-grey Digital" style={{ padding: "128px 16px" }} >
        <div className="w3-row-padding">
          <div className="w3-col m6" >
            <h3 className="digital-padd" data-aos="fade-right">Digital Core Capabilities</h3>

            <h4 data-aos="fade-left">Build vital capabilities to deliver digital outcomes.</h4>
            <p className="digital-expertise" data-aos="fade-right">What will it take for companies with complex legacy landscapes to quickly sense changing marketing trends and continuously evolve in response? Organizations will have to augment their core digital capabilities to leverage deep insights, bridge the gap between physical and digital worlds through platforms, modernize their core systems to accelerate innovation, run the business without worrying about risks and also deliver design-led experiences that delight customers.

              Drive continuous improvement by transferring digital skills along with ideas from a cross-section of industries and innovation ecosystems.</p>
            <p><a href="https://www.langsfree.com/technology" className="w3-button w3-black btn-digital" data-aos="fade-left">Explore</a></p>
          </div>
          <div className="w3-col m6">
            <img className="w3-image w3-round-large" src="/img/digital_core.jpg" alt="Buildings" width="700" height="394" data-aos="fade-left"/>
          </div>
        </div>
      </div>
      <div className="w3-container w3-light-grey Start" style={{ padding: "128px 16px" }}>
        <div className="w3-row-padding">
          <div className="w3-col m6">
            <img className="w3-image w3-round-large" src="/img/workplace-1245776_1920.jpg" alt="Buildings" width="700" height="394" data-aos="zoom-in-right" data-aos-duration="1000"/>
          </div>
          <div className="w3-col m6">
            <h3 className="digital-padd" data-aos="fade-left">Start A Good Plan</h3>

            <h4 data-aos="fade-right">Build vital capabilities to deliver our customers.</h4> 
            <p className="digital-expertise" data-aos="fade-left">Lang'sfree Technology Pvt. Ltd. corporate mission is "to provide IT services
             at affordable cost. Such as digital marketing, web development, app development, data services , 
             ux/ui designing etc.".
             “to lead in the creation, development and IT services most advanced information technologies, software, IT services. And our worldwide network of LANG'sFREE solutions and services professionals translates these advanced technologies into business value for our customers. We translate these advanced technologies
              into value for our customers through our professional solutions, services worldwide.”</p>
            <p><a href="https://www.langsfree.com/services" className="w3-button w3-black btn-digital" data-aos="fade-right">Explore</a></p>
         </div>
        </div>
      </div>

      <div className="w3-container" style={{ padding: "80px 16px" }} id="team">
        <h3 className="w3-center" data-aos="zoom-in-down">THE TEAM</h3>
        <p className="w3-center w3-large" data-aos="zoom-in-up">The ones who runs this company</p>
        <div className="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card " data-aos="zoom-in">
              <img className="cover" src="/img/satyam2.jpg" alt="John" style={{ width: "100%" ,height:"300px" }} />
              <div className="w3-container ">
                <h3>Satyam Gupta</h3>
                <p className="w3-opacity">Director</p>
                <p>“A successful website does three things:
                    It attracts the right kinds of visitors.
                    Guides them to the main services or product you offer.
                    Collect Contact details for future ongoing relation.”</p>
                <p className="contact-button"> <a href="https://www.langsfree.com/contacts"> <button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card " data-aos="zoom-in">
              <img className="cover" src="/img/anupam.jpg" alt="Jane" style={{ width: "100%" ,height:"300px" }} />
              <div className="w3-container ">
                <h3>Anupam Singh</h3>
                <p className="w3-opacity">Director</p>
                <p>All of us running in different ways in this cycle of universe.One with Bicycle or another one with plane but the fact is Starting point and end point is same(Birth and Death).</p>
                <p className="contact-button"><a href="https://www.langsfree.com/contacts"> <button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></a></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card " data-aos="zoom-in">
              <img className="cover" src="/img/danish.jpg" alt="Mike" style={{ width: "100%" ,height:"300px" }} />
              <div className="w3-container ">
                <h3>Devansh Mishra</h3>
                <p className="w3-opacity">Bussiness Analyst</p>
                <p>“If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away.”</p>
                <p className="contact-button"><a href="https://www.langsfree.com/contacts"> <button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></a></p>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-card" data-aos="zoom-in">
              <img className="cover" src="/img/workplace-1245776_1920.jpg" alt="Dan" style={{ width: "100%" ,height:"300px" }} />
              <div className="w3-container">
                <h3>Ved Prakash</h3>
                <p className="w3-opacity">Designer</p>
                <p>“How well we communicate is determined not by how well we say things, but how well we are understood.”</p>
                <p className="contact-button"><a href="https://www.langsfree.com/contacts"> <button className="w3-button w3-light-grey w3-block"><i className="fa fa-envelope"></i> Contact</button></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="w3-container w3-row w3-center w3-dark-grey w3-padding-64 our-client" data-aos="flip-up">
      <Spin><div className="w3-quarter happy-client">
          <span className="w3-xxlarge">5+</span>
          <br />Partners
  </div></Spin>  
      <Spin>  <div className="w3-quarter happy-client ">
          <span className="w3-xxlarge">12+</span>
          <br />Projects Done
  </div></Spin>
  <Spin> <div className="w3-quarter happy-client">
          <span className="w3-xxlarge">10+</span>
          <br />Happy Clients
  </div></Spin>
  <Spin><div className="w3-quarter happy-client">
          <span className="w3-xxlarge">50+</span>
          <br />Meetings
  </div></Spin>
      </div>


      <div className="w3-container" style={{ padding: "80px 16px" }} id="work">
        <h3 className="w3-center" data-aos="zoom-in-down">OUR WORK</h3>
        <p className="w3-center w3-large" data-aos="zoom-in-up">What we've done for people</p>

        <div className="w3-row-padding" style={{ marginTop: "64px" }}>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/wep-development.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>Website Development</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/app-develoment.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>App Development</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/men-1979261_1920.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>Software Development</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/graphic-degisn.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>Graphic Designing</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w3-row-padding w3-section">
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/ux-ui-degisn.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>UI/UX Development</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/workplace-1245776_1920.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>Digital Marketing</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>
              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/ios-development.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>IOS Development</h4>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w3-col l3 m6" data-aos="zoom-in">
            <div className="cbp-item" style={{ width: "262px;", left: "0px;", top: " 0px;" }}>

              <div className="cbp-item-wrapper">
                <a href="images/part1.jpg" className="cbp-lightbox">
                  <img src="/img/data-service.jpg" alt="" style={{ width: "100%" }} />
                  <div className="overlay">
                    <div className="overlay_inner">
                      <h4>Data Services</h4>
                    </div>
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="modal01" className="w3-modal w3-black" onclick="this.style.display='none'" data-aos="flip-up" data-aos-duration="1000" >
        <span className="w3-button w3-xxlarge w3-black w3-padding-large w3-display-topright" title="Close Modal Image">×</span>
        <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64" data-aos="flip-up" data-aos-duration="1000">
          <img id="img01" className="w3-image" data-aos="flip-up"/>
          <p id="caption" className="w3-opacity w3-large" data-aos="flip-up" data-aos-duration="1000"></p>
        </div>
      </div>

      <div className="container bg_contact bg_one border_radius" data-aos="flip-up" data-aos-duration="1000">
        <div className="row">
          <div className="col-sm-3">
            <div className="contact_inner"> <i className="fa fa-phone"></i>
              <h5><strong>(+91) 9569662882, 8218450251</strong></h5>
              <a href="javascript:void(0)">satyam.gupta@langsfree.com</a>
              <a href="javascript:void(0)">anupam.j@langsfree.com</a>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="contact_inner"> <i className="fa fa-clock-o"></i>
              <h5><strong>Mon - Sat</strong></h5>
              <h5>Available 24x7</h5>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="contact_inner"> <i className="fa fa-map-marker"></i>
              <h3>C-1 UG, Subham Apartment, Sector 73 Noida</h3>
              <h3>Uttar Pradesh 221003, INDIA</h3>


            </div>

          </div>
          <div className="col-sm-3">
            <div className="contact_inner"> <i className="fa fa-map-marker"></i>
              <h3>Plot No. 244A Transport Nagar Agra</h3>
              <h3>Uttar Pradesh, India, 282002 </h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;