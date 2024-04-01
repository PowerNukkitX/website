import {Card, CardHeader, Button, CardFooter, CardBody, ButtonGroup, Image} from '@nextui-org/react';

const PluginRecommendation = () => {

    return (
        <section id="plugins">
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto max-w-4xl space-y-5 text-center py-8">
                    <h2 className="mx-auto text-4xl md:text-6xl ">
                        <span
                            className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold text-transparent">
                            Plugin Recommendations
                        </span>{" "}
                    </h2>
                    <p className="mx-auto max-w-2xl text-xl">
                        Here are some plugins that we recommend you to use on your server. These plugins are tested and
                        are known to work well with PowerNukkitX.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="flex flex-col h-full">
                        <CardHeader
                            className="h-52 flex flex-col justify-center items-center bg-success-300 rounded-t-xl">
                            <Image src="https://media.forgecdn.net/avatars/295/423/637336902766082972.png" alt="Plugin Image" width={150} height={150} />
                        </CardHeader>
                        <CardBody className="p-4 md:p-6">
                            <h3 className="block mb-1 text-xs font-semibold uppercase text-success dark:text-blue-500">
                                World Edit
                            </h3>
                            <h2 className="text-xl font-semibold text-white">
                                FastAsyncWorldEdit for PNX
                            </h2>
                            <p className="mt-3 text-gray-500">
                                FastAsyncWorldEdit is a fork of WorldEdit that has huge speed and memory improvements and considerably more features.
                                If you use other plugins which depend on WorldEdit, simply having FAWE installed will boost their performance.
                            </p>
                        </CardBody>
                        <CardFooter className="mt-auto flex w-full">
                            <ButtonGroup size={"md"} fullWidth={true}>
                                <Button color="success"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl shadow-sm"
                                        href="#">
                                    Download
                                </Button>
                                <Button
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl shadow-sm"
                                    href="#">
                                    View on Github
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col h-full">
                        <CardHeader
                            className="h-52 flex flex-col justify-center items-center bg-success-300 rounded-t-xl">
                            <Image src="https://cloudburstmc.org/attachments/1618588553800-png.3459/"/>
                        </CardHeader>
                        <CardBody className="p-4 md:p-6">
                            <h3 className="block mb-1 text-xs font-semibold uppercase text-success dark:text-blue-500">
                                World
                            </h3>
                            <h2 className="text-xl font-semibold text-white">
                                WorldManager
                            </h2>
                            <p className="mt-3 text-gray-500">
                                WorldManager is probably the best world management plugin for PowerNukkitX. It allows you to create, delete, and manage worlds with ease.
                            </p>
                        </CardBody>
                        <CardFooter className="mt-auto flex w-full">
                            <ButtonGroup size={"md"} fullWidth={true}>
                                <Button color="success"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl shadow-sm"
                                        href="#">
                                    Download
                                </Button>
                                <Button
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl shadow-sm"
                                    href="#">
                                    View on Github
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col h-full">
                        <CardHeader
                            className="h-52 flex flex-col justify-center items-center bg-success-300 rounded-t-xl">
                            <Image src="https://cdn0.iconfinder.com/data/icons/telecommunication-1/50/18-512.png" alt="Plugin Image" width={150} height={150}/>
                        </CardHeader>
                        <CardBody className="p-4 md:p-6">
                            <h3 className="block mb-1 text-xs font-semibold uppercase text-success dark:text-blue-500">
                                Library
                            </h3>
                            <h2 className="text-xl font-semibold text-white">
                                DbLib
                            </h2>
                            <p className="mt-3 text-gray-500">
                                DbLib a library for PowerNukkitX, that include ORMLite, Sql2o and jdbc-connectors (MySQL and SQLite).
                            </p>
                        </CardBody>
                        <CardFooter className="mt-auto flex w-full">
                            <ButtonGroup size={"md"} fullWidth={true}>
                                <Button color="success"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl shadow-sm"
                                        href="#">
                                    Download
                                </Button>
                                <Button
                                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl shadow-sm"
                                    href="#">
                                    View on Github
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default PluginRecommendation;
