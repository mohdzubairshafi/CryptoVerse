import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  QuestionOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (screenSize < 768) {
      setActiveMenu(false);
    } else setActiveMenu(true);
  }, [screenSize]);

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const menuItem = [
    getItem(<Link to='/'>Home </Link>, "home", <HomeOutlined />),
    getItem(<Link to='/cryptocurrencies'>Cryptocurrencies </Link>, "cryptocurrencies", <FundOutlined />),
    getItem(<Link to='/exchanges'>Exchanges </Link>, "exchanges", <MoneyCollectOutlined />),
    getItem(<Link to='/news'>News </Link>, "news", <BulbOutlined />),
    getItem(<Link to='/about'>About </Link>, "about", <QuestionOutlined />),
  ];
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={logo} size='large' />
        <Typography.Title level={2} className='logo'>
          <Link to='/'>CryptoVerse</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && <Menu theme='dark' items={menuItem} />}
    </div>
  );
}
