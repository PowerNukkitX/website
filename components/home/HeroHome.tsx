import React, {useEffect, useMemo, useState} from "react";
import {
    Button,
    ButtonGroup,
    Chip,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Spacer,
    useDisclosure,
} from "@nextui-org/react";
import {ChevronDownIcon, DownloadIcon} from "@/components/icons";
import ReactMarkdown from 'react-markdown';
import NextImage from "next/image";
import confetti from "canvas-confetti";

interface Release {
    id: number;
    tag_name: string;
    assets: { browser_download_url: string }[];
    body: string;
}

const HeroHome = () => {
    const [selectedKeys, setSelectedKeys] = useState(new Set(["latest"]));
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const selectedValue = useMemo(() => Array.from(selectedKeys).join(", ").replaceAll("_", " "), [selectedKeys]);
    const [latestRelease, setLatestRelease] = useState<Release | null>(null);
    const [releases, setReleases] = useState<Release[]>([]);
    const { isOpen: isReleaseBodyOpen, onOpen: onOpenReleaseBody, onClose: onCloseReleaseBody } = useDisclosure();
    const [releaseBody, setReleaseBody] = useState<string | null>(null);

    useEffect(() => {
        if (selectedValue === "latest") {
            fetch('https://api.github.com/repos/PowerNukkitX/PowerNukkitX/releases/latest')
                .then(response => response.json())
                .then(data => setLatestRelease(data));
        }
    }, [selectedValue]);

    useEffect(() => {
        fetch('https://api.github.com/repos/PowerNukkitX/PowerNukkitX/releases')
            .then(response => response.json())
            .then(data => setReleases(data.slice(1, 6)));
    }, []);

    const descriptionsMap = { latest: "The latest versions of PowerNukkitX are built from the latest commits on the master branch.", other: "Provide a list of the 5 latest versions, excluding the latest one (which is already included in the latest version)." };
    const labelsMap = { latest: "Latest release", other: "Other version" };

    const handleClick = () => {
        confetti({
            particleCount: 250,
            spread: 160,
            origin: {y: 0.6},
        });
    };

    const ChipHandler = () => (
        <Chip
            color={selectedValue === "latest" ? "success" : "warning"}
            size="lg"
            variant="dot"
            radius="sm"
            className="relative"
        >
            {selectedValue === "latest" ? "Latest version" : "Other version"}
        </Chip>
    );

    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 py-28 md:px-8">
                <div className="relative flex flex-col md:flex-row md:space-x-8">
                    <div className="md:w-1/2">
                        <div className="text-center md:text-left lg:text-left">
                            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                                Create your own server with{" "}
                                <span
                                    className="text-transparent bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold">
                PowerNukkitX
              </span>
                            </h1>
                            <p className="text-xl lg:text-2xl mb-8">
                                Unleash the potential of your Minecraft server with PowerNukkitX, where{" "}
                                <span
                                    className="text-transparent bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold">
                performance
              </span>{" "}
                                meets{" "}
                                <span
                                    className="text-transparent bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold">
                flexibility
              </span>
                                , crafting an unparalleled gaming experience for you and your players.
                            </p>
                            <Spacer y={7}/>
                            {ChipHandler()}
                            <Spacer y={3}/>
                            <div
                                className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                                <div className="flex items-center">
                                    <ButtonGroup variant="flat">
                                        <Button
                                            variant="shadow"
                                            radius="sm"
                                            color="primary"
                                            disableRipple
                                            onPress={() => {
                                                if (selectedValue !== "latest") {
                                                    onOpen();
                                                } else {
                                                    if (latestRelease && latestRelease.assets[3]) {
                                                        window.location.href = latestRelease.assets[3].browser_download_url;
                                                    }
                                                }
                                            }}
                                            startContent={<DownloadIcon size={15} color={"#ffffff"}/>}
                                            className="relative"
                                        >
                                            Download
                                        </Button>
                                        <Dropdown placement="bottom-end">
                                            <DropdownTrigger>
                                                <Button isIconOnly color="primary" variant="shadow" radius="sm">
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
                                                    Version: {ChipHandler()}
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
                                    className="mt-4 md:mt-0"
                                >
                                    Documentation
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div
                            className="hidden md:block inset-0 w-full h-full flex items-center justify-center overflow-hidden">
                            <Image
                                as={NextImage}
                                width={985}
                                height={800}
                                alt="PowerNukkitX"
                                src="/cover.webp"
                                style={{objectFit: 'cover'}}
                                className="w-full h-full rounded-md shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10 md:mt-20 relative">
                <a href="#features">
                    <button
                        className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 text-xl md:text-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
                        onClick={handleClick}
                    >
                        Discover Features
                    </button>
                </a>
            </div>
            <Modal backdrop={"transparent"} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Downloadable Version</ModalHeader>
                            <ModalBody>
                                <p>
                                    Customize your download experience with our Download Options modal.<br/>
                                    Choose the version that fits your needs best and get started in seconds !
                                </p>
                                {releases.map(release => (
                                    <div key={release.id} className="flex justify-between items-center">
                                        <p>{release.tag_name}</p>
                                        <div className="flex items-center">
                                            <Button
                                                variant="solid"
                                                radius="sm"
                                                color="primary"
                                                disableRipple
                                                onPress={() => window.location.href = release.assets[3].browser_download_url}
                                                startContent={<DownloadIcon size={15} color={"#ffffff"}/>}
                                                className="relative"
                                            >
                                                Download
                                            </Button>
                                            <Button
                                                variant="solid"
                                                radius="sm"
                                                color="default"
                                                disableRipple
                                                onPress={() => {
                                                    setReleaseBody(release.body);
                                                    onOpenReleaseBody();
                                                }}
                                                className="relative ml-2"
                                            >
                                                View Notes
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="faded" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal backdrop={"transparent"} isOpen={isReleaseBodyOpen} onOpenChange={onCloseReleaseBody}>
                <ModalContent
                    className="w-full h-full overflow-auto p-5 rounded-lg shadow-lg max-w-screen-md sm:max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl">
                    <ModalHeader className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Release
                        Body</ModalHeader>
                    <ModalBody className="mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
                        <ReactMarkdown>{releaseBody}</ReactMarkdown>
                    </ModalBody>
                    <ModalFooter className="flex justify-end">
                        <Button color="default" variant="faded" onPress={onCloseReleaseBody}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Spacer y={24}/>
        </section>
    );
};

export default HeroHome;
