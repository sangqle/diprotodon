import React from "react";

import dayjs from "dayjs";

import { Layout, Menu, Row, Col, Typography } from "antd";

import "./Dashboard.css";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const Today: string = dayjs(Date.now()).format("DD/MM/YYYY");
const User: any = {
  name: "Trần Minh Tài",
  id: "068512",
  department: "IT",
  used_date_off: 0,
  rest_date_off: 5,
};

const Dashboard = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item>Trang chủ</Menu.Item>
          <Menu.Item>Hành chính</Menu.Item>
          <Menu.Item>Nhân sự</Menu.Item>
          <Menu.Item>Thu mua</Menu.Item>
          <Menu.Item>Đào tạo</Menu.Item>
          <Menu.Item>Profile</Menu.Item>
          <Menu.Item>Thông báo (2)</Menu.Item>
          <Menu.Item>Ngôn ngữ (vn)</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Row className="main-content">
          <Col span={6} push={18}>
            Bên trái
          </Col>
          <Col span={18} pull={6}>
            <Layout className="welcome">
              <Title level={3}>{`${Today},`}</Title>
              <Title level={3}>
                Hi, <b>{User.name}</b>
              </Title>
              <Title level={4}>
                Mã nhân viên: <b>{User.id}</b>
                Phòng ban: <b>{User.department}</b>
              </Title>
            </Layout>
            <Layout className="off-date">
              <Title level={5} keyboard>
                Số ngày phép đã dùng: {User.used_date_off}
              </Title>
              <Title level={5} keyboard>
                Số ngày phép còn lại: {User.rest_date_off}
              </Title>
            </Layout>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default Dashboard;
