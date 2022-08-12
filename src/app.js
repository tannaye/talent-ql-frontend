const url = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84";

let data = [];
let currentPage = 1;

const getData = async (page) => {
  if (page === 1) {
    document.getElementById("prev").disabled = true;
  } else {
    document.getElementById("prev").disabled = false;
  }

  const response = await fetch(url + "&page=" + page);
  let resp = await response.json();
  data = resp.results[0][currentPage];

  let tab = "";

  console.log(data);

  data.map((item) => {
    const { row, gender, age } = item;

    tab += `<tr> 
    <td>${row}</td>
    <td>${gender.toUpperCase()}</td>
    <td>${age}</td>
    </tr>`;
  });

  document.getElementById("table-data").innerHTML = tab;
  document.getElementById(
    "page-number"
  ).innerHTML = `Showing Page ${currentPage}`;
};

getData(currentPage);

const nextPage = () => {
  currentPage++;
  getData(currentPage);
};

const prevPage = () => {
  currentPage--;
  getData(currentPage);
};

// const startApp = async () => {};

// document.addEventListener("DOMContentLoaded", startApp);
