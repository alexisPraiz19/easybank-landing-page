export default function hiddeShowMenuMobile(e:any){
    // Elementos del DOM 
    const menuLinks         = document.querySelector(".menu-links") as HTMLUListElement;
    const menuMobileButtons = e.target.parentElement.parentElement as HTMLDivElement;
    const buttonHamburger   = menuMobileButtons.firstElementChild as HTMLButtonElement;
    const lightBox          = menuMobileButtons.nextElementSibling as HTMLDivElement;
    
    // Función para mostrar u ocultar icono "hamburger/close" del menu mobile
    menuMobileButtons.childNodes.forEach((element:any) => element.classList.toggle("hidde"));
    
    // Verificar si el icono "hamburger" es visible o no para mostrar los estilos del menu mobile
    if(buttonHamburger.classList.contains("hidde")){
        lightBox.classList.add("show-light-box");
        menuLinks.classList.add("show-menu-links");

    }else{
        lightBox.classList.remove("show-light-box");
        menuLinks.classList.remove("show-menu-links");
    }
};