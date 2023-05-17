import React, { useContext } from "react";
import { Form, Button, Card, Input, Row, Col, notification } from 'antd'
import './EditProperty.scss';

const EditPropery = () => {
    return(
        <Form>
            <Card className="edit-properties-card">
                <Row gutter={12}>
                    <Col span={24}>
                        <Form.Item label="Name" name="name">
                            <Input/>
                        </Form.Item>
                    </Col> 
                    <Col span={12}>
                        <Form.Item label="Type" name="type">
                            <Input/>
                        </Form.Item>
                    </Col> 
                    <Col span={12}>
                        <Form.Item label="Status" name="status">
                            <Input/>
                        </Form.Item>
                    </Col> 
                </Row>
            </Card>
        </Form>   
    )
}

export default EditPropery;