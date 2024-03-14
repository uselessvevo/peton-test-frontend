import { TableColumnProps } from "antd";
import { Checklist } from "../../models/models";

export interface ChecklistTableProps {
    checklists: Checklist[]
    columns: TableColumnProps<Checklist>[]
};