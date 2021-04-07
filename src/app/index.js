import './index.css';
import { Fragment } from 'react';

import Pill from './components/Pill';
import Divider from './components/Divider';
import Link from './components/Link';
import FontIcon from './components/FontIcon';
import LinkBox from './components/LinkBox';
import ContentBox from './components/ContentBox';
import WorkExperience from './components/WorkExperience';
import TitleBox from './components/TitleBox';
import ContactsInfoBox from './components/ContactsInfoBox';
import EducationInfo from './components/EducationInfo';
import Select from './components/Select';

import translations from './translations';
import { useState } from 'react';

function App() {

    const [lang, setLang] = useState('en')

    return (
        <div className="App">
            <main>
                <div className="wrapper">
                    <section className="header-box">
                        <div className="header-top-rectangle">
                            <Select
                                setLang={setLang}
                                options={[
                                    { value: "en", children: "English" },
                                    { value: "lt", children: "Lietuvių" },
                                ]}
                                className="hero-select-language"
                            />
                        </div>
                        <div className="header-bot-rectangle">
                            <h1>LIUDAS BAGDONAS</h1>
                            <TitleBox className="profession-box" title={translations[lang].header.profession.title} />
                        </div>
                    </section>
                    <section className="links-aboutme-box">
                        <ContentBox title={translations[lang].main.links.title} className="links-box">
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-linkedin link-icon"></FontIcon>
                                <Link
                                    href="http://linkedin.com/in/liudas-bagdonas"
                                    target="_blank"
                                    className="media-text"
                                    children="LINKEDIN/liudas-bagdonas"></Link>
                            </LinkBox>
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-github link-icon"></FontIcon>
                                <Link
                                    href="https://github.com/LiudasBagdonas"
                                    target="_blank"
                                    className="media-text"
                                    children="GITHUB/LiudasBagdonas"></Link>
                            </LinkBox>
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-briefcase link-icon"></FontIcon>
                                <Link
                                    href="https://liudas-bagdonas-portfolio.netlify.app/"
                                    target="_blank"
                                    className="media-text"
                                    children="Portfolio"></Link>
                            </LinkBox>
                        </ContentBox>
                        <ContentBox className="aboutme-box" title={translations[lang].main.about.title}>
                            <p>{translations[lang].main.about.text}</p>
                        </ContentBox>
                    </section>
                    <section className="content-box">
                        <section className="education-skills-box">
                            <ContentBox className="education-box" title={translations[lang].main.education.title}>

                                {translations[lang].main.education.schools.map((school, index) => (

                                    index !== translations[lang].main.education.schools.length - 1 ?
                                        <Fragment key={index}>
                                            <EducationInfo key={index} school={school.school} year={school.year} degree={school.degree} />
                                            <Divider half />
                                        </Fragment>
                                        :
                                        <Fragment key={index}>
                                            <EducationInfo key={index} school={school.school} year={school.year} degree={school.degree} />

                                        </Fragment>
                                ))}
                            </ContentBox>
                            {/* <ContentBox className="skills-box" title={translations[lang].main.personalSkills.title}>
                                {translations[lang].main.personalSkills.pills.map((pill, index) => (
                                    <Pill key={index} color={pill.color}>{pill.title}</Pill>
                                ))}
                            </ContentBox>
                            <ContentBox className="skills-box" title={translations[lang].main.technicalSkills.title}>
                                {translations[lang].main.technicalSkills.pills.map((pill, index) => (
                                    <Pill key={index} color={pill.color}>{pill.title}</Pill>
                                ))}
                            </ContentBox> */}
                        </section>
                        <section className="skills-experience-box">
                            <section className="pills-box">
                                <ContentBox className="skills-box" title={translations[lang].main.personalSkills.title}>
                                    {translations[lang].main.personalSkills.pills.map((pill, index) => (
                                        <Pill key={index} color={pill.color}>{pill.title}</Pill>
                                    ))}
                                </ContentBox>
                                <ContentBox className="skills-box" title={translations[lang].main.technicalSkills.title}>
                                    {translations[lang].main.technicalSkills.pills.map((pill, index) => (
                                        <Pill key={index} color={pill.color}>{pill.title}</Pill>
                                    ))}
                                </ContentBox>
                            </section>

                            <ContentBox className="experience-box" title={translations[lang].main.workExperience.title}>
                                <section className="experience-positions-box">
                                    {translations[lang].main.workExperience.positions.map((item, index) => (
                                        <WorkExperience
                                            jobPosition={item.title}
                                            jobInfo={[item.company, item.year]}
                                            children={item.text}
                                            list={item.list}
                                            key={index}>
                                            {item.text}
                                        </WorkExperience>
                                    ))}
                                </section>
                            </ContentBox>
                        </section>
                    </section>
                    <section className="contacts-box">
                        <Divider />
                        <div className="contacts-content-box">
                            {translations[lang].footer.map((item, index) => (
                                <ContactsInfoBox
                                    className="contact-box"
                                    key={index}
                                    text={item.values.map((value) => (
                                        value.text
                                    ))}
                                    link={item.values.map((value) => (
                                        value.link
                                    ))}
                                >
                                    <TitleBox
                                        key={index}
                                        className="contacts-title"
                                        title={item.title}
                                    />

                                </ContactsInfoBox>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
