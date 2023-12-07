import "./privatepage.css";
import { Routes, Route } from "react-router-dom";

// Components
import { NavbarPanel } from "@/components/NabarPanel/NavbarPanel";
import { SettingsPage } from "./SettingsPage/SettingsPage";
import { DashboardPage } from "./DashboradPage/DashboardPage";
import { NewMessagePage } from "./NewMessagePage/NewMessagePage";
import { ListMessagePage } from "./ListMessagePage/ListMessagePage";

function PrivatePage() {
  return (
    <div className="privatePage">

      <NavbarPanel />
      
      <div className="privatePageContent">
        <Routes>
          <Route path="" element={<DashboardPage />} />
          <Route path="new-message" element={<NewMessagePage />} />
          <Route path="messages" element={<ListMessagePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </div>
    
    </div>
    
  )
}

export default PrivatePage