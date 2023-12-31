import debounce from "./debounce.js"

export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6
    this.checkDistance = debounce(this.checkDistance.bind(this), 200)
  }
  //pega a distancia de cada item em relaaço ao top odo site
  getDistance() {
    this.distance = [...this.sections].map((section) => {
      const offset = section.offsetTop
      return {
        element: section,
        offset: Math.floor(offset - this.windowMetade),
      }
    })
  }
  //verifica a distancia em cada objeto em relaçao ao scrool do site
  checkDistance() {
    console.log()
    this.distance.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("ativo")
      } else if (item.element.classList.contains("ativo")) {
        item.element.classList.remove("ativo")
      }
    })
  }

  init() {
    if (this.sections.length) {
      this.getDistance()
      this.checkDistance()
      window.addEventListener("scroll", this.checkDistance)
    }
    return this
  }
  //remnove o event de scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance)
  }
}
