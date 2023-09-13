import React from "react";
import { Input, Row, Col, Form } from "antd";

export const Login = ({children} : {children: JSX.Element}) =>{
    return(
    
        <Row    
        justify='center'
        align='middle'
        style={{
            height: '100vh'
        }}
        >
        <Col span={12}>
        <Form
            name='basic'
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            onFinish={()=>{}}
            >
            <Form.Item
            name='email'
            label='email'>
<Input />
            </Form.Item>
            <Form.Item
            name='password'
            label='password'>
                <Input.Password/>
            </Form.Item>
        <Form.Item>
            <Form.Item wrapperCol={{offset: 8, span:16}}>
                <Button type="primary" htmlType="submit">
                    SigIn
                </Button>
            </Form.Item>
        </Form.Item>

        
        </Form>



        </Col>



        </Row>
        )
}