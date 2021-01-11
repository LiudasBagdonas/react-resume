import './index.css';
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

function App() {
    return (
        <div className="App">
            <main>
                <div className="wrapper">
                    <section className="header-box">
                        <div className="header-top-rectangle">
                            <Select
                                options={[
                                    { value: "en", children: "English" },
                                    { value: "lt", children: "Lietuvių" },
                                ]}
                                className="hero-select-language"
                            />
                        </div>
                        <div className="header-bot-rectangle">
                            <h1>LIUDAS BAGDONAS</h1>
                            <TitleBox className="profession-box" title="PROGRAMMER" />
                        </div>
                    </section>
                    <section className="links-aboutme-box">
                        <ContentBox title="LINKS" className="links-box">
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-linkedin link-icon"></FontIcon>
                                <Link
                                    href="http://linkedin.com/in/liudas-bagdonas-988b631b3"
                                    target="_bank"
                                    className="media-text"
                                    children="LINKEDIN/Liudas"></Link>
                            </LinkBox>
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-twitter-square link-icon"></FontIcon>
                                <Link
                                    href=""
                                    target="_bank"
                                    className="media-text"
                                    children="TWITTER/@user-handle"></Link>
                            </LinkBox>
                            <LinkBox className="media-link-box">
                                <FontIcon className="fa fa-github link-icon"></FontIcon>
                                <Link
                                    href="https://github.com/LiudasBagdonas"
                                    target="_bank"
                                    className="media-text"
                                    children="GITHUB/Username"></Link>
                            </LinkBox>
                            <LinkBox className="media-link-box">
                                <FontIcon className="fab fa-dev link-icon"></FontIcon>
                                <Link
                                    href=""
                                    target="_bank"
                                    className="media-text"
                                    children="BLOG/blog-name"></Link>
                            </LinkBox>
                        </ContentBox>
                        <ContentBox className="aboutme-box" title="ABOUT ME">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero.
                            Vestibulum
                            vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue
                            egestas,
                            dapibus justo et, lobortis ex. Nullam tortor diam, venenatis at enim a, lacinia
                            porttitor
                            erat. Vivamus tempor dictum leo id aliquam. Praesent elit lacus, tempus ac vehicula in,
                            imperdiet dapibus elit. Nullam scelerisque euismod leo id vestibulum. Lorem ipsum dolor
                            sit
                            amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis
                                diam. </p>
                        </ContentBox>
                    </section>
                    <section className="education-skills-box">
                        <ContentBox className="education-box" title="EDUCATION">
                            <EducationInfo
                                school="SCHOOL NAME"
                                year="2009-2013"
                                degree="Bachelor"
                            />
                            <Divider half />
                            <EducationInfo
                                school="SCHOOL NAME"
                                year="2015-2017"
                                degree="Master"
                            />
                        </ContentBox>
                        <ContentBox className="skills-box" title="PERSONAL SKILLS">
                            <Pill color="green">TEAMWORK</Pill>
                            <Pill color="yellow">COMMUNICATION</Pill>
                            <Pill color="red">ORGANIZATION</Pill>
                        </ContentBox>
                        <ContentBox className="skills-box" title="TECHNICAL SKILLS">
                            <Pill color="green">HTML</Pill>
                            <Pill color="green">CSS/SCSS</Pill>
                            <Pill color="yellow">JAVASCRIPT</Pill>
                            <Pill color="yellow">REACT.JS</Pill>
                        </ContentBox>
                    </section>
                    <ContentBox className="experience-box" title="WORK EXPERIENCE">
                        <section className="experience-positions-box">
                            <WorkExperience
                                jobPosition="JOB POSITION"
                                jobInfo={[{ children: 'Company' }, { children: '2018 - present' }]}
                                list={[{ children: '• Lorem ipsum dolor' }, { children: '• Consectetur adipiscing elit' }]}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
                                libero.
                                Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                                Suspendisse non
                                augue.
                            </WorkExperience>
                            <WorkExperience
                                jobPosition="JOB POSITION"
                                jobInfo={[{ children: 'Company' }, { children: '2016 - 2018' }]}
                                list={[{ children: '• Lorem ipsum dolor' }, { children: '• Consectetur adipiscing elit' }]}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
                                libero.
                                Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                                Suspendisse non
                                augue.
                            </WorkExperience>
                            <WorkExperience
                                jobPosition="JOB POSITION"
                                jobInfo={[{ children: 'Company' }, { children: '2014 - 2016' }]}
                                list={[{ children: '• Lorem ipsum dolor' }, { children: '• Consectetur adipiscing elit' }]}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo
                                libero.
                                Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia.
                                Suspendisse non
                                augue.
                            </WorkExperience>
                        </section>
                    </ContentBox>
                    <section className="contacts-box">
                        <Divider />
                        <div className="contacts-content-box">
                            <ContactsInfoBox
                                className="address-box"
                                text={[{ children: 'Imaginary st.' }, { children: 'Vilnius, Lithuania' }]}
                            >
                                <TitleBox
                                    className="contacts-title"
                                    title="ADDRESS"
                                />
                            </ContactsInfoBox>
                            <ContactsInfoBox className="contact-box">
                                <TitleBox className="contacts-title" title="CONTACTS" />
                                <Link href="tel:+3762940195" className="contact-phone">+37062940195</Link>
                                <Link href="mailto:liudasbagd@gmail.com" className="contact-email">liudasbagd@gmail.com</Link>
                            </ContactsInfoBox>
                            <ContactsInfoBox className="social-box">
                                <TitleBox className="contacts-title" title="SOCIAL" />
                                <Link
                                    href="http://linkedin.com/in/liudas-bagdonas-988b631b3"
                                    target="_blank"
                                    className="social-link"
                                >LINKEDIN/Username</Link>
                                <Link
                                    href="https://github.com/LiudasBagdonas"
                                    target="_blank"
                                    className="social-link"
                                >GITHUB/LiudasBagdonas</Link>
                            </ContactsInfoBox>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default App;
