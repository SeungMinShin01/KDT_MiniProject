const categoryList = [
  {
    categoryId: 1,
    categoryName: "상의",
  },
  {
    categoryId: 2,
    categoryName: "하의",
  },
  {
    categoryId: 3,
    categoryName: "외투",
  },
  {
    categoryId: 4,
    categoryName: "양말",
  },
  {
    categoryId: 5,
    categoryName: "속옷",
  },
  {
    categoryId: 6,
    categoryName: "기타",
  },
];

const materialList = [
  { materialId: 1, materialName: "면" },
  { materialId: 2, materialName: "데님" },
  { materialId: 3, materialName: "울 혼방" },
  { materialId: 4, materialName: "면 혼방" },
  { materialId: 5, materialName: "폴리에스터" },
  { materialId: 6, materialName: "나일론" },
  { materialId: 7, materialName: "합성섬유" },
  { materialId: 8, materialName: "충전재" },
  { materialId: 9, materialName: "울" },
  { materialId: 10, materialName: "가죽" },
  { materialId: 11, materialName: "실크" },
  { materialId: 12, materialName: "린넨" },
];

const clothesList = [
  {
    clothesId: 1,
    clothesName: "흰색 면 티셔츠",
    categoryId: 1,
    materialId: 1,
    imagePath: "../assets/의류/img_흰색_면_티셔츠.png",
  },
  {
    clothesId: 2,
    clothesName: "색상 면 티셔츠",
    categoryId: 1,
    materialId: 1,
    imagePath: "../assets/의류/img_색상_면_티셔츠.png",
  },
  {
    clothesId: 3,
    clothesName: "청바지",
    categoryId: 2,
    materialId: 2,
    imagePath: "./assets/의류/img_청바지.png",
  },
  {
    clothesId: 4,
    clothesName: "니트",
    categoryId: 1,
    materialId: 4,
    imagePath: "../assets/의류/img_니트.png",
  },
  {
    clothesId: 5,
    clothesName: "후드티",
    categoryId: 1,
    materialId: 5,
    imagePath: "../assets/의류/img_후드티.png",
  },
  {
    clothesId: 6,
    clothesName: "와이셔츠",
    categoryId: 1,
    materialId: 5,
    imagePath: "../assets/의류/img_와이셔츠.png",
  },
  {
    clothesId: 7,
    clothesName: "수건",
    categoryId: 6,
    materialId: 1,
    imagePath: "../assets/의류/img_수건.png",
  },
  {
    clothesId: 8,
    clothesName: "속옷",
    categoryId: 5,
    materialId: 5,
    imagePath: "../assets/의류/img_속옷.png",
  },
  {
    clothesId: 9,
    clothesName: "패딩",
    categoryId: 3,
    materialId: 7,
    imagePath: "../assets/의류/img_패딩.png",
  },
  {
    clothesId: 10,
    clothesName: "울 코트",
    categoryId: 3,
    materialId: 3,
    imagePath: "../assets/의류/img_울_코트.png",
  },
  {
    clothesId: 11,
    clothesName: "가죽 재킷",
    categoryId: 3,
    materialId: 10,
    imagePath: "../assets/의류/img_가죽_재킷.png",
  },
  {
    clothesId: 12,
    clothesName: "실크 블라우스",
    categoryId: 1,
    materialId: 11,
    imagePath: "../assets/의류/img_실크_블라우스.png",
  },
  {
    clothesId: 13,
    clothesName: "린넨 셔츠",
    categoryId: 1,
    materialId: 12,
    imagePath: "../assets/의류/img_린넨_셔츠.png",
  },
  {
    clothesId: 14,
    clothesName: "양말",
    categoryId: 4,
    materialId: 5,
    imagePath: "../assets/의류/img_양말.png",
  },
];

const washingGuideList = [
  {
    clothesId: 1,
    waterTemperature: "30℃ 이하",
    washingMethod: "일반 세탁",
    recommendedDetergent: "중성세제/  일반세제",
    caution: "색상 의류와 분리해서 세탁하세요.",
  },
  {
    clothesId: 2,
    waterTemperature: "30℃ 이하",
    washingMethod: "뒤집어서 세탁",
    recommendedDetergent: "중성세제",
    caution: "첫 세탁 시 물 빠짐이 있을 수 있습니다.",
  },
  {
    clothesId: 3,
    waterTemperature: "찬물",
    washingMethod: "지퍼와 단추를 잠그고 뒤집어서 세탁",
    recommendedDetergent: "중성세제",
    caution: "잦은 세탁과 건조기 사용은 색 빠짐을 유발합니다.",
  },
  {
    clothesId: 4,
    waterTemperature: "30℃ 이하",
    washingMethod: "손세탁 또는 울 코스",
    recommendedDetergent: "울 전용 중성세제",
    caution: "옷걸이에 걸면 늘어날 수 있습니다.",
  },
  {
    clothesId: 5,
    waterTemperature: "30℃ 이하",
    washingMethod: "지퍼와 끈을 정리한 뒤 뒤집어서 세탁",
    recommendedDetergent: "중성세제",
    caution: "뜨거운 물은 옷을 수축시킬 수 있습니다.",
  },
  {
    clothesId: 6,
    waterTemperature: "30~40℃",
    washingMethod: "목과 소매를 먼저 부분 세탁",
    recommendedDetergent: "일반세제",
    caution: "색이 있는 셔츠는 표백제를 사용하지 마세요.",
  },
  {
    clothesId: 7,
    waterTemperature: "40℃ 이하",
    washingMethod: "수건끼리 단독 세탁",
    recommendedDetergent: "일반세제 소량",
    caution: "섬유유연제를 많이 사용하면 흡수력이 떨어집니다.",
  },
  {
    clothesId: 8,
    waterTemperature: "30℃ 이하",
    washingMethod: "세탁망에 넣어 약하게 세탁",
    recommendedDetergent: "중성세제",
    caution: "브래지어는 후크를 잠근 뒤 세탁하세요.",
  },
  {
    clothesId: 9,
    waterTemperature: "30℃ 이하",
    washingMethod: "지퍼를 잠그고 부드럽게 세탁",
    recommendedDetergent: "중성세제",
    caution: "세탁 전 반드시 제품 라벨을 확인하세요.",
  },
  {
    clothesId: 10,
    waterTemperature: "세탁 금지 권장",
    washingMethod: "드라이클리닝",
    recommendedDetergent: "사용하지 않음",
    caution: "물세탁 시 형태가 변형될 수 있습니다.",
  },
  {
    clothesId: 11,
    waterTemperature: "물세탁 금지",
    washingMethod: "가죽 전용 클리너로 닦기",
    recommendedDetergent: "가죽 전용 세정제",
    caution: "일반 세탁기와 건조기를 사용하지 마세요.",
  },
  {
    clothesId: 12,
    waterTemperature: "찬물",
    washingMethod: "짧게 손세탁하거나 드라이클리닝",
    recommendedDetergent: "실크 전용 중성세제",
    caution: "비틀어 짜거나 강하게 문지르지 마세요.",
  },
  {
    clothesId: 13,
    waterTemperature: "30℃ 이하",
    washingMethod: "약한 코스로 세탁",
    recommendedDetergent: "중성세제",
    caution: "건조기 사용 시 수축할 수 있습니다.",
  },
  {
    clothesId: 14,
    waterTemperature: "30~40℃",
    washingMethod: "뒤집어서 세탁망에 넣어 세탁",
    recommendedDetergent: "일반세제",
    caution: "고온 건조 시 고무 부분이 손상될 수 있습니다.",
  },
];

const washingSymbolList = [
  {
    symbolId: 1,
    symbolName: "물세탁 가능",
    description: "세탁기 또는 손세탁으로 물세탁할 수 있습니다.",
    usageTip: "기호 안의 숫자는 사용할 수 있는 최대 물 온도입니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 1.png",
  },
  {
    symbolId: 2,
    symbolName: "손세탁",
    description: "세탁기를 사용하지 않고 손으로 세탁해야 합니다.",
    usageTip: "30℃ 이하의 물에서 부드럽게 세탁하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 2.png",
  },
  {
    symbolId: 3,
    symbolName: "물세탁 금지",
    description: "가정에서 물을 이용해 세탁하면 안 됩니다.",
    usageTip: "드라이클리닝 여부를 확인하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 3.png",
  },
  {
    symbolId: 4,
    symbolName: "표백 가능",
    description: "표백제를 사용할 수 있습니다.",
    usageTip: "의류의 색상과 소재를 먼저 확인하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 4.png",
  },
  {
    symbolId: 5,
    symbolName: "표백 금지",
    description: "염소계와 산소계 표백제를 사용하면 안 됩니다.",
    usageTip: "색 빠짐이나 섬유 손상이 발생할 수 있습니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 5.png",
  },
  {
    symbolId: 6,
    symbolName: "건조기 사용 가능",
    description: "회전식 건조기를 사용할 수 있습니다.",
    usageTip: "점의 개수가 많을수록 높은 온도로 건조할 수 있습니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 6.png",
  },
  {
    symbolId: 7,
    symbolName: "건조기 사용 금지",
    description: "회전식 건조기를 사용하면 안 됩니다.",
    usageTip: "자연 건조 방법을 이용하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 7.png",
  },
  {
    symbolId: 8,
    symbolName: "그늘 건조",
    description: "직사광선을 피해 그늘에서 건조해야 합니다.",
    usageTip: "색이 진하거나 햇빛에 약한 의류에 적합합니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 8.png",
  },
  {
    symbolId: 9,
    symbolName: "평평하게 건조",
    description: "의류를 평평한 곳에 눕혀서 건조해야 합니다.",
    usageTip: "니트처럼 늘어나기 쉬운 옷에 사용합니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 9.png",
  },
  {
    symbolId: 10,
    symbolName: "다림질 가능",
    description: "다리미를 사용할 수 있습니다.",
    usageTip: "점의 개수에 따라 적정 다림질 온도가 다릅니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 10.png",
  },
  {
    symbolId: 11,
    symbolName: "다림질 금지",
    description: "다리미를 사용하면 안 됩니다.",
    usageTip: "열로 인해 소재가 변형될 수 있습니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 11.png",
  },
  {
    symbolId: 12,
    symbolName: "드라이클리닝 가능",
    description: "전문 세탁소에서 드라이클리닝할 수 있습니다.",
    usageTip: "원 안의 알파벳은 사용할 수 있는 세탁 용제를 뜻합니다.",
    imagePath: "../assets/세탁기호/img_세탁기호 12.png",
  },
  {
    symbolId: 13,
    symbolName: "드라이클리닝 금지",
    description: "드라이클리닝을 하면 안 됩니다.",
    usageTip: "세탁 라벨의 다른 세탁 방법을 확인하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 13.png",
  },
  {
    symbolId: 14,
    symbolName: "뒤틀어 짜기 금지",
    description: "옷감의 형태 변형이나 손상을 막기 위해 손으로 쥐어짜는 것을 금지",
    usageTip: "적당히 짠 후 수건으로 감싸 눌러가며 물기를 제거하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 14.png",
  },
  {
    symbolId: 15,
    symbolName: "비틀기 금지",
    description: "옷감의 형태 변형이나 손상을 막기 위해 옷을 비트는 것을 금지",
    usageTip: "세탁 후에는 마른 수건으로 감싸 물기를 제거하세요.",
    imagePath: "../assets/세탁기호/img_세탁기호 15.png",
  }
];

const dryingGuideList = [
  {
    dryingId: 1,
    dryingName: "옷걸이 건조",
    method: "옷의 주름을 편 뒤 어깨선에 맞는 옷걸이에 걸어 건조합니다.",
    advantage: "주름이 적게 생기고 형태를 유지하기 쉽습니다.",
    caution: "니트처럼 무거운 옷은 늘어날 수 있습니다.",
    imagePath: "./img/dry_hanger.jpg",
  },
  {
    dryingId: 2,
    dryingName: "평건조",
    method: "마른 수건이나 건조대 위에 옷을 평평하게 눕힙니다.",
    advantage: "옷이 늘어나는 것을 방지합니다.",
    caution: "완전히 마르기 전에 뒤집어 주면 좋습니다.",
    imagePath: "./img/dry_flat.jpg",
  },
  {
    dryingId: 3,
    dryingName: "그늘 건조",
    method: "직사광선이 닿지 않는 통풍이 잘되는 장소에서 건조합니다.",
    advantage: "변색과 섬유 손상을 줄일 수 있습니다.",
    caution: "통풍이 부족하면 냄새가 날 수 있습니다.",
    imagePath: "./img/dry_shade.jpg",
  },
  {
    dryingId: 4,
    dryingName: "햇빛 건조",
    method: "햇빛이 잘 드는 곳에서 충분히 펼쳐 건조합니다.",
    advantage: "건조 속도가 빠르고 습기를 제거하기 좋습니다.",
    caution: "색상 의류는 햇빛에 의해 변색될 수 있습니다.",
    imagePath: "./img/dry_sun.jpg",
  },
  {
    dryingId: 5,
    dryingName: "건조기 저온 건조",
    method: "건조기에서 낮은 온도로 건조합니다.",
    advantage: "옷감 손상과 수축을 줄일 수 있습니다.",
    caution: "세탁 라벨에서 건조기 사용 가능 여부를 확인하세요.",
    imagePath: "./img/dry_low_temp.jpg",
  },
  {
    dryingId: 6,
    dryingName: "건조기 일반 건조",
    method: "의류의 양을 적절하게 넣고 일반 코스로 건조합니다.",
    advantage: "빠르고 편리하게 건조할 수 있습니다.",
    caution: "니트, 울, 실크, 가죽 소재에는 사용하지 마세요.",
    imagePath: "./img/dry_machine.jpg",
  },
  {
    dryingId: 7,
    dryingName: "뒤집어서 건조",
    method: "옷의 안쪽이 바깥으로 나오도록 뒤집어 건조합니다.",
    advantage: "색 빠짐과 프린팅 손상을 줄일 수 있습니다.",
    caution: "두꺼운 부분이 완전히 마르도록 확인하세요.",
    imagePath: "./img/dry_inside_out.jpg",
  },
  {
    dryingId: 8,
    dryingName: "수건으로 물기 제거",
    method: "옷을 수건 위에 올린 뒤 말아 눌러 물기를 제거합니다.",
    advantage: "비틀어 짜지 않고도 물기를 줄일 수 있습니다.",
    caution: "강하게 누르거나 비틀지 마세요.",
    imagePath: "./img/dry_towel.jpg",
  },
];

    // 의류별 건조 방법 연결
    const clothesDryingList = [
    { clothesId: 1, dryingId: 3 }, // 흰색 면 티셔츠 → 그늘 건조
    { clothesId: 2, dryingId: 7 }, // 색상 면 티셔츠 → 뒤집어서 건조
    { clothesId: 3, dryingId: 7 }, // 청바지 → 뒤집어서 건조
    { clothesId: 4, dryingId: 2 }, // 니트 → 평건조
    { clothesId: 5, dryingId: 3 }, // 후드티 → 그늘 건조
    { clothesId: 6, dryingId: 1 }, // 와이셔츠 → 옷걸이 건조
    { clothesId: 7, dryingId: 4 }, // 수건 → 햇빛 건조
    { clothesId: 8, dryingId: 3 }, // 속옷 → 그늘 건조
    { clothesId: 9, dryingId: 2 }, // 패딩 → 평건조
    { clothesId: 10, dryingId: 2 }, // 울 코트 → 평건조
    { clothesId: 11, dryingId: 3 }, // 가죽 재킷 → 그늘 건조
    { clothesId: 12, dryingId: 3 }, // 실크 블라우스 → 그늘 건조
    { clothesId: 13, dryingId: 3 }, // 린넨 셔츠 → 그늘 건조
    { clothesId: 14, dryingId: 1 }  // 양말 → 옷걸이 건조
];



const clothesSymbolList = [
  { clothesId: 1, symbolId: 1 },
  { clothesId: 1, symbolId: 4 },
  { clothesId: 1, symbolId: 6 },
  { clothesId: 1, symbolId: 10 },

  { clothesId: 2, symbolId: 1 },
  { clothesId: 2, symbolId: 5 },
  { clothesId: 2, symbolId: 8 },
  { clothesId: 2, symbolId: 10 },

  { clothesId: 3, symbolId: 1 },
  { clothesId: 3, symbolId: 5 },
  { clothesId: 3, symbolId: 7 },
  { clothesId: 3, symbolId: 8 },

  { clothesId: 4, symbolId: 2 },
  { clothesId: 4, symbolId: 5 },
  { clothesId: 4, symbolId: 7 },
  { clothesId: 4, symbolId: 9 },

  { clothesId: 5, symbolId: 1 },
  { clothesId: 5, symbolId: 5 },
  { clothesId: 5, symbolId: 7 },
  { clothesId: 5, symbolId: 8 },

  { clothesId: 6, symbolId: 1 },
  { clothesId: 6, symbolId: 5 },
  { clothesId: 6, symbolId: 7 },
  { clothesId: 6, symbolId: 10 },

  { clothesId: 7, symbolId: 1 },
  { clothesId: 7, symbolId: 4 },
  { clothesId: 7, symbolId: 6 },
  { clothesId: 7, symbolId: 10 },

  { clothesId: 8, symbolId: 1 },
  { clothesId: 8, symbolId: 5 },
  { clothesId: 8, symbolId: 7 },
  { clothesId: 8, symbolId: 8 },

  { clothesId: 9, symbolId: 1 },
  { clothesId: 9, symbolId: 5 },
  { clothesId: 9, symbolId: 7 },
  { clothesId: 9, symbolId: 11 },

  { clothesId: 10, symbolId: 3 },
  { clothesId: 10, symbolId: 5 },
  { clothesId: 10, symbolId: 11 },
  { clothesId: 10, symbolId: 12 },

  { clothesId: 11, symbolId: 3 },
  { clothesId: 11, symbolId: 7 },
  { clothesId: 11, symbolId: 11 },
  { clothesId: 11, symbolId: 13 },

  { clothesId: 12, symbolId: 2 },
  { clothesId: 12, symbolId: 5 },
  { clothesId: 12, symbolId: 8 },
  { clothesId: 12, symbolId: 12 },

  { clothesId: 13, symbolId: 1 },
  { clothesId: 13, symbolId: 5 },
  { clothesId: 13, symbolId: 8 },
  { clothesId: 13, symbolId: 10 },

  { clothesId: 14, symbolId: 1 },
  { clothesId: 14, symbolId: 5 },
  { clothesId: 14, symbolId: 7 },
  { clothesId: 14, symbolId: 8 },
];



function getLocalCategory() {
  // 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 카테고리 : category(key)
  let category = localStorage.getItem("category");
  if (category == null) {
    localStorage.setItem("category", JSON.stringify(categoryList));
    return categoryList;
  } else category = JSON.parse(category);
  return category;
}

function getLocalMaterial() {
  // 모든 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 소재 : meterial
  let material = localStorage.getItem("material");
  if (material == null) {
    localStorage.setItem("material", JSON.stringify(materialList));
    return materialList;
  } else material = JSON.parse(material);
  return material;
}

function getLocalClothesList() {
  // 모든 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 의류 : clothesList
  let clotheList = localStorage.getItem("clothesList");
  if (clotheList == null) {
    localStorage.setItem("clothesList", JSON.stringify(clothesList));
    return clothesList;
  } else clotheList = JSON.parse(clotheList);
  return clotheList;
}

function getLocalwashingGuide() {
  // 모든 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 의류별 세탁방법 : washingGuideList
  let washingGuide = localStorage.getItem("washingGuideList");
  if (washingGuide == null) {
    localStorage.setItem("washingGuideList", JSON.stringify(washingGuideList));
    return washingGuideList;
  } else washingGuide = JSON.parse(washingGuide);
  return washingGuide;
}

function getLocalsymbol() {
  // 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 세탁기호 : symbolList
  let symbolList = localStorage.getItem("symbolList");
  if (symbolList == null) {
    localStorage.setItem("symbolList", JSON.stringify(washingSymbolList));
    return washingSymbolList;
  } else symbol = JSON.parse(symbolList);
  return symbol;
}

function getLocaldryingGuideList() {
  // 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 의류별 건조방법 : dryingGuideList
  let dryingGuide = localStorage.getItem("dryingGuide");
  if (dryingGuide == null) {
    localStorage.setItem("dryingGuide", JSON.stringify(dryingGuideList));
    return dryingGuideList;
  } else dryingGuide = JSON.parse(dryingGuide);
  return dryingGuide;
}

function getLocalclothesSymbolList() {
  // 객체 불러오기, 비어있으면 빈 배열 아니면 JSON.Parse();
  // 의류가 갖고있는 심볼 : clothesSymbolList
  let clothesSymbol = localStorage.getItem("clothesSymbol");
  if (clothesSymbol == null) {
    localStorage.setItem("clothesSymbol", JSON.stringify(clothesSymbolList));
    return clothesSymbolList;
  } else clothesSymbol = JSON.parse(clothesSymbol);
  return clothesSymbol;
}

function getLocalClothesDryingList(){
  let ClothesDrying = localStorage.getItem("ClothesDrying");
  if(ClothesDrying == null){
    localStorage.setItem("ClothesDrying",clothesDryingList);
    return clothesDryingList;
  }
  else{ClothesDrying = JSON.parse("ClothesDrying");
  }
  return ClothesDrying;
}

function getAllLocalData() {
  getLocalCategory();
  getLocalMaterial();
  getLocalClothesList();
  getLocalclothesSymbolList();
  getLocaldryingGuideList();
  getLocalsymbol();
  getLocalwashingGuide();
}
// function setLocalCategory() {
//   getLocalCategory(); //return category = [];
//   category.push(categoryList); // category.push <- 객체 넣기.
//   localStorage.setItem("category", JSON.stringify(category));
//   // 객체가 푸쉬된 배열을 로컬스토리지에 저장.
//   // 문제점 : 1회 저장일때는 괜찮지만, 저장 함수가 호출될 때마다
//   // 배열의 길이가 중복된 데이터로 길어짐
// }
