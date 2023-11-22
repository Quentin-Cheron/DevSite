import React from 'react';

import { Label } from "@/components/ui/Label";

import ComboBox from '../ComboBox';

const InputComboBox = ({ content, label, data, required, suplementClass, multipleChoice }) => {
    return (
        <div className={`sm:col-start-1 col-span-full ${suplementClass}`}>
            <Label htmlFor={label}>
                {content} {required ? "*" : null}
            </Label>
            <ComboBox data={
                {
                    allResponse: data.allResponse,
                    placeholder: data.placeholder,
                    label: data.job
                }
            } multipleChoice={multipleChoice} />
        </div>
    );
};

export default InputComboBox;