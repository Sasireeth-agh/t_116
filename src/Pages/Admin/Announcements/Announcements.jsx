import React, { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import AnnouncementForm from "../../../components/admin/Announcements/AnnouncementForm/AnnouncementForm";
import AnnouncementsList from "../../../components/admin/Announcements/AnnouncementsList/AnnouncementsList";
import {
  fetchAnnouncements,
  createAnnouncement,
} from "../../../components/services/api";
import {
  AnnouncementsContainer,
  Title,
  LoaderContainer,
} from "./Announcements.style";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAnnouncements().then((data) => {
      setAnnouncements(data);
      setIsLoading(false);
    });
  }, []);

  const handleCreateAnnouncement = async (announcement) => {
    const newAnnouncement = await createAnnouncement(announcement);
    setAnnouncements([...announcements, newAnnouncement]);
  };

  return (
    <AnnouncementsContainer>
      <Title>Announcements</Title>
      <AnnouncementForm onSubmit={handleCreateAnnouncement} />
      {isLoading ? (
        <LoaderContainer>
          <ThreeDots color="#007bff" height={80} width={80} />
        </LoaderContainer>
      ) : (
        <AnnouncementsList announcements={announcements} />
      )}
    </AnnouncementsContainer>
  );
};

export default Announcements;
