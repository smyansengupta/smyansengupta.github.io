import React from 'react';
import './App.css';

function Home() {
    return (
        <div className="App">
            <h1>Smyan Sengupta</h1>
            <p>Hi, I'm Smyan. I'm a 1st year Computer Science student at <a href="https://www.northeastern.edu/">Northeastern University</a>, in the <a href="https://www.khoury.northeastern.edu/">Khoury College of Computer Sciences</a>.</p>
            <p>
            Check out the <a href="projects.html">projects</a> page for projects I
            have been working on.
            </p>
            <p>
            Check out the <a href="interests.html">interests</a> page to get to
            know more about my interests and hobbies.
            </p>
            <p>
            Check out the <a href="experience.html">experience</a> page for my
            past work experience, volunteer work, and extracurricular activities.
            </p>
            <p>
            Feel free to reach out to me at
            <a href="mailto:senguptasmyan@gmail.com">senguptasmyan@gmail.com</a>.
            </p>
        </div>
    );
}

export default Home;