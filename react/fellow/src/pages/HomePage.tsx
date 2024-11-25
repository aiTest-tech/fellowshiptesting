import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Infinite scrolling
        speed: 500, // Speed of transition between slides (in milliseconds)
        slidesToShow: 1, // Show only one slide at a time
        slidesToScroll: 1, // Scroll one slide at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 1000, // Set the interval to 5000ms (5 seconds)
    };

    return (
        <>
            <Navbar />
            <main className='fix'>
                <div style={{ width: '100vw', margin: '0 auto' }}>
                    <Slider {...settings}>
                        <div>
                            <img
                                src="assets/img/pmwithfellows.jpeg"
                                alt="Banner 1"
                                style={{ width: '100%', height: '60%' }}
                            />
                        </div>
                        <div>
                            <img
                                src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                                alt="Banner 2"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        <div>
                            <img
                                src="https://cmogujarat.gov.in/sites/default/files/2024-08/cm-fellowship.jpg"
                                alt="Banner 3"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                        {/* Add more banners here if needed */}
                    </Slider>
                    <section className="about__area-five  section-pb-110 pb-0">
                        <div className="container">
                            <div className="row gutter-24 d-flex justify-content-end align-items-center">
                                <div className="col-lg-5">
                                    <div className="about-content bg-white shadow py-3 px-4">
                                        <div className="">
                                            <h1 className="about-title">About CM Fellow Program</h1>
                                        </div>
                                        <p>
                                            Sardar Patel Good Governance Chief Minister Fellowship Program aims to channel the innovative ideas of bright young individuals into administrative systems.
                                        </p>
                                        <div className="">
                                            This initiative embodies the spirit of governance championed by Prime Minister Shri Narendra Modi, focusing on the welfare of the common man, the poor, and the underprivileged, and upholding the tradition of good governance                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1" />
                                <div className="col-lg-6 about-right">
                                    <div className="about__img-five">
                                        <img
                                            src="assets/img/about-img2.png"
                                            alt="img"
                                            data-aos="fade-left"
                                            data-aos-delay={200}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </>
    );
};

export default HomePage;
