const links = document.querySelectorAll('.tabs-links a')

const tabs = function(){

    // console.log(this)
    
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

links.forEach((link) => {

    link.addEventListener('click', tabs)
})