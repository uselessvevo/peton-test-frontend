import "./style.css";
import React from "react";
import { Divider, Layout, Menu, Tabs, theme } from "antd";
import { DashboardProps } from "./types";
import SearchBar from "../../components/dashboard-search/dashboard-search";
import AlarmButton from "../../components/dashboard-alarms/alarm-button";
import NotificationButton from "../../components/dashboard-notifications/notification-button";
import UserPanel from "../../components/user-panel/user-panel-buttont";
import Sider from "antd/es/layout/Sider";
import { Checklist, Ticket } from "../../models/models";
import TicketsTable from "../../components/tickets-table/tickets-table";
import getTicketsColumns from "../../components/tickets-table-columns/tickets-table-columns";
import ChecklistTable from "../../components/checklist-table/checklist-table";
import getChecklistColumns from "../../components/checklist-table-columns/checklist-table-columns";
import { AppstoreOutlined, BarChartOutlined, EditOutlined } from "@ant-design/icons";

const DashboardContainer: React.FC<DashboardProps> = (props: DashboardProps) => {
    const ticketsColumns = getTicketsColumns()
    const fakeTickets: Ticket[] = [
        {id: 1, project: "НЗНП", code: "КПАБ 1153-311-310-03.1 КЖ", checklist: {id: 1, title: "Заголовок №1", number: "11-12"}, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 2, project: "НЗНП", code: "КПАБ 1153-311-310-03.2 КЖ", checklist: {id: 1, title: "Заголовок №2", number: "11-13"}, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 3, project: "НЗНП", code: "КПАБ 1153-311-310-03.3 КЖ", checklist: {id: 1, title: "Заголовок №3", number: "11-14"}, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 4, project: "НЗНП", code: "КПАБ 1153-311-310-03.4 КЖ", checklist: {id: 1, title: "Заголовок №4", number: "11-15"}, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 5, project: "НЗНП", code: "КПАБ 1153-311-310-03.5 КЖ", checklist: {id: 1, title: "Заголовок №5", number: "11-16"}, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 6, project: "НЗНП", code: "КПАБ 1153-311-310-03.6 КЖ", checklist: null, deadline: new Date(), job: "Бетон", status: "В работе"},
        {id: 7, project: "НЗНП", code: "КПАБ 1153-311-310-03.7 КЖ", checklist: {id: 1, title: "Заголовок №7", number: "11-18"}, deadline: new Date(), job: "Бетон", status: "В работе"},
    ];

    const checklistColumns = getChecklistColumns()
    const fakeChecklists: Checklist[] = [
        {id: 1, number: "11-11", title: "Установка свай", date: new Date()},
        {id: 1, number: "11-12", title: "Подготовка фундамента", date: new Date()},
        {id: 1, number: "11-13", title: "Подведение газпровода", date: new Date()},
    ]

    const hItems = [
        {key: "1", label: "КСГ", children: 
            <TicketsTable 
                tickets={fakeTickets}
                columns={ticketsColumns}
            />    
        },
        {key: "2", label: "Чеклист", children: 
            <ChecklistTable 
                checklists={fakeChecklists} 
                columns={checklistColumns}
            />
        },
        {key: "3", label: "Мероприятия", children: []}
    ];

    const vItems = [
        {key: "1", label: "Главная", icon: <AppstoreOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>},
        {key: "2", label: "Отчёты", icon: <BarChartOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>},
        {key: "3", label: "Настройки", icon: <EditOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        // Uh oh...
        <Layout hasSider style={{background: colorBgContainer}}>
            {/* Side menu */}

            <Sider style={{ background: "#f1eeff", overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
                <div className="dashboard-logo-horizontal"/>
                <Menu mode="inline" items={vItems} style={{background: "#f1eeff"}}/>
            </Sider>

            {/* Horizontal menu & content */}

            <Layout style={{ marginLeft: "15vw", background: colorBgContainer }}>
                {/* <Header style={{ margin: 0, background: colorBgContainer }} /> */}
                <Layout.Header style={{
                    backgroundColor: colorBgContainer,
                    marginTop: "5vh",
                }}>
                    <SearchBar style={{width: "30vw", float: "left"}}/>
                    <div>
                        <UserPanel style={{float: "right", marginLeft: "3vw"}}/>
                        <NotificationButton style={{float: "right", marginRight: "1vw"}}/>
                        <AlarmButton style={{float: "right", marginRight: "1vw"}}/>
                    </div>
                </Layout.Header>
                <Divider/>
                <h1>МОИ ПРОЕКТЫ</h1>
                <Tabs items={hItems} />
            </Layout>

        </Layout>
    );
};

export default DashboardContainer;