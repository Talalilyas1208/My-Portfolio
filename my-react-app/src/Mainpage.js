import { Layout, Button, Typography, Row, Col, Space } from "antd";

const { Header } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  return (
    <Header>
      <Row justify="space-between" align="middle">
    
        <Col>
          <Title level={4} style={{ color: "inherit", margin: 0 }}>
        Frontend devloper   
          </Title>
        </Col>
        <Col>
          <Space>
            <Button  type="text">About me</Button>
             <Button  type="text">Experience</Button>
              <Button  type="text">Project</Button>
               <Button  type="text">contact me</Button>
            <Button  type="text">Sign Up</Button>
          </Space>
        </Col>
      </Row>
    </Header>
  );
}
