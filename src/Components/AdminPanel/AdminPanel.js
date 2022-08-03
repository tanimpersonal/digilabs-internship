import React from "react";
import Admin from "../Admin/Admin";
import ContactView from "../ContactView/ContactView";
import GalleryAdmin from "../GalleryAdmin/GalleryAdmin";
import NoticeAdmin from "../NoticeAdmin/NoticeAdmin";

const AdminPanel = () => {
  return (
    <div>
      <NoticeAdmin></NoticeAdmin>
      <GalleryAdmin></GalleryAdmin>
      <Admin></Admin>
      <ContactView></ContactView>
    </div>
  );
};

export default AdminPanel;
