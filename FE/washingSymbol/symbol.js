
printSymbol();

function printSymbol(){
    getLocalsymbol()
    let html =''
    for(i=0; i<=washingSymbolList.length-1;i++){
        let object = washingSymbolList[i]

       console.log(object.imagePath)
        html += `<div> <img src="${object.imagePath}"/> </div>`
    }
    console.log(html);
    document.querySelector(".symbol-wrap").innerHTML=html
}
