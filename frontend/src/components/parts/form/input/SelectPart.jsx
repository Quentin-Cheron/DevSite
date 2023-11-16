import React from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/Label";

const SelectPart = ({ content, label, className, placeholder, onChange, selectLabel, data, required }) => {
    return (
        <div className={className}>
            <Label htmlFor={label}>
                {content} {required ? "*" : null}
            </Label>
            <div className="mt-2">
                <Select onValueChange={(e) => onChange(e)}>
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className="text-left">{data.length === 0 ? "Aucune donnée trouvé" : selectLabel}</SelectLabel>
                            {
                                data.map((e, i) => (
                                    <SelectItem value={e.nom} key={i}>{e.nom}</SelectItem>
                                ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default SelectPart;