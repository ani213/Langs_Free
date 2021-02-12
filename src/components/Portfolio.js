import React, { Fragment } from 'react';




const Portfolio = () => {

  const img = "https://picsum.photos/200";
  const imgg = "https://picsum.photos/200/300";

  return (
    <Fragment>
      <section class="page_header portfolio_display" style={{ backgroundPosition: "50% 6px;" }}>
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
        <div className="text-center "  >
          <h2>Portfolio</h2><br />
          <h4>What we have created</h4>
        </div>
        <div className="row text-center slideanim">
          <div className="col-sm-4">
            <div className="thumbnail">
              <img className="img-port" src={img} alt="Paris" width="400" height="300" />
              <p><strong>Delhi</strong></p>
              <p>Yes, we built Delhi</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img className="img-port" src={imgg} alt="New York" width="400" height="300" />
              <p><strong>Noida</strong></p>
              <p>We built Noida</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="thumbnail">
              <img className="img-port" src={img} alt="San Francisco" width="400" height="100" />
              <p><strong>Gurugram</strong></p>
              <p>Yes, Gurugram is ours</p>
            </div>
          </div>
        </div><br />
      </div>
    </Fragment>
  );
}

export default Portfolio;