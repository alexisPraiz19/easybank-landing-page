// Componentes de complementación
import Article from "../common/Article";

// Componente principal de exportación
export default function LastArticles(): JSX.Element{
    return (
        <section className="last-articles">
            <h2 className="title-color">Last Articles</h2>

            <div className="articles">
                <Article
                img   = "/assets/images/image-currency.jpg"
                by    = "By Claire Robinson"
                title = "Recive money in any currency with no fees"
                text  = "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single …"
                />

                <Article
                img   = "/assets/images/image-restaurant.jpg"
                by    = "By Wilson Hutton"
                title = "Treat yourself without worrying aboy money"
                text  = "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
                />

                <Article
                img   = "/assets/images/image-plane.jpg"
                by    = "By Wilson Hutton"
                title = "Take your Easybank card wherever you go"
                text  = "We want you to enjoy your travels. This is why we don't change any fees on purchases White you're abroad. We'll even show you …"
                />

                <Article
                img   = "/assets/images/image-confetti.jpg"
                by    = "By Claire Robinson"
                title = "Our invite-only Beta accounts are now live!"
                text  = "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site …"
                />
            </div>
        </section>
    );
}