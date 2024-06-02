//this will change when a discord bot is created that will have the possibility is more open because the api of discord needs an authentication what the bot allows to do

// pages/api/discord/memberCount.ts
import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';

const fetchDiscordData = async () => {
    try {
        return await axios.get('https://discord.com/api/v9/invites/EQdDkhvxRb?with_counts=true&with_expiration=true');
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        return null;
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetchDiscordData();
    if (response) {
        res.status(200).json({ id: response.data.guild.id ,memberCount: response.data.approximate_member_count });
    } else {
        res.status(500).json({ error: 'Erreur lors de la récupération' });
    }
}
