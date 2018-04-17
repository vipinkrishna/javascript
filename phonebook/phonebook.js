
//COPYLEFT github.com/vipinkrishna

var output = document.getElementById('output');

var phonebook = [
    { name: 'aaa', phone: '11111' },
    { name: 'bbb', phone: '22222' },
    { name: 'ccc', phone: '33333' },
    { name: 'ddd', phone: '44444' },
    { name: 'eee', phone: '55555' },
    { name: 'fff', phone: '66666' },
    { name: 'ggg', phone: '77777' },
    { name: 'hhh', phone: '88888' },
    { name: 'iii', phone: '99999' },
    { name: 'jjj', phone: '12345' },
    { name: 'kkk', phone: '23423' },
    { name: 'lll', phone: '54334' },
    { name: 'mmm', phone: '85747' },
    { name: 'nnn', phone: '54737' },
    { name: 'ooo', phone: '42745' },
    { name: 'ppp', phone: '65748' },
];

var showcount = 5; //You can customize here

var position = 0;
var page = 1;

display();


function display() {
    var end;
    output.innerHTML = "";

    if (page * showcount > phonebook.length)
        end = phonebook.length
    else
        end = page * showcount;

    for (i = position; i < end; i++) {
        output.innerHTML += `<li>${phonebook[i].name} - ${phonebook[i].phone} <span class='del' key=${i}>x</span></li>`;
    }
    var list = document.getElementsByClassName('del');
    Array.from(list).forEach((deletebtn) => deletebtn.addEventListener('click', deleteitem));
}


function deleteitem(e) {
    var index = e.target.attributes.key.value;
    phonebook.splice(index, 1);
    if (position === phonebook.length && position > 0) {
        page--;
        position = position - showcount;
    }
    display();
    console.log('DELETE: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}

var btnnext = document.getElementById('next');
btnnext.addEventListener('click', next);
function next() {
    if (page * showcount < phonebook.length) {
        page++;
        position = position + showcount;
        display();
    }
    console.log('NEXT: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}


var btnprevious = document.getElementById('previous');
btnprevious.addEventListener('click', previous);
function previous() {
    if (position > 0) {
        page--;
        position = position - showcount;
        display();
    }
    console.log('PREV: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}


var btnfirst = document.getElementById('first');
btnfirst.addEventListener('click', first);
function first() {
    position = 0;
    page = 1;
    display();
    console.log('FIRST: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}


var btnlast = document.getElementById('last');
btnlast.addEventListener('click', last);
function last() {
    if (phonebook.length > 0) {
        if (phonebook.length % showcount == 0)
            page = phonebook.length / showcount;
        else
            page = Math.ceil(phonebook.length / showcount);
        position = (page * showcount) - showcount;
        display();
    }
    console.log('LAST: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}

var btnaddnew = document.getElementById('addnew');
btnaddnew.addEventListener('click', addnew);
function addnew() {
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    if (!name)
        return document.getElementById('name').select();
    if (!phone)
        return document.getElementById('phone').select();
    phonebook.push({ name, phone });
    document.getElementById('name').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('name').select();
    display();
    console.log('ADD: pos: ', position, ' page: ', page, ' LENGTH: ', phonebook.length);
}
