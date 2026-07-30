console.log("JS 연결됨");
console.log(clothesList);
console.log(materialList);

// 임시로 1번 의류 선택
let selectedId = 2;
// 선택한 의류
let selectedClothes = null;
// 선택한 소재
let selectedMaterial = null;


// 선택한 의류 찾기
for(let i = 0; i < clothesList.length; i++){
    if(clothesList[i].clothesId == selectedId){
        selectedClothes = clothesList[i];
    }
}


// 선택한 소재 찾기
for(let i = 0; i < materialList.length; i++){
    if(materialList[i].materialId == selectedClothes.materialId){
        selectedMaterial = materialList[i];
    }
}

// 화면에 출력
document.querySelector("#clothesImg").src
    = selectedClothes.imagePath;

document.querySelector("#clothesName").innerHTML
    = selectedClothes.clothesName;

document.querySelector("#materialName").innerHTML
    = `(${selectedMaterial.materialName})`;