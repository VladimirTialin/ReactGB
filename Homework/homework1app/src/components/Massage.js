import '../style/Massage.css';

function Massage({text}) {
    return (
        <div classname="Massage">
            <h1><snap classname="Massage_text">{text}</snap></h1>
        </div>
    );
}

export default Massage;