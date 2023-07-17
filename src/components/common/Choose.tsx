// Componente principal de exportación - Articulo para la sección "why choose"
interface Choose{
    icon: string;
    title: string;
    text: string;
}

export default function Choose({icon, title, text}:Choose): JSX.Element{
    return (
        <article className="reason">
            <img src={icon} alt={`icon-${icon}`} className="icon"/>

            <h3 className="title-color">{ title }</h3>

            <p className="text-color"> { text } </p>
        </article>
    );
}