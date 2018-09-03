import React from 'react';
import {
    Card,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Rating,
    Segment,
  } from 'semantic-ui-react';

class ExperienceBox extends React.Component {
    render() {
        return (
            <Segment className="experience-box">
  
                <Container id="Experience" className="experience-box__content">
                    <h2><span>My Experience</span></h2>
                    <h3>PlayerBase</h3>
                    <p class="location">Land O' Lakes, Florida</p>
                    <p class="info">Software Engineer <span>&bull;</span> <em class="date">February 2018 – </em></p>
            
                    <p>
                        Helping the PlayerBase team with React frontend developing. Working with ReactJS, HTML, CSS, 
                        JavaScript, TypeScript, and their .jsx and .tsx supersets to create new components, stores, 
                        and styles for the Tournament and Game pages. Maintained code and taught other junior 
                        developers how to utilize and use code.
                    </p>
                    <Divider />
            
                    <h3>Teksystems</h3>
                    <p class="location">Philadelphia, Pennsylvania</p>
                    <p class="info">Information Analyst/Web Developer <span>&bull;</span> <em class="date">February 2014 – August 2014</em></p>
            
                    <p>
                        Develop web applications and sites in a PHP/Apache/MySQL development environment using a mix of 
                        CMS applications and plain text development. Worked with researchers and organizers for creating websites
                        for symposiums and research projects.
                    </p>
                    <Divider />
            
                    <h3>Hi-Tec Systems, Inc.</h3>
                    <p class="location">Egg Harbor Township, New Jersey</p>
                    <p class="info">Data Analyst/ System Administrator <span>&bull;</span> <em class="date">October 2011 – February 2014</em></p>
            
                    <p>
                        Develop recommendations reports based on the results of the analysis and send to Operation Managers. 
                        Use PHP, CSS, and HTML to create and maintain a server portal that holds all relevant project data and documents.
                    </p>
                    <Divider />
                </Container>
            </Segment>
        );
    }
}

export default ExperienceBox;