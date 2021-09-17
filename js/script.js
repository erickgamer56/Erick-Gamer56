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
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop >= 100){
    document.getElementById("div1").style.width="80%"
    document.getElementById("div2").style.width="75%"
    document.getElementById("div3").style.width="25%"
    document.getElementById("div4").style.width="15%"
    }
    else{
        document.getElementById("div1").style.width=""
        document.getElementById("div2").style.width=""
        document.getElementById("div3").style.width=""
        document.getElementById("div4").style.width=""
    }
})