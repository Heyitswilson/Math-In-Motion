import React from 'react';

function Header () {
    return (
        <div className="header">
            <div>
                <h1 className="title">Bounce</h1>
            </div>
            <div className="link-space">
                <a
                    className="icon-link"
                    href="https://angel.co/u/wilson-ngu"
                    target="_blank"
                >
                    <img
                        className="icons-a"
                        src="https://studypal-dev.s3-us-west-1.amazonaws.com/angelListIcon.png"
                    />
                </a>
                <a
                    className="icon-link"
                    href="https://github.com/Heyitswilson/Bounce"
                    target="_blank"
                >
                    <img
                        className="icons"
                        src="https://studypal-dev.s3-us-west-1.amazonaws.com/white-github.png"
                    />
                </a>
                <a
                    className="icon-link"
                    href="https://www.linkedin.com/in/wilson-ngu/"
                    target="_blank"
                >
                    <img
                        className="icons"
                        src="https://studypal-dev.s3-us-west-1.amazonaws.com/LinkedInIcon.png"
                    />
                </a>
            </div>
        </div>
    )
}

export default Header 