
printSymbol();

function printSymbol(){
    getLocalsymbol()
    let html =''
    for(i=0; i<=washingSymbolList.length-1;i++){
        let symbol = washingSymbolList[i]
        html += `<div> <img src="${symbol.imagePath}"/> </div>`
    }
    document.querySelector(".symbol-wrap").innerHTML=html
}


function menuSymbol(clickTag){
    let symbol = getLocalsymbol()
    console.log(symbol)
    let html = '';
     let clickMenu = [];
        if(clickTag != '전체'){
            
            clickMenu = washingSymbolList.filter(
            (i) => i.tag == clickTag
            )
            console.log(clickMenu)
          
        }else clickMenu = washingSymbolList
        
        for (let i =0; i<clickMenu.length; i++){
            html += `<div> <img src="${clickMenu[i].imagePath}"/> </div>`
        }
         
       
    
    document.querySelector(".symbol-wrap").innerHTML=html
}