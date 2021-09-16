document.getElementById("copybtn").addEventListener("click",function(){
    const n1 = document.getElementById("copyinp")
    n1.select()
    document.execCommand("copy")
    alert("Copiado!!")
})
document.getElementById("disc").addEventListener("click",function(){
    const n2 = document.getElementById("copyinp")
    n2.select()
    document.execCommand("copy")
    alert("Copiado!!")
})