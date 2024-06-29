import axios from 'axios';
import {NextApiResponse} from "next";

export default async function handler(res: NextApiResponse) {
    const response = await axios.get('https://api.github.com/repos/PowerNukkitX/PowerNukkitX');
    return res.status(200).json(response.data);
}