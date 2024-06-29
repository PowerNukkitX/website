//Bstats will soon be replaced by Stats from powernukkitx, which will collect information on our users' servers.
//We will use the data to improve our software and provide better support to our users.

import {NextApiResponse} from 'next';
import axios from 'axios';

const fetchDataServers = async () => {
    try {
        return await axios.get('https://bstats.org/api/v1/plugins/16708/charts/servers/data');
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        return null;
    }
}

const fetchDataPlayers = async () => {
    try {
        return await axios.get('https://bstats.org/api/v1/plugins/16708/charts/players/data');
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        return null;
    }
}

export default async function handler(res: NextApiResponse) {
    const responseServer = await fetchDataServers();
    const responsePlayer = await fetchDataPlayers();
    if (responseServer && responsePlayer) {
        res.status(200).json({ servers: responseServer.data[responseServer.data.length - 1][1], players: responsePlayer.data[responsePlayer.data.length - 1][1]});
    } else {
        res.status(500).json({ error: 'Erreur lors de la récupération' });
    }
}
