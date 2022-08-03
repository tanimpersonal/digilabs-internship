import React from "react";
import Admin from "../Admin/Admin";
import ContactView from "../ContactView/ContactView";
import NoticeAdmin from "../NoticeAdmin/NoticeAdmin";

const AdminPanel = () => {
  return (
    <div>
      <NoticeAdmin></NoticeAdmin>
      <Admin></Admin>
      <ContactView></ContactView>
    </div>
  );
};

export default AdminPanel;
