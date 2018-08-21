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

  const HomePage = () => (
    <div>
    <Segment padded='very' size="massive" className="hero-box">
      <Container className="hero-box__content">
        <Grid>
          <Header
            as='h1'
            size='huge'
            content='I’m Howard Tibbs'
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
                <Icon name='skype' /> Skype
              </Button>
              <Button color='twitter'>
                <Icon name='twitter' /> Twitter
              </Button>
              <Button color='google plus'>
                <Icon name='google plus' /> Google Plus
              </Button>
              <Button color='linkedin'>
                <Icon name='linkedin' /> LinkedIn
              </Button>
              <Button color='instagram'>
                <Icon name='instagram' /> Instagram
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
  
    
      <Segment className="about-box">
  
      <Container id="#About" className="about-box__content">
        <h2><a href="#About">About Me</a></h2>
        <Grid columns={2} divided>
            <Grid.Column width={5}>
              <Image src='/images/profilepic.jpg' />
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
              In addition to working at the FAA, I supported Web Development for the Children’s Hospital of Philadelphia for seven months 
              working with Drupal, Joomla!, and static sites as well as work as Tech Support at Linode troubleshooting through the Linux 
              terminal.  
              Lastly, I have worked as a Cable Technician at Prince Telecom, Help Desk Temp for Spencer's Gifts and Player Support Tech at SG Digital
              but would like to focus on my career as a Software/Web Developer.
              </p>
            </Grid.Column>
        </Grid>
          
  
        <h2>Contact Details</h2>
        {/*
        <ul class="social">
            <li><a href="#"><i class="fa fa-twitter"></i>Twitter</a></li>
            <li><a href="#"><i class="fa fa-skype"></i>Skype</a></li>
        </ul>
        */}
        <List>
          <List.Item as='a'>
            <Icon name='twitter' />
            TraeSQL
          </List.Item>
          <List.Item as='a'>
            <Icon name='skype' />
            howard.tibbs
          </List.Item>
        </List>
      </Container>
      </Segment>
  
      <Segment className="experience-box">
  
        <Container className="experience-box__content">
          <h2 id="#Experience"><span>Experience</span></h2>
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
  
      <Segment className="education-box">
  
        <Container className="education-box__content">
        <h2 id="#Education"><span>Education</span></h2>
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
  
      <Segment className="skills-box">
        <Container className="skills-box__content">
      <h2 id="#Skills"><span>Skills</span></h2>
  
          <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
              voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
          </p>
  
          <List>
            <List.Item>
              ReactJS <Rating defaultRating={4} maxRating={5} disabled />
            </List.Item>
            <List.Item>
              Javascript <Rating defaultRating={4} maxRating={5} disabled />
            </List.Item>
            <List.Item>
              HTML5 <Rating defaultRating={4} maxRating={5} disabled />
            </List.Item>
            <List.Item>
              CSS <Rating defaultRating={4} maxRating={5} disabled />
            </List.Item>
            <List.Item>
              PHP <Rating defaultRating={3} maxRating={5} disabled />
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
  
      <Segment className="portfolio-box">

        <Container id="#Projects" className="portfolio-box__content">
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
                  <span className='date'>Created in 2018</span>
                </Card.Meta>
                <Card.Description>Portfolio Site</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Segment>
  
      {/*
      <Message warning attached='bottom'>
        <Icon name='warning' />
        You've reached the end of this content segment!
      </Message>
      */}
  
      <Segment className="contact-box">
        <Container className="contact-box__content">
        <h2 id="#Contact">Contact Me</h2>
        <ul class="social">
          <Button color='skype'>
            <Icon name='skype' /> Skype
          </Button>
          <Button color='twitter'>
            <Icon name='twitter' /> Twitter
          </Button>
          <Button color='google plus'>
            <Icon name='google plus' /> Google Plus
          </Button>
          <Button color='linkedin'>
            <Icon name='linkedin' /> LinkedIn
          </Button>
          <Button color='instagram'>
            <Icon name='instagram' /> Instagram
          </Button>
        </ul>
        </Container>
      </Segment>
  
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
    </div>
  );
  
  export default HomePage;