const Link = ({icon, text}) => {
    return (  
        <div className="link-button">
            <img className="link-image" src={icon} alt ="home-icon" />
            <p className="link-text"> {text} </p>
        </div>
    );
}
 
export default Link;