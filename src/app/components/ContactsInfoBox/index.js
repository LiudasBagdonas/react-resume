import './index.css';
import Link from '../Link';

function ContactsInfoBox({ className, link = "", text = "", children, }) {

    const textContent = text ?
        text.map((item, index) => (
            <div key={index}>
                <p>{item}</p>
            </div>
        )) : '';

    const linkContent = link ?
        link.map((item, index) => (
            item.map((linkValue, index) => (
                <div key={index}>
                    <Link href={linkValue.href} target={linkValue.target} className={linkValue.className}>{linkValue.text}</Link>
                </div>
            ))
                 
          
        )) : '';

    return (
        <div className={className}>
            {children}
            {linkContent}
            {textContent}
        </div>
    );
}

export default ContactsInfoBox;