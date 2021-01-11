import './index.css'

function Divider({isFancy, half}) {

    const className = isFancy ? "box-1" : "";
    const width = half ? 'w-50' : "" ;
    return (
        <div className={`underline-box-2 ${width}`}>
            <div className={`underline-${className}`}></div>
        </div>
    );
}

export default Divider;