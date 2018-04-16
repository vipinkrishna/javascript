
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
        output.innerHTML += `<li><strong>${phonebook[i].name}</strong> - ${phonebook[i].phone}</li>`;
    }
}


var btnnext = document.getElementById('next');
btnnext.addEventListener('click', next);
function next() {
    if (page * showcount <= phonebook.length) {
        page++;
        position = position + showcount;
        display();
    }
}


var btnprevious = document.getElementById('previous');
btnprevious.addEventListener('click', previous);
function previous() {
    if (position > 0) {
        page--;
        position = position - showcount;
        display();
    }
}


var btnfirst = document.getElementById('first');
btnfirst.addEventListener('click', first);
function first() {
    position = 0;
    page = 1;
    display();
}


var btnlast = document.getElementById('last');
btnlast.addEventListener('click', last);
function last() {
    position = phonebook.length - (phonebook.length % showcount);
    page = (position / showcount) + 1;
    display();
}