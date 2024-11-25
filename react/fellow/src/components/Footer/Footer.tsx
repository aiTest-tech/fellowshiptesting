const Footer = () => {
    return (
        <>
            <footer className="footer__area-two fix">
                <div className="container">
                    <div className="footer__top">
                        <div className="row">
                            <div className="col-xl-3 col-lg-5 col-md-6">
                                <div className="footer__widget">
                                    <div className="footer__logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo.jpeg" alt="logo" />
                                        </a>
                                    </div>
                                    <div className="footer__content footer__content-two">
                                        <p>
                                            Gujarat – The Land of the Legends, stands bordered by Pakistan
                                            and Rajasthan in the north east, Madhya Pradesh in the east,
                                            and Maharashtra and the Union territories of Diu, Daman, Dadra
                                            and Nagar Haveli in the south.
                                        </p>
                                    </div>
                                    <div className="footer__social footer__social-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-linkedin-in" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-md-6 ">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title">About Gujarat</h4>
                                    <div className="footer__link footer__link-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="javascript:;">Gujarat at Glance</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">History</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Gujarat Fact File</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Why Gujarat?</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Gujarat Tourism</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Art &amp; Culture of Gujarat</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title footer__widget-title-two">
                                        Important Functionaries
                                    </h4>
                                    <div className="footer__link footer__link-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="javascript:;">Governor</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Ministers</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Chief Secretary</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Chief Justice</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Collectors</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">DDO</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <div className="footer__widget">
                                    <h4 className="footer__widget-title footer__widget-title-two">
                                        Business
                                    </h4>
                                    <div className="footer__link footer__link-two">
                                        <ul className="list-wrap">
                                            <li>
                                                <a href="javascript:;">The Investment Destination</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Infrastructure</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Special Economic Zones</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Focus Sectors</a>
                                            </li>
                                            <li>
                                                <a href="javascript:;">Investment Regions</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer-area-end */}
            {/* footer_bottom-- start */}
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <p>
                                Copyright @ 2024 All Rights Reserved- Official website of state
                                portal for Government of Gujarat, India
                            </p>
                        </div>
                        <div className="col-lg-4">
                            <p>
                                Designed &amp; Develop by{" "}
                                <a href="https://gil.gujarat.gov.in/" style={{ color: "#07446E" }}>
                                    CMO IT Department
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer