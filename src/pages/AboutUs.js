import React from 'react';
import '../styles/AboutUs.css';
import Cherry from "../assets/cherry.jpg"
import Suri from "../assets/suri.jpg"
import Ramel from "../assets/ramel.png"
import Scott from "../assets/scott.jpeg"
import linkedin from "../assets/linkedinlogo.png"
import github from "../assets/github.png"
import slack from "../assets/slack.png"
import { Card, CardBody, Container, CardImg, CardFooter } from "reactstrap"


const AboutUs = () => {
    
    return (
        <>
            <div className="header__about-us">
                <h1>Meet The Team</h1>
                <p className='para__about-us'>
                    As developers we collaboratively design, build and maintain software applications and systems to address complex technological challenges and deliver innovative solutions.
                </p>
            </div>

            <Container
                className='
                    d-flex
                    flex-wrap
                    justify-content-center
                    card-columns-4
                    mt-2 mb-5 px-1 py-2'
            >

{/* Cherry's Card */}
                <Card
                    hover
                    style={{
                        width:"19dvw",
                    }}
                    className='my-2 mx-2 shadow-5 card__about-us'
                >
                    <CardImg 
                        alt="A picture of Sarah Cherry. She is standing outside in winter with a big grin. Her clothing is gray hiking gear and the background shows a frozen lake and snow covered mountains" 
                        src={Cherry} 
                        style={{
                            width:"100%",
                            height:"40dvh",
                            position:"relative",
                            objectFit:"cover"
                        }}
                    />
                    <CardBody className='px-3 py-4'>
                        <h2>Sarah Cherry</h2>
                        <p>Tech Lead/Anchor</p>
                        <p className='text__about-us'> Assumes responsibility for the code base and version control, ensuring its integrity and efficient management throughout the project. Strong understanding of the technical needs, and serves as the guardian of GitHub.</p>
                    </CardBody>
                    <CardFooter className="text-center" >
                        <a href="https://www.linkedin.com/in/sarah-m-cherry/" target="blank" class="test">
                            <span>
                            <img src={linkedin} width="35" height="35" border="0" 
                        />
                            </span> 
                        </a>
                        <a href="https://github.com/cherrythefool" target="blank" class="test">
                            <span>
                                <img src={github} width="40" height="40" border="0" />
                            </span> 
                        </a>
                        <a href="https://sdlearn.slack.com/team/U052MQFBZ9B" target="blank" class="test">
                            <span>
                                <img src={slack} width="35" height="35" border="0" />
                            </span> 
                        </a>
                    </CardFooter>
                </Card>

{/* Suri's Card */}

                <Card
                    hover
                    style={{
                        width:"19dvw",
                    }}
                    className='my-2 mx-2 shadow-5 card__about-us'
                >
                    <CardImg src={Suri} alt="Suri"
                        style={{
                            width:"100%",
                            height:"40dvh",
                            position:"relative",
                            objectFit:"cover"
                        }}
                    />
                    <CardBody>
                        <h2>Surielis Rodriguez</h2>
                        <p>Lead Design</p>
                        <p className='text__about-us'> Responsible for the project's look, color scheme, and branding, while also ensuring intuitive navigation, and a cohesive and visually appealing experience for users.  </p>
                    </CardBody>
                    <CardFooter className='text-center'>
                        <a href="https://www.linkedin.com/in/surielis-rodriguez/" target="blank" class="test">
                            <span>
                            <img src={linkedin} width="35" height="35" border="0" 
                        />
                            </span> 
                        </a>
                        <a href="https://github.com/SurielisRodriguez" target="blank" class="test">
                            <span>
                                <img src={github} width="40" height="40" border="0" />
                            </span> 
                        </a>
                        <a href="https://sdlearn.slack.com/team/U0534HN74LE" target="blank" class="test">
                            <span>
                                <img src={slack} width="35" height="35" border="0" />
                            </span> 
                        </a>
                    </CardFooter>    
                </Card>

{/* Scott's card */}

                <Card
                    hover
                    style={{
                        width:"19dvw",
                    }}
                    className='my-2 mx-2 shadow-5 card__about-us'
                >
                    <CardImg 
                        src={Scott} 
                        alt="Scott" 
                        style={{
                            width:"100%",
                            height:"40dvh",
                            position:"relative",
                            objectFit:"cover"
                        }}
                    />
                    <CardBody>
                        <h2>Scott Tuschl</h2>
                        <p>Product Manager</p>
                        <p className='text__about-us'>  Controls the overarching vision of the product, ensuring it meets all requirements, while providing strong management support to the team and resolving any blockers, managing conversations around significant app changes. </p>
                    </CardBody>
                    <CardFooter className="text-center" >
                        <a href="https://www.linkedin.com/in/scott-tuschl/" target="blank" class="test">
                            <span>
                            <img src={linkedin} width="35" height="35" border="0" 
                        />
                            </span> 
                        </a>
                        <a href="https://github.com/scott198989" target="blank" class="test">
                            <span>
                                <img src={github} width="40" height="40" border="0" />
                            </span> 
                        </a>
                        <a href="https://sdlearn.slack.com/team/U052BV8L1U1" target="blank" class="test">
                            <span>
                                <img src={slack} width="35" height="35" border="0" />
                            </span> 
                        </a>
                    </CardFooter>
                </Card>

{/* Ramgel's card */}

                <Card 
                    hover
                    style={{
                        width:"19dvw",
                    }}
                    className='my-2 mx-2 shadow-5 card__about-us'
                >
                    <CardImg 
                        src={Ramel} 
                        alt="Ramel" 
                        style={{
                            width:"100%",
                            height:"40dvh",
                            position:"relative",
                            objectFit:"cover"
                        }}
                    />
                    <CardBody>
                        <h2>Ramgel Romo</h2>
                        <p>Project Manager</p>
                        <p className='text__about-us'> Responsible for internal team communication and oversee the project management board, ensuring strong communication, proper assignment of developers, tracking of PRs for review and approval, and management of external resources. </p>
                    </CardBody>
                    <CardFooter className="text-center" >
                        <a href="https://www.linkedin.com/in/romoramgel/" target="blank" class="test">
                            <span>
                            <img src={linkedin} width="35" height="35" border="0" 
                        />
                            </span> 
                        </a>
                        <a href="https://github.com/Romoramel" target="blank" class="test">
                            <span>
                                <img src={github} width="40" height="40" border="0" />
                            </span> 
                        </a>
                        <a href="https://sdlearn.slack.com/team/U053Q2474KT" target="blank" class="test">
                            <span>
                                <img src={slack} width="35" height="35" border="0" />
                            </span> 
                        </a>
                    </CardFooter>
                </Card>
            </Container>
            <br />
        </>
    );
};


export default AboutUs;
