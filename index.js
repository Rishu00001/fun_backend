require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const data = {
    "login": "Rishu00001",
    "id": 121800617,
    "node_id": "U_kgDOB0KHqQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/121800617?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Rishu00001",
    "html_url": "https://github.com/Rishu00001",
    "followers_url": "https://api.github.com/users/Rishu00001/followers",
    "following_url": "https://api.github.com/users/Rishu00001/following{/other_user}",
    "gists_url": "https://api.github.com/users/Rishu00001/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Rishu00001/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Rishu00001/subscriptions",
    "organizations_url": "https://api.github.com/users/Rishu00001/orgs",
    "repos_url": "https://api.github.com/users/Rishu00001/repos",
    "events_url": "https://api.github.com/users/Rishu00001/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Rishu00001/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Ritik Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 17,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2023-01-02T11:24:30Z",
    "updated_at": "2024-10-13T15:36:15Z"
  }
app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/github",(req,res)=>{
    res.json(data);
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
