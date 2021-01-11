import './index.css';

function ContactsInfoBox({className, children="", text=""}) {

    const textContent = text ?
    text.map((item, index) => (
        <div key={index}>
            <p {...item}></p>
        </div>
    )) : '';

    return (
        <div className={className}>
            {children}
            {textContent}
        </div>
    );
}

export default ContactsInfoBox;