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
//         type: ["Static Pubmat", "Motion Graphics", "3D"],
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
//             processImages:["process1.jpg","process2.jpg"],
//             lessons:"This is a lesson.",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg","process2.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
            software:["Canva","Photoshop"],
            objective:"",
            description:"",
            processImages:[],
            lessons:"",
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
            software:["Canva", "Photoshop"],
            objective:"",
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg","process2.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg","process2.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg", "process2.jpg", "process3.jpg", "process4.jpg", "process5.jpg", "process6.jpg","process7.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        priority: 14,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"I am introduced to After Effects with this Project.",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["After Effects","Photoshop"],
            objective:"Make Shit Move",
            description:"It's supposed to be just a static pubmat. Well, why not explore unfamiliar territory?",
            processImages:[],
            lessons:"Learned the very basics of key framing, and organizing shit.",
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
        featured: true,
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        priority: 17,
        type: ["Motion Graphics"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"",
        action:{
            type:"video",
            source:"preview.mp4"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"",
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        featured: true,
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
            description:"",
            processImages:[],
            lessons:"",
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
        priority: 21,
        type: ["Static Pubmat"],
        thumbnail: "thumbnail.jpg",
        shortDescription:"A collaborative project with FEU Tech's Communication Office.",
        action:{
            type:"image",
            source:"cover.jpg"
        },
        details:{
            role:"",
            software:["Photoshop"],
            objective:"To highlight achievements and milestones of FEU Alabang, FEU Diliman, and FEU Tech.",
            description:"",
            processImages:["process1.jpg","process2.jpg","process3.jpg","process4.jpg","process5.jpg","process6.jpg","process7.jpg","process8.jpg"],
            lessons:"",
            links:[
                {label:"Heyzine Link", url:"https://heyzine.com/flip-book/574ef6415d.html"}
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg","process2.jpg","process3.jpg","process4.jpg","process5.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[""],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        priority: 30,
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:[""],
            lessons:"",
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
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
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
        priority: 33,
        type: ["Static Pubmat"],
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
            description:"",
            processImages:["process1.jpg"],
            lessons:"",
            links:[
                {
                }
            ]
        }
    }
    
    
];
