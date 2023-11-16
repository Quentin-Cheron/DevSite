import React from 'react';

import { Label } from "@/components/ui/Label";

import ComboBox from '../ComboBox';

const InputComboBox = ({ content, label, data, required }) => {
    return (
        <div className='sm:col-start-1 sm:col-span-2 col-span-full'>
            <Label htmlFor={label}>
                {content} {required ? "*" : null}
            </Label>
            <ComboBox data={
                {
                    allResponse: data.allResponse,
                    placeholder: data.placeholder,
                    label: data.job
                }
            } multipleChoice />
        </div>
    );
};

export default InputComboBox;