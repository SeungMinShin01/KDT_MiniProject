let selectedId = 4;
dryPage();
function dryPage(){

    // 선택한 의류 찾기
    for(let i = 0; i < clothesList.length; i++){
        if(clothesList[i].clothesId == selectedId){
            selectedClothes = clothesList[i];
            break;
        }
    }

    // 선택한 소재 찾기
    for(let i = 0; i < materialList.length; i++){
        if(materialList[i].materialId == selectedClothes.materialId){
            selectedMaterial = materialList[i];
            break;
        }
    }

    // 의류 출력
    document.querySelector("#clothesImg").src = selectedClothes.imagePath;
    document.querySelector("#clothesName").innerHTML = selectedClothes.clothesName;
    document.querySelector("#materialName").innerHTML = `(${selectedMaterial.materialName})`;

    // 건조방법 찾기
    let selectedDryingId = 0;
    let selectedDrying = null;

    for(let i = 0; i < clothesDryingList.length; i++){
        if(clothesDryingList[i].clothesId == selectedId){
            selectedDryingId = clothesDryingList[i].dryingId;
            break;
        }
    }

    for(let i = 0; i < dryingGuideList.length; i++){
        if(dryingGuideList[i].dryingId == selectedDryingId){
            selectedDrying = dryingGuideList[i];
            break;
        }
    }

    // 건조방법 출력
    document.querySelector("#dryName").innerHTML = selectedDrying.dryingName;
    document.querySelector("#dryMethod").innerHTML = selectedDrying.method;
    document.querySelector("#dryAdvantage").innerHTML = selectedDrying.advantage;
    document.querySelector("#dryCaution").innerHTML = selectedDrying.caution;

    // 세탁기호 출력
    let symbolHtml = "";

    for(let i = 0; i < clothesSymbolList.length; i++){

        if(clothesSymbolList[i].clothesId == selectedId){

            let selectedSymbolId = clothesSymbolList[i].symbolId;

            for(let j = 0; j < washingSymbolList.length; j++){

                if(washingSymbolList[j].symbolId == selectedSymbolId){

                    symbolHtml += `
                        <div class="symbol-card">
                            <img src="${washingSymbolList[j].imagePath}">
                        </div>
                    `;
                    break;
                }
            }
        }
    }

    document.querySelector("#symbol-list").innerHTML = symbolHtml;
}
