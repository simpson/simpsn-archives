---
title: Six reasons why I love Sass
photo_url: http://cdn2.hubspot.net/hub/185303/file-401303078-jpg/images/marquee/sass.jpg
---
My first use of Sass in a production environment came when I started working as a designer & developer on Product Marketing at HubSpot.

I had read a lot about LESS and Sass and the concepts of CSS pre-processors, and even dabbled with how they worked, but didn't fully understand how powerful they could be in my daily development workflow.

When I started at HubSpot I was tasked with starting the team that manages the HubSpot portfolio of websites from design, development, and general project management needs surrounding them.

The Interactive Content team manages mulitple sites, as we've grown our dedicated web team we've added some awesome people (Shoutout the current and past members of the Product Marketing Interactive Content team! Ben Lodge, Matt Lawson, Laura Marelic, Gabriela Lanza, and soon Stephanie Lee).

Without diving to deep, here are some quick datapoints on these sites:

- 1500+ site pages across multiple domains
- 3,200+ landing pages with offers across multiple domains
- 650+ page layout templates
- 7-8 Million unique pageviews across all domains

Managing this portfolio of sites with those numbers is a daunting task. Fortunately the new HubSpot COS is a big step ahead of the Legacy HubSpot CMS platform, but dealing with thousands of pages is never easy no matter what platfom you are.

With the help of two Senior Product Engineers (Tim Finley and Adam Schwartz) the team architected a Git repository where all the Sass and Coffeescript is committed and versioned allowing us to meet the demanding needs of the marketing team at HubSpot.

So here are my 5 reasons for really loving Sass and why it is now crucial for my development workflow.

## 1. Scale & Versioning

When you have thousands of pages in a large scale site or app, Sass is especially helpful in helping reduce the stress of such large scale. Even if you aren't dealing with a large scale website, Sass is still a powerful weapon to have for building a small scale style guide. Being ready for growth is always a good thing!

A big part of the scaling solution for us is the version control we get with Sass in our infrastructure. At a high level, every file we commit to GitHub is automatically queued up in Jenkins to be compiled and written to Amazon S3. This allows us the flexibility to push out new code at a moments notice while we do QA testing to make sure it won't break anything.

## 2. Variables

This is a pretty simple feature, yet it is incredible powerful when working with a large scale website. By creating variables you can easily pull them over and over to help create consistency with colors, sizes, etc... If you need to change the color of multiple elements, simply update the variable and voila it reflects in all those places.

