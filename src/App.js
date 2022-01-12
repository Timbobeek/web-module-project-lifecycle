import React from 'react';

class App extends React.Component {
  state = {
    followersImages: [
      "https://avatars.githubusercontent.com/u/68671029?v=4",
      "https://avatars.githubusercontent.com/u/68671029?v=4",
      "https://avatars.githubusercontent.com/u/68671029?v=4",
      "https://avatars.githubusercontent.com/u/68671029?v=4"
    ],
    followersNames: [
      'User One',
      'User Two',
      'User Three',
      'User Four'
    ],
    followersUsernames: [],
    followersRepos: [],
    followersFollowers: []
  }
  render() {
    console.log(this.state.followersNames);
    return(<div>
      <h1>Github Users Info</h1>
      <form>
        <input size = '100'/>
        <button>Search People</button>
      </form>
      <br></br>

      <div>
        <h2>Current User: Firstname Lastname</h2>
        <img width = '18%' src="https://avatars.githubusercontent.com/u/68671029?v=4"/>
        <h3>Username123</h3>
        <h3>Total Repos: 70</h3>
        <h3>Total Followers: 46</h3>
      </div>

      <div>
        <h2>Followers:</h2>
        {
          this.state.followersImages.map(image => {
            return <img key={Math.random()} width='10%' src={image}/>
          })
        }
        {
          this.state.followersNames.map(name => {
            return name
          })
        }
      </div>
    </div>);
  }
}

export default App;





/// my profile      https://api.github.com/users/Timbobeek

// {
//   "login": "Timbobeek",
//   "id": 68671029,
//   "node_id": "MDQ6VXNlcjY4NjcxMDI5",
//   "avatar_url": "https://avatars.githubusercontent.com/u/68671029?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/Timbobeek",
//   "html_url": "https://github.com/Timbobeek",
//   "followers_url": "https://api.github.com/users/Timbobeek/followers",
//   "following_url": "https://api.github.com/users/Timbobeek/following{/other_user}",
//   "gists_url": "https://api.github.com/users/Timbobeek/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/Timbobeek/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/Timbobeek/subscriptions",
//   "organizations_url": "https://api.github.com/users/Timbobeek/orgs",
//   "repos_url": "https://api.github.com/users/Timbobeek/repos",
//   "events_url": "https://api.github.com/users/Timbobeek/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/Timbobeek/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Tim Goloshchapov",
//   "company": null,
//   "blog": "",
//   "location": "Iowa City, IA",
//   "email": null,
//   "hireable": true,
//   "bio": "Learning programming software at BloomTech and practicing to become a QA tester. ",
//   "twitter_username": null,
//   "public_repos": 33,
//   "public_gists": 0,
//   "followers": 21,
//   "following": 21,
//   "created_at": "2020-07-23T00:38:56Z",
//   "updated_at": "2021-12-02T22:34:25Z"
// }

/// my followers    https://api.github.com/users/Timbobeek/followers 




//   EACH follower has these, this data is an array of objects!!!!
// 
// {
//   "login": "ChristOscar",
//   "id": 3699469,
//   "node_id": "MDQ6VXNlcjM2OTk0Njk=",
//   "avatar_url": "https://avatars.githubusercontent.com/u/3699469?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/ChristOscar",
//   "html_url": "https://github.com/ChristOscar",
//   "followers_url": "https://api.github.com/users/ChristOscar/followers",
//   "following_url": "https://api.github.com/users/ChristOscar/following{/other_user}",
//   "gists_url": "https://api.github.com/users/ChristOscar/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/ChristOscar/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/ChristOscar/subscriptions",
//   "organizations_url": "https://api.github.com/users/ChristOscar/orgs",
//   "repos_url": "https://api.github.com/users/ChristOscar/repos",
//   "events_url": "https://api.github.com/users/ChristOscar/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/ChristOscar/received_events",
//   "type": "User",
//   "site_admin": false
// }
