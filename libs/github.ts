import useSWR, {SWRResponse} from "swr";

export interface RepositoryInfo {
    stargazers_count: number;
}

export interface Contributor {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    contributions: number;
}

const REPOSITORIES_URL = 'https://api.github.com/repos/PowerNukkitX/PowerNukkitX';
const fetchers = (url: string) => fetch(url).then((res) => res.json());

export const useGithub = (): SWRResponse<RepositoryInfo, any> => useSWR('/api/github', fetchers);

export function useContributors(): SWRResponse<Contributor[], any> {
    return useSWR<Contributor[]>(REPOSITORIES_URL + `/contributors?per_page=100`, fetchers);
}