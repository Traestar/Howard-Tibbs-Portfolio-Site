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

class HeroBox extends React.Component {
    render() {
        return (
            <Segment id="/" padded='very' size="massive" className="hero-box">
                <Container className="hero-box__content">
                    <Grid>
                    <Header
                        as='h1'
                        size='huge'
                        content='Hi, I’m Howard Tibbs'
                        className="hero-box__title"
                        textAlign='center'
                    />
                    <p>
                        I am a Front End ReactJS Web Developer who has delivered intriguing and profound solutions across various industries 
                        including aviation, casino gaming, and medical fields. My ideal focus is on SaaS Research and Development, 
                        Finance, Retail, and Science.
                    </p>
                        <div className="hero-box__social">
                        <Button color='skype'>
                            <Icon name='skype' /> <a href="skype:howard.tibbs?chat" target="_blank">Skype</a>
                        </Button>
                        <Button color='twitter'>
                            <Icon name='twitter' /> <a href="https://twitter.com/traesql" target="_blank">Twitter</a>
                        </Button>
                        <Button color='linkedin'>
                            <Icon name='linkedin' /> <a href="https://www.linkedin.com/in/howardtibbs3/" target="_blank">LinkedIn</a>
                        </Button>
                        </div>
                        {/* <List horizontal>
                            <List.Item>
                                <Icon name='skype' />
                            </List.Item>
                            <List.Item>
                                <Icon name='skype' />
                            </List.Item>
                            <List.Item>
                                <Icon name='skype' />
                            </List.Item>
                            <List.Item>
                                <Icon name='skype' />
                            </List.Item>
                            </List> 
                        */}
            
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default HeroBox;