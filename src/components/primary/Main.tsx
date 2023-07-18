// Componentes de complementación
import Hero from "../common/Hero";
import WhyChoose from "./WhyChoose";
import LastArticles from "./LastArticles";

// Componente principal de exportaión
export default function Main(): JSX.Element{
    return (
        <main className="main">
            <Hero/>
            <WhyChoose/>
            <LastArticles/>
        </main>
    );
};