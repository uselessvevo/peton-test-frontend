import React from "react";
import { AlarmButtonProps } from "./types";
import { WarningOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const AlarmButton: React.FC<AlarmButtonProps> = (props: AlarmButtonProps) => (
    <Tooltip title="Предупреждения">
        <Button
            type="default"
            shape="circle"
            size="large"
            style={{backgroundColor: "#f1eeff", ...props.style || {}}}
        >
            <WarningOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>
        </Button>
    </Tooltip>
);

export default AlarmButton;