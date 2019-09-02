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

class PortfolioBox extends React.Component {
    render() {
        return (
            <Segment id="Projects" className="portfolio-box">

                <Container className="portfolio-box__content">
                    <Card.Group>
                        <Card>
                            <Image 
                                src='images/portfolio/modals/m-console.jpg'
                                size='large'
                                as='a'
                                href='http://google.com'
                                target='_blank'
                                />
                            <Card.Content>
                                <Card.Header>Project 1</Card.Header>
                                <Card.Meta>
                                <span className='date'>Created in 2015</span>
                                </Card.Meta>
                                <Card.Description>Portfolio Site</Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image 
                                src='images/portfolio/modals/m-console.jpg'
                                size='large'
                                as='a'
                                href='http://google.com'
                                target='_blank'
                                />
                            <Card.Content>
                                <Card.Header>Project 2</Card.Header>
                                <Card.Meta>
                                <span className='date'>Created in 2017</span>
                                </Card.Meta>
                                <Card.Description>Dashboard App</Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Image 
                                src='images/portfolio/modals/m-console.jpg'
                                size='large'
                                as='a'
                                href='http://google.com'
                                target='_blank'
                                />
                            <Card.Content>
                                <Card.Header>Project 3</Card.Header>
                                <Card.Meta>
                                <span className='date'>Created in 2018 Again</span>
                                </Card.Meta>
                                <Card.Description>Portfolio Site</Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </Container>
            </Segment>
        );
    }
}

export default PortfolioBox;
