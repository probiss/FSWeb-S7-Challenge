import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </BrowserRouter>
);
