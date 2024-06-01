// @ts-ignore
import cron from 'node-cron';
import axios from "axios";
import {NextApiRequest, NextApiResponse} from "next";

let db: null = null;

cron.schedule('*/15 * * * *', async () => {
    try {
        const { data } = await axios.get(`https://api.github.com/repos/PowerNukkitX/PowerNukkitX`);

        db = data;
    } catch (error) {
        console.error(error);
    }
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        if (db) {
            res.status(200).json(db);
        } else {
            res.status(404).json({ message: 'No data available.' });
        }
    }
}