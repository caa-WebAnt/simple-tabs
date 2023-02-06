export class SimpleTabs {

    links = []

    /**
     * 
     * @param {Array[]} links - HTML selector of tabs liste 
     */
    constructor(links) {
        this.links = links

        this.init()

    }

    init(){
        const has = window.location.hash
        if(has != ""){
            this.links.forEach(el => {
                if(el.getAttribute('href') === has ){
                    this.tabInitWithHas(el)
                }
            })
        }else{
            this.links[0].classList.add('active')
            const href =  this.links[0].getAttribute('href')
            document.querySelector(href).classList.add('active')
        }
        this.links.forEach((link) => {
            link.addEventListener('click', (event) =>  {
                event.preventDefault()
                this.tabInit(event)
            })
        })

    }

    tabInit(event){

        // href
        const href = event.target.getAttribute("href") 

        // del current active
        const current = event.currentTarget.parentNode.parentNode.querySelector('a.active') 
        const currentHref = current.getAttribute('href')

        current.classList.remove('active')
        document.querySelector(currentHref).classList.remove('active')

        // add active cible
        event.currentTarget.classList.add('active') 
        document.querySelector(href).classList.add('active')
    }

    tabInitWithHas(el){
        // test if li has class active
        const hasActive = el.classList.contains('active')
        if(hasActive){
            return false
        }else {
            // href
            const href = el.getAttribute('href')
             // del current active
            const current = el.parentNode.parentNode.querySelector('a.active')
            if(current != null){
                const currentHref = current.getAttribute('href')
                current.classList.remove('active')
                document.querySelector(currentHref).classList.remove('active')
            }
            // add active cible
            el.classList.add('active')
            document.querySelector(href).classList.add('active')
        }
    }

}