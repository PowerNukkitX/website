import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const GITHUB_API_URL = 'https://api.github.com/repos/PowerNukkitX/PowerNukkitX';
const myCache = new NodeCache({ stdTTL: 600, checkperiod: 120 });

interface GithubData {
    id: number;
    name: string;
    full_name: string;
    stargazers_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
}

const fetchGithubData = async (): Promise<GithubData> => {
    try {
        const response = await axios.get(GITHUB_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    let data: GithubData | undefined = myCache.get('githubData');

    if (!data) {
        try {
            data = await fetchGithubData();
            myCache.set('githubData', data);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching data' });
            return;
        }
    }

    res.status(200).json(data);
}