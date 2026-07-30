printClothesCard();
function printClothesCard() {
  getAllLocalData();
  let html = "";
  let card = document.querySelector(".cloth-grid");
  console.log(card);
  for (let i = 0; i < clothesList.length; i++) {
    let object = clothesList[i];
    html += ` <div class="cloth-card">
              <img src=".${object.imagePath}" />
              <h4>${object.clothesName}span>(면)</span></h4>
              <div class="badge-wrap">
                <span class="badge badge-green">30℃ 이하</span>
                <span class="badge badge-blue">일반 세탁</span>
              </div>
            </div>`;
  }
  card.innerHTML = html;
}
