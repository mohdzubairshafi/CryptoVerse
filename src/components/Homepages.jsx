import React from "react";

import millify from "millify";
import { Row, Col, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Cryptocurrencies from "./Cryptocurrencies";
import { Link } from "react-router-dom";
import News from "./News";
import Loader from "./Loader";
const { Title } = Typography;
function Homepages() {
  const { data, isFetching } = useGetCryptosQuery(10);
  if (isFetching) return <Loader />;
  const globalStats = data?.data?.stats;
  const { total, total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets } = globalStats;
  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title='Total Cryptocurrencies' value={total} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Exchange' value={millify(totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Market Cap' value={millify(totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total 24h Volume' value={millify(total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title='Total Markets' value={millify(totalMarkets)} />
        </Col>
      </Row>

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/cryptocurrencies'>show more</Link>{" "}
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className='home-heading-container'>
        <Title level={2} className='home-title'>
          Latest Crypto News
        </Title>
        <Title level={3} className='show-more'>
          <Link to='/news'>show more</Link>{" "}
        </Title>
      </div>
      <News simplified />
    </>
  );
}

export default Homepages;
