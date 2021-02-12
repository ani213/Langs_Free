import React, { Fragment } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Services = () => {


  const modelBox = () => {
    return "document.getElementById('id01').style.display='block'"
  }

  return (
    <Fragment>
      <section class="page_header services_display" style={{ backgroundPosition: "50% 6px;" }}>
        <div class="container">
          <div class="row">
            <div class="col-sm-12 text-center">
              <p>What We Do</p>
              <h1 class="text-uppercase">Services</h1>
            </div>
          </div>
        </div>
        <div class="page_linker">
          <div class="container">
            <div class="row">
              <div class="col-sm-12 text-center">
                <ul class="breadcrumb">
                  <li><a href="/"><i class="fa fa-home"></i>Home</a></li>
                  <li class="active">Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" class="padding-top">
        <div class="container">
          <div class="title-block service-heading">
            <span class="top-title"></span>
            <h2>SERVICES</h2>
            <p class="sub-title">What We Do FOR YOU</p>
            <span class="bottom-title"></span>

          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/businessman-2108029_1920.jpg" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Website Development</h3>
                <p class="bottom15">A well-maintained website can help you gain a competitive advantage in your industry and improve your business image.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/adventure-1807524_1920.jpg" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Application Development</h3>
                <p class="bottom15">Businesses are using apps to improve their processes and increase the level of accessibility their customers have to them.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/meeting-1453895_1280.png" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Software Development</h3>
                <p class="bottom15">Collective processes involved in creating software programs, embodying all the stages throughout the systems development life cycle.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/men-1979261_1920.jpg" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Graphic Designing</h3>
                <p class="bottom15">When used effectively graphic design can boost your company’s marketing and messaging through visual communication.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/workplace-1245776_1920.jpg" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Digital Marketing</h3>
                <p class="bottom15">Targeted audience can be reached in a cost-effective and measurable way increasing brand loyalty and driving online sales.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
            <div class="col-sm-4">
              <div class="service_wrap heading_space">
                <div class="image bottom10">
                  <img src="/img/men-1979261_1920.jpg" style={{ width: "100%" }} alt="our Team" />
                  <div class="overlay">
                    <a href="services_detail.html" class="overlay_center border_radius"><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <h3 class="bottom10">Business Consulting</h3>
                <p class="bottom15">Ability to pay only for the services needed, rather than investing in pricey technologies or paying to keep staff on hand.</p>
                <a href="services_detail.html" class="btn-border border_radius text-uppercase">View More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default Services;