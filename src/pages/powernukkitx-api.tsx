import Layout from "@/layouts/layout";
import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import {Button} from "@nextui-org/react";

interface APICardProps {
    title: string;
    children: React.ReactNode;
    buttonLink: string;
}

const APICard = ({title, children, buttonLink}: APICardProps) => (
    <Card className="w-full flex flex-col">
        <CardHeader>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
        </CardHeader>
        <CardBody className="grid grid-cols-2 items-center">
            <p className="text-left">{children}</p>
            <div className="flex justify-end">
                <Button as="a" href={buttonLink} className={"w-2/4"}>
                    {title}
                </Button>
            </div>
        </CardBody>
    </Card>
);

export default function API() {
    return (
        <Layout>
            <section id="api-intro" className="py-3 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 lg:mb-16">
                    <h2 className="mb-4 font-bold md:text-5xl">PowerNukkitX <span
                        className="font-bold md:text-5xl text-success">
                    JSON API
                    </span>
                    </h2>
                    <p className="text-xl">PowerNukkitX API is a JSON-based API that allows you to interact with the PowerNukkitX ecosystem programmatically.</p>
                </div>

                <div className="mx-auto space-y-8">
                    <APICard title="API Documentation" buttonLink="/api-docs">
                        Learn how to use the PowerNukkitX API with our comprehensive documentation.
                    </APICard>

                    <APICard title="API Endpoints" buttonLink="/api-docs">
                        Explore the available endpoints of the PowerNukkitX API.
                    </APICard>

                    <APICard title="API Usage" buttonLink="/api-docs">
                        Learn how to use the PowerNukkitX API with our comprehensive documentation.
                    </APICard>
                </div>
            </section>
        </Layout>
    );
};