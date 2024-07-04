import useSWR, {SWRResponse} from "swr";

export interface DiscordInfo {
    id: number;
    memberCount: number;
}

const REPOSITORIES_URL = '/api/discord';
const fetchers = (url: string) => fetch(url).then((res) => res.json());

export const useDiscord = (): SWRResponse<DiscordInfo, any> => useSWR(REPOSITORIES_URL, fetchers);