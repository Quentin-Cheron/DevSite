import React, { useEffect, useState } from 'react';

import Navigation from '../../components/parts/Navigation';

import { UserCircleIcon } from '@heroicons/react/24/solid';

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Checkbox } from "@/components/ui/checkbox";
import GetAllAdresse from '../../components/parts/form/input/signup/GetAllAdresse';
import ComboBox from '../../components/parts/form/ComboBox';
import InputText from '../../components/parts/form/input/InputText';

import data from "../../data/form/Error";

const SignUp = () => {
    console.log(data)
    const [practicient, setPracticient] = useState(false);
    const [faceToFaceMeeting, setFaceToFaceMeeting] = useState(false);

    // get city

    const [allCity, setAllCity] = useState([]);

    const [codePostal, setCodePostal] = useState("");
    const [city, setCity] = useState("");

    //get image preview

    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    // hidden / showen adress list

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setSelectedImage(image);
        setPreviewImage(URL.createObjectURL(image));
    };

    useEffect(() => {
        codePostal === "" && (
            setCity("")
        )
    }, [codePostal])

    const callApiGeo = async () => {
        await fetch(`https://geo.api.gouv.fr/communes?codePostal=${codePostal}`)
            .then(res => res.json())
            .then(data => setAllCity(data));
    }

    useEffect(() => {
        callApiGeo();
    }, [codePostal])

    return (
        <div>
            <Navigation />
            <form className='m-5'>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Créer vous votre compte
                            </h2>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <InputText content="Prénom" label="firstname" type="text" required />
                            </div>

                            <div className="sm:col-span-1">
                                <InputText content="Nom" label="lastname" type="text" required />
                            </div>

                            <div className="sm:col-span-1">
                                <InputText content="Email" label="email" type="email" required />
                            </div>

                            <div className="flex col-span-full space-x-2">
                                <Checkbox id="practiceYou" onClick={() => setPracticient(!practicient)} />
                                <Label
                                    htmlFor="practiceYou"
                                >
                                    Êtes vous practicient ?
                                </Label>
                            </div>

                            <div className={practicient ? "grid grid-cols-1 sm:col-span-1 col-span-full gap-8" : "hidden"}>
                                <div className="flex col-span-full space-x-2">
                                    <Checkbox id="acceptVisio" />
                                    <Label
                                        htmlFor="acceptVisio"
                                    >
                                        Accepté vous les visioconférences ?
                                    </Label>
                                </div>

                                <div className="flex col-span-full items-center space-x-2">
                                    <Checkbox id="acceptMeet" onClick={() => setFaceToFaceMeeting(!faceToFaceMeeting)} />
                                    <Label
                                        htmlFor="acceptMeet"
                                    >
                                        Accepté vous les rendez-vous en présentiel ?
                                    </Label>
                                </div>

                                <div className="col-span-1">
                                    <InputText content="Numéro de téléphone" label="phoneNumber" type="tel" required />
                                </div>
                            </div>
                            <div className={faceToFaceMeeting ? "grid grid-cols-1 sm:grid-cols-3 col-span-full gap-8" : "hidden"}>
                                <div className="sm:col-span-1 col-span-full">
                                    <Label htmlFor="postal-code">
                                        Code postal *
                                    </Label>
                                    <div className="mt-2">
                                        <Input
                                            type="text"
                                            name="postal-code"
                                            id="postal-code"
                                            autoComplete="postal-code"
                                            onChange={(e) => setCodePostal(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-1 col-span-full">
                                    <Label htmlFor="city">
                                        Ville *
                                    </Label>
                                    <div className="mt-2">
                                        <Select onValueChange={(e) => setCity(e)}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Séléctionné une ville" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel className="text-left">{allCity.length === 0 ? "Code postal non valide" : "Ville trouvé"}</SelectLabel>
                                                    {
                                                        allCity.map((e, i) => (
                                                            <SelectItem value={e.nom} key={i}>{e.nom}</SelectItem>
                                                        ))
                                                    }
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <GetAllAdresse codePostal={codePostal} city={city} required={true} />
                                <div className='sm:col-start-1 sm:col-span-1 col-span-full'>
                                    <Label htmlFor="job">
                                        Profession *
                                    </Label>
                                    <ComboBox data={
                                        {
                                            allResponse: ["Hypnothérapie", "Emdr", "Nmo"],
                                            placeholder: "Entrer votre profession...",
                                            label: "job"
                                        }
                                    } multipleChoice />
                                </div>
                                <div className="sm:col-span-1 sm:col-start-1 col-span-full">
                                    <Label htmlFor="picture">
                                        Photo *
                                    </Label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        {
                                            selectedImage == null && (
                                                <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                            ) || (
                                                <Avatar>
                                                    <AvatarImage src={previewImage} alt="Votre photo de profil" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                            )
                                        }
                                        <Input type="file" id="picture" name="picture" onChange={(e) => handleImageChange(e)} />
                                    </div>
                                </div>
                                <div className="sm:col-span-2 sm:col-start-1">
                                    <Label htmlFor="description">
                                        Description *
                                    </Label>
                                    <div className="mt-2">
                                        <Textarea
                                            id="description"
                                            name="description"
                                            rows={5}
                                            defaultValue={''}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-gray-600">Écrivez plusieurs phrases sur vous.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;