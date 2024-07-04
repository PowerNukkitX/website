import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const MINECRAFT_API_URL_SERVERS = 'https://bstats.org/api/v1/plugins/16708/charts/servers/data';
const MINECRAFT_API_URL_PLAYERS = 'https://bstats.org/api/v1/plugins/16708/charts/players/data';
const myCache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

interface MinecraftData {
    servers: number;
    players: number;
}

const fetchMinecraftData = async (): Promise<MinecraftData> => {
    try {
        const responseServers = await axios.get(MINECRAFT_API_URL_SERVERS);
        const responsePlayers = await axios.get(MINECRAFT_API_URL_PLAYERS);
        return {
            servers: responseServers.data[responseServers.data.length - 1][1],
            players: responsePlayers.data[responsePlayers.data.length - 1][1]
        };
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        throw error;
    }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    let data: MinecraftData | undefined = myCache.get('minecraftData');

    if (!data) {
        try {
            data = await fetchMinecraftData();
            myCache.set('minecraftData', data);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération' });
            return;
        }
    }

    res.status(200).json(data);
}