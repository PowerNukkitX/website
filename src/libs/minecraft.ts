import useSWR, {SWRResponse} from "swr";

export interface MinecraftInfo {
    servers: number;
    players: number;
}

const REPOSITORIES_URL = '/api/minecraft';
const fetchers = (url: string) => fetch(url).then((res) => res.json());

export const useMinecraft = (): SWRResponse<MinecraftInfo, any> => useSWR(REPOSITORIES_URL, fetchers);