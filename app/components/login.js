import React, { Component, PropTypes } from 'react'
import { Form, Input, Button, Checkbox, Tooltip, Icon } from 'antd';
import 'antd/dist/antd.css';
import '../styles/slider/slider.scss'
const FormItem = Form.Item;

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.enterLoading = this.enterLoading.bind(this);
        this.enterIconLoading = this.enterIconLoading.bind(this);
        this.state = {
            loading: false
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    }

    enterLoading() {
        this.setState({ loading: true });
    }
    enterIconLoading() {
        this.setState({ iconLoading: true });
    }
    render() {
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const formStyle = {
            marginBottom: 15
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    style={formStyle}
                    {...formItemLayout}
                    label="用户名：">
                    <Input type="text" {...getFieldProps('username')} placeholder="请输入密码" />
                </FormItem>
                <FormItem
                    style={formStyle}
                    {...formItemLayout}
                    label="密码：">
                    <Input type="password" {...getFieldProps('pass')} placeholder="请输入密码" />
                </FormItem>
                <FormItem
                    style={formStyle}
                    wrapperCol={{ span: 16, offset: 6 }}>
                    <Checkbox {...getFieldProps('agreement')}>我已阅读并接受</Checkbox><span>《WIFI使用条款》<Tooltip title="..."><Icon type="question-circle-o" /></Tooltip></span>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24,marginBottom: 10 }}>
                    <Button type="primary" htmlType="submit" loading={this.state.loading} onClick={this.enterLoading}>登录</Button>
                </FormItem>
                <FormItem wrapperCol={{ span: 16, offset: 6 }}>
                    <Button type="primary" htmlType="submit">
                        <Icon type="retweet" />微信连WIFI
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(Login);