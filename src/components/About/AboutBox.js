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

class AboutBox extends React.Component {
    render() {
        return (
            <Segment id="About" className="about-box">
  
                <Container  className="about-box__content">
                    <h2>About Myself</h2>
                    <Grid columns={2} divided>
                        <Grid.Column width={5}>
                        <Image src='/images/Profile1.jpg' />
                        <h2>Contact Details</h2>
                            <List>
                            <List.Item as='a'>
                                <List.Icon name='twitter' />
                                <List.Content>
                                <a href="https://twitter.com/traesql" target="_blank">TraeSQL</a>
                                </List.Content>
                            </List.Item>
                            <List.Item as='a'>
                                <List.Icon name='skype' />
                                <List.Content>
                                <a href="skype:howard.tibbs?chat" target="_blank">Howard Tibbs</a>
                                </List.Content>
                            </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={11}>
                        <p>
                        Graduated from Stockton University with a Bachelors of Science in Computer Science and Information Systems. 
                        During my studies I honed my skills in HTML, CSS, JavaScript, Apache, and MySQL. That being said, my experience 
                        isn’t wholly academic as I have had multiple opportunities in the Computer Science field.  I have worked as a 
                        Data Analyst and System Administrator for the Federal Aviation Administration in Egg Harbor Township, NJ over two 
                        and a half years.  Furthermore, I have performed statistical analysis for the Radar Registration Group project with 
                        Hi-Tech Systems/ASRC and I was responsible for creating an open source CMS portal using HTML, CSS, and JavaScript 
                        in order to save documents, data, records, and other information within a portal.
                        </p>
                        <p>
                        In addition to working at the FAA, I supported Web Development for the Children’s Hospital of Philadelphia for seven months 
                        working with Drupal, Joomla!, and static sites as well as work as Tech Support at Linode troubleshooting through the Linux 
                        terminal.  
                        Lastly, I have worked as a Cable Technician at Prince Telecom, Help Desk Temp for Spencer's Gifts and Player Support Tech at SG Digital
                        but would like to focus on my career as a Software/Web Developer.
                        </p>
                        </Grid.Column>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

export default AboutBox;