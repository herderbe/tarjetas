let imagenes = document.querySelectorAll('.imagenes')
let cont = document.querySelectorAll('.contenedor')


imagenes.forEach(img =>{
    img.addEventListener('click',function(){
        imagenes.forEach(img => {
            img.classList.remove('cambio');
        });
        this.classList.add('cambio')
        
    })
})


