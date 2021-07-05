import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import FileSummary from '../Pages/FileSummary'
import NewPrescription from '../Pages/NewPrescription'
import MedicationHistory from '../Pages/MedicationHistory'
import Insurance from '../Pages/Insurance'
import CreateDispil from '../Pages/CreateDispil'
import PrescriptionTransfer from '../Pages/PrescriptionTransfer'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const LayoutWrapper = ({ children, selectedPatient }) => {
    const params = useParams();
    console.log('params', params)
    const [panel, setPanel] = useState(1)

    const handlePanel = (panel) => {
        console.log('panel', panel.key)
        setPanel(parseInt(panel.key))
    }
    return (
        <Layout>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Patients</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/new-file">New Patient File</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/drugs">Drugs</Link></Menu.Item>
                    <Menu.Item key="4"><Link to="/rx-vigilence">RX Vigilence</Link></Menu.Item>
                    <Menu.Item key="5"><Link to="/support">Support</Link></Menu.Item>
                    <Menu.Item key="6"><Link to="/settings">Settings</Link></Menu.Item>
                </Menu>
            </Header>
            <Layout>
                {
                    selectedPatient && (
                        <Sider width={200} className="site-layout-background">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={[panel.toString()]}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                                onClick={handlePanel}
                            >
                                <Menu.Item key="1">File Summary</Menu.Item>
                                <Menu.Item key="2">New Prescription</Menu.Item>
                                <Menu.Item key="3">Medication History</Menu.Item>
                                <Menu.Item key="4">Insurance</Menu.Item>
                                <Menu.Item key="5">Create Dispil</Menu.Item>
                                <Menu.Item key="6">Prescription Transfer</Menu.Item>
                                {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu> */}
                            </Menu>
                        </Sider>
                    )
                }
                <Layout style={{ padding: '0 24px 24px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: '20px 0 0 0',
                            // minHeight: 280,
                        }}
                    >
                        {children}
                    </Content>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: '20px 0 0 0',
                            minHeight: 280,
                        }}
                    >
                        {panel === 1 && selectedPatient && (<FileSummary />)}
                        {panel === 2 && selectedPatient && (<NewPrescription />)}
                        {panel === 3 && selectedPatient && (<MedicationHistory />)}
                        {panel === 4 && selectedPatient && (<Insurance />)}
                        {panel === 5 && selectedPatient && (<CreateDispil />)}
                        {panel === 6 && selectedPatient && (<PrescriptionTransfer />)}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayoutWrapper