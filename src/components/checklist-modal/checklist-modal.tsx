import React from "react";
import { ChecklistModalProps } from "./types";
import { Col, Input, Modal, Row } from "antd";
import { DraggableModal } from "../draggable-modal/draggable-modal";

const ChecklistModal: React.FC<ChecklistModalProps> = (props: ChecklistModalProps) => {
    return (
        <DraggableModal
            objectId="checklist-dm"
            title="СОЗДАНИЕ ЧЕКЛИСТА"
            open={props.showModal}
            width={900}
            bodyStyle={{height: "53vh"}}
            destroyOnClose={true}
            // onOk={acceptButtonClickHandler}
            // onCancel={cancelButtonClickHandler}
        >
            <Row gutter={[24, 16]}>
                <Col span={12}>
                    <Input size="large" placeholder="Номер"/>
                </Col>
                <Col span={12}>
                    <Input size="large" placeholder="Заголовок"/>
                </Col>
            </Row>
        </DraggableModal>
    );
};

export default ChecklistModal;