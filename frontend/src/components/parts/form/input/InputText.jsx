import React from 'react';

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

const InputText = ({ content, label, type, required, className, onChange, onClick }) => {
    return (
        <div className={className}>
            <Label htmlFor={label}>
                {content} {required ? "*" : ""}
            </Label>
            <div className="mt-2">
                <Input
                    type={type}
                    name={label}
                    id={label}
                    onChange={(e) => onChange ? onChange(e.target.value) : null}
                    onClick={() => onClick ? onClick() : null}
                />
            </div>
        </div>
    );
};

export default InputText;