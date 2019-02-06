import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ProjectCard = props => (
  <Card style={{ borderRadius: "0" }}>
    <Card.Content>
      <Image src={props.project.thumb} />
      <Card.Header style={{ paddingTop: "20px" }}>
        {props.project.title}
      </Card.Header>
      <Card.Description>{props.project.description}</Card.Description>
    </Card.Content>
    {props.project.frontend_repo ? (
      <Card.Content extra>
        <a href={props.project.frontend_repo}>
          <Icon className="github square icon" />
          Front-End Repo on GitHub
        </a>
      </Card.Content>
    ) : null}
    {props.project.backend_repo ? (
      <Card.Content extra>
        <a href={props.project.backend_repo}>
          <Icon className="github square icon" />
          Back-End Repo on GitHub
        </a>
      </Card.Content>
    ) : null}
    {props.project.link ? (
      <Card.Content extra>
        <a rel="noopener noreferrer" target="_blank" href={props.project.link}>
          <Icon className="linkify icon" />
          View Deployed Project
        </a>
      </Card.Content>
    ) : null}
  </Card>
);

export default ProjectCard;
