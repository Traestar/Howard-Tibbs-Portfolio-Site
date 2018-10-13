import React from 'react';
import {
    Accordion,
    Card,
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Item,
    Image,
    Label,
    List,
    Message,
    Rating,
    Segment,
    LabelGroup,
  } from 'semantic-ui-react';

  {/*
  const expitems = [{
        company: 'PlayerBase',
        role: 'ReactJS Software Engineer',
        location: 'Land O Lakes, Florida',
        worked: 'February 2018 – July 2018',
        description: ''
        }, {
        company: 'Teksystems',
        role: 'Information Analyst/Web Developer',
        location: 'Philadelphia, Pennsylvania',
        worked: 'February 2014 – August 2014',
        description: ''
              }
    ]
    */}
  const expitems = [{
      title: 'PlayerBase',
      content: 'test',
        }, {
    title: 'PlayerBase',
    content: 'test',
    }
    ]

  const panels = [{
        title: 'PlayerBase?',
        content: {
            content: <Message info header={'Land O Lakes, Florida'} content={'February 2018 – July 2018'} />,
        },
        }, {
        title: 'Teksystems?',
        content: '...',
      }]
      
    const items = [
        {
            childKey: 0,
            image: 'https://react.semantic-ui.com/images/wireframe/image.png',
            header: 'PlayerBase',
            description: 'Helping the PlayerBase team with React frontend developing. Working with ReactJS, HTML, CSS, JavaScript, TypeScript, and their .jsx and .tsx supersets to create new components, stores, and styles for the Tournament and Game pages. Maintained code and taught other junior developers how to utilize and use code.',
            meta: {
                content: <Item header={'Land O Lakes, Florida'} content={'February 2018 – July 2018'} />
            },
            extra: 'ReactJS, NodeJS, HTML, CSS, Typescript',
        },
        {
            childKey: 1,
            image: 'https://react.semantic-ui.com/images/wireframe/image.png',
            header: 'Teksystems',
            description: 'Develop web applications and sites in a PHP/Apache/MySQL development environment using a mix of CMS applications and plain text development. Worked with researchers and organizers for creating websites for symposiums and research projects.',
            meta: {
                content: <Item header={'Philadelphia, Pennsylvania'} content={'February 2014 – August 2014'} />
            },
            extra: 'ReactJS, NodeJS, HTML, CSS, Typescript',
        },
        {
            childKey: 2,
            image: 'https://react.semantic-ui.com/images/wireframe/image.png',
            header: 'Hi-Tec Systems, Inc.',
            description: 'Develop recommendations reports based on the results of the analysis and send to Operation Managers. Use PHP, CSS, and HTML to create and maintain a server portal that holds all relevant project data and documents.',
            meta: {
                content: <Item header={'Egg Harbor Township, New Jersey'} content={'February 2018 – July 2018'} />
            },
            extra: 'ReactJS, NodeJS, HTML, CSS, Typescript',
        },
      ]

class ExperienceBox extends React.Component {
    render() {
        return (
            <Segment className="experience-box">

                <Container id="Experience" className="experience-box__content">
                    <h2><span>My Experience</span></h2>

                    <Item.Group panels={panels} />
                    <Item.Group divided items={items} />


                    {/*
                    <Item.Group items={items}>
                        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />

                        <Item.Content>
                            <Item.Header as='a'>{header}</Item.Header>
                            <Item.Meta>
                                <span/>
                                <span/>
                                <span/>
                            </Item.Meta>
                            <Item.Description>{description}</Item.Description>
                            <Item.Extra>
                            <Label>IMAX</Label>
                            <Label icon='globe' content='Additional Languages' />
                            </Item.Extra>
                        </Item.Content>
                    </Item.Group>
                    */}


                    {/*
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
                    */}
                </Container>
            </Segment>
        );
    }
}

export default ExperienceBox;