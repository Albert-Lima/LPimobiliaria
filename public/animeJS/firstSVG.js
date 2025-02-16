function adjustViewBox() {
    const svg = document.querySelector('#svg');
    const clipPath = document.querySelector('#clip-path');
    const width = window.innerWidth;  
    const height = window.innerHeight;

    // Atualizando o viewBox do SVG
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Obter proporção da imagem
    const image = document.querySelector('#image');
    const img = new Image();
    img.src = image.getAttribute('href');
    img.onload = function () {
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const screenRatio = width / height;
        
        if (screenRatio < imgRatio) {
            image.removeAttribute('width', "100vw");
            image.setAttribute('height', '100vh');
        } else {
            image.setAttribute('width', '100vw');
            image.removeAttribute('height', '100vh');
        }
    };

    // Calcular os valores de clipPath com base na nova largura e altura
    const clipWidth = width;
    const clipHeight = height;
    const borderRadius = 20;

    // Ajustar as coordenadas do clipPath para reagir às novas dimensões
    const newPath = ` 
        M${borderRadius},0 
        L${clipWidth * 0.7},0
        L${clipWidth * 0.75},${clipHeight * 0.05}
        L${clipWidth - borderRadius },${clipHeight * 0.05} 
        A${borderRadius},${borderRadius} 0 0,1 ${clipWidth},${clipHeight * 0.05 + borderRadius }  
        L${clipWidth },${clipHeight * 0.72 - borderRadius} 
        A${borderRadius},${borderRadius} 0 0,1 ${clipWidth - borderRadius},${clipHeight * 0.72 }  
        L${clipWidth * 0.7},${clipHeight * 0.72 }  
        A${borderRadius },${borderRadius} 0 0,0 ${clipWidth * 0.7 - borderRadius},${clipHeight * 0.72 + borderRadius}  
        L${clipWidth * 0.7 - borderRadius},${clipHeight - borderRadius}
        A${borderRadius  },${borderRadius } 0 0,1 ${clipWidth * 0.7 - borderRadius  - borderRadius},${clipHeight} 
        L${clipWidth * 0 + borderRadius},${clipHeight}
        A${borderRadius},${borderRadius} 0 0,1 0,${clipHeight - borderRadius}
        L0,${clipHeight * 0 + borderRadius}
        A${borderRadius},${borderRadius} 0 0,1 ${borderRadius},0
        Z
    `;
    
    // Atualizando o path do clipPath
    clipPath.setAttribute('d', newPath);
}

// Chamar a função ao carregar a página e sempre que a janela for redimensionada
window.addEventListener('load', adjustViewBox);
window.addEventListener('resize', adjustViewBox);


/* Slides de imagens no topo */
const images = [
    "public/img/pexels-naimbic-2030037.jpg",
    "public/img/pexels-polina-kovaleva-5644367.jpg",
    "public/img/pexels-pixabay-271624 (1).jpg"
];

const slides = document.querySelectorAll(".SlideTop"); // Seleciona todas as divs de slide
let index = 0;
const imageElement = document.getElementById("image");

function changeSlide() {
    // Troca a imagem do slide SVG
    imageElement.setAttribute("href", images[index]);

    // Esconde todas as divs de slide
    slides.forEach(slide => slide.style.display = "none");

    // Exibe apenas a div correspondente ao índice atual
    slides[index].style.display = "block";

    // Atualiza o índice para o próximo slide
    index = (index + 1) % images.length;
}

// Inicia o slide automaticamente a cada 5 segundos
setInterval(changeSlide, 5000);

// Exibe o primeiro slide ao carregar a página
window.addEventListener("load", changeSlide);


/*clip-path do footer*/
function adjustFooterViewBox() {
    const svgFooter = document.querySelector('#svgFooter');
    const clipPathFooter = document.querySelector('#clip-pathFooter');
    const width = window.innerWidth;  
    const height = 300; // Define um tamanho menor para o footer

    // Atualizando o viewBox do SVG
    svgFooter.setAttribute('viewBox', `0 0 ${width} ${height}`);

    // Ajustar a largura e altura do background
    const backgroundFooter = document.querySelector('#backgroundFooter');
    backgroundFooter.setAttribute('width', width);
    backgroundFooter.setAttribute('height', height);

    // Definir o path do clipPath com as novas dimensões
    const borderRadius = 20;

    const newPathFooter = ` 
        M${borderRadius},${height * 0.2} 
        L${width * 0.2},${height * 0.2}
        L${width * 0.25},0
        L${width * 0.75},0 
        L${width * 0.8},${height * 0.2 }  
        L${width - borderRadius},${height * 0.2} 
        A${borderRadius},${borderRadius} 0 0,1 ${width},${height * 0.2 + borderRadius }  
        L${width},${height - borderRadius }  
        A${borderRadius },${borderRadius} 0 0,1 ${width - borderRadius},${height}  
        L${borderRadius},${height}
        A${borderRadius  },${borderRadius } 0 0,1 0,${height - borderRadius} 
        L0,${height * 0.2 + borderRadius}
        A${borderRadius},${borderRadius} 0,0,1 ${borderRadius}, ${height * 0.2}    
        Z
    `;

    // Atualizando o path do clipPath do footer
    clipPathFooter.setAttribute('d', newPathFooter);
}

// Chamar a função ao carregar a página e sempre que a janela for redimensionada
window.addEventListener('load', adjustFooterViewBox);
window.addEventListener('resize', adjustFooterViewBox);