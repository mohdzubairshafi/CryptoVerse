import { GithubOutlined } from "@ant-design/icons";
import { HomeOutlined } from "@ant-design/icons/lib/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "antd";

export default function About() {
  return (
    <div>
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
        <div className=' about'>
          <h1>About this APP...</h1>
          <p>
            this is a <em>CryptoVerse </em> React App. where Your can get all information about Cryptos.
          </p>
          <p>
            design by
            <a href='https://github.com/mohdzubairshafi' target='_blank' rel='noopener noreferrer'>
              <em> Mohd Zubair </em>
            </a>
            using Ant Design ,React, Redux, Chartjs.
          </p>

          <div className='link'>
            <Link to='/' className='btn btn-primary btn-sm'>
              <HomeOutlined />
              &nbsp; Back To Home
            </Link>
            <a href='https://github.com/mohdzubairshafi' target='_blank' rel='noopener noreferrer'>
              <GithubOutlined />
              &nbsp; GitHub Profile -<em> Mohd Zubair </em>
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
}
