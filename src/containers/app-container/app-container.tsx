import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppContainerProps } from "./types";
import AppContent from "./app-content";

const AppContainer: React.FC<AppContainerProps> = (props: AppContainerProps) => {
    return (
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    );
};

export default AppContainer;