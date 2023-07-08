export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir)
    this.botaoFechar = document.querySelector(botaoFechar)
    this.containerModal = document.querySelector(containerModal)

    //bind this ao callback
    //fazer ref ao objeto
    //da classe
    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForaModal = this.cliqueForaModal.bind(this)
  }
  //abre ou fehca o modal
  toggleModal(event) {
    this.containerModal.classList.toggle("ativo")
  }
  //adicona os eventos de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault()
    this.toggleModal()
  }
  //fecha modal ao clicar doo lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal()
    }
  }
  //add os eventos aos elements do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal)
    this.botaoFechar.addEventListener("click", this.eventToggleModal)
    this.containerModal.addEventListener("click", this.cliqueForaModal)
  }
  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvents()
    }
    return this
  }
}
