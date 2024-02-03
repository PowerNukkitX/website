import {Card, CardBody, CardHeader} from "@nextui-org/react";
import React from "react";

interface FeatureCardProps {
    Icon: React.ElementType;
    featureTitle: string;
    featureSubtitle: string;
    featureDescription: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ Icon, featureTitle, featureSubtitle, featureDescription }) => {
    return (
        <Card className={"md:text-1xl dark:text-zinc-100 light:bg-gray-200 mx-auto"}>
            <CardHeader className="flex items-start">
                <Icon className="mt-1" size={40}/>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-1">{featureTitle}</h3>
                    <h4 className="text-base font-medium text-gray-500">{featureSubtitle}</h4>
                </div>
            </CardHeader>
            <CardBody>
                <p>{featureDescription}</p>
            </CardBody>
        </Card>
    );
};

export default FeatureCard;