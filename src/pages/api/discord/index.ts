import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const DISCORD_API_URL = 'https://discord.com/api/v9/invites/EQdDkhvxRb?with_counts=true&with_expiration=true';
const myCache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

interface DiscordData {
    approximate_member_count: number;
}

const fetchDiscordData = async (): Promise<DiscordData> => {
    try {
        const response = await axios.get(DISCORD_API_URL);
        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        throw error;
    }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    let data: DiscordData | undefined = myCache.get('discordData');

    if (!data) {
        try {
            data = await fetchDiscordData();
            myCache.set('discordData', data);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération' });
            return;
        }
    }

    res.status(200).json({ memberCount: data.approximate_member_count });
}