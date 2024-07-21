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

const fetchRepositoryInfo = async (url: string) => {
    const response = await fetch(url);
    return await response.json(); // Assuming this fetches repository info
};

const fetchContributors = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.contributors || []; // Assuming contributors are under the 'contributors' key
};

export const useGithub = (): SWRResponse<RepositoryInfo, any> => useSWR<RepositoryInfo>('/api/github', fetchRepositoryInfo);

export function useContributors(): SWRResponse<Contributor[], any> {
    return useSWR<Contributor[]>('/api/github', fetchContributors);
}