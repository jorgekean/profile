import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './script/scripts.js'
import { firstName, lastName, address1, address2, contactNumber, email, jobDescription, experience, education } from './data/data.json'

function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">{firstName} {lastName}</span>
                    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="src/assets/img/profile-jkn.jpg" alt="..." /></span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                        {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li> */}
                        {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> */}
                    </ul>
                </div>
            </nav>
            {/* <!-- Page Content--> */}
            <div className="container-fluid p-0">
                {/* <!-- About--> */}
                <section className="resume-section" id="about">
                    <div className="resume-section-content">
                        <h1 className="mb-0">
                            {firstName}
                            <span className="text-success">{lastName}</span>
                        </h1>
                        <div className="subheading mb-5">
                            {address1} · {address2} · {contactNumber} ·
                            <a href={`mailto:${email}`} className='text-success'>{email}</a>
                        </div>
                        <p className="lead mb-5">{jobDescription}</p>
                        <div className="social-icons">
                            <a className="social-icon" target={"_blank"} href="https://www.linkedin.com/in/jorge-kean-de-los-reyes"><i className="fab fa-linkedin-in"></i></a>
                            <a className="social-icon" target={"_blank"} href="https://github.com/jorgekean"><i className="fab fa-github"></i></a>
                            <a className="social-icon" target={"_blank"} href="https://www.facebook.com/jorgekean379/"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                </section>
                <hr className="m-0" />
                {/* <!-- Experience--> */}
                <section className="resume-section" id="experience">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Experience</h2>
                        {experience.map((ex, ix) =>
                            <div key={ix} className={`d-flex flex-column flex-md-row justify-content-between mb-5`}>
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{ex.title}</h3>
                                    <div className="subheading mb-3">{ex.company}</div>
                                    <p>{ex.jobDescription}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-success">{ex.date}</span></div>
                            </div>
                        )}

                        {/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-success">December 2011 - March 2013</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Junior Web Designer</h3>
                            <div className="subheading mb-3">Shout! Media Productions</div>
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-success">July 2010 - December 2011</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Web Design Intern</h3>
                            <div className="subheading mb-3">Shout! Media Productions</div>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-success">September 2008 - June 2010</span></div>
                    </div> */}
                    </div>
                </section>
                <hr className="m-0" />
                {/* <!-- Education--> */}

                <section className="resume-section" id="education">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Education</h2>
                        {
                            education.map(ed => <div className="d-flex flex-column flex-md-row justify-content-between">
                                <div className="flex-grow-1">
                                    <h3 className="mb-0">{ed.school}</h3>
                                    <div className="subheading mb-3">{ed.course}</div>
                                    <p>{ed.location}</p>
                                </div>
                                <div className="flex-shrink-0"><span className="text-success">{ed.year}</span></div>
                            </div>
                            )
                        }
                        {/* <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="flex-grow-1">
                                <h3 className="mb-0">{data}</h3>
                                <div className="subheading mb-3">Bachelor of Science</div>
                                <div>Computer Science - Web Development Track</div>
                                <p>GPA: 3.23</p>
                            </div>
                            <div className="flex-shrink-0"><span className="text-success">August 2006 - May 2010</span></div>
                        </div> */}

                    </div>
                </section>
                <hr className="m-0" />
                {/* <!-- Skills--> */}
                <section className="resume-section" id="skills">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Skills</h2>
                        <div className="subheading mb-3">Programming Languages & Tools</div>
                        <ul className="list-inline dev-icons">
                            <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                            <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                            <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                            <li className="list-inline-item"><i className="fab fa-angular"></i></li>
                            <li className="list-inline-item"><i className="fab fa-react"></i></li>
                            <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                            <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                            {/* <li className="list-inline-item"><i className="fab fa-net"></i></li> */}
                        </ul>
                        <div className="subheading mb-3">Workflow</div>
                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                Responsive Design
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                N-Tier Architecture
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                Browser automation
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-check"></i></span>
                                Agile Development & Scrum
                            </li>
                        </ul>
                    </div>
                </section>
                <hr className="m-0" />
                {/* <!-- Interests--> */}
                {/* <section className="resume-section" id="interests">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Interests</h2>
                        <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                        <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                    </div>
                </section>
                <hr className="m-0" /> */}
                {/* <!-- Awards--> */}
                {/* <section className="resume-section" id="awards">
                    <div className="resume-section-content">
                        <h2 className="mb-5">Awards & Certifications</h2>
                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                Google Analytics Certified Developer
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                Mobile Web Specialist - Google Certification
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2009
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - University of Colorado Boulder - Adobe Creative Jam 2008 (UI Design Category)
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                2
                                <sup>nd</sup>
                                Place - University of Colorado Boulder - Emerging Tech Competition 2008
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                1
                                <sup>st</sup>
                                Place - James Buchanan High School - Hackathon 2006
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                3
                                <sup>rd</sup>
                                Place - James Buchanan High School - Hackathon 2005
                            </li>
                        </ul>
                    </div>
                </section> */}
            </div>
        </>
    )
}

export default App
