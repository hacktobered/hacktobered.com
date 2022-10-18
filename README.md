# Hacktobered.com

I decided to build this fun project during [Hacktoberfest 2022](https://hacktoberfest.com/).
Here are some details about its initial idea / problem statement, tech stack, how you can contribute, etc.

## Initial Idea / Problem Statement

> - I am a developer and made (Or am planning to) open-source contributions during HacktoberFest. 
> - Now, how can I share my hacktober achievements with others? Can I share via Instagram stories / WhatsApp Status / Twitter?
> - You can do it manually - copy and paste your PR links; create milestones and progress cards for social posts.
> - Is there any tool that simplifies the above manual steps?
> - Nope 😐!

**Let us build then!**

### Proposed user flow

[![Basic User Flow](https://hacktobered.s3.us-west-2.amazonaws.com/hacktoberpoc.png)](https://www.youtube.com/shorts/636Fm5RP4aU)

> **An easy task to pick up is creating more user cards like the one below:**
>
> ![cheerCard_small](https://user-images.githubusercontent.com/14895768/195179754-7cf72ff6-9675-467b-a5a0-07c87c9434db.png)


## Getting Started

1. Install npm Dependencies:

```bash
npm i
# or
yarn
```

2. Create .env.local file and copy content of .env.local.example.
   
3. Create NEXTAUTH_SECRET - # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

4. Create [Github OAuth App](https://github.com/organizations/hacktobered/settings/applications) . Copy Client ID and Client Secret into GITHUB_ID and GITHUB_SECRET.

5. If you want to save logged-in user details, you can use mongo db. Provide connection details in .env.local. However if you don't want - make sure to comment line 4 and line 14 in pages\api\auth\[...nextauth].tsx before running the code.

   ```js
    //import clientPromise from "../../../lib/mongodb";
     //adapter: MongoDBAdapter(clientPromise),
   ```

6. Run the development server:

```bash
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Facing any issues? Feel free to open a ticket.

## How to contribute

- Drop a :star: on the Github repository (optional)<br/>

- Before Contribute Please read [CONTRIBUTING.md](https://github.com/hacktobered/hacktobered.com/blob/main/CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](https://github.com/hacktobered/hacktobered.com/blob/main/CODE_OF_CONDUCT.md)

- Create an issue of the project or a feature you would like to add in the project and get the task assigned for youself.(Issue can be any bug fixes or any feature you want to add in this project).

- Fork the repo to your Github.<br/>

- Clone the Repo by going to your local Git Client in a particular local folder in your local machine by using this command with your forked repository link in place of below given link: <br/>
  `git clone https://github.com/<please write your git username here>/hacktobered.com.git`
- Create a branch using below command.
  `git branch <your branch name>`
- Checkout to your branch.
  `git checkout <your branch name>`
- Add your code in your local machine folder.
  `git add . `
- Commit your changes.
  `git commit -m "<add your message here>"`
- Push your changes.
  `git push --set-upstream origin <your branch name>`

- Make a pull request! (compare your branch with the owner main branch)

## Tech Stack:

- React, Next.js, Typescript
- [Chakra UI](https://chakra-ui.com/) component library
- [Next-Auth](https://next-auth.js.org/)
- (Optional) MongoDB - if you want to save user details.


# Our Amazing Contributors
<br>
<div align="center">

<a href="https://github.com/hacktobered/hacktobered.com/contributors">
  <img src="https://contrib.rocks/image?repo=hacktobered/hacktobered.com&&max=817" />
</a>
</div>

<br>
<div align="center">
<h3>Show some ❤️ by starring this awesome repository!</h3>
</div>
