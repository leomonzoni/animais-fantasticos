import AnimaNumeros from "./anima-numeros.js"

export default function fetchAnimais(url, target) {
  //cria a div contendo informaçoes com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div")
    div.classList.add("numero-animal")
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`
    return div
  }
  //preenche cada animal no DOM
  const numerosGrid = document.querySelector(target)

  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal)
    numerosGrid.appendChild(divAnimal)
  }
  //anima os numeros de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo")
    animaNumeros.init()
  }
  //puxa os animais através de uma arquivo json e cria cada animal ultilizando createanimal
  async function criarAnimais() {
    try {
      //fetch e espera a resposta e transforma eem json
      const animaisResponse = await fetch(url)
      const animaisJSON = await animaisResponse.json()
      //apos a tranformação de json, ativa as funçoes para preencher e animar os numeros

      animaisJSON.forEach((animal) => preencherAnimais(animal))
      animaAnimaisNumeros()
      initAnimaNumeros()
    } catch (erro) {
      console.log(erro)
    }
  }
  return criarAnimais()
}
