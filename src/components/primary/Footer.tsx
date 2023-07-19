// Componente principal de exportación
export default function Footer(): JSX.Element{
    return (
        <footer className="footer">
            <div className="icons-footer">
                <img src="assets/icons/logo-footer.svg" alt="logo-empresa"/>
                
                <ul className="list-icons-footer">
                    <li> <a href="" className="anchor"><img src="assets/icons/icon-facebook.svg" alt="icon"/></a> </li>
                    <li> <a href="" className="anchor"><img src="assets/icons/icon-youtube.svg" alt="icon"/></a> </li>
                    <li> <a href="" className="anchor"><img src="assets/icons/icon-twitter.svg" alt="icon"/></a> </li>
                    <li> <a href="" className="anchor"><img src="assets/icons/icon-pinterest.svg" alt="icon"/></a> </li>
                    <li> <a href="" className="anchor"><img src="assets/icons/icon-instagram.svg" alt="icon"/></a> </li>
                </ul>
            </div>

            <ul className="links-footer">
                <li> <a href="" className="anchor">About us</a> </li>
                <li> <a href="" className="anchor">Contact</a> </li>
                <li> <a href="" className="anchor">Blog</a> </li>
                <li> <a href="" className="anchor">Careers</a> </li>
                <li> <a href="" className="anchor">Support</a> </li>
                <li> <a href="" className="anchor">Privacity Policy</a> </li>
            </ul>

            <div className="button-footer">
                <button className="request-invite">Request invite</button>
                <p>&copy; Easybank, All Rights Reserved</p>
            </div>
        </footer>
    );
}