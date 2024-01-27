import {
    Button,
    ButtonGroup,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
    Spacer
} from "@nextui-org/react";
import {ChevronDownIcon, DevIcon, DownloadIcon, LatestIcon} from "@/components/icons";
import React from "react";


export const HeroHome = () => {

    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["latest"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    const ChipHandler = () => {
        if(selectedValue == "latest") {
            return (
                <Chip
                    color="success"
                    size="md"
                    startContent={<LatestIcon size={15} color={"#a3e635"}/>}
                    className="relative"
                >
                    Latest
                </Chip>
            )
        }else{
            return (
                <Chip
                    color="warning"
                    size="md"
                    startContent={<DevIcon size={15} color={"#fcd34d"}/>}
                    className="relative"
                >
                    Other version
                </Chip>
            )
        }
    }

    const descriptionsMap = {
        latest:
            "The latest versions of PowerNukkitX are built from the latest commits on the master branch.",
        other:
            "Provide a list of the 5 latest versions, excluding the latest one (which is already included in the latest version).",
    };

    const labelsMap = {
        latest: "Latest release",
        other: "Other version",
    }

    return (
        <section className="hero-section px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-25">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 justify-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                            Create your own server with{" "}
                            <span
                                className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-300 to-blue-500 font-bold">
                PowerNukkitX
              </span>
                        </h1>
                        <p className="text-lg lg:text-xl">
                            Unleash the potential of your Minecraft server with PowerNukkitX, where{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                performance
              </span>{" "}
                            meets{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">
                flexibility
              </span>
                            , crafting an unparalleled gaming experience for you and your players.
                        </p>
                        <Spacer y={7}/>
                        <div
                            className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                            <div className="flex items-center">
                                {ChipHandler()}
                                <Spacer x={4}/>
                                <ButtonGroup variant="flat">
                                    <Button
                                        variant="shadow"
                                        radius="sm"
                                        color="primary"
                                        disableRipple
                                        startContent={<DownloadIcon size={15}/>}
                                        className="relative"
                                    >
                                        Download
                                    </Button>
                                    <Dropdown placement="bottom-end">
                                        <DropdownTrigger>
                                                <Button isIconOnly color="primary" variant="solid" radius="sm">
                                                    <ChevronDownIcon/>
                                                </Button>
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            disallowEmptySelection
                                            aria-label="Choose version"
                                            disabledKeys={["chip"]}
                                            selectionMode="single"
                                            selectedKeys={selectedKeys}
                                            onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
                                            className="max-w-[300px]"
                                        >
                                            <DropdownItem isReadOnly key={"chip"}>
                                                {ChipHandler()}
                                            </DropdownItem>
                                            <DropdownItem key="latest" description={descriptionsMap["latest"]}>
                                                {labelsMap["latest"]}
                                            </DropdownItem>
                                            <DropdownItem key="other" description={descriptionsMap["other"]}>
                                                {labelsMap["other"]}
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </ButtonGroup>
                            </div>

                            <Button
                                variant="faded"
                                radius="sm"
                                color="default"
                                disableRipple
                                className="mt-4 md:mt-0" // Adjust margin-top for spacing in small screens
                            >
                                Documentation
                            </Button>
                        </div>
                    </div>

                    <div className="relative overflow-hidden w-full h-full">
                        <Image
                            width={2000}
                            height={1200}
                            alt="PowerNukkitX World generator"
                            src="/coverPNX.png"
                            className="rounded-md shadow-md hidden md:block"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};