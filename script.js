// alert(document.documentElement.clientWidth);
const loadData = async () => {
  try {
    const employee = await fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        obj = data;
        myFunction(data);
      });
  } catch (error) {
    alert(error);
  }
};

loadData();

var id;

var myFunction = function (employee) {
  const len = employee.length;
  list = document.querySelector(".list-section");
  Array.from(employee).forEach((element, i) => {
    item = document.createElement("div");
    list.appendChild(item);
    item.classList.add("item");
    item.id = i;
    item.innerHTML = `Name: ${employee[i].name} (${employee[i].empid})`;
    if ((i + 1) % 2 == 0) {
      item.classList.add("even");
    } else {
      item.classList.add("odd");
    }
    item.onclick = showDetails;
  });
};

function showDetails(e) {
  if (!id) {
    id = e.target.id;
    console.log(id);
  } else {
    if (id == e.target.id) {
      console.log("id same");
      return false;
    } else {
      element = document.getElementsByClassName("detail")[0];
      element.remove();
      console.log(element);
      id = e.target.id;
    }
  }

  detail = document.querySelector(".detail-section");
  detail_box = document.createElement("div");
  detail.appendChild(detail_box);
  detail_box.classList.add("detail");
  image_div = document.createElement("div");
  image_div.classList.add("image-container");
  info_div = document.createElement("div");
  info_div.classList.add("info-container");
  detail_box.appendChild(image_div);
  detail_box.appendChild(info_div);
  image = document.createElement("img");
  image_src = obj[id].imageurl;
  image.setAttribute("src", image_src);
  image.classList.add("image");
  image_div.appendChild(image);
  title = document.createElement("div");
  title.classList.add("title");
  image_div.appendChild(title);
  emp_name = document.createElement("div");
  emp_desg = document.createElement("div");
  title.appendChild(emp_name);
  title.appendChild(emp_desg);
  emp_name.classList.add("name");
  emp_desg.classList.add("designation");
  emp_name.innerHTML = obj[id].name;
  emp_desg.innerHTML = obj[id].designation;

  info = document.querySelector(".info-container");
  const arr = ["EmpID", "DOJ", "Total Exp", "Work Location", "Technologies"];
  for (let j = 0; j < arr.length; j++) {
    const div = document.createElement("div");
    div.classList.add("label-input");
    const label = document.createElement("div");
    const input = document.createElement("div");
    div.style.display = "flex";
    label.classList.add("label");
    input.classList.add("input");
    info.appendChild(div);
    div.appendChild(label);
    div.appendChild(input);
    input.id = "in" + j + id;
    label.innerHTML = `${arr[j]}:`;
  }
  const input1 = document.getElementById("in0" + id);
  const input2 = document.getElementById("in1" + id);
  const input3 = document.getElementById("in2" + id);
  const input4 = document.getElementById("in3" + id);
  const input5 = document.getElementById("in4" + id);
  input1.innerHTML = obj[id].empid;
  input2.innerHTML = obj[id].doj;
  input3.innerHTML = obj[id].totalexp;
  input4.innerHTML = obj[id].worklocation;
  input5.innerHTML = obj[id].technologies;
}
