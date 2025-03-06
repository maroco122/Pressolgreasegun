document.addEventListener("DOMContentLoaded", () => {
  const greaseData = [
    { usage: "자동차 휠 허브", amount: 10, pumps: 7 },
    { usage: "산업용 기계 베어링", amount: 15, pumps: 10 },
    { usage: "농업용 트랙터 및 기계", amount: 20, pumps: 13 },
    { usage: "건설 장비", amount: 30, pumps: 20 },
    { usage: "선박 및 해양 장비", amount: 40, pumps: 27 },
    { usage: "오토바이 체인", amount: 5, pumps: 3 },
    { usage: "철도 차량 차축 베어링", amount: 50, pumps: 33 },
    { usage: "엘리베이터 및 에스컬레이터 부품", amount: 15, pumps: 10 },
    { usage: "풍력 터빈 기어 및 베어링", amount: 60, pumps: 40 },
    { usage: "공장 자동화 로봇 및 컨베이어 시스템", amount: 10, pumps: 7 },
    { usage: "항공기 랜딩기어", amount: 35, pumps: 23 },
    { usage: "자전거 허브 및 페달 베어링", amount: 8, pumps: 5 },
    { usage: "자동차 조향 장치", amount: 12, pumps: 8 },
    { usage: "대형 크레인 및 리프팅 장비", amount: 40, pumps: 27 },
    { usage: "프레스 및 단조 장비", amount: 25, pumps: 17 },
    { usage: "제철소 롤러 및 장비", amount: 70, pumps: 47 },
    { usage: "발전소 터빈 베어링", amount: 50, pumps: 33 },
    { usage: "광산 장비", amount: 80, pumps: 53 },
    { usage: "산업용 모터 및 펌프", amount: 30, pumps: 20 },
  ];

  const tableBody = document.getElementById("greaseTable");
  const usageSelect = document.getElementById("usageSelect");
  const loadingImage = document.getElementById("loadingImage");
  const searchResultBtn = document.getElementById("searchResultBtn");

  // 테이블 데이터 로드
  function populateTable(selectedUsage = "") {
    loadingImage.style.display = "block";
    tableBody.innerHTML = "";
    setTimeout(() => {
      const filteredData = selectedUsage === "" 
        ? greaseData 
        : greaseData.filter(item => item.usage === selectedUsage);

      if (filteredData.length > 0) {
        filteredData.forEach(item => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <td>${item.usage}</td>
            <td>${item.amount}g</td>
            <td>${item.pumps}회</td>
          `;
          tableBody.appendChild(row);
        });
      } else {
        tableBody.innerHTML = "<tr><td colspan='3'>데이터 없음</td></tr>";
      }
      loadingImage.style.display = "none";
      searchResultBtn.style.display = "block";
    }, 500);
  }

  // 드롭다운 옵션 생성
  function populateUsageDropdown() {
    const uniqueUsages = [...new Set(greaseData.map(item => item.usage))];
    uniqueUsages.forEach(usage => {
      const option = document.createElement("option");
      option.value = usage;
      option.textContent = usage;
      usageSelect.appendChild(option);
    });
  }

  // 드롭다운 값 변경 시 테이블 업데이트
  usageSelect.addEventListener("change", (e) => {
    populateTable(e.target.value);
  });

  // 검색결과 버튼 클릭
  const urls = [
    "https://msearch.shopping.naver.com/search/all?query=500cc%20%EB%8F%85%EC%9D%BC%20%EA%B5%AC%EB%A6%AC%EC%8A%A4%EC%A3%BC%EC%9E%85%EA%B8%B0%20%EC%9D%BC%EB%B0%98%ED%98%95&prevQuery=500cc%20%EB%8F%85%EC%9D%BC%20%EA%B5%AC%EB%A6%AC%EC%8A%A4%EC%A3%BC%EC%9E%85%EA%B8%B0&vertical=search",
    "https://msearch.shopping.naver.com/search/all?query=%EB%8F%85%EC%9D%BC%20%EA%B5%AC%EB%A6%AC%EC%8A%A4%EA%B1%B4%20%EC%9D%BC%EB%B0%98%ED%98%95&prevQuery=500cc%20%EB%8F%85%EC%9D%BC%20%EA%B5%AC%EB%A6%AC%EC%8A%A4%EC%A3%BC%EC%9E%85%EA%B8%B0%20%EC%9D%BC%EB%B0%98%ED%98%95&vertical=search",
    "https://www.coupang.com/vp/products/8413077202?itemId=24326963302&vendorItemId=92049038780&q=%EA%B5%AC%EB%A6%AC%EC%8A%A4+%EC%A3%BC%EC%9E%85%EA%B8%B0&itemsCount=36&searchId=45422bec3503752&rank=1&searchRank=1&isAddedCart="
  ];
  
  searchResultBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * urls.length);
    window.open(urls[randomIndex], "_blank");
  });

  // 초기 실행
  populateUsageDropdown();
  populateTable();
});
