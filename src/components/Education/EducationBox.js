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

class EducationBox extends React.Component {
    render() {
        return (
            <Segment className="education-box">
  
                <Container className="education-box__content">
                    <h2 id="#Education"><span>Education History</span></h2>
                    <h3>Atlantic Cape Community College</h3>
                    <p class="location">Mays Landing, NJ</p>
                    <p class="info">Associates Degree, Computer Information Systems <span>&bull;</span> <em class="date">Graduated May 2008 </em></p>
                    <Divider />
            
                    <h3>Stockton University</h3>
                    <p class="location">Pomona, NJ</p>
                    <p class="info">Bachelors Degree, Computer Science and Information Systems <span>&bull;</span> <em class="date">Graduated May 2011 </em></p>
                    <Divider />
                </Container>
            </Segment>
        );
    }
}

export default EducationBox;