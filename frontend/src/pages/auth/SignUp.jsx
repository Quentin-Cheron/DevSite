import React, { useEffect, useState } from 'react';

import Navigation from '../../components/parts/Navigation';

import GetAllAdresse from '../../components/parts/form/input/signup/GetAllAdresse';
import InputText from '../../components/parts/form/input/InputText';
import Check from "../../components/parts/form/input/Check";

import data from "../../data/form/Error";
import SelectPart from '../../components/parts/form/input/SelectPart';
import TextAreaPart from '../../components/parts/form/input/TextAreaPart';
import Picture from '../../components/parts/form/input/Picture';
import InputComboBox from '../../components/parts/form/input/InputComboBox';

const SignUp = () => {
    const [practicient, setPracticient] = useState(false);
    const [faceToFaceMeeting, setFaceToFaceMeeting] = useState(false);

    // get city

    const [allCity, setAllCity] = useState([]);

    const [codePostal, setCodePostal] = useState("");
    const [city, setCity] = useState("");

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
                            <InputText content="Prénom" label="firstname" type="text" className="sm:col-span-1" required />
                            <InputText content="Nom" label="lastname" type="text" className="sm:col-span-1" required />
                            <InputText content="Email" label="email" type="email" className="sm:col-span-1" required />
                            <Check content="Êtes vous practicient ?" label="practiceYou" onClick={setPracticient} data={practicient} className="flex col-span-full space-x-2" />

                            <div className={practicient ? "grid grid-cols-1 sm:col-span-1 col-span-full gap-8" : "hidden"}>
                                <Check content="Accepté vous les visioconférences ?" label="acceptVisio" className="flex col-span-full space-x-2" />
                                <Check content="Accepté vous les rendez-vous en présentiel ?" label="acceptMeet" className="flex col-span-full items-center space-x-2" onClick={setFaceToFaceMeeting} data={faceToFaceMeeting} />
                                <InputText content="Numéro de téléphone" label="phoneNumber" type="tel" className="col-span-1" required />
                            </div>
                            <div className={faceToFaceMeeting ? "grid grid-cols-1 sm:grid-cols-3 col-span-full gap-8" : "hidden"}>
                                <InputText content="Code postal" label="codePostal" type="text" className="sm:col-span-1 col-span-full" onChange={setCodePostal} required />
                                <SelectPart content="Ville" label="city" className="sm:col-span-1 col-span-full" placeholder="Séléctionné une ville" onChange={setCity} selectLabel="Ville trouvé" data={allCity} required />
                                <GetAllAdresse codePostal={codePostal} city={city} required />
                                <InputComboBox content="Profession" label="bob" required data={{
                                    allResponse: ["Hypnothérapie", "Emdr", "Nmo"],
                                    placeholder: "Entrer votre profession...",
                                    label: "job"
                                }} />
                                <Picture />
                                <TextAreaPart content="Description" desc="Écrivez plusieurs phrases sur vous." label="description" className="sm:col-span-2 sm:col-start-1" required />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;