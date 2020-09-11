document.addEventListener("DOMContentLoaded", function () {
    // setting function for enter button
    document.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            document.querySelector(".input-btn").click();
        }
    })
    // function for deleting list items
    function deleteItem(e) {
        e.preventDefault();
        if (e.target.localName == 'svg') {
            let parentBtn = e.target.parentElement;
            parentBtn.parentElement.remove();
        } if (e.target.localName == 'button') {
            e.target.parentElement.remove();
        }
    }
    //function for checking the list item
    function done(e) {
        e.preventDefault();
        if (e.target.localName == 'svg') {
            let parentBtn = e.target.parentElement;
            if (parentBtn.parentElement.style.textDecoration == 'line-through') {
                parentBtn.parentElement.style.textDecoration = 'none'
            } else {
                parentBtn.parentElement.style.textDecoration = 'line-through';
            }

        } else {
            if (e.target.parentElement.style.textDecoration == 'line-through') {
                e.target.parentElement.styletextDecoration = 'none';
            } else {
                e.target.parentElement.styletextDecoration = 'line-through';
            }
        }
    }
    //Add function to add list item inside the unordered list
    function addItem() {
        var input = document.querySelector(".todo-input");
        if (input.value === "") {
            alert("Enter some task.")
        } else {
            var li = document.createElement('li');
            var del = document.createElement('button');
            var check = document.createElement('button');
            check.innerHTML = ' <i class="fas fa-check"></i>';
            check.id = "fa-check";
            del.innerHTML = '<i class="fas fa-trash"> </i>';
            del.id = "fa-trash";
            li.innerHTML = input.value;
            li.append(del);
            li.append(check);
            document.getElementById('main-list').append(li);
//adding eventlistener for deleteItem and done 
            del.addEventListener('click', deleteItem);
            check.addEventListener('click', done);
             input.value = "";
        }
    }
document.querySelector(".input-btn").addEventListener("click", addItem)
})