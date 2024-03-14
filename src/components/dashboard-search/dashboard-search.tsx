import React from "react";
import { SearchBarProps } from "./types";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => (
    <Input
        allowClear
        type="text"
        placeholder="Поиск"
        suffix={<SearchOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
        style={{borderRadius: 45, height: "5vh", backgroundColor: "#f1eeff", ...props.style || {}}}
    />
);

export default SearchBar;