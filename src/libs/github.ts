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

const fetchers = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.contributors || [];
};

export const useGithub = (): SWRResponse<RepositoryInfo, any> => useSWR('/api/github', fetchers);

export function useContributors(): SWRResponse<Contributor[], any> {
    return useSWR<Contributor[]>('/api/github', fetchers);
}