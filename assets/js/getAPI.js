$.ajax({
  type: "get",
  url: "https://equran.id/api/v2/surat",
  success: function (res) {
    var card = "";
    for (var i = 0; i < res.data.length; i++) {
      card += `<div class="col-md-6 col-lg-4 order-2 mb-4">
      <a href="/surah.html?surah=${res["data"][i]["nomor"]}" style="color:grey">
      <div class="card h-100">
        <div
          class="card-header d-flex align-items-center justify-content-between"
        ></div>
        <div class="card-body">
          <ul class="p-0 m-0">
            <li class="d-flex mb-4 pb-1">
              <div class="avatar flex-shrink-0 me-3">
                <img
                  src="/assets/images/number.svg"
                  alt="User"
                  class="rounded"
                />
                <h5>${res["data"][i]["nomor"]}</h5>
              </div>
              <div
                class="d-flex w-100 mt-3 flex-wrap align-items-center justify-content-between gap-2"
              >
                <div class="me-2">
                <h6 class="mb-0" style="margin-left:5px">${res["data"][i]["namaLatin"]} - ${res["data"][i]["jumlahAyat"]} Ayat</h6>
                  <p class="d-block mb-1" style="margin-left:5px">(${res["data"][i]["arti"]})</p>
                  <small class="d-block mb-1" style="margin-left:5px">Diturunkan di : ${res["data"][i]["tempatTurun"]}</small>
                </div>
                <div
                  class="user-progress d-flex align-items-center gap-1"
                >
                  <h6 class="mb-0 arab">${res["data"][i]["nama"]}</h6>
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      </a>
    </div>`;
    }

    $(".cardSurah").html(card);
  },
});
