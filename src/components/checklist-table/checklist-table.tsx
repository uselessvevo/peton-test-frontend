import React from "react";
import { ChecklistTableProps } from "./types";
import { Table } from "antd";

const ChecklistTable: React.FC<ChecklistTableProps> = (props: ChecklistTableProps) => {
    return (
        <Table
            bordered
            size="small"
            showSorterTooltip={false}
            pagination={false}
            scroll={{ y: 750, x: true }}
            dataSource={props.checklists}
            columns={props.columns}
        />
    );
};

export default ChecklistTable;