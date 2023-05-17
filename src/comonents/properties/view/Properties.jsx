import React, { useState, useEffect } from "react";
import { Form, Button, Card, Input, Row, Col, Table } from 'antd';
import { getProperties } from './PropertiesService';
import './Properties.scss';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Arice',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  
const Properties = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getProperties().then(setItems);
  }, [])


  return(
    <Card className="properties-card">
      <Table columns={columns} dataSource={items} />
  </Card>
  )     
}

export default Properties;