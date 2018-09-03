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


class SkillsBox extends React.Component {
    render() {
        return (
            <Segment className="skills-box">
                <Container className="skills-box__content">
                    <h2 id="#Skills"><span>My Skills</span></h2>
                
                        <List>
                            <List.Item>
                            ReactJS <Rating defaultRating={4} maxRating={5} disabled size='huge' />
                            </List.Item>
                            <List.Item>
                            Javascript <Rating defaultRating={4} maxRating={5} disabled size='huge' />
                            </List.Item>
                            <List.Item>
                            HTML5 <Rating defaultRating={4} maxRating={5} disabled size='huge' />
                            </List.Item>
                            <List.Item>
                            CSS <Rating defaultRating={4} maxRating={5} disabled size='huge' />
                            </List.Item>
                            <List.Item>
                            PHP <Rating defaultRating={3} maxRating={5} disabled size='huge' />
                            </List.Item>
                        </List>
                        {/*
                        ReactJS: Advanced
                        Javascript: Advanced
                        CSS: Advanced
                        HTML5: Advanced
                        PHP: Intermediate
                        */}
                </Container>
            </Segment>
        );
    }
}

export default SkillsBox;