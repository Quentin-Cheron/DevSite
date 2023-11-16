import React, { useState, useEffect } from 'react';

import ComboBox from '../../ComboBox';

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

const GetAllAdresse = ({ codePostal, city, required }) => {
    const [allAdresse, setAllAdresse] = useState([]);
    const [allResponseAdress, setAllResponseAdress] = useState([]);

    const [adresse, setAdresse] = useState("");

    const getAdress = async () => {
        await fetch(`https://api-adresse.data.gouv.fr/search/?q=${adresse.split(" ").join("+")}${codePostal != "" && `&postcode=${codePostal}`}&limit=10`)
            .then(res => res.json())
            .then(data => setAllAdresse(data));
    }

    useEffect(() => {
        if (adresse.split(" ").length > 2 && city !== "" && adresse.split(" ")[2] != "") {
            getAdress();
        }
    }, [adresse, codePostal])

    useEffect(() => {
        setAllResponseAdress([]);
    }, [codePostal])

    useEffect(() => {
        if (adresse.split(" ").length > 0 && allAdresse.features !== undefined) {
            const newAddresses = allAdresse.features
                .map((filteredElement) => filteredElement.properties.label);

            const filteredAddresses = newAddresses.filter((e) =>
                e.toLowerCase().startsWith(adresse.toLowerCase())
            );

            // Utilisez Set pour éviter les doublons
            const uniqueNewAddresses = Array.from(new Set([...filteredAddresses]));

            if (adresse === "") {
                setAllResponseAdress([]);
            } else {
                setAllResponseAdress(uniqueNewAddresses);
            }
        }
    }, [adresse]);

    return (
        <div className="sm:col-span-2 col-span-full">
            <HoverCard>
                <HoverCardTrigger>
                    <div>
                        <Label htmlFor="street-address">
                            Adresse {required ? "*" : ""}
                        </Label>
                        <div className={city === "" ? "cursor-not-allowed" : "" + " mt-2 grid gap-2"}>
                            <ComboBox data={
                                {
                                    allResponse: allResponseAdress,
                                    setAdresse: setAdresse,
                                    placeholder: "Entrez une adresse...",
                                    label: "street-address"
                                }
                            }
                                disabled={city === ""}
                            />
                        </div>
                    </div>
                </HoverCardTrigger>
                {
                    city === "" && (
                        <HoverCardContent>
                            Veuillez remplir les champs ci-dessus
                        </HoverCardContent>
                    )
                }
            </HoverCard>
        </div>
    );
};

export default GetAllAdresse;