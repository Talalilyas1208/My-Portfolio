import {
  Layout,
  Button,
  Typography,
  Space,
  ConfigProvider,
  theme,
  Card,
  Dropdown,
  Avatar,
} from "antd";

import {
  EllipsisOutlined,
  GithubOutlined,
  BehanceOutlined,
  MailOutlined,
} from "@ant-design/icons";
import profile from "./assets/profile.jpg"
const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function AppHeader() {
  const menuItems = [
    {
      key: "1",
      label: (
        <a
          href="https://github.com/Talalilyas1208"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubOutlined /> GitHub
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="#" target="_blank" rel="noopener noreferrer">
          <BehanceOutlined /> Behance
        </a>
      ),
    },
  ];

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorBgBase: "#0f0f0f",
          colorTextBase: "#ffffff",
          borderRadius: 12,
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", background: "#0f0f0f" }}>
        {/* HEADER */}
        <Header
          style={{
            backgroundColor: "transparent",
            height: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            bordered={false}
            style={{
              borderRadius: 20,
              width: 560,
              boxShadow: "0 0 20px rgba(255,255,255,0.05)",
              textAlign: "center",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            <Space size="small">
              <Button type="text">About</Button>
              <Button type="text">Blog</Button>
              <Button type="text">Projects</Button>
              <Button type="text">Resume</Button>

              <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
                <Button icon={<EllipsisOutlined />} shape="circle" />
              </Dropdown>
            </Space>
          </Card>
        </Header>

        {/* CONTENT */}
        <Content
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          {/* 🖼️ Profile Picture from public folder */}
          <Avatar
            src={profile}
            size={120}
            style={{
              marginBottom: 24,
              boxShadow: "0 0 25px rgba(255,255,255,0.1)",
            }}
          />

          <Title level={2} style={{ color: "#fff", marginBottom: 12 }}>
            Hi I’m <span style={{ color: "#b0b0b0" }}>Talal</span>, Product Designer and Developer
          </Title>

          <Paragraph style={{ color: "#aaa", maxWidth: 600 }}>
            I am a freelance developer and designer working remotely. I create{" "}
            <strong>useful applications</strong> for the web. In my spare time, I
            enjoy cooking, reading comics, and travelling.
          </Paragraph>

          {/* 🔗 GitHub Button */}
          <Space size="middle" style={{ marginTop: 20 }}>
            <Button
              type="primary"
              shape="round"
              icon={<MailOutlined />}
              size="large"
              style={{
                background: "#ffffff",
                color: "#000",
                border: "none",
              }}
            >
              Get in touch
            </Button>

            <Button
              type="default"
              shape="round"
              icon={<GithubOutlined />}
              size="large"
              href="https://github.com/Talalilyas1208"
              target="_blank"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "none",
              }}
            >
              GitHub
            </Button>
          </Space>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
