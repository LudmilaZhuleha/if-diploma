import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './index.css';
import App from './components/App/App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Provider} from 'react-redux';
import {store, persistor} from "./store";
import BooksPage from "./components/BooksPage/BooksPage";
import Book from "./components/Book/Book";
import { PersistGate } from 'redux-persist/integration/react';
import SettingsPage from "./components/SettingsPage/SettingsPage";
import OrdersPage from "./components/OrdersPage/OrdersPage";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />}/>
            <Route path="/books" element={<BooksPage />} />
            <Route path="/" element={<Layout />}>
              <Route path="/:id" element={<Book />}/>
            </Route>
            <Route path="/books/settings" element={<SettingsPage />} />
            <Route path="/orders/settings" element={<SettingsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
