var sno = 0;
var data = [];
var isEdit = false;
var selectedRow;
var sOrder = "asc";
var propsArray = ["name", "phn", "dob", "city", "gender"];
var sBtns = [
    {
        id: "name",
        name: "Name"
    },
    {
        id: "phn",
        name: "Phone"
    },
    {
        id: "dob",
        name: "DOB"
    },
    {
        id: "city",
        name: "City"
    },
    {
        id: "gender",
        name: "Gender"
    }
]
window.onload = function () {
    let lsd = localStorage.getItem("details");
    data = lsd == null ? [] : JSON.parse(lsd);
    loopingArray();
    createSBtns()
}


function createSBtns() {
    let btnDiv = document.getElementById("sbtns");
    for (let ele of sBtns) {
        let btn = `<button class="btn btn-secondary" id="sb${ele.id}" onclick="onSort('${ele.id}')">${ele.name}</button>`;
        btnDiv.insertAdjacentHTML("beforeend", btn);
    }


}

function onSubmit() {
    let name = document.getElementById("name").value;
    let phn = document.getElementById("phn").value;
    let dob = document.getElementById("dob").value;
    let city = document.getElementById("city").value;
    let gender = document.querySelector("input[name='gender']:checked").value;
    let commodities = document.querySelectorAll("input[name='commodity']:checked");
    let selComs = [];
    for (let i = 0; i < commodities.length; i++) {
        selComs.push(commodities[i].value);
    }
    let age = findAge(dob);
    let car = selComs.indexOf("Car") == -1 ? "No" : "Yes";
    let bike = selComs.indexOf("Bike") == -1 ? "No" : "Yes";
    let mobile = selComs.indexOf("Mobile") == -1 ? "No" : "Yes";
    let laptop = selComs.indexOf("Laptop") == -1 ? "No" : "Yes";
    let obj = {
        name: name,
        phn: phn,
        dob: dob.split("-").reverse().join("/"),
        age: age,
        city: city,
        gender: gender,
        car: car,
        bike: bike,
        mobile: mobile,
        laptop: laptop
    }
    isEdit ? (data[selectedRow - 1] = obj) : data.push(obj);

    localStorage.setItem("details", JSON.stringify(data));
    loopingArray();
}

function loopingArray() {
    let table = document.getElementById("tbl");
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
    for (let i = 0; i < data.length; i++) {
        let obj = data[i];
        let tRow = `<tr>
        <td>${i + 1}</td>
        <td>${obj.name}</td>
        <td>${obj.phn}</td>
        <td>${obj.dob}</td>
        <td>${obj.age}</td>
        <td>${obj.city}</td>
        <td>${obj.gender}</td>
        <td>${obj.car}</td>
        <td>${obj.bike}</td>
        <td>${obj.mobile}</td>
        <td>${obj.laptop}</td>
        <td>
        <button class="btn btn-info" onclick="onEdit(${i + 1})">Edit</button>
        <span class="ml-1 mr-1"></span>
        <button class="btn btn-danger" onclick="onDelete(${i + 1})">Delete</button>
        </td>
</tr>`;
        table.insertAdjacentHTML("beforeend", tRow);
    }
    onClear();
}

function findAge(dob) {
    let toDay = new Date();
    let bDay = new Date(dob);
    let age = toDay.getFullYear() - bDay.getFullYear();
    let md = toDay.getMonth() - bDay.getMonth();
    let dd = toDay.getDate() - bDay.getDate();
    if (md < 0 || (md == 0 && dd < 0)) {
        age--;
    }
    return age;
}


function onEdit(sno) {
    isEdit = true;
    let btn = document.getElementById("sbtn");
    btn.innerHTML = "Update";
    btn.className = "btn btn-success";
    selectedRow = sno;
    let i = sno - 1;
    let obj = data[i];
    document.getElementById("name").value = obj.name;
    document.getElementById("phn").value = obj.phn;
    document.getElementById("city").value = obj.city;
    document.getElementById("dob").value = obj.dob.split("/").reverse().join("-");
    document.getElementById(obj.gender).checked = true;
    for (let p in obj) {
        if (p == "car" || p == "bike" || p == "mobile" || p == "laptop") {
            document.getElementById(p).checked = obj[p] == "Yes" ? true : false;
        }
    }
}

function onDelete(sno) {
    data.splice(sno - 1, 1);
    localStorage.setItem("details", JSON.stringify(data));
    loopingArray();
}



function onClear() {
    let form = document.getElementById("frm");
    form.reset();
    isEdit = false;
    let btn = document.getElementById("sbtn");
    btn.innerHTML = "Submit";
    btn.className = "btn btn-primary";
    selectedRow = null;
}


function onSort(p) {
    for (let ele of sBtns) {
        document.getElementById("sb" + ele.id).innerHTML = ele.name;
        document.getElementById("sb" + ele.id).className = "btn btn-secondary";
    }
    let actbtn = document.getElementById("sb" + p);
    actbtn.className = "btn btn-info";
    let icon = sOrder == "asc"?'<i class="fa fa-long-arrow-up" aria-hidden="true"></i>':'<i class="fa fa-long-arrow-down" aria-hidden="true"></i>';
    actbtn.innerHTML = `${actbtn.innerHTML} ${icon}`;
    let n = sOrder == "asc" ? 1 : -1;
    sOrder = sOrder == "asc" ? "desc" : "asc";
    if (p == "dob") {
        data.sort((a, b) => {
            return n == 1 ? dateToNum(a[p]) - dateToNum(b[p]) : dateToNum(b[p]) - dateToNum(a[p]);
        })
    } else {
        data.sort((a, b) => {
            if (a[p] < b[p]) {
                return (-1 * n);
            }
            if (a[p] > b[p]) {
                return (1 * n);
            }
            return 0;
        });

    }
    loopingArray();
}

function dateToNum(dob) {
    let d = dob.split("/").reverse().join("-");
    let dt = new Date(d).getTime();
    return dt;
}