printClothesCard(0);
function printClothesCard(type, keyword) {
  getAllLocalData();
  let html = "";
  let card = document.querySelector(".cloth-grid");
  console.log(card);

  for (let i = 0; i < clothesList.length; i++) {
    let object = clothesList[i];

    console.log(keyword);
    if (keyword != undefined) {
      if (object.clothesName.indexOf(keyword) == -1) {
        continue;
      }
    }

    if (type != 0) {
      if (object.categoryId != type) {
        continue;
      }
    }

    const material = materialList.find(
      (i) => object.materialId == i.materialId,
    ).materialName; //소재 id 찾기

    const waterTemperature = washingGuideList.find(
      (i) => object.clothesId == i.clothesId,
    ).waterTemperature;

    const recommendedDetergent = washingGuideList.find(
      (i) => object.clothesId == i.clothesId,
    ).recommendedDetergent;

    console.log(object.imagePath);
    html += ` <div class="cloth-card" onclick="printDetail(${object.clothesId})" >
              <img src="${object.imagePath}" />
              <h4>${object.clothesName}<span style="font-size: 12px; color: #7d7d7d;">(${material})</span></h4>
              <div class="badge-wrap">
                <span class="badge badge-green">${waterTemperature}</span>
                <span class="badge badge-blue">${recommendedDetergent}</span>
              </div>
            </div>`;
  }
  card.innerHTML = html;
}

function printDetail(value) {
  let description = document.querySelector(".right-main");
  let symbolIds;
  let html = "";

  html += `<div class="imgBox">`;
  for (let i = 0; i < clothesList.length; i++) {
    let object = clothesList[i];

    if (object.clothesId == value) {
      console.log(object.imagePath);
      html += `
    
    <div class="clothImg">
      <img src="${object.imagePath}" />
    </div>`;
    }
  }
  html += `<div class="symbolImg"><div>`;
  symbolIds = clothesSymbolList
    .filter((item) => item.clothesId == value)
    .map((item) => item.symbolId);
  const symbolImages = washingSymbolList.filter((symbol) =>
    symbolIds.includes(symbol.symbolId),
  );
  for (let j = 0; j < symbolImages.length; j++) {
    html += `
    <div>
      <img src="${symbolImages[j].imagePath}" />
    </div>
  `;
  }
  html += `</div></div></div><div class="guide-detail">`;
  for (let k = 0; k < washingGuideList.length; k++) {
    let object = washingGuideList[k];
    if (object.clothesId == value) {
      html += `
      <p><strong>물 온도 </strong>: ${object.waterTemperature}</p>
      <p><strong>세탁 방법 </strong>: ${object.washingMethod}</p>
      <p><strong>권장 세제 </strong>: ${object.recommendedDetergent}</p>
      <p><strong>주의사항 </strong>: ${object.caution}</p>
      `;
    }
  }
  html += `
    <div class="button-wrap">
    <button class="green-button" onclick="location.href='../washingSymbol/symbol.html'">세탁기호 확인</button>
    <button class="blue-button" onclick="location.href='../dryingGuide/dryingGuide.html?no=${value}'">건조방법 확인</button>
    </div>
    `;
  console.log(html);
  html += description.innerHTML = html;
}

function searchClick() {
  input = document.querySelector(".main-searchBox").value;
  printClothesCard(0, input);
}
