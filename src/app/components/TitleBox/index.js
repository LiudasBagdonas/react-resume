import './index.css';

function TitleBox({className, title, index}) {

    return (
        <div key={index} className={className} >
            <p>{title}</p>
        </div>
    );
}

export default TitleBox;