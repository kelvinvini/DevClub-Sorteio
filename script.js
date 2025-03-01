function generalnumber() {
    
    const min = Math.ceil (document.querySelector(".input-main").value)
    const max = Math.floor (document.querySelector(".input-right").value)

    if (max > min) {  
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

     alert (result)
} else {  
alert ("O valor minimo tem que ser MENOR que o valor máximo")
}

}

