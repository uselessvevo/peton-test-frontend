import React, { useState } from "react";
import { ChecklistButtonProps } from "./types";
import { Button } from "antd";
import ChecklistModal from "../checklist-modal/checklist-modal";

const CreateChecklistButton: React.FC<ChecklistButtonProps> = (props: ChecklistButtonProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <Button onClick={() => setShowModal(!showModal)}>
            Создать
            <ChecklistModal showModal={showModal}/>
        </Button>
    );
};

export default CreateChecklistButton;