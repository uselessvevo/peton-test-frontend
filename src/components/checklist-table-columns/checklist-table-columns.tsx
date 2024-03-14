import { Button, Checkbox, Typography } from "antd";
import { Checklist } from "../../models/models";

const getChecklistColumns = () => [
    {
        title: "Статус",
        key: "check",
        editable: false,
        width: "5vw",
        render: (checklsit: Checklist) => (
            <Checkbox/>
        )
    },
    {
        title: "Номер",
        key: "number",
        editable: false,
        render: (checklist: Checklist) => (
            <Typography.Text>{checklist.number}</Typography.Text>
        )
    },
    {
        title: "Проект",
        key: "project",
        editable: false,
        render: (checklist: Checklist) => (
            <Typography.Text>{checklist.title}</Typography.Text>
        )
    },
    {
        title: "Работа",
        key: "job",
        editable: false,
        render: (checklist: Checklist) => (
            <Typography.Text>{checklist.date?.toLocaleString("ru-RU") || "<Без даты>"}</Typography.Text>
        )
    }
];

export default getChecklistColumns;