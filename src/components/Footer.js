import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
	return (
		<footer role="contentinfo" aria-label="lang">
			<div className="region region-footer">
				<div id="lang-footer-module">
					<section role="region" aria-label="Resources">
						<div className="lang-fluid lang-word-break" id="lang-footer-module-links">
							<div className="lang-footermenu-list lang-col-12-3 lang-col-8-2" aria-label="Discover">
								<h3 className="lang-bold">Discover</h3>
								<ul className="lang-plain-list lang-textcolumns-small-2">
									<li><a href="/">Innovatives</a>
									</li>
									<li><a href="/">Trials</a>
									</li>
									<li><a href="/">Services</a>
									</li>
									{/* <li><a href="/">Industries</a>
									</li> */}
									<li><a href="/">LANG'sFREE </a>
									</li>
									<li><a href="/">Case studies</a>
									</li>
									<li><a href="/">Financing</a>
									</li>
								</ul>
							</div>
							<div className="lang-footermenu-list lang-col-12-3 lang-col-8-2" aria-label="Information for...">
								<h3 className="lang-bold">Information for...</h3>
								<ul className="lang-plain-list lang-textcolumns-small-2">
									<li><a href="https://www.langsfree.com/team/">Developers</a>
									</li>
									<li><a href="https://www.langsfree.com/services/">Business Partners</a>
									</li>

									<li ><a href="https://www.langsfree.com/privacy/">Privacy</a>
									</li>
									<li ><a href="https://www.langsfree.com/privacy/">Terms of use</a>
									</li>
									<li ><a href="/" onclick="truste.eu.clickListener();return false;">Cookie preferences</a>
									</li>
								</ul>
							</div>
							<div className="lang-footermenu-list lang-col-12-3 lang-col-8-2" aria-label="Connect with us">
								<h3 className="lang-bold">Connect with us</h3>

								<ul class="social_icon">
									<li><a href="https://www.linkedin.com/in/" class="linkedin" target="_blank"><i class="fa fa-linkedin"></i></a></li>
									<li><a href="https://www.instagram.com/" class="instagram" target="_blank"><i class="fa fa-instagram"></i></a></li>
									<li><a href="https://www.facebook.com/" class="facebook" target="_blank"><i class="fa fa-facebook"></i></a></li>
									<li><a href="https://api.whatsapp.com/send?phone=7210254949" class="whatsapp" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
								</ul>

							</div>
							<div className="lang-footermenu-list lang-col-12-3 lang-col-8-2" aria-label="About lang">
								<h3 className="lang-bold">About LANG'sFREE</h3>
								<ul className="lang-plain-list lang-textcolumns-small-2">
									<li ><a href="https://www.langsfree.com/contacts">Contact</a>
									</li>
									<li><a href="https://www.langsfree.com/careers/">Careers</a>
									</li>
									<li><a href="https://www.langsfree.com/news/">Latest news</a>
									</li>
									{/* <li><a href="https://www.langsfree.com/investor/">Investor relations</a>
									</li> */}
									<li><a href="https://www.langsfree.com/responsibility/">Corporate responsibility</a>
									</li>
									<li><a href="https://www.langsfree.com/about">About LANG'sFREE</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="lang-fluid lang-padding-bottom-0">
							<div className="lang-col-12-12 lang-col-8-8">
								<div className="lang-rule lang-alternate lang-nospacing lang-gray-30">
									<hr />
								</div>
							</div>
						</div>
					</section>
				</div>
				<div id="lang-footer">
					<div className="lang-fluid lang-padding-bottom-0">
						<div className="lang-col-12-12 lang-col-8-8 text-alignment-copy">
							<div className="lang-footer-corporate-links lang-word-break-all footer-copy">
								<p>Copyright © {year} | <a href="/"> LANG'sFREE TECHNOLOGY PVT LTD </a> | All rights reserved</p>
							</div>
						</div>
					</div>
				</div>
			</div>

		</footer>
	);
}

export default Footer;