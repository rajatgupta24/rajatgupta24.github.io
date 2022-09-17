const blogs = [
    {
        img: "./assets/images/blog-1.png",
        title: "GSoC 2022 Community Bonding Period with Jenkins X",
        tags: [
            "",
            "",
            ""
        ],
        link: "https://rajatgupta24.github.io/blog/blogs/gsoc2022-community-bonding-period/",
        content: "Sharing my gsoc experiences with Jenkins X during Community Bonding Period"
    },
];

const awards = [
    {
        title: "The Linux Foundation Training (LiFT) Scholarship'2021 Winner",
        description: "I'm contributing to Open Source since my freshman year, at the same time I started learning Linux, it was cool to know something like Linux, but from Linux Foundation itself... made it my biggest achievement."
    },
    {
        title: "IEEE MSIT Project Committee Chairperson",
        description: "I joined IEEE in my freshman year as a team player of techincal team. And I ended my journey in my 3<sup>th</sup> year as Chairperson of Project Committee. During this I meet many mentors & have mentored many of my junior fellows."
    },
];


const work = [
    {
        img: "./assets/thoughtz.png",
        title: "Thoughtz.ai",
        li: [
            "Implemented AI & blockchain algorithms.",
            "Used React, Typescript to create a NFT marketplace.",
            "Implemented 10+ animation using React libraries."
        ],
        link: "https://www.thoughtz.ai/",
    },
    {
        img: "./assets/bditto.png",
        title: "BDitto",
        li: [
            "Implemented websockets with Nodejs & Django.",
            "Used React, Typescript to real-time social media app.",
            "Tested using cypress & deployed on Digital Ocean & Nginx."
        ],
        link: "https://www.bditto.com/",
    },
];

const workSection = document.querySelector(".projects");
const blogSection = document.querySelector(".blogs");
const awardSection = document.querySelector(".awards");

for (let i = 0; i < blogs.length; i++) {
    const e = blogs[i];
    const ele = document.createElement('div');
    ele.setAttribute("class", "card")

    ele.innerHTML = `
        <a href="${e.link}">
            <img src=${e.img} alt="">
            <div class="info">
                <h2>${e.title}</h2>
                <p class="date">Date: 12 June, 2022</p>
                <hr>
                <p>${e.content}</p>
            </div>
        </a>
    `;

    blogSection.appendChild(ele)
}

for (let i = 0; i < awards.length; i++) {
    const e = awards[i];
    const ele = document.createElement('div');
    ele.setAttribute("class", "card")

    ele.innerHTML = `
        <h3>${e.title}</h3>
        <p>${e.description}</p>
    `;

    awardSection.appendChild(ele)
}

for (let i = 0; i < work.length; i++) {
    const e = work[i];
    const ele = document.createElement('div');
    if (i % 2 == 0){
        ele.setAttribute("class", "card1")
    }
    else {
        ele.setAttribute("class", "card2")
    }

    ele.innerHTML = `
    <img src="${e.img}" alt="${e.title}">
    <div class="info">
        <h2 class="title">${e.title}</h2>
        <ul>
            <li>${e.li[0]}</li>
            <li>${e.li[2]}</li>
            <li>${e.li[2]}</li>
        </ul>
        <p>Visit: <a href="${e.link}">${e.title.toLowerCase()}</a></p>
    </div>
    `;

    workSection.appendChild(ele)
}

