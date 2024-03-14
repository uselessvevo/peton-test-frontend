import "./style.css";
import { CloseCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import React, {FC, useRef, useState} from "react";
import Draggable from "react-draggable";
import { DraggableModalProps } from "./types";

export const DraggableModal: FC<DraggableModalProps> = (props: DraggableModalProps) => {
  const [_, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const draggleRef = useRef<HTMLDivElement>(null);

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
    // props?.onOk();
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    setOpen(false);
    // props?.onCancel();
  };

  return (
    <>
      <Modal
        title={
          <div
            style={{
              width: "100%",
              cursor: "move"
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}
            onFocus={() => {}}
            onBlur={() => {}}
          >
            {props.title}
          </div>
        }
        closeIcon={<CloseCircleFilled onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/>}
        maskClosable={false}
        footer={props.footer}
        open={props.open}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{...props.okButtonProps, "size": "large"}}
        cancelButtonProps={{...props.cancelButtonProps, "size": "large"}}
        style={{
          // ...props.position || {},
          ...props.style || {},
        }}
        maskStyle={props.maskStyle}
        bodyStyle={props.bodyStyle || {}}
        width={props.width}
        destroyOnClose={props.destroyOnClose}
        modalRender={(modal) => (
          <Draggable
            onStop={(e: any, data: any) => {
              localStorage.setItem(props.objectId, JSON.stringify({ x: data.x, y: data.y }));
            }}
            // defaultPosition={JSON.parse(localStorage.getItem(props.objectId)) ||  {x: 0, y: 0}}
            disabled={disabled}
            nodeRef={draggleRef}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
        {...props.additionalProps}
      >
        {props.children}
      </Modal>
    </>
  );
};