import React, {useEffect, useState} from 'react';

async function get(url: string) {
    const response = await fetch(url);
    return response.text();
}

async function refreshPNXServers(callback: (count: number) => void) {
    let response = await get("https://bstats.org/api/v1/plugins/10277/charts/nukkit_version/data");
    let data = JSON.parse(response);
    let count = 0;
    for (const each of data) {
        if (each.name.indexOf("PNX") !== -1) {
            count += each.y;
        }
    }
    response = await get("https://bstats.org/api/v1/plugins/16708/charts/servers/data");
    data = JSON.parse(response);
    count += data[data.length - 1][1];
    if (callback) {
        callback(count);
    }
}

async function refreshPNXPlayers(callback: (count: number) => void) {
    const response = await get("https://bstats.org/api/v1/plugins/16708/charts/players/data");
    const data = JSON.parse(response);
    const count = data[data.length - 1][1];
    if (callback) {
        callback(count);
    }
}

const StatsSection = () => {
    const [stars, setStars] = useState(0);
    const [servers, setServers] = useState(0);
    const [players, setPlayers] = useState(0);
    const [totalServers, setTotalServers] = useState(0);
    const [totalPlayers, setTotalPlayers] = useState(0);

    useEffect(() => {
        fetch('https://api.powernukkitx.cn/v2/git/star')
            .then(response => response.json())
            .then(data => setStars(data.star))
            .catch(error => console.error('Error:', error));
        refreshPNXServers((count) => {
            setServers(count);
            setTotalServers(prevTotal => prevTotal + count);
        });

        refreshPNXPlayers((count) => {
            setPlayers(count);
            setTotalPlayers(prevTotal => prevTotal + count);
        });
    }, []);

    return (
        <section id={"stats"} className="py-14 p-4 min-h-[350px] flex items-center justify-center font-[sans-serif] text-[#333]">
            <div
                className="grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-24 gap-12 rounded-xl px-20 py-10 bg-content1">
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">{totalServers} <span
                        className="text-success">Servers</span></h3>
                    <p className="text-gray-300 font-semibold mt-3">are running PowerNukkitX</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">{totalPlayers} <span
                        className="text-success">Players</span></h3>
                    <p className="text-gray-300 font-semibold mt-3">are playing on PowerNukkitX</p>
                </div>
                <div className="text-center">
                    <h3 className="text-4xl font-extrabold text-white">{stars} <span className="text-success">Github Stars</span>
                    </h3>
                    <p className="text-gray-300 font-semibold mt-3">on Github</p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
