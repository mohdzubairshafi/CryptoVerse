import { Layout, Space } from "antd";
import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News, NotFound } from "./components";

import "./App.css";
import Typography from "antd/es/typography/Typography";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main'>
          <Layout style={{ minHeight: "100vh" }}>
            <div className='routes'>
              <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/exchanges' element={<Exchanges />} />
                <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
                <Route path='/crypto/:coinId' element={<CryptoDetails />} />
                <Route path='/news' element={<News />} />
                <Route path='/NotFound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={{ color: "white" }}>
              Cryptoverse <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='/exchanges'>Exchanges</Link>
              <Link to='/news'>News</Link>
              <Link to='/about'>About</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;

