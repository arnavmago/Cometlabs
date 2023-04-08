import type { NextApiRequest, NextApiResponse } from 'next'

const GithubRedirect = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(`https://github.com/login/oauth/access_token?client_id=e07b9a9e6d2763621b8e&client_secret=c5b9c042c3319fd94d8a74b596d8fb3059cab590&code=${req.query.code}&state=${req.query.state}`,
        {
            method: "POST",
            headers: { "Accept": "application/json" },
            // body: JSON.stringify({ client_id: "e07b9a9e6d2763621b8e", client_secret: "c5b9c042c3319fd94d8a74b596d8fb3059cab590", code: req.query.code, state: "randomstring" }),
        })
    const accessToken = `Token ${req.query.state}`;
    const gitresponse = await response.json();
    const gitToken = gitresponse.access_token;

    const user_name = await fetch("https://api.github.com/user",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${gitToken}`,
            },
        })

    const username = await user_name.json();
    console.log()

    await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/saveGithubToken",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: accessToken,
            },
            body: JSON.stringify({
                token: gitToken, username: username.login
            })
            // body: JSON.stringify({ client_id: "e07b9a9e6d2763621b8e", client_secret: "c5b9c042c3319fd94d8a74b596d8fb3059cab590", code: req.query.code, state: "randomstring" }),
        })
    res.redirect("https://cometlabs.in")
}

export default GithubRedirect;