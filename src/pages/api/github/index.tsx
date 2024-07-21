import {NextApiRequest, NextApiResponse} from 'next';
import axios from 'axios';
import NodeCache from 'node-cache';

const GITHUB_API_URL = 'https://api.github.com/repos/PowerNukkitX/PowerNukkitX';
const myCache = new NodeCache({ stdTTL: 3600, checkperiod: 600 });

interface GithubData {
    id: number;
    name: string;
    full_name: string;
    stargazers_count: number;
    forks: number;
    open_issues: number;
    watchers: number;
}

interface Contributor {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

const fetchGithubData = async (): Promise<GithubData> => {
    try {
        const response = await axios.get(GITHUB_API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        throw error;
    }
}

const fetchContributors = async (): Promise<Contributor> => {
    const response = await axios.get(GITHUB_API_URL + '/contributors?per_page=100');
    return response.data;
};


export default async function handler(_: NextApiRequest, res: NextApiResponse) {
    let githubData: GithubData | undefined = myCache.get('githubData');
    let contributors: Contributor | undefined = myCache.get('contributors');

    if (!githubData || !contributors) {
        try {
            // Fetch GitHub repository data if not cached
            if (!githubData) {
                githubData = await fetchGithubData();
                myCache.set('githubData', githubData);
            }
            // Fetch contributors data if not cached
            if (!contributors) {
                contributors = await fetchContributors();
                myCache.set('contributors', contributors);
            }
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching data from GitHub' });
            return;
        }
    }

    const mergedData = {
        ...githubData,
        contributors
    };

    res.status(200).json(mergedData);
}