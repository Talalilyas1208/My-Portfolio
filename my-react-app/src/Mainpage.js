import { Layout, Button, Typography, Row, Col, Space, Card, Input } from "antd";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  return (
    <Layout>
      <Header>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={4} style={{ color: "inherit", margin: 0 }}>
              Frontend devloper
            </Title>
          </Col>
          <Col>
            <Space>
              <Button type="text">About me</Button>
              <Button type="text">Experience</Button>
              <Button type="text">Project</Button>
              <Button type="text">contact me</Button>
              <Button>Download Cv</Button>
            </Space>
          </Col>
        </Row>
      </Header>

      <Content>
        <Space
          direction="vertical"
          style={{ width: "100%", padding: 24 }}
        ></Space>
      </Content>
    </Layout>
  );
}
