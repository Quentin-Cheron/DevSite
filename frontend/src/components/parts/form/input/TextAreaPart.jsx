import React from 'react';

import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/textarea";

const TextAreaPart = ({ content, desc, label, className, required }) => {
    return (
        <div className={className}>
            <Label htmlFor={label}>
                {content} {required ? "*" : null}
            </Label>
            <div className="mt-2">
                <Textarea
                    id={label}
                    name={label}
                    rows={5}
                    defaultValue={''}
                />
            </div>
            <p className="mt-3 text-sm leading-6 text-gray-600">{desc}</p>
        </div>
    );
};

export default TextAreaPart;