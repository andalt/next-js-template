import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req) {
        const content =
            req.headers.host === 'samokat2023-test.smartheadtest.ru'
                ? `User-agent: *\nDisallow: /`
                : `User-agent: *\nAllow: /`;

        res.send(content);
    }
}
