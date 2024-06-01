import Layout from "@/layouts/layout";
import Image from "next/image";
import Link from "next/link";
import config from "tailwindcss/defaultConfig";
import {siteConfig} from "@/config/site";

const teamData = [
    // Core Team
    { name: 'Cool_Loong', discord: 'cool_loong', github: 'CoolLoong', imageUrl: 'https://avatars.githubusercontent.com/u/69153398?v=4', role: 'Project leader', team: 'Core Team' },
    { name: 'smartcmd', discord: 'smartcmd', github: 'smartcmd', imageUrl: 'https://avatars.githubusercontent.com/u/60499296?v=4', role: 'Developer', team: 'Core Team' },
    { name: 'chencu', discord: 'chencu', github: 'chencu', imageUrl: 'https://avatars.githubusercontent.com/u/82279230?v=4', role: 'Developer', team: 'Core Team' },
    { name: 'BatryCC', discord: 'BatryCC', github: 'BatryCC', imageUrl: 'https://avatars.githubusercontent.com/u/50173259?v=4', role: 'Just a mascot', team: 'Core Team' },

    // Core Dev
    { name: 'AzaleeX', discord: 'AzaleeX', github: 'AzaleeX', imageUrl: 'https://avatars.githubusercontent.com/u/82237910?v=4', role: 'Developer', team: 'Core Dev' },
    { name: 'KoshakMineDEV', discord: 'KoshakMineDEV', github: 'KoshakMineDEV', imageUrl: 'https://avatars.githubusercontent.com/u/52908036?v=4', role: 'Developer', team: 'Core Dev' },
    { name: 'C0R0X', discord: 'C0R0X', github: 'C0R0X', imageUrl: 'https://avatars.githubusercontent.com/u/96849286?v=4', role: 'Developer', team: 'Core Dev' },

    // Dev/Contributor
    { name: 'Buddelbubi', discord: 'Buddelbubi', github: 'Buddelbubi', imageUrl: 'https://avatars.githubusercontent.com/u/44944269?v=4', role: 'Active Contributor', team: 'Dev/Contributor' },
    { name: 'MEFRREEX', discord: 'MEFRREEX', github: 'MEFRREEX', imageUrl: 'https://avatars.githubusercontent.com/u/83061703?v=4', role: 'Contributor', team: 'Dev/Contributor' },
    { name: 'alvin0319', discord: 'alvin0319', github: 'alvin0319', imageUrl: 'https://avatars.githubusercontent.com/u/32565818?v=4', role: 'Developer', team: 'Dev/Contributor' },
    { name: 'Azzi', discord: 'Azzi', github: 'Azzi', imageUrl: 'https://avatars.githubusercontent.com/u/24763393?v=4', role: 'Developer', team: 'Dev/Contributor' },
    { name: 'LT_Name', discord: 'LT_Name', github: 'LT_Name', imageUrl: 'https://avatars.githubusercontent.com/u/45508179?v=4', role: 'Developer', team: 'Dev/Contributor' },
    { name: 'zimzaza4', discord: 'zimzaza4', github: 'zimzaza4', imageUrl: 'https://avatars.githubusercontent.com/u/53421735?v=4', role: 'Developer', team: 'Dev/Contributor' },
    { name: 'BlusterySasha', discord: 'BlusterySasha', github: 'BlusterySasha', imageUrl: 'https://avatars.githubusercontent.com/u/52814854?v=4', role: 'Developer', team: 'Dev/Contributor' },
];

// @ts-ignore
const TeamMember = ({ name, role, imageUrl }) => (
    <div className="space-y-4 text-center">
        <div className="relative w-64 h-64 mx-auto md:w-40 md:h-40 lg:w-64 lg:h-64">
            <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-xl" />
        </div>
        <div>
            <h4 className="text-2xl">{name}</h4>
            <span className="block text-sm text-gray-500">{role}</span>
        </div>
    </div>
);

export default function Team() {
    const coreTeamMembers = teamData.filter(member => member.team === 'Core Team');
    const coreDevMembers = teamData.filter(member => member.team === 'Core Dev');
    const DevContributorMembers = teamData.filter(member => member.team === 'Dev/Contributor');

    return (
        <Layout>
            <section id={"teams"} className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight text-success font-bold md:text-4xl lg:text-8xl">Our
                        team</h2>
                    <p className="text-2xl">Discover our dedicated, passionate, and expert team, ready to tackle any
                        challenge to provide you with the best services.</p>
                </div>

                <div className={"mb-8 lg:mb-16"}>
                    <h3 className="mb-4 text-2xl font-bold">Core team</h3>
                    <p className="mb-11 text-lg">The core team is the backbone of PowerNukkitX. They are the ones
                        who
                        make sure everything runs smoothly and efficiently.</p>
                    <div className="container mx-auto px-6 md:px-12 xl:px-32">
                        <div className="grid gap-12 items-center md:grid-cols-2">
                            {coreTeamMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"mb-8 lg:mb-16"}>
                    <h3 className="mb-4 text-2xl font-bold">Core Dev</h3>
                    <p className="mb-11 text-lg">The core dev team is the backbone of PowerNukkitX. They are the ones
                        who
                        make sure everything runs smoothly and efficiently.</p>
                    <div className="container mx-auto px-6 md:px-12 xl:px-32">
                        <div className="grid gap-12 items-center md:grid-cols-3">
                            {coreDevMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={"mb-8 lg:mb-16"}>
                    <h3 className="mb-4 text-2xl font-bold">Developer / Contributor</h3>
                    <p className="mb-11 text-lg">Developers and contributors who have helped improve PowerNukkitX</p>
                    <div className="container mx-mauto px-6 md:px-12 xl:px-32">
                        <div className="grid gap-12 items-center md:grid-cols-3">
                            {DevContributorMembers.map((member, index) => (
                                <TeamMember key={index} {...member} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                        <div className="w-full lg:w-1/2">
                            <h2
                                className="text-4xl font-bold leading-[4rem] mb-7 text-center lg:text-left">
                                Would you like to join us?</h2>
                            <p className="text-lg text-white mb-16 text-center lg:text-left">We are always looking for new talents to join our team. If you are passionate about technology and want to contribute to the development of PowerNukkitX, we would be happy to welcome you.</p>
                            <a href={siteConfig.links.discord}
                                className="cursor-pointer py-3 px-8 w-60 bg-success-300 text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-success-500 mx-auto lg:mx-0">Join
                                our team
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
                            <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
                                {teamData
                                    .sort(() => 0.5 - Math.random())
                                    .slice(0, 6)
                                    .map((member, index) => (
                                        <Image key={index} src={member.imageUrl} alt={member.name}
                                             className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"/>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    );
};