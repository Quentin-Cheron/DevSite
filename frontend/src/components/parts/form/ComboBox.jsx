import React, { useEffect, useState } from 'react';

import { Check, ChevronDownCircle, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const ComboBox = ({ data, disabled, multipleChoice }) => {
    const [open, setOpen] = React.useState(false);
    const [responseChoice, setResponseChoice] = useState([]);

    const handleRemoveChoice = (index) => {
        const updateChoice = [...responseChoice];
        updateChoice.splice(index, 1);
        setResponseChoice(updateChoice);
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    disabled={disabled}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    id={data.label}
                    className="w-full justify-between w-[642px] h-[3rem]"
                >
                    {
                        responseChoice.length > 0
                            ? <ul className={(multipleChoice ? "justify-start flex gap-2 w-full overflow-x-scroll scrollsm pb-[5px]" : "") + " capitalize"}>
                                {responseChoice.map((e, i) =>
                                    <li onClick={(e) => {
                                        handleRemoveChoice(i);
                                        e.stopPropagation();
                                    }} className={(multipleChoice ? "px-3 py-1 border rounded-full hover:bg-slate-200" : "") + " gap-1 text-xs flex items-center"} key={i}>
                                        {e} <X className='w-3 h-3' /></li>)
                                }
                            </ul>
                            : data.placeholder
                    }
                    {
                        open ? <ChevronDownCircle className="ml-2 h-4 w-4 shrink-0 opacity-50 rotate-180 transition-all" />
                            : <ChevronDownCircle className="ml-2 h-4 w-4 shrink-0 opacity-50 transition-all" />
                    }
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[500px] absolute right-[-11.2rem]" onChange={(e) => data.setAdresse ? data.setAdresse(e.target.value) : ""}>
                <Command>
                    <CommandInput searchIcon={true} />
                    <CommandEmpty>Aucune adresse trouvé.</CommandEmpty>
                    <CommandGroup className="overflow-y-scroll scrollsm h-max max-h-[135px]">
                        {
                            data.allResponse.map((data) => (
                                <CommandItem
                                    key={data}
                                    value={data}
                                    style={{ cursor: "pointer" }}
                                    onSelect={(currentValue) => {
                                        setOpen(false);
                                        (!responseChoice.includes(currentValue)) && (
                                            multipleChoice ?
                                                setResponseChoice((prevData) => [...prevData, currentValue])
                                                : setResponseChoice(() => [currentValue])
                                        )
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            responseChoice.includes(data.toLowerCase()) ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {data}
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default ComboBox;