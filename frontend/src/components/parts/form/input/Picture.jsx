import React, {useState} from 'react';

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";

import { UserCircleIcon } from '@heroicons/react/24/solid';

const Picture = () => {
    //get image preview
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewImage, setPreviewImage] = useState('');

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setSelectedImage(image);
        setPreviewImage(URL.createObjectURL(image));
    };
    return (
        <div className="sm:col-span-2 md:col-span-1 md:col-start-1 col-span-full">
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
    );
};

export default Picture;