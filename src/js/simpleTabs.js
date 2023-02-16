/**
 * @fileOverview
 * @author Carlos Antunes
 * @version 1.0.0
 */


/**
 * @description
 * Vanilla Javascript Tabs
 *
 * @class
 * @param {string} option.links - querySelectorAll of tabs
 * @param {number} [options.open = 0] - Render the tabs with this item open
 */
export class SimpleTabs {

    options = {
        open : 0
    }

    constructor(options) {
        this.options = Object.assign({}, this.options, options)

        this.links = document.querySelectorAll(this.options.links)

        this.init()

    }

    init(){
        const windowHash = window.location.hash
        if(windowHash != ""){
            this.locationHash(windowHash)
        }else{

            if(this.options.open < this.links.length){
                this.tabInit(this.options.open)
            }else{ 
                this.tabInit(0)
                console.error(`Attention the tab number (${this.options.open}) does not exist. Open tab with default value (0) !`)
            }
        }
        this.links.forEach((link) => {
            link.addEventListener('click', (event) =>  {
                event.preventDefault()
                this.onClick(event)
            })
        })

        window.addEventListener('hashchange', () => {
            this.locationHash(window.location.hash)
        })

    }
    /**
     * 
     * @param {number} tabNumber 
     */
    tabInit(tabNumber){
        this.links[tabNumber].classList.add('active')
        const href =  this.links[tabNumber].getAttribute('href')
        document.querySelector(href).classList.add('active')
    }

    onClick(event){

        // href
        const href = event.target.getAttribute("href") 
        // push state href
        window.history.pushState({}, '', href)
        
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


    locationHash(hash){
        if(hash != ''){
            this.links.forEach(el => {
                if(el.getAttribute('href') === hash ){
                    this.tabInitWithHas(el)
                }
            })
        }else {
            this.tabInitWithHas(this.links[0])
        }
    }

}