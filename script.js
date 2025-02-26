function generalnumber() {
    
    const min = Math.ceil (document.querySelector(".input-main").value)
    const max = Math.floor (document.querySelector(".input-right").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    

    alert(result)
}


    