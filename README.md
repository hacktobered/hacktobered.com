# Hacktobered.com

I decided to build during (Hacktoberfest 2022)[https://hacktoberfest.com/].
Here are some details about its initial idea / problem statement, tech stack, how you can contribute, etc.

## Initial Idea / Problem Statement

> - I am a developer and made (Or am planning to) open-source contributions during HacktoberFest. 
> - Now, how can I share my hacktober achievements with others? Can I share via Instagram stories / WhatsApp Status / Twitter?
> - You can do it manually - copy and paste your PR links; create milestones and progress cards for social posts.
> - Is there any tool that simplifies the above manual steps?
> - Nope 😐!

**Let us build then!**

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
4. Run the development server:

```bash
npm run dev
# or
yarn dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Facing any issues? Feel free to open a ticket.

## Tech Stack:

- React, Next.js, Typescript
- [Chakra UI](https://chakra-ui.com/) component library
- [Next-Auth](https://next-auth.js.org/)

