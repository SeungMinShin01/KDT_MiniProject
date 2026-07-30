printClothesCard();
function printClothesCard() {
  getAllLocalData();
  let html = "";
  let card = document.querySelector(".cloth-grid");
  console.log(card);
  for (let i = 0; i < clothesList.length; i++) {
    let object = clothesList[i];

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
    html += ` <div class="cloth-card">
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
