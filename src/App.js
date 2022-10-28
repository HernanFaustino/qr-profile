import { Row, Col, Divider, Image, Typography, Avatar } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const { Title } = Typography;

const socialNetworks = [
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/General-Consultic-101550805714481',
    image: 'facebook.png',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/general_consultic/',
    image: 'instagram.png',
  },
  {
    name: 'Whatsapp',
    link: `https://wa.me/+51933640145?text=Hola, deseo información por favor. 🙂`,
    image: 'whatsapp.png',
  },
  {
    name: 'Tik Tok',
    link: 'https://www.tiktok.com/@generalconsultic',
    image: 'tiktok.png',
  },
];

function App() {
  return (
    <div style={{ paddingTop: 20, backgroundColor: '#f1f1f1' }}>
      <Row justify="center" style={{ }}>
      <Title>Hola!!</Title>
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Title>Somos</Title>
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Avatar src="logo_empresa.png" size={250} />
      </Row>
      <Row justify="center" style={{ marginBottom: 20 }}>
        <Title>Te invitamos a seguirnos por nuestra redes sociales</Title>
      </Row>
      <Row justify="center">
        {socialNetworks.map((item) => (
          <Col xs={{ span: 12 }} lg={{ span: 4, offset: 2 }} style={{ marginBottom: 30 }}>
            <Row justify="center" >
              <a href={item.link} target="_blank">
                <Image preview={false} width={100} src={item.image} />
              </a>
            </Row>
          </Col>
        ))}
      </Row>
      ,
    </div>
  );
}

export default App;
