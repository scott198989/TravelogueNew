import React from 'react' 
import "../styles/NotFound.css"
import 'animate.css';


const NotFound = () => {
    return (
        <>
            <div className='not-found'>
                <div className='
                    display-msg__not-found  
                    animate__animated 
                    animate__bounce'>
                    <p className='text__not-found '>
                        404 Error:
                    </p>
                    <p className='message__not-found'>
                        This page took a wrong flight path. Our team of explorers is on the rescue mission!
                    </p>
                </div>
            </div>
        </>
    );
}

export default NotFound;