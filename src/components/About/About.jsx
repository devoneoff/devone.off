import React from "react";
import './About.css';

const About = () => {
    return (
        <>
        <div className="about_container">
            <h1>About <span className="gradientTextTitle">Myself</span></h1>
            <p>HTML, CSS, JavaScript and others. I have experience working with CMS, however, I prefer self-written solutions because of the possibility of creating an absolutely unique interface, embodying all the ideas on the page.</p>
            <div className="about_content">
                <div className="about_card">
                    <img src="./assets/images/hand.png" className="hand" alt="" />
                    <p className="hello"><span>Hello, I am</span></p>
                    <p className="my_name">Irina Krylova</p>
                    <div className="about_image">
                        <img src={ require( '../../images/devoneoff.png' ) } alt="" />
                    </div>
                </div>
                <div className="about_table">
                    <div className="about_table_item">
                        <h2 className="about_table_title1">Skills:</h2>
                        <p>Adaptive, cross-browser and interactive layout using modern technologies. You can find out more about my skills and their proficiency levels in the "Skills" section</p>
                    </div>
                    <div className="about_table_item">
                        <h2 className="about_table_title2">My Journey In Code:</h2>
                        <p>Learning various development tools and languages. The ability to read someone else's code</p>
                    </div>
                    <div className="about_table_item">
                        <h2 className="about_table_title3">Digital Experiences:</h2>
                        <p>I have little commercial experience in web development. I did an internship at JV Business Car LLC as a "Web Developer Intern".</p>
                    </div>
                    <div className="about_table_item">
                        <h2 className="about_table_title4">Hobbies:</h2>
                        <p>Undoubtedly, the world of development has become for me not only a source of education, but also a hobby. However, in addition to this, I am also interested in a number of hobbies: photography and video shooting, graphic design, skateboarding and cycling, music, movies and TV series, computer and mobile games.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;