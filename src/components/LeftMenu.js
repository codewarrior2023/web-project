import logo from "../assets/logo.jpeg"
import home from "../assets/home.png"
import recipes from "../assets/recipes.png"
import contact from "../assets/contact.png"
import about from "../assets/about.png"
import Link from "./Link"

const LeftMenu = () => {
    return (  
        <div className="left-menu-container">
            <div className="logo-container"> 
                <img className="logo-image" src={logo} alt="sixsenses-kitchen-logo" />
            </div>
            <div className="links-container">
                <Link icon={home} text="Home"/>
                <Link icon={recipes} text="Recipes"/>
                <Link icon={contact} text="Contact Info"/>
                <Link icon={about} text="About Us"/>
            </div>
        </div>
    );
}
 
export default LeftMenu;