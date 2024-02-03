import React from 'react';
import {Button, ButtonProps, Image} from "@nextui-org/react";

interface ImageTextCardProps {
    image: string;
    imageWidth?: number;
    title: string;
    description: string;
    button?: ButtonProps;
    imagePosition: 'left' | 'right';
}

const ImageTextCard: React.FC<ImageTextCardProps> = ({ image, imageWidth = 1000, title, description, button, imagePosition }) => {
    return (
        <div className={`flex flex-col md:flex-row ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''}`}>
            <div className="w-full md:w-1/2">
                <Image src={image} alt={title} width={imageWidth} />
            </div>
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-4xl font-semibold text-primary mb-9">{title}</h2>
                <p className="dark md:text-2xl dark:text-zinc-100 light:text-black mx-auto mt-4">{description}</p>
                {button && <div className="mt-4"><Button {...button} /></div>}
            </div>
        </div>
    );
};

export default ImageTextCard;