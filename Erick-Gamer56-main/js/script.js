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
window.addEventListener("load", function(){
    var n1 = document.getElementById("load")
    n1.style.opacity="0"
    this.setTimeout(function(){
        n1.style.zIndex="-35"
    }, 500)
    document.documentElement.scrollTop == "0"
})
document.getElementById("inp1").addEventListener("change",function(){
    var n1 = "" 
    n1 = document.getElementById("inp1").value
    if (n1 != ""){
        document.getElementById("i1").style.top="8px"
    }else{
        document.getElementById("i1").style.top=""
    }
})
document.getElementById("inp2").addEventListener("change",function(){
    var n1 = "" 
    n1 = document.getElementById("inp2").value
    if (n1 != ""){
        document.getElementById("i2").style.top="8px"
    }else{
        document.getElementById("i2").style.top=""
    }
})
document.getElementById("inp3").addEventListener("change",function(){
    var n1 = "" 
    n1 = document.getElementById("inp3").value
    if (n1 != ""){
        document.getElementById("i3").style.top="8px"
    }else{
        document.getElementById("i3").style.top=""
    }
})