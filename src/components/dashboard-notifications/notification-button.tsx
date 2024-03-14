import React from "react";
import { NotificationButtonProps } from "./types";
import { BellOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

const NotificationButton: React.FC<NotificationButtonProps> = (props: NotificationButtonProps) => (
    <Tooltip title="Предупреждения">
        <Button
            type="default"
            shape="circle"
            size="large"
            style={{backgroundColor: "#f1eeff", ...props.style || {}}}
        >
            <BellOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
        </Button>
    </Tooltip>
);

export default NotificationButton;