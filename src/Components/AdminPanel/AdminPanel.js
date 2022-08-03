import React from "react";
import Admin from "../Admin/Admin";
import ContactView from "../ContactView/ContactView";
import GalleryAdmin from "../GalleryAdmin/GalleryAdmin";
import NoticeAdmin from "../NoticeAdmin/NoticeAdmin";

const AdminPanel = () => {
  return (
    <div className="w-[90%] mx-auto">
      <NoticeAdmin></NoticeAdmin>
      <GalleryAdmin></GalleryAdmin>
      <Admin></Admin>
      <ContactView></ContactView>
    </div>
  );
};

export default AdminPanel;
