// Componentes principal de exportación
export default function Hero(): JSX.Element{
    return (
        <div className="hero">
            <div className="hero-texts">
                <h1 className="title-color">Next generation digital banking</h1>
                
                <p className="text-color">
                    Take your financial life online. Your Easybank account
                    will be a one-stop-shop for spending, saving,
                    bidgeting, investing, and much more.
                </p>

                <button className="request-invite">Request invite</button>
            </div>

            <figure className="hero-illustration"> 
                <img src="assets/images/image-mockups.png" alt="image-mockups" className="illustration"/>
            </figure>
        </div>
    );
};