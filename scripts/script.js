const projetosEscondidos = document.querySelectorAll('.projetoEscondido');
const verMaisProjetosButton = document.querySelector('.verMaisProjetos');
const linksProjetos = [
    "https://github.com/VictorM-Coder/Goorg-Application",
    "https://alexsonalmeida.github.io/calculadora/",
    "https://alexsonalmeida.github.io/placar-de-truco/",
    "https://alexsonalmeida.github.io/loginpage/"
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