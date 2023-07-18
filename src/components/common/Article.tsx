// Componente principal de exportación
interface Article{
    img: string;
    by: string;
    title: string;
    text: string;
}
export default function Article({img, by, title, text}:Article): JSX.Element{
    return (
        <article className="article">
            <a href="#"  className="article-texts" onClick={(e) => e.preventDefault()}>
                <img src={img} alt="image-article"/>
                
                <div>
                    <small className="text-color">{ by }</small>
                    <h4 className="title-color">{ title }</h4>
                    <p className="text-color">{ text }</p>
                </div>
            </a>
        </article>
    );
}