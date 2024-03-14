import React from "react";
import { AppCotnentProps } from "./types";
import DashboardContainer from "../dashboard-container/dashboard-container";
import { Route, Routes } from "react-router-dom";

const AppContent: React.FC<AppCotnentProps> = (props: AppCotnentProps) => (
    <Routes>
        <Route path="/dashboard" element={<DashboardContainer/>}/>
    </Routes>
);

export default AppContent;