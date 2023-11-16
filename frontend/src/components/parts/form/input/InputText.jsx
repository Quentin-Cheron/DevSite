import React from 'react';

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const InputText = ({ content, label, type, required }) => {
    return (
        <div>
            <Label htmlFor={label}>
                {content} {required ? "*" : ""}
            </Label>
            <div className="mt-2">
                <Input
                    type={type}
                    name={label}
                    id={label}
                />
            </div>
        </div>
    );
};

export default InputText;