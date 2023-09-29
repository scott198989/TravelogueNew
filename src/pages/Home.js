import React from 'react';
import "../styles/Home.css"
import Plane from "../assets/planebanner.png"
import 'animate.css';

const Home = () => {

    return (
        <>
            <div className="home">
                <div className='header__home'>
                    <p className='
                        animate__animated 
                        animate__slideInUp 
                        title__home' >
                        Travelogue
                    </p>
                    <p  className="
                        animate__animated 
                        animate__slideInUp 
                        mission__home" >
                        Track your globetrotting adventures and conquer the
                        world, one destination at a time.
                    </p>
                </div>
                <img 
                    src={Plane} 
                    className="move-image__home" 
                    alt="Plane Banner"
                />
            </div>
        </>
    );
};

export default Home;
