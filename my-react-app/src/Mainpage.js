import {
  Layout,
  Button,
  Typography,
  Row,
  Col,
  Space,
  ConfigProvider,
  theme,
  Card,
  Dropdown,
} from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function AppHeader() {
  const menuItems = [
    { key: "1", label: "Option 1" },
    { key: "2", label: "Option 2" },
    { key: "3", label: "Option 3" },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0f0f0f",
          colorTextBase: "#ffffff",
          borderRadius: 12,
          headerHeight: 60,
        },
      }}
    >
      <Layout>
        <Header
          style={{
            backgroundColor: "transparent",
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            bordered={false}
            style={{
           
              borderRadius: 20,
              width: 540,
              
              boxShadow: "0 0 20px rgba(255,255,255,0.05)",
            }}
          >
            <Space size="small">
              <Button type="text">About</Button>
              <Button type="text">Experience</Button>
              <Button type="text">Projects</Button>
              <Button type="text">Contact</Button>
              <Button type="text">Resume</Button>
              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Button
                  icon={<EllipsisOutlined />}
                  shape="circle"
                  
                  
                />
              </Dropdown>
            </Space>
          </Card>
        </Header>

        <Content
          style={{
            backgroundColor: "#0f0f0f",
            textAlign: "center",
            padding: "40px 0",
          }}
        >
          <h1>This is my new project</h1>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
