function addNewWEField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let weOb = document.getElementById("we");

    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb)
}

function addNewAQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let aqOb = document.getElementById("aq");

    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb)

}


function addNewSKField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let skOb = document.getElementById("sk");

    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb)

}


function addNewaffilField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("affilField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "enter here");

    let affilOb = document.getElementById("affil");

    let affilAddButtonOb = document.getElementById("affilAddButton");

    affilOb.insertBefore(newNode, affilAddButtonOb)

}








  function generateCV() {
      console.log("heyyyaa")

      let nameField = document.getElementById("nameField").value;

      let nameT1 = document.getElementById("nameT1");

      nameT1.innerHTML = nameField;

      document.getElementById("nameT2").innerHTML = nameField;


      document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

      document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

      document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

      document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

      document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;



      let wes = document.getElementsByClassName("weField");
      let str = "";
      for(let e of wes){
      str = str + `<li> ${e.value}</li>`;
      }
      document.getElementById("weT").innerHTML = str;


      let affils = document.getElementsByClassName("affilField");
      let str3 = "";
      for(let e of affils){
      str3 = str3 + `<li> ${e.value}</li>`;
      }
      document.getElementById("affilT").innerHTML = str3;




      let aqs = document.getElementsByClassName("eqField");
      let str1 = "";
      for(let e of aqs){
      str1 = str1 + `<li> ${e.value}</li>`;
      }
      document.getElementById("aqT").innerHTML = str1;


      let sks = document.getElementsByClassName("skField");
      let str2 = "";
      for(let e of sks){
      str2 = str2 + `<li> ${e.value}</li>`;
      }
      document.getElementById("skT").innerHTML = str2;







      document.getElementById("cv-form").style.display = "none";
      document.getElementById("cv-template").style.display = "block";
  }

  function printCV(){
      window.print();
  }
