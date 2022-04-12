---
project: YourRoomz
slug: yourroomz
index: 02
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae mi a nulla commodo mollis et at dolor. Curabitur consectetur ultrices nulla. Maecenas venenatis ante ac urna interdum, eget fermentum nunc interdum. Phasellus efficitur velit ex, id volutpat elit iaculis fermentum. Aenean quis vehicula eros. Suspendisse potenti. Sed sit amet.
github: https://github.com/royanger/YourRoomz
preview: https://yourroomz.com/
techstack:
   - React
   - Postgres
   - Node
   - GraphQL
   - Prisma
   - Redux Toolkit
   - React Query
   - Passport
   - Rainforest API
image: yourroomz
gallery:
   - yourroomz
   - yourroomz-1
   - yourroomz-2
   - yourroomz-3
   - yourroomz-4
   - yourroomz-5
   - yourroomz-6
   - yourroomz-7
   - yourroomz-8
   - yourroomz-9
   - yourroomz-10
---

## What is YourRoomz?

YourRoomz is a webapp built as part of the [Co.Lab](https://www.joincolab.io/) program. Co.Lab is a two month program which teams up a Project Manager, Designer and Developers. They spend those eight weeks designing and developing an application as a MVP.

> Technology impacts a global audience - all the more value for the industry to be made up of people from different backgrounds, each bringing their unique perspectives and lived experiences to the table. And this is not a wildly adopted mindset… just yet. Co.Lab will help us get there by giving people from all walks of life the real-world, practical experience to confidently break into (and thrive within) the tech industry. We want to spark action, enable folks to learn by doing, and celebrate achievements as a true collective. -- _Co.Lab [mission statement](https://www.joincolab.io/our-mission)_

## How was it built?

The app features a frontend built with React, react-router, redux-toolkit and react-query. The frontend connects to a Node Express API, which provides authentication services via Passport and connects to a Postgres database. Most of the API routes are handled via a GraphQL endpoint. The API also connects to the Rainforest API, which allows the API to query Amazon product listings to build recommendations for the user.