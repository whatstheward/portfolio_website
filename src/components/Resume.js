import React from 'react';
import '../css/Resume.css'
import { Grid, Icon } from 'semantic-ui-react';

const Resume = () =>{

    return(
        <div id="resumeMain">
            <Grid>
                <Grid.Column width={3}/>
                <Grid.Column width={10}>
                    <p id="aboutMe">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Full stack web developer committed to making versatile and user-friendly applications. 
                        With experience in Ruby on Rails, Javascript, React, Redux, combined with a background in 
                        high stress work environments, and a love of structure, function, and design. Works well on a team, 
                        keeps cool under-pressure and deadlines, and brings enthusiasm to code. </p>
                    <h1 id="sectionHeader">Technical Projects</h1>
                    <div className="projects">
                        <div className="projectHeader">
                        <h2 className="projectName">Datr ATL</h2>
                        <a href='https://github.com/whatstheward/Datr-frontend'><Icon name="github"/> Github &nbsp; ||</a> 
                        <a href='https://datr-atl.herokuapp.com'><Icon name="desktop"/> Site</a> 
                        </div>
                        <div>
                            <ul className="projects">
                            <em> A date randomizer for the Metro Atlanta Area </em>
                                <li>Create profiles using Redux/React forms</li>
                                <li>Request Partners to add and confirm requests</li>
                                <li>Search random Businesses from Yelp API by category</li>
                                <li>Save dates to Profile using Rails API</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="projects">
                        <div className="projectHeader">
                        <h2 className="projectName">Road Trip Trail</h2>
                        <a href='https://github.com/whatstheward/road_trip_trail'><Icon name="github"/> Github</a> 
                        </div>
                        <div>
                            <ul className="projects">
                            <em> An Oregon Trail inspired Trivia Game </em>
                                <li>Create a family using React forms</li>
                                <li>Select Trivia Category and Difficulty from Trivia API</li>
                                <li>Answer randomly generated multiple choice questions</li>
                                <li>Save scores to leaderboard</li>
                            </ul>
                        </div>
                    </div>
                    <br />
                    <div className="projects">
                        <div className="projectHeader">
                        <h2 className="projectName">Dungeons and Dating</h2>
                        <a href='https://github.com/whatstheward/dungeons_and_dating'><Icon name="github"/> Github</a> 
                        </div>
                        <div>
                            <ul className="projects">
                            <em> Dating Simulator using Tabletop RPG like mechanics </em>
                                <li> Create a character</li>
                                <li>Date pre-built game Characters</li>
                                <li> Succeed or fail on dates based on a D20 roll</li>
                            </ul>
                        </div>
                    </div>
                    <h1 id="sectionHeader">Technical Skills</h1>
                    <p id="skills"><strong>Programming Languages:</strong> Ruby, Ruby on Rails, Javascript, React, Redux, SQL, HTML, CSS
                    <br/>
                    <strong>Other Skills:</strong> Adobe Creative Cloud</p>
                    <h1 id="sectionHeader">Experience</h1>
                    <section id="experience">
                    <div id="experienceHeader">
                        <caption>July 2019 - Present</caption>
                    </div>
                    <div>
                    <ul className="jobs">
                        <h3>Flatiron School <em>- Software Engineering Coach </em></h3>
                                <li> Create a character</li>
                                <li>Date pre-built game Characters</li>
                                <li> Succeed or fail on dates based on a D20 roll</li>
                            </ul>
                    </div>
                    </section>
                    <h1 id="sectionHeader">Education</h1>
                    <p id="skills"><strong>Flatiron School</strong> - Software Engineering Immersive Program </p>
                </Grid.Column>
                <Grid.Column width={3}/>
            </Grid>
            
        </div>
    )

}

export default Resume