import './index.css';

function WorkExperience({ jobPosition, jobInfo, children, list=''}) {

    return (
        <div className="possition-box">
            <h3>{jobPosition}</h3>
            {jobInfo.map((info, index) => (
                <div key={index}>
                    <p {...info}></p>
                </div>
            ))}
            <div className="position-text-box">
                <div className="position-text-description-box">
                    <p>
                        {children}
                    </p>
                </div>
               {list.map((listItem, index) => (
                   <div key={index}>
                       <p {...listItem}></p>
                   </div>
               ))}
            </div>
        </div>
    );
}

export default WorkExperience;