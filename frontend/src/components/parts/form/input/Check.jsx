import React from 'react';

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Check = ({ content, label, onClick, className, data }) => {
    return (
        <div className={className}>
            <Checkbox id={label} onClick={() => onClick ? onClick(!data) : null} />
            <Label
                htmlFor={label}
            >
                {content}
            </Label>
        </div>
    );
};

export default Check;