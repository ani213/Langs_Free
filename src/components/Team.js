import React, { Fragment } from 'react';




const Team = () => {

  const img = "https://picsum.photos/200";
  const imgg = "https://picsum.photos/200/300";

  return (
    <Fragment>
      <section class="page_header team_display" style={{ backgroundPosition: "50% 6px;" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p>The ones who runs this company</p>
              <h1 class="text-uppercase">TEAM</h1>
            </div>
          </div>
        </div>
        <div class="page_linker">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <ul class="breadcrumb">
                  <li><a href="/"><i class="fa fa-home"></i>Home</a></li>
                  <li class="active">Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio" className="container bg-grey contact-us">
        <div class="title-block service-heading">
          <span class="top-title"></span>
          <h2>TEAM</h2>
          <p class="sub-title">The ones who runs this company</p>
          <span class="bottom-title"></span>

        </div>
        
        <div class="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/akshay.jpeg" alt="John" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Akshay Baliyan</h3>
                <p class="w3-opacity">Team lead of mobility </p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/aman.JPG" alt="Jane" style={{ width: "100%", height:"250px" }} />
              <div class="w3-container">
                <h3>Aman Gupta</h3>
                <p class="w3-opacity">Quality Analyst</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/workplace-1245776_1920.jpg" alt="Mike" style={{ width: "100%", height:"250px" }} />
              <div class="w3-container">
                <h3>Devansh Mishra</h3>
                <p class="w3-opacity">Bussiness Analyst</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/workplace-1245776_1920.jpg" alt="Dan" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Ved Prakash</h3>
                <p class="w3-opacity">Designer</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w3-row-padding w3-grayscale" style={{ marginTop: "64px" }}>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/workplace-1245776_1920.jpg" alt="John" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Naman Agrawal</h3>
                <p class="w3-opacity">Management</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/workplace-1245776_1920.jpg" alt="Jane" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Rishabh Srivastava</h3>
                <p class="w3-opacity">Manual Tester</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/workplace-1245776_1920.jpg" alt="Mike" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Uday Singh</h3>
                <p class="w3-opacity">Software Developer</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-card">
              <img src="/img/sarthak.jpeg" alt="Dan" style={{ width: "100%" , height:"250px"}} />
              <div class="w3-container">
                <h3>Sarthak Sachan</h3>
                <p class="w3-opacity">Automation Tester</p>
                {/* <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p> */}
                <p> <a href="https://www.langsfree.com/contacts"> <button class="w3-button w3-light-grey w3-block"><i class="fa fa-envelope"></i> Contact</button></a>
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Team;