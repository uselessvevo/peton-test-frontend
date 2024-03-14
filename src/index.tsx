import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';
import AppContainer from './containers/app-container/app-container';

import { ConfigProvider } from 'antd';
import ruRU from "antd/locale/ru_RU";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider locale={ruRU}>
    <AppContainer />
  </ConfigProvider>
);
