// Lógica TS
import hiddeShowMenuMobile from "../../typescript/hiddeShowMenuMobile";

// Componente pricipal de exportación
export default function Menu(): JSX.Element{
    return (
        <nav className="menu">
            <img src="/assets/icons/logo.svg" alt="logo-easybank" className="logo-easybank"/>

            <ul className="menu-links">
                <li><a href="#home" className="text-color">Home</a></li>
                <li><a href="#about" className="text-color">About</a></li>
                <li><a href="#contact" className="text-color">Contact</a></li>
                <li><a href="#blog" className="text-color">Blog</a></li>
                <li><a href="#careers" className="text-color">Careers</a></li>
            </ul>

            <button className="request-invite">Request invite</button>

            <div className="menu-mobile-buttons" onClick={(e)=> hiddeShowMenuMobile(e)}>
                <button className="hamburger"> <img src="/assets/icons/icon-hamburger.svg" alt="icon-hamburger"/> </button>
                <button className="close hidde"> <img src="/assets/icons/icon-close.svg" alt="icon-close"/> </button>
            </div>

            <div className="light-box"></div>
        </nav>
    );
};