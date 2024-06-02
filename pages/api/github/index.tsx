import axios from 'axios';
import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await axios.get('https://api.github.com/repos/PowerNukkitX/PowerNukkitX');
    return res.status(200).json(response.data);
}