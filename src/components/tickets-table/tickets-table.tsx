import React from "react";
import { TicketsTableProps } from "./types";
import { Table } from "antd";

const TicketsTable: React.FC<TicketsTableProps> = (props: TicketsTableProps) => {
    return (
        <Table
            bordered
            size="small"
            showSorterTooltip={false}
            pagination={false}
            scroll={{ y: 750, x: true }}
            dataSource={props.tickets}
            columns={props.columns}
        />
    );
};

export default TicketsTable;