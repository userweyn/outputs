//type: image, video, external
//video=preview.mp4
//image=cover.jpg

// {
//         id: "sample-project",
//         folder: "sample-project",
//         title: "Sample Project Display",
//         year: 2026,
//         featured: trye,
//         priority: 100,
//         type: ["Static Pubmats", "Motion Graphics", "3D"],
//         thumbnail: "thumbnail.jpg",
//         shortDescription:"This is a short description.",
//         action:{
//             type:"image",
//             source:"cover.jpg"
//         },
//         details:{
//             role:"Graphic Designer",
//             software:["Photoshop","After Effects","Maya"],
//             objective:"This is an objective.",
//             description:"This is a description",
//             mediaTitle:"Gallery",
//             media:["img1.jpg","img2.jpg"],
//             note:"This is a lesson.",
//             links:[{label:"First Link", url:"https://link.com"},{label:"Second Link", url:"https://link.com"}]
//         }
//     }

const projects = [
    {
        id: "feu-diliman-firedrill",
        folder: "feu-diliman-firedrill",
        title: "FEU Diliman Fire Drill",
        year: 2026,
        featured: false,
        priority: 1,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg","03.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-earthquakedrill",
        folder: "feu-diliman-earthquakedrill",
        title: "FEU Diliman Earthquake Drill",
        year: 2026,
        featured: false,
        priority: 2,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-eidaladha",
        folder: "feu-eidaladha",
        title: "FEU Eid Al-Adha",
        year: 2026,
        featured: false,
        priority:3,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop","Canva"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-eid-alfitr",
        folder: "feu-eidalfitr",
        title: "FEU Eid Al-Fitr",
        year: 2026,
        featured: false,
        priority: 4,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop","Canva"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-bstourism",
        folder: "feu-diliman-bstourism",
        title: "FEU Diliman BS Tourism Management",
        year: 2026,
        featured: false,
        priority: 5,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-taiwan",
        folder: "feu-diliman-taiwan",
        title: "FEU Diliman Taiwan Educational Tour",
        year: 2026,
        featured: false,
        priority: 6,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg","03.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-bsit",
        folder: "feu-diliman-bsit",
        title: "FEU Diliman BS Information Technology",
        year: 2026,
        featured: false ,
        priority: 7,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            description:"",
            mediaTitle:"Iteration/s",
            media:["01.jpg","02.jpg","03.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-bscs",
        folder: "feu-diliman-bscs",
        title: "FEU Diliman BS Computer Science",
        year: 2026,
        featured: false,
        priority: 8,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Iteration/s",
            media:["01.jpg","02.jpg","03.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-shs",
        folder: "feu-diliman-shs",
        title: "FEU Diliman BS Senior High School",
        year: 2026,
        featured: false,
        priority: 9,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-holyweek",
        folder: "feu-holyweek",
        title: "FEU Holy Week Series",
        year: 2026,
        featured: false,
        priority: 10,
        type: ["Static Pubmats", "Series"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Series",
            media:["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg","07.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-mothersday",
        folder: "feu-mothersday",
        title: "FEU Mother's Day",
        year: 2026,
        featured: false,
        priority: 11,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-fathersday",
        folder: "feu-fathersday",
        title: "FEU Father's's Day",
        year: 2026,
        featured: false,
        priority: 12,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-muntinlupaday",
        folder: "feu-alabang-muntinlupaday",
        title: "FEU Alabang Muntinlupa City Day",
        year: 2026,
        featured: false,
        priority: 13,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-tech-maniladay",
        folder: "feu-tech-maniladay",
        title: "FEU Tech Manila Day",
        year: 2026,
        featured: true,
        priority: 100,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"This project introduced me to After Effects, kinda cool.",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop", "After Effects"],
            objective:"It's supposed to be just a static pubmat. But why not explore unfamiliar territory?",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-laborday",
        folder: "feu-laborday",
        title: "FEU Labor Day",
        year: 2026,
        featured: false,
        priority: 15,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop","After Effects"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-bonifacioday",
        folder: "feu-bonifacioday",
        title: "FEU Bonifacio Day",
        year: 2026,
        featured: false,
        priority: 16,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-rizaday",
        folder: "feu-rizalday",
        title: "FEU Rizal Day",
        year: 2026,
        featured: true,
        priority: 101,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"My attempt at creating an infographic-style character animation.",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop", "After Effects"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-qcday",
        folder: "feu-diliman-qcday",
        title: "FEU Diliman Quezon City Day",
        year: 2026,
        featured: false,
        priority: 18,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Iteration/s",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-ninoyday",
        folder: "feu-ninoyday",
        title: "FEU Ninoy Aquino Day",
        year: 2026,
        featured: false,
        priority: 19,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-independenceday",
        folder: "feu-independenceday",
        title: "FEU Independence Day",
        year: 2026,
        featured: false,
        priority: 20,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop","After Effects"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-magazine-vol5-7",
        folder: "feu-magazine-vol5-7",
        title: "FEU Magazine Volume 5-7",
        year: 2026,
        featured: true,
        priority: 102,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"A collaborative project with FEU Tech's Communication Office. Click details to view the spreads I made.",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"To highlight achievements and milestones of FEU Alabang, FEU Diliman, and FEU Tech.",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Spreads",
            media:["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg","07.jpg","08.jpg","09.jpg"],
            note:"",
            links:[
                {label:"Heyzine Link", url:"https://heyzine.com/flip-book/574ef6415d.html"},
                {label: "FEU Tech's FB Post", url:"https://www.facebook.com/photo?fbid=1278197641137074&set=a.491944886429024"}
            ]
        }
    },
    {
        id: "feu-alabang-newcourse",
        folder: "feu-alabang-newcourse",
        title: "FEU Alabang New Course",
        year: 2026,
        featured: false,
        priority: 22,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg","06.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-taiwan",
        folder: "feu-taiwan",
        title: "FEU Taiwan Educational Tour",
        year: 2026,
        featured: false,
        priority: 23,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-earlybird",
        folder: "feu-diliman-earlybird",
        title: "FEU Diliman Early Bird",
        year: 2026,
        featured: false,
        priority: 24,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-firesafety",
        folder: "feu-diliman-firesafety",
        title: "FEU Diliman Fire Safety Seminar",
        year: 2026,
        featured: false,
        priority: 25,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-edsaanniversary",
        folder: "feu-edsaanniversary",
        title: "FEU Edsa Anniversary",
        year: 2026,
        featured: false,
        priority: 26,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-canvasorientation",
        folder: "feu-alabang-canvasorientation",
        title: "FEU Alabang Canvas Orientation",
        year: 2026,
        featured: false,
        priority: 27,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-enrollmentschedule",
        folder: "feu-alabang-enrollmentschedule",
        title: "FEU Alabang Enrollment Schedule",
        year: 2026,
        featured: false,
        priority: 28,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-noplastic",
        folder: "feu-alabang-noplastic",
        title: "FEU Alabang No Plastic Wednesday",
        year: 2026,
        featured: false,
        priority: 29,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-covid",
        folder: "feu-diliman-covid",
        title: "FEU Diliman Covid Prevention Tips",
        year: 2026,
        featured: false,
        priority: 30,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-parentorientation",
        folder: "feu-alabang-parentorientation",
        title: "FEU Alabang SHS Parent Orientation",
        year: 2026,
        featured: false,
        priority: 31,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-tech-aicampuslaunch",
        folder: "feu-tech-aicampuslaunch",
        title: "FEU Tech AI Campus Launch",
        year: 2026,
        featured: false,
        priority: 32,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"",
            media:[],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-reorientation",
        folder: "feu-alabang-reorientation",
        title: "FEU Alabang Re-Orientation",
        year: 2026,
        featured: false,
        priority: 33,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg", "02.jpg","03.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-openingclass",
        folder: "feu-diliman-openingclass",
        title: "FEU Diliman Opening",
        year: 2026,
        featured: false,
        priority: 34,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-christmas-countdown",
        folder: "feu-christmas-countdown",
        title: "FEU Christmas Countdown",
        year: 2026,
        featured: false,
        priority: 35,
        type: ["Motion Graphics", "Series"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop", "After Effects"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Series",
            media:["01.mp4","02.mp4","03.mp4","04.mp4"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-diliman-fetcherid",
        folder: "feu-diliman-fetcherid",
        title: "FEU Diliman Fetcher's ID",
        year: 2026,
        featured: false,
        priority: 36,
        type: ["Static Pubmats"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Versions",
            media:["01.jpg","02.jpg","03.jpg", "04.jpg"],
            note:"",
            links:[
                {
                }
            ]
        }
    },
    {
        id: "feu-alabang-enrollment",
        folder: "feu-alabang-enrollment",
        title: "FEU Alabang Enrollment Series",
        year: 2026,
        featured: true,
        priority: 103,
        type: ["Series", "Motion Graphics", "3D"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"A personal project made to explore 3D modeling, rigging and animating. Click Details to view the series",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["After Effects", "Photoshop", "Autodesk Maya"],
            objective:"",
            description:"This project was created solely for portfolio purposes and was not commissioned, published, or affiliated with FEU Alabang.",
            mediaTitle:"Series",
            media:["01.mp4","02.mp4","03.mp4"],
            note:"",
            links:[{}
            ]
        }
    },
    {
        id: "feu-alabang-courses",
        folder: "feu-alabang-courses",
        title: "FEU Alabang Courses Introduction",
        year: 2026,
        featured: false,
        priority: 38,
        type: ["Series", "Motion Graphics", "3D"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"A personal project made to explore 3D modeling, rigging and animating. Clicking view redirects to a google drive.",
        action:{
            type:"external",
            source:"https://drive.google.com/file/d/1_J1Zo8C0LhpV5-bAwhgFZzxbzGOox1Hg/view?usp=drive_link"
        },
        details:{
            role:"",
            software:["After Effects", "Photoshop", "Autodesk Maya"],
            objective:"A personal project made to explore 3D modeling, rigging and animating.",
            description:"This project was created solely for portfolio purposes and was not commissioned, published, or affiliated with FEU Alabang.",
            mediaTitle:"",
            media:[],
            note:"The video exceed GitHub's 25 MB upload limit. Watch the video using the link below.",
            links:[{label:"Google Drive", url:"https://drive.google.com/file/d/1_J1Zo8C0LhpV5-bAwhgFZzxbzGOox1Hg/view?usp=drive_link"}
            ]
        }
    },
    {
        //39
        id: "feu-christmas-guess",
        folder: "feu-christmas-guess",
        title: "FEU Christmas Guessing Content",
        year: 2026,
        featured: true,
        priority: 100,
        type: ["Motion Graphics", "Series"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"A proposed christmas filler content post for FEU Alabang, FEU Diliman, and FEU Tech. Clicking view redirects to a google drive.",
        action:{
            type:"external",
            source:"https://drive.google.com/file/d/1F0IaJ6byUNNupKV0BgoiOv6e2ZfEVmOb/view?usp=drive_link"
        },
        details:{
            role:"",
            software:["After Effects", "Photoshop"],
            objective:"Create a filler christmas themed content for FEU Alabang, FEU Diliman, and FEU Tech",
            description:"This project was created during my internship at FEU Institute of Technology and is presented solely for portfolio purposes.",
            mediaTitle:"Images",
            media:["01.jpg","02.jpg","03.jpg"],
            note:"The video exceed GitHub's 25 MB upload limit. Watch the video using the link below.",
            links:[{label:"Google Drive", url:"https://drive.google.com/file/d/1F0IaJ6byUNNupKV0BgoiOv6e2ZfEVmOb/view?usp=drive_link"}
            ]
        }
    },
    {
        //40
        id: "feu-tech-photocoverage",
        folder: "feu-tech-photocoverage",
        title: "FEU Tech Event Photo Coverage",
        year: 2026,
        featured: true,
        priority: 102,
        type: ["Photography"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"Well, I am forced to do photography. I like it tho. Click Details to view the official posts featuring these photographs.",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop","Lightroom"],
            objective:"Capture and document campus events through photographs for FEU Tech's Happening Now FB Post.",
            description:"These events were covered during my internship at FEU Institute of Technology and are presented solely for portfolio purposes. Some posts feature a combination of photographs taken by my fellow intern and me.",
            mediaTitle:"",
            media:[],
            note:"Each link below leads to an FEU Tech Facebook post.",
            links:[
                {label:"In Pursuit of Progress: A Multimedia Arts Seminar", url:"https://www.facebook.com/share/p/1Bq48Z2UPy/"},
                {label:"Enrollment and Scholarship Consultation", url:"https://www.facebook.com/share/p/184LfyPuk3/"},
                {label:"AI Champions: Training the Trainers Session Day 2", url:"https://www.facebook.com/share/p/1BYF6QLKzG/"},
                {label:"AI Champions: Training the Trainers Session Day 1", url:"https://www.facebook.com/share/p/1EZonri5t9/"},
                {label:"Greenengineering: A Women's Month Gardening Workshop", url:"https://www.facebook.com/share/p/1EN7CEPgQN/"},
                {label:"Into the Code F++ Unbound", url:"https://www.facebook.com/share/p/1999Cjamvz/"}
            ]
        }
    }
    
];
