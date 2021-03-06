import React from 'react';
import ProfileImg from '../../../images/About/profile.jpg';
import './About.css';

const About = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center text-danger my-5'>About Me</h2>
            <div className='d-md-flex d-block p-md-5 p-4 w-75 mx-auto about rounded-3'>
                <div className='d-flex justify-content-center align-items-center '>
                    <img className='w-100 rounded-circle' src={ProfileImg} alt="" />
                </div>
                <div className='w-100 ms-md-5 ms-0 mt-4 text-center'>
                    <h2>Ayoun Paul Neel</h2>
                    <p className='mt-3'>I want to be a web developer. I believe that dreams don't work unless you do. So, to fulfill my dreams I always watch every single module attentively and do every assignment carefully and honestly which is given by Programming Hero. To do all of my work I spend 6-7 hours daily.</p>
                </div>
            </div>
        </div>
    );
};

export default About;