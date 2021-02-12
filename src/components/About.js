import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <section class="page_header about-us_display" style={{ backgroundPosition: "50% 6px;" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p>What We Do</p>
              <h1 class="text-uppercase">ABOUT US</h1>
            </div>
          </div>
        </div>
        <div class="page_linker">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <ul class="breadcrumb">
                  <li><a href="/"><i class="fa fa-home"></i>Home</a></li>
                  <li class="active">About Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about" className="container">
        <div class="title-block service-heading">
          <span class="top-title"></span>
          <h2>ABOUT US</h2>
          <p class="sub-title">What We Do FOR YOU</p>
          <span class="bottom-title"></span>

        </div>
        <div className="row">
          <div className="col-sm-8">
            <h2>WELCOME TO THE LANG'sFREE TECHNOLOGY Pvt. Ltd.</h2>
            <h3>Inovative Software Company</h3>
            <p className="mt-4 intro-company" style={{ alignItems: "center" }}>Gone are the days when a few word brands help the monopoly of high end elite software.
                They had their digital solution, for online accounting, reporting, production, &amp; services. Web application in decision making,<br />
                strategy planning, marketing and overall presence of their product in the market.</p>
            <br /><button className="btn btn-default btn-lg">Get in Touch</button>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-signal logo"></span>
          </div>
        </div>
      </div>

      <div className="container bg-grey">
        <div className="row">
          <div className="col-sm-4">
            <img class="w3-image w3-round-large" src="/img/workplace-1245776_1920.jpg" alt="Buildings" width="700" height="394" />
          </div>
          <div className="col-sm-8 about-us-intro">
            <h2>Our Values</h2><br />
            <p><strong>MISSION:</strong>LANG'sFREE Technology Pvt. Ltd. corporate mission is "to provide IT services at the pocket cost of each person. Such as digital marketing, web development, app development, data services , 
              ux/ui designing etc. But we also provide internship and training where you can know things practically and on the live project".
             </p>
             <p> “to lead in the creation, development and  IT services most advanced information technologies, software,  IT services. And our worldwide network of LANG'sFREE solutions
             and services professionals translates these advanced technologies into business value for our customers. We translate these advanced technologies into 
             value for our customers through our professional solutions, services and consulting businesses worldwide.”
             </p>
            <br />
            <p className="diretor-mythology"><strong>VISION:</strong>LANG'sFREE Technology Pvt. Ltd. corporate vision here is with the inspiring message of the Bhagavad Gita 
            which says that lust, anger and greed-free services which are in essence our. On the basis of this our company name is LANG'sFREE
            We want to make our country digitally connected to this world. India is rich for its ethnicity and distinct identity.
            The culture that constitutes 150 crores of our population. All of us dream of great ideas but when these ideas want to go on stage then because of  Lack of resources leads
            people to bury not only ideas but also their dreams. As mostly companies cost them a lot for thier idea to develop on a platform but we are taking forward the mission of our honorable PM self-reliant India so that everyone can take their ideas to the stage.
            </p>
          </div>
          {/* <p className="diretor-mythology"><strong>Director-</strong>All of us running in different ways in this cycle of universe.One with Bicycle or another one with plane but the fact is Starting point and 
              end point is same(Birth and Death).So enjoy your life and Do your deeds.If anyone wants to help anyone then instead of giving some money to him He should try to
              give him some skills So that he can Stand on his own feet.</p> */}
        </div>
      </div>
    </Fragment>
  );
}

export default About;