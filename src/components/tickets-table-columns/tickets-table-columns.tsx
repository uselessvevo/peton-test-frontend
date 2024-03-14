import { Button, Typography } from "antd";
import { Ticket } from "../../models/models";
import CreateChecklistButton from "../checklist-create-button/checklist-create-buttont";

const getTicketsColumns = () => [
    {
        title: "Шифр",
        key: "code",
        editable: false,
        render: (ticket: Ticket) => (
            <Typography.Text>{ticket.code}</Typography.Text>
        )
    },
    {
        title: "Проект",
        key: "project",
        editable: false,
        render: (ticket: Ticket) => (
            <Typography.Text>{ticket.project}</Typography.Text>
        )
    },
    {
        title: "Работа",
        key: "job",
        editable: false,
        render: (ticket: Ticket) => (
            <Typography.Text>{ticket.job}</Typography.Text>
        )
    },
    {
        title: "Чеклист",
        key: "checklist",
        editable: false,
        render: (ticket: Ticket) =>  (
                ticket.checklist == null 
                ? <CreateChecklistButton/>
                : <Typography.Text>{ticket.checklist.number}</Typography.Text>
            )
    },
    {
        title: "Статус",
        key: "status",
        editable: false,
        render: (ticket: Ticket) => (
            <Typography.Text>{ticket.status}</Typography.Text>
        )
    },
    {
        title: "Срок",
        key: "deadline",
        editable: false,
        render: (ticket: Ticket) => (
            <Typography.Text>{ticket.deadline.toLocaleString("ru-RU")}</Typography.Text>
        )
    }
];

export default getTicketsColumns;