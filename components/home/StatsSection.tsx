import React, {useEffect, useState} from 'react';
import {GithubIcon, ServerIcon, UserIcon} from "@/components/icons";
import CountUp from 'react-countup';

async function fetchData(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

const StatsSection = () => {
    const [stats, setStats] = useState({
        stars: 0,
        servers: 0,
        players: 0,
        totalServers: 0,
        totalPlayers: 0
    });

    useEffect(() => {
        Promise.all([
            fetchData('https://api.github.com/repos/PowerNukkitX/PowerNukkitX'),
            fetchData('https://bstats.org/api/v1/plugins/16708/charts/servers/data'),
            fetchData('https://bstats.org/api/v1/plugins/16708/charts/players/data')
        ]).then(([githubData, serversData, playersData]) => {
            const stars = githubData.stargazers_count;
            const servers = serversData[serversData.length - 1][1];
            const players = playersData[playersData.length - 1][1];

            setStats(prevStats => ({
                ...prevStats,
                stars,
                servers,
                players,
                totalServers: prevStats.totalServers + servers,
                totalPlayers: prevStats.totalPlayers + players
            }));
        }).catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section id={"stats"} className="grid lg:grid-cols-2 sm:grid-cols-1 m-4">
            <div className="mx-auto flex flex-col items-center space-y-5 text-center justify-center">
                <h2 className="text-4xl md:text-6xl">
            <span
                className="bg-gradient-to-t from-success-300 to-success-500 bg-clip-text font-bold text-transparent">
    {/* eslint-disable-next-line react/no-unescaped-entities */}
                Numbers don't lie</span>{" "}
                </h2>
                <p className="mx-auto max-w-2xl text-xl">
                    PowerNukkitX is a popular choice for Bedrock servers. Here are some numbers to prove it.
                </p>
            </div>
            <div className={"p-4 min-h-[350px] flex items-center justify-center font-bold text-[#333] m-4"}>
                <div
                    className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-24 gap-12 rounded-xl px-20 py-10 border border-content2 bg-content1">
                    <div className="text-center">
                        <div className="text-center text-white mx-auto mb-4">
                            <ServerIcon className="mx-auto w-12 h-12"/>
                        </div>

                        <h3 className="text-4xl font-extrabold text-white">
                            <CountUp start={0} end={stats.totalServers} duration={8} delay={0}>
                                {({countUpRef}) => (
                                    <span ref={countUpRef}/>
                                )}
                            </CountUp>
                        </h3>
                        <span className="text-4xl font-bold text-success">Servers</span>
                        <p className="text-gray-300 font-semibold mt-3">are running PowerNukkitX</p>
                    </div>
                    <div className="text-center">
                        <div className="text-center text-white mx-auto mb-4">
                            <UserIcon className="mx-auto w-12 h-12"/>
                        </div>
                        <h3 className="text-4xl font-extrabold text-white">
                            <CountUp start={0} end={stats.totalPlayers} duration={8} delay={0}>
                                {({countUpRef}) => (
                                    <span ref={countUpRef}/>
                                )}
                            </CountUp>
                        </h3>
                        <span className="text-4xl font-bold text-success">Players</span>
                        <p className="text-gray-300 font-semibold mt-3">are playing on PowerNukkitX</p>
                    </div>
                    <div className="text-center">
                        <div className="text-center text-white mx-auto mb-4">
                            <GithubIcon className="mx-auto w-12 h-12"/>
                        </div>
                        <h3 className="text-4xl font-extrabold text-white">
                            <CountUp start={0} end={stats.stars} duration={8} delay={0}>
                                {({countUpRef}) => (
                                    <span ref={countUpRef}/>
                                )}
                            </CountUp>
                        </h3>
                        <span className="text-4xl font-bold text-success">Stars</span>
                        <p className="text-gray-300 font-semibold mt-3">on Github</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
