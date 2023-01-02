import React from "react";

import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { Card } from "antd";
export default function NotFound() {
  return (
    <div className='hero'>
      <Card
        bordered={false}
        style={{
          width: "100%",
          height: "80vh",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <h1>Oops!...</h1>
          <p>404 - Page Not Found! </p>
          <Link to='/'>
            <HomeOutlined /> Back To Home
          </Link>
        </div>
      </Card>
    </div>
  );
}
