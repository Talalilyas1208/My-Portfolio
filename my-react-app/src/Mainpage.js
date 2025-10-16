import { Layout, Button, Typography, Row, Col, Space, ConfigProvider, theme ,Card} from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0f0f0f",
          colorTextBase: "#ffffff",
          borderRadius: 8,
        },
      }}
    >
      <Layout >
      
        <Header
        
        >
          <Row justify="space-between" align="middle" style={{backgroundColor :"#0f0f0f"}}>
            <Col lg={16}>
              <Title level={4} style={{ color: "#fff", margin: 0 }}>
                Frontend Developer
              </Title>
            </Col>
            <Col lg={8}> <Card  variant="borderless" style={{ width: 600 ,padding:"1px" }}>
              <Space>
                <Button type="text" >
                  About Me
                </Button>
                <Button type="text" >
                  Experience
                </Button>
                <Button type="text">
                  Projects
                </Button>
                <Button type="text">
                  Contact Me
                </Button>
                <Button >Download CV</Button>
              </Space>
              </Card>
            </Col>
          </Row>
        </Header>

        <Content
          style={{
            backgroundColor: "#0f0f0f",
          
          }}
        >
          <h1>This is my new project</h1>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
