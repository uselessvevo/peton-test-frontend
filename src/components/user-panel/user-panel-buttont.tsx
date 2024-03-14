import React from "react";
import { UserPanelProps } from "./types";
import { Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserPanel: React.FC<UserPanelProps> = (props: UserPanelProps) => (
    <Button
        size="large"
        style={{borderRadius: 45, height: "5vh", backgroundColor: "#f1eeff", ...props.style || {}}}
    >
        <UserOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>
        Ранис Давлетшин
    </Button>
);

export default UserPanel;