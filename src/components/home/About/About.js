import React from 'react';
import './About.css';
import aboutImage from '../../../images/about.jpg'
function About() {
    return (
        <div className="about" id="about">
            <div className="about_top">
                <div className="div1">
                    <h3>Location</h3>
                    <p>Lorem, ipsum dolor. Lorem</p>
                </div>
                <div className="div2">
                    <h3>Type</h3>
                    <p>Lorem, ipsum.</p>
                </div>
                <div className="div3">
                    <h3>Price</h3>
                    <p>Lorem, ipsum dolor.</p>
                </div>
                <div className="div4">
                    <button className="search_button">
                        Search
                    </button>
                </div>
            </div>



            <div className="about_row">
                <div className="about_div_left ">
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error corrupti sunt voluptas repellendus vitae nostrum nemo, explicabo ea molestias soluta veniam quidem voluptatem velit cupiditate est sapiente omnis nulla ut?</p>

                    <button className="about_button">
                        learn More
                    </button>
                </div>
                <div className="about_div_right">
                    <img src={aboutImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
