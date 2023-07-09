export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros)
    this.observerClass = observerClass
    this.observerTarget = document.querySelector(observerTarget)
    //this do obj ao callback da mutaçao
    this.handleMutation = this.handleMutation.bind(this)
  }
  //recebe um elemento do dom com numero em seu texto, incrementa ap artir de 00 ate o numero final
  static incrementarNumero(numero) {
    const total = +numero.innerText
    const incremneto = Math.floor(total / 100)
    let start = 0
    const timer = setInterval(() => {
      start += incremneto
      numero.innerText = start
      if (start > total) {
        numero.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }
  //ativa incrmenetear numero para cada numero selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero)
    })
  }
  //funcao que ocorre quando a mutaçao ocorrer
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.animaNumeros()
    }
  }
  //adiciona o mutation observer para verificar quando a classe ativo é add ao element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, { attributes: true })
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.addMutationObserver()
    }
    return this
  }
}
