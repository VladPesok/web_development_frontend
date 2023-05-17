import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route, 
  Navigate,
} from 'react-router-dom';

import { Layout } from "antd";

import Header from "../comonents/common/header/Header";
import Footer from "../comonents/common/footer/Footer";
import Slider from "../comonents/common/slider/Slider";

import { createBrowserHistory} from 'history';

import Login from '../comonents/login/Login';
import Properties from '../comonents/properties/view/Properties';
import EditPropery from '../comonents/properties/edit/EditPropery';
import Users from '../comonents/users/Users';

const {Content} = Layout;


function Router() {
  const history = createBrowserHistory();

  const token = localStorage.getItem('token');

  return (
      <BrowserRouter history={history}>
       {token ? (
         <Layout style={{minHeight: '100vh'}}>
          <Slider/>
          <Layout className="site-layout">
            <Header/>
            <Content> 
              <Routes>
                <Route exact path="/" element={<Navigate to="/properties"/>}/>
                <Route exact path="/properties/property/:id?" name="EditProperty" element={<EditPropery/>}/>
                <Route exact path="/properties/*/property/:id?" name="EditProperty" element={<EditPropery/>}/>
                <Route exact path="/properties" name="Properties" element={<Properties/>}/>             
              </Routes>
            </Content>
            <Footer/>
          </Layout>
        </Layout>
       ) : (
        <Routes>  
          <Route exact path="/login" name="Login" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/login"/>}/>
        </Routes>
       )}
      </BrowserRouter>
  );
}

export default Router;
