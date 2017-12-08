var x = "neha";
function y(){
  alert("x");
  alert(x);
  x = 'Jyoti';
}
y();


function toTitleCase()
{
  alert("hello");
  // return false;

  // var str = document.myForm.username.value;

    // document.myForm.username.value = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});


// document.myForm.username.value = "hello";
return false;
}



// alert(form.username);

// document.getElementById("myForm").onsubmit = function() {
//      alert(document.getElementById("size").value);
//  }


list = [];

function result() {
  var display = '';


  for (var i in list)
  {
    display += list[i] + "<br>";
  // document.write(list[i] + "<br>");

  document.getElementById('result').innerHTML = display;
  }

}


window.onload = function() {
  document.getElementById("button1").onclick = function add() {

    list.push(document.getElementsByName('first')[0].value);

    result();

  }

  document.getElementById("button2").onclick = function add() {

    list.push(document.getElementsByName('second')[0].value);

    result();

  }

  document.getElementById("sorta").onclick = function add() {
    list.sort();

    result();

  }

  document.getElementById("sortb").onclick = function add() {
    list.reverse();

    result();

  }
}


// function sortA() {

// }
