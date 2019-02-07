import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Card
} from "semantic-ui-react";
import projects from "./projectdata.js";
import ProjectCard from "./components/ProjectCard";

const GreenButton = styled(Button)`
  &&& {
    color: white;
    background: #2ebf91;
    margin: 10px;
  }
`;

const PurpleButton = styled(Button)`
  &&& {
    color: white;
    background: #8360c3;
    margin: 10px;
  }
`;

const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="JJ Ashcraft"
      inverted
      style={{
        fontSize: mobile ? "3em" : "4em",
        color: "#8360c3",
        textShadow:
          "2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000",
        fontWeight: "900",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="Designer / Developer"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <p
      style={{
        fontSize: "1em",
        fontStyle: "italic",
        textShadow:
          "2px 5px 14px #000000, 2px 5px 14px #000000, 2px 5px 14px #000000"
      }}
    >
      “We are not nouns, we are verbs. I am not a thing - an actor, a writer - I
      am a person who does things - I write, I act - and I never know what I'm
      going to do next. I think you can be imprisoned if you think of yourself
      as a noun.” <br /> -- Stephen Fry
    </p>
    <GreenButton size="small" href="#projects">
      Check out my projects
      <Icon name="right arrow" />
    </GreenButton>
    <PurpleButton
      size="small"
      rel="noopener noreferrer"
      target="_blank"
      href="https://drive.google.com/file/d/0B2sSQ6SMk_NWMGRZNlZiWGdKZlhqbVBVY1lMSnpLZUI2NkFN/view?usp=sharing"
    >
      Download Resume
      <Icon name="right arrow" />
    </PurpleButton>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 700,
              padding: "1em 0em",
              background: "url('./wingsuitcover.jpg') no-repeat top center",
              backgroundSize: "cover"
            }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a" href="#projects">
                  Projects
                </Menu.Item>
                <Menu.Item as="a" href="#testimonials">
                  Testimonials
                </Menu.Item>
                <Menu.Item as="a" href="#articles">
                  Articles
                </Menu.Item>
                <Menu.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://twitter.com/ashcraft_jj"
                >
                  Twitter
                </Menu.Item>
                <Menu.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://github.com/JJAshcraft"
                >
                  GitHub
                </Menu.Item>
                <Menu.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://medium.com/@jjashcraft"
                >
                  Medium
                </Menu.Item>
                <Menu.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/jjashcraft/"
                >
                  LinkedIn
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a" href="#projects" onClick={this.handleSidebarHide}>
            Projects
          </Menu.Item>
          <Menu.Item
            as="a"
            href="#testimonials"
            onClick={this.handleSidebarHide}
          >
            Testimonials
          </Menu.Item>
          <Menu.Item as="a" href="#articles" onClick={this.handleSidebarHide}>
            Articles
          </Menu.Item>
          <Menu.Item
            as="a"
            rel="noreferrer noopener"
            target="_blank"
            href="https://twitter.com/ashcraft_jj"
            onClick={this.handleSidebarHide}
          >
            Twitter
          </Menu.Item>
          <Menu.Item
            as="a"
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/JJAshcraft"
            onClick={this.handleSidebarHide}
          >
            GitHub
          </Menu.Item>
          <Menu.Item
            as="a"
            rel="noreferrer noopener"
            target="_blank"
            href="https://medium.com/@jjashcraft"
            onClick={this.handleSidebarHide}
          >
            Medium
          </Menu.Item>
          <Menu.Item
            as="a"
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.linkedin.com/in/jjashcraft/"
            onClick={this.handleSidebarHide}
          >
            LinkedIn
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{
              minHeight: 350,
              padding: "1em 0em",
              background: "url('./wingsuitcover.jpg') no-repeat center",
              backgroundSize: "cover"
            }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const App = () => (
  <ResponsiveContainer>
    <Segment id="testimonials" style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              ”I would be more than happy to work with him again.”
            </Header>
            <p style={{ fontSize: "1.33em", fontStyle: "italic" }}>
              JJ was great to work with. He is extremely hard working and knew
              how to get the job done. Very skilled in Javascript and React,
              while also not afraid of jumping into new frameworks. His ability
              to plan and execute made for a very successful end product and I
              would be more than happy to work with him again.
            </p>
            <p>
              <Image
                avatar
                src="https://media.licdn.com/dms/image/C5603AQHbv4p99GWrBQ/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=gcPoK3vRla94z7s96PNr5MvHHAlE9m9URXAHcrWRgMA"
              />
              <b>Austin Merando</b> Software Engineer @ Nexient
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              ”His ability to effectively deliver in time sensitive and heavy
              workloads is impressive.”
            </Header>
            <p style={{ fontSize: "1.33em", fontStyle: "italic" }}>
              JJ is an outstanding software developer and a pleasure to work
              with. His front end design skills are phenomenal. He works really
              well in a team environment, demonstrating his leadership skills
              and consistent cordial demeanor. JJ never hesitated to
              successfully conquer new and challenging tasks that truly made the
              difference in implementing an excellent end product. His ability
              to effectively deliver in time sensitive and heavy workloads is
              impressive.
            </p>
            <p>
              <Image
                avatar
                src="https://media.licdn.com/dms/image/C5603AQGWX25Iw1GxPw/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=Gytj4YOVh5KG1gwscwkKK1KglUjg7F2kTCgx1lSOGlk"
              />
              <b>Tristan Linehan</b> Software Engineer
            </p>
          </Grid.Column>

          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              ” I am in freaking awe of the finished work and Josh as a
              teammate. I could legit never recommend him more highly.”
            </Header>
            <p style={{ fontSize: "1.33em", fontStyle: "italic" }}>
              JJ's integrity and openness in the creative process, and FULL
              commitment to his clients' happiness and confidence in the final
              design makes it so easy to recommend him, his work, and his
              outstanding customer service. I can't imagine his prices won't be
              going up, get in while you can.
            </p>
            <p>
              <Image
                avatar
                src="https://media.licdn.com/dms/image/C4E03AQH1mUXgz5ryVg/profile-displayphoto-shrink_100_100/0?e=1554940800&v=beta&t=dRhRTMddKoKfzcW7GKLr3T5UH_L1r7UCqWG8g46zPBw"
              />
              <b>Melanie Curtis</b> Life Coach, Speaker, Author, Professional
              Skydiver at MelanieCurtis.com / How To Fly, Inc.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment
      style={{ padding: "8em 0em", backgroundColor: "#dce2ea" }}
      vertical
    >
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Currently, my work involves helping businesses with the look, feel
              and function of their online presence.
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I have the ability to both design and develop for my clients,
              although I prefer to handle the development side. I've worked with
              some of the latest frameworks including React/Redux, and I'm
              constantly on the hunt for new learning opportunities. When I'm
              not designing and coding, you can find me on the dropzone coaching
              and mentoring new skydivers.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Problem-Solver, Mentor and Leader
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Many of us start off in life with a direction we think is best,
              hoping we will be the lucky ones who figure it out the first time
              around. I worked full-time in the healthcare industry as a
              Registered Nurse for almost ten years. It took quite a few years
              to realize that what I loved most about the healthcare industry is
              the problem-solving and algorithmic structure of the work. During
              this time, I also honed many valuable skills in teaching,
              mentoring and leadership. I learned how to learn and how to manage
              very difficult situations. It was these difficult situations that
              not only built my character, but led me to skydiving as an outlet.
              After making hundreds of skydives, it became clear to me that it
              was time to pursue a career passion and switch from Healthcare
              (and part-time freelance creative work) to full-time software
              development. I have also been doing freelance graphic design and
              web development for almost 10 years on a part-time basis. Last
              year I went through Hack Reactor prep, and ultimately decided to
              attend Lambda School to fully immersive myself in software
              engineering.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="./thumbs/muriels_ol.png"
            />

            <Image bordered rounded size="large" src="./thumbs/caliber.png" />
            <Image bordered rounded size="large" src="./thumbs/vsc_thumb.png" />
            <Image bordered rounded size="large" src="./thumbs/melcover.png" />
          </Grid.Column>
        </Grid.Row>

        <Header as="h2" style={{ fontSize: "4em", color: "#2ebf91" }}>
          Dev Projects
        </Header>

        <Grid.Row id="projects">
          <Grid.Column>
            <Card.Group itemsPerRow={3} centered stackable>
              {projects.map(project => {
                return <ProjectCard project={project} key={Math.random()} />;
              })}
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment id="articles" style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Image
          src="https://cdn-images-1.medium.com/max/1125/1*ZUhc3rXUs-pM0XbSHM9cEw.png"
          size="huge"
        />
        <Header as="h3" style={{ fontSize: "2em" }}>
          The Beginner’s Guide to Netlify Continuous Deployment from Github for
          React Apps
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          While this guide was written for students in Lambda School, it is
          applicable to anyone starting out who is confused about how to get
          continuous deployment up and running on Netlify. (Published on Hacker
          Noon)
        </p>
        <Button
          as="a"
          size="large"
          href="https://hackernoon.com/netlify-continuous-deployment-github-react-lambdaschool-67f3ae658d31"
          rel="noopener"
          target="_blank"
        >
          Read More
        </Button>
        <Divider />
        <Image
          src="https://cdn-images-1.medium.com/max/2600/0*oTSgiGHowsFbWepS."
          size="huge"
        />
        <Header as="h3" style={{ fontSize: "2em" }}>
          Learning Web Development in 2018? Go with Lambda School.
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          If you started as a self-taught developer 5+ years ago, you might
          think that just reading articles, watching youtube videos and building
          projects is all you need to get started. That might have been true
          before…but with the number of technology choices available today, many
          new self-taught developers are having the same problem: Analysis
          Paralysis.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://twitter.com/ashcraft_jj"
                >
                  Twitter
                </List.Item>
                <List.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://github.com/JJAshcraft"
                >
                  GitHub
                </List.Item>
                <List.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://medium.com/@jjashcraft"
                >
                  Medium
                </List.Item>
                <List.Item
                  as="a"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://www.linkedin.com/in/jjashcraft/"
                >
                  LinkedIn
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={10}>
              <Header as="h4" inverted />
              <p style={{ fontStyle: "italic", fontSize: "1.33em" }}>
                JJ Ashcraft is currently working as a freelance full-stack
                software engineer, photographer and graphic designer. He spends
                his free time skydiving, writing articles and traveling the
                world. JJ is available for freelance web development and
                business consulting opportunities.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default App;
