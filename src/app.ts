const url = "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84";

let data = [];
let currentPage = 1;

const updateHTML = (elmId: string, value: string) => {
  var elem = document.getElementById(elmId);
  if (typeof elem !== "undefined" && elem !== null) {
    elem.innerHTML = value;
  }
};

const getData = async (page: number) => {
  if (page === 1) {
    // @ts-ignore
    document.getElementById("prev").disabled = true;
  } else {
    // @ts-ignore
    document.getElementById("prev").disabled = false;
  }

  const response = await fetch(url + "&page=" + page);
  let resp = await response.json();
  data = resp.results[0][currentPage];

  let tab = "";

  console.log(data);

  data.map((item: { id: string; row: number; gender: string; age: number }) => {
    const { id, row, gender, age } = item;

    tab += `<tr data-entryid=${id}> 
    <td>${row}</td>
    <td>${gender.toUpperCase()}</td>
    <td>${age}</td>
    </tr>`;
  });

  updateHTML("table-data", tab);
  updateHTML("page-number", `Showing Page ${currentPage}`);
};

const nextPage = () => {
  currentPage++;
  getData(currentPage);
};

const prevPage = () => {
  currentPage--;
  getData(currentPage);
};

const startApp = async () => {
  getData(currentPage);
};

document.addEventListener("DOMContentLoaded", startApp);
