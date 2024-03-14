import { TableColumnProps } from "antd";
import { Ticket } from "../../models/models";

export interface TicketsTableProps {
    tickets: Ticket[]
    columns: TableColumnProps<Ticket>[]
};