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
                    this.pushHas(el)
                }
            })
        }else{
            this.links[0].classList.add('active')
            const href =  this.links[0].getAttribute('href')
            document.querySelector(href).classList.add('active')
        }
        this.links.forEach((link) => {

            link.addEventListener('click', this.tab)
        })

    }

    tab(){

        // test if li has class active
        const hasActive = this.classList.contains('active')
        if(hasActive){

            return false
    
        }else {
            // href
            const href = this.getAttribute('href')

             // del current active
            const current = this.parentNode.parentNode.querySelector('a.active')
            const currentHref = current.getAttribute('href')

            current.classList.remove('active')
            document.querySelector(currentHref).classList.remove('active')

            // add active cible
            this.classList.add('active')
            document.querySelector(href).classList.add('active')
        
        }
    }

    pushHas(el){

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