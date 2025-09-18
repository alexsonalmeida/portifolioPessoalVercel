const projetosEscondidos = document.querySelectorAll('.projetoEscondido');
const verMaisProjetosButton = document.querySelector('.verMaisProjetos');
const linksProjetos = [
    "https://github.com/VictorM-Coder/Goorg-Application",
    "https://alexsonalmeida.github.io/calculadora/",
    "https://alexsonalmeida.github.io/placar-de-truco/",
    "https://github.com/alexsonalmeida/Octom",
    "https://github.com/danielft2/sippa-2",
    "https://github.com/danielft2/sharebook"
]

const mostrarProjetos = () => {
    projetosEscondidos.forEach(projeto => {
        projeto.classList.remove('projetoEscondido')
    });

    verMaisProjetosButton.parentNode.removeChild(verMaisProjetosButton);
}

const navegarParaIntroducao = () => {
    location.href = '#introducao';
}

const navegarParaProjeto = (index) => {
    window.open(linksProjetos[index]);
}