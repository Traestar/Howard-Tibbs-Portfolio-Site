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

class ContactBox extends React.Component {
    render() {
        return (
            <Segment id="Contact" className="contact-box">
                <Container className="contact-box__content">
                    <h2>Contact Me</h2>
                    <ul class="contact-box__social">
                    <Button color='skype'>
                        <Icon name='skype' /> <a href="skype:howard.tibbs?chat" target="_blank">Skype</a>
                    </Button>
                    <Button color='twitter'>
                        <Icon name='twitter' /> <a href="https://twitter.com/traesql" target="_blank">Twitter</a>
                    </Button>
                    <Button color='linkedin'>
                        <Icon name='linkedin' /> <a href="https://www.linkedin.com/in/howardtibbs3/" target="_blank">LinkedIn</a>
                    </Button>
                    </ul>
                </Container>
                {/*
                    <Segment inverted vertical style={{ padding: '5em 0em' }}>
                        <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='About' />
                                <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                Footer Header
                                </Header>
                                <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                                </p>
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Container>
                    </Segment>
                */}
            </Segment>
        );
    }
}

export default ContactBox;



