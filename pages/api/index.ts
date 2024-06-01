import {NextApiRequest, NextApiResponse} from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        name: 'PowerNukkitX',
        description: 'PowerNukkitX is a fork of PowerNukkit, a Nukkit plugin that allows you to run Nukkit on a PowerPC-based system.',
        pagesAPI: [
            "/api (this page)",
            "/discord",
            "/github",
            "/minecraft"
        ]
    })
}