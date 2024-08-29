import React from "react";
import {
  List,
  ListItem,
  Title,
  Content,
  TargetGroup,
} from "./AnnouncementsList.style";

const AnnouncementsList = ({ announcements }) => {
  return (
    <List>
      {announcements.map((announcement) => (
        <ListItem key={announcement.id}>
          <Title>{announcement.title}</Title>
          <Content>{announcement.content}</Content>
          <TargetGroup>Target Group: {announcement.targetGroup}</TargetGroup>
        </ListItem>
      ))}
    </List>
  );
};

export default AnnouncementsList;
