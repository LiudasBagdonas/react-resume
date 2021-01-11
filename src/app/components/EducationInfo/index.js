import './index.css';

function EducationInfo({school, year, degree }) {

    return (
        <div className="education-info-box">
            <span className="education-text">{school}</span>
            <span className="education-text">{year}</span>
            <span className="education-text">{degree}</span>
        </div>
    );
}

export default EducationInfo;