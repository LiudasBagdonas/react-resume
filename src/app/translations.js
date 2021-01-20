const translations = {
    en: {
        header: {
            profession: { title: 'PROGRAMMER' }
        },
        main: {
            links: {
                title: 'LINKS',
                text: ''
            },
            about: {
                title: 'ABOUT ME',
                text: "After graduating university in 2013 I started working as a barmen. Few years ago I got interested in web developement and decided to change my qualification. After two years of self teaching I signed in and started an intensive Full-Stack studies at CodeAcademy. Now, six months later I'm looking for my first programmer job and an oportunity take root in IT industry."

            },
            education: {
                title: 'EDUCATION',
                schools: [
                    { school: 'CodeAcademy', year: '2021-present', degree: 'React.js' },
                    { school: 'CodeAcademy', year: '2020-2020', degree: 'Full-Stack(PHP & JavaScript)' },
                    { school: 'Lithuanian University of Educological Science', year: '2015-2017', degree: 'Master of Philosophy' },
                    { school: 'Lithuanian University of Educological Science', year: '2009-2013', degree: 'Bachelor of Philosophy' },
                ]
            },
            personalSkills: {
                title: 'PERSONAL SKILLS',
                pills: [
                    { title: 'TEAMWORK', color: 'green' },
                    { title: 'ORGANIZATION', color: 'green' },
                    { title: 'RESPONSIBILITY', color: 'green' },
                    { title: 'COMMUNICATION', color: 'yellow' },
                ]
            },
            technicalSkills: {
                title: 'TECHNICAL SKILLS',
                pills: [
                    { title: 'HTML', color: 'green' },
                    { title: 'CSS', color: 'green' },
                    { title: 'JAVASCRIPT', color: 'yellow' },
                    { title: 'PHP', color: 'yellow' },
                    { title: 'MySQL', color: 'red' },
                    { title: 'REACT.JS', color: 'red' }
                ]
            },
            workExperience: {
                title: 'WORK EXPERIENCE',
                positions: [
                    {
                        title: 'BARMAN/ADMINISTRATOR',
                        company: 'Mr. Pub',
                        year: '2014-2020',
                        text: 'Muzikos Rūsys owners opened a new bar and I was asked to maintain it. I was responsible for ordering and receiving supplies, receiving registrations, solving technical problems, keeping bar clean, solving conflict situations, solving unexpected problems, instructing and training new employees, serving customers.',
                        list: []
                    },
                    {
                        title: 'BARMAN',
                        company: 'Muzikos Rūsys/Variokas',
                        year: '2013-2018',
                        text: "First I was employed at Muzikos Rūsys, where I was responsible for keeping bar clean, solving conflict situations, solving unexpected problems, instructing and training new employees and, ofcourse, serving customers. Few years later, after a reconstruction, bar changed name to 'Variokas', where i continued working with same responsibilities.",
                        list: []
                    }
                ]
            }
        },
        footer: [
            {
                title: 'ADDRESS',
                values: [
                    {
                        text: "Didlaukio St.",
                        link: []
                    },
                    {
                        text: "Vilnius, Lithuania",
                        link: []
                    }
                ]
            },
            {
                title: 'CONTACTS',
                values: [
                    {
                        text: '',
                        link: [{
                            text: '+37062940195',
                            href: "tel:+3762940195",
                            target: "",
                            className: "contact-phone"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'liudasbagd@gmail.com',
                            href: "mailto:liudasbagd@gmail.com",
                            target: "",
                            className: "contact-email"
                        }]
                    }
                ]
            },
            {
                title: "SOCIAL",
                values: [
                    {
                        text: '',
                        link: [{
                            text: 'LINKEDIN/Username',
                            href: "http://linkedin.com/in/liudas-bagdonas-988b631b3",
                            target: "_blank",
                            className: "social-link"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                                text: 'GITHUB/LiudasBagdonas',
                            href: "https://github.com/LiudasBagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    }
                ]
            }

        ]
    },
    lt: {
        header: {
            profession: { title: 'PROGRAMUOTOJAS' }
        },
        main: {
            links: {
                title: 'NUORODOS',
                text: ''
            },
            about: {
                title: 'APIE MANE',
                text: 'Baigus universitetą 2013 metais pradėjau dirbti barmenu. Prieš keletą metų susidomėjau internetinių puslapių kūrimu ir nuspręndžiau keisti profesiją. Po dvejų savarankiško mokymosi metų įstojau į CodeAcademį, kur baigiau Full-Stack kursus. Dabar, po šešių mėnesių intensyvių studijų, ieškau savo pirmojo programuotojo darbo ir galimybės įsitvirtinti IT srityje.'

            },
            education: {
                title: 'IŠSILAVINIMAS',
                schools: [
                    { school: 'CodeAcademy', year: '2021-dabar', degree: 'React.js' },
                    { school: 'CodeAcademy', year: '2020-2020', degree: 'Full-Stack(PHP & JavaScript)' },
                    { school: 'Lietuvos Edukologijos Universitetas', year: '2015-2017', degree: 'Filosofijos bakalauras' },
                    { school: 'Lietuvos Edukologijos Universitetas', year: '2009-2013', degree: 'Filosofijos bakalauras' },
                ]
            },
            personalSkills: {
                title: 'ASMENINIAI ĮGŪDŽIAI',
                pills: [
                    { title: 'KOMANDIŠKUMAS', color: 'green' },
                    { title: 'ORGANIZUOTUMAS', color: 'green' },
                    {title: 'ATSAKINGUMAS', color: 'green'},
                    { title: 'BENDRAVIMAS', color: 'yellow' },
                ]
            },
            technicalSkills: {
                title: 'TECHNINIAI ĮGŪDŽIAI',
                pills: [
                    { title: 'HTML', color: 'green' },
                    { title: 'CSS', color: 'green' },
                    { title: 'JAVASCRIPT', color: 'yellow' },
                    { title: 'PHP', color: 'yellow' },
                    { title: 'MySQL', color: 'red' },
                    { title: 'REACT.JS', color: 'red' }
                ]
            },
            workExperience: {
                title: 'PATIRTIS',
                positions: [
                    {
                        title: 'BARMENAS/ADMINISTRATORIUS',
                        company: 'Mr. Pub',
                        year: '2014-2020',
                        text: 'Muzikos Rūsio savininkai atidarė naują barą, kur man buvo pasiūlyta jį prižiūrėti. Buvau atsakingas už prekių užsakymą ir priėmimą, registracijų priemima, techninių problemų sprendimą, patalpų tvarkos priežiūrą, konfliktų sprendimą, nenumatytų problemu sprendimą, naujokų atranką ir apmokymą, klientų aptarnavimą.',
                        list: []
                    },
                    {
                        title: 'BARMENAS',
                        company: 'Muzikos Rūsys/Variokas',
                        year: '2013-2018',
                        text: "Pirma įsidarbinau Muzikos Rūsyje, kur buvau atsakingas už švarą ir tvarką baro patalpose, konfliktinių situacijų sprendimą, nenumatytų problemų sprendimą, naujokų apmokymą ir, žinoma, klientų aptarnavimą. Po keletos metų, po rekonstrukcijos, baras persivadino į 'Variokas', kur toliau dirbau ir buvau atsakingas už tuos pačius dalykus.",
                        list: []
                    }
                ]
            }
        },
        footer: [
            {
                title: 'ADRESAS',
                values: [
                    {
                        text: 'Didlaukio g.',
                        link: []
                    },
                    {
                        text: 'Vilnius, Lithuania',
                        link: []
                    }
                ]
            },
            {
                title: 'KONTAKTAI',
                values: [
                    {
                        text: '',
                        link: [{
                            text: '+37062940195',
                            href: "tel:+3762940195",
                            target: "",
                            className: "contact-phone"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'liudasbagd@gmail.com',
                            href: "mailto:liudasbagd@gmail.com",
                            target: "",
                            className: "contact-email"
                        }]
                    }
                ]
            },
            {
                title: "NUORODOS",
                values: [
                    {
                        text: '',
                        link: [{
                            text: 'LINKEDIN/Username',
                            href: "http://linkedin.com/in/liudas-bagdonas-988b631b3",
                            target: "_blank",
                            className: "social-link"
                        }]
                    },
                    {
                        text: '',
                        link: [{
                            text: 'GITHUB/LiudasBagdonas',
                            href: "https://github.com/LiudasBagdonas",
                            target: "_blank",
                            className: "social-link"
                        }]
                    }
                ]
            }

        ]
    },
}

export default translations;