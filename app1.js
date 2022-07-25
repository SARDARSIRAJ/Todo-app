var list = document.getElementById("list");

function addtxt() {
    var todo_inp = document.getElementById('todo-inp')

    var li = document.createElement('li')
    li.setAttribute("class","li")
    var litxt = document.createTextNode(todo_inp.value)
    li.appendChild(litxt)

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("onclick", "editbtn(this)")
    editbtn.appendChild(edittext)

    var dltbtn = document.createElement("button")
    var dlttxt = document.createTextNode("Delete")
    dltbtn.setAttribute("onclick", "dltbtn(this)")
    dltbtn.appendChild(dlttxt)

    li.appendChild(editbtn)
    li.appendChild(dltbtn)

    list.appendChild(li)
    todo_inp.value = ""
}

function deleteall() {
    list.innerHTML = ""
}
function editbtn(e) {
    var val = prompt("update Your task", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val
    console.log(val)
}

function dltbtn(e) {
    e.parentNode.remove()
}