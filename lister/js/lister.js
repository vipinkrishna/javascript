var txtSearch = document.getElementById("txtSearch");
var txtAdd = document.getElementById("txtAdd");
var btnAdd = document.getElementById("btnAdd");
var ul = document.querySelector("#ul"); //MULTIPLE NODE

var btnDel = document.querySelectorAll("button.delete"); //MULTIPLE NODES


txtSearch.addEventListener("keyup",txtSearchFn);
txtSearch.addEventListener("focus",txtSearchFn);
txtAdd.addEventListener("focus",txtSelectFn);
btnAdd.addEventListener("click",btnAddFn);

txtAdd.addEventListener("keydown",crFn);

for(var i = 0;i<btnDel.length;i++) {
    btnDel[i].addEventListener("click",btnDelFn);
}

function crFn(e) {
    if(e.keyCode == 13) {
        txtSelectFn(e);
        btnAddFn(e);
    }
}

function txtSearchFn(e) {
    // Array.from(ul.children).forEach(function(text) {alert(text.firstElementChild.textContent);});
    // Array.from(ul.children).forEach(function(text) {alert(text.firstChild.textContent);});
    Array.from(ul.children).forEach(function(text) {
        if(text.firstChild.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1) {
            text.firstChild.parentNode.style.display = "block";
        } else {
            text.firstChild.parentNode.style.display = "none";
        }
    });
 
}

function txtSelectFn(e) {
    e.target.select();
}

function btnAddFn(e) {
    if(txtAdd.value.trim()) {
        var newli = document.createElement("li");
        var newbtn = document.createElement("button");
        newbtn.className = "delete";
        newbtn.innerText = "X";
        newbtn.addEventListener("click",btnDelFn);
        var newtxt = document.createTextNode(txtAdd.value);
        newli.appendChild(newtxt); //INTERCHANGE BELOW LINE     // alert(newli.firstChild);
        newli.appendChild(newbtn); //INTERCHANGE ABOVE LINE     // alert(newli.firstChild);
        ul.appendChild(newli);
    }
}

function btnDelFn(e) {
    ul.removeChild(e.target.parentNode);
}