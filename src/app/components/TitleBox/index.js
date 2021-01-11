import './index.css';

function TitleBox({className, title}) {

    return (
        <div className={className}>
            <p>{title}</p>
        </div>
    );
}

export default TitleBox;