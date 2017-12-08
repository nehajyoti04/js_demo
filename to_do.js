// localStorage.clear();
var to_do_array = []
var to_do = JSON.parse(localStorage.getItem('to_do'));
if(to_do) {
  to_do_array = JSON.parse(localStorage.getItem('to_do'));
}

window.onload = function() {

  result();
  document.getElementById("save").onclick = function save() {
    var new_entry = {
      'title': document.getElementsByName('title')[0].value,
      'description': document.getElementsByName('description')[0].value,
      'flag': 'not-done'
    };
    to_do_array.push(new_entry);
    localStorage.setItem('to_do', JSON.stringify(to_do_array));
  }
  document.getElementsByClassName("not-done").onclick =
  document.getElementsByClassName("not-done").onclick = function done(e) {
    alert("e");
    alert(e);
  }
}

function todo_delete(id) {
delete to_do_array[id];
to_do_array.pop(id);
localStorage.setItem('to_do', JSON.stringify(to_do_array));
  // alert("id");
// alert(id);
// to_do_array.pop(id);


// to_do_array = JSON.parse(localStorage.getItem('to_do'));
// alert(to_do_array[id]);
// console.log("to do");
//   console.log(to_do);
// console.log("id");
// console.log(id);
console.log("to do array");
  console.log(to_do_array);


}
function done_click(id) {

to_do_array[id]['flag'] = 'done';
localStorage.setItem('to_do', JSON.stringify(to_do_array));
}

function result() {
  console.log("to do");
  console.log(to_do);
  var display = '<table>';

  for (var i in to_do)
  {
    display += '<tr>';
    display += '<td>' + to_do[i]['title'] + '</td>';
    display += '<td>' + to_do[i]['description'] + '</td>';
    if (to_do[i]['flag'] != 'done') {
     display += '<td><input onClick="done_click(this.id)" class="not-done" type="button" value="DONE" id=' + i + '></td>';
    }
    display += '<td><input onClick="todo_delete(this.id)" class="' + to_do[i]['flag'] +'" type="button" value="Delete" id=' + i + '></td>';

  display += '</tr>';

  //   display += list[i] + "<br>";
  // // document.write(list[i] + "<br>");

  }
  display += '</table>';
  document.getElementById('result').innerHTML = display;
}
