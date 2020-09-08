document.addEventListener("DOMContentLoaded", () => {
    //Add Item function
    document.addEventListener('keypress', (e) => {
        if (e.keyCode === 13) {
            document.querySelector(".input-btn").click();
        }
    });
    const checkItem = (e) => {
        e.preventDefault();
        if (e.target.localName == "svg") {
            let parentBtn = e.target.parentElement;
            parentBtn.parentElement.style.textDecoration = "line-through";
console.log(parentBtn.parentElement.innerHTML)
        } else {
            let parentBtn = e.target.parentElement.style.textDecoration = "line-through";
            console.log(parentBtn.innerHTML)
        }
    }
    const deleteItem = (e) => {

        e.preventDefault();

        if (e.target.localName == 'svg') {

            let parentBtn = e.target.parentElement;
            parentBtn.parentElement.remove();
        }

        if (e.target.localName == 'button') {

            e.target.parentElement.remove();
        }


    }
    //Delete and Check button
    const addItem = () => {

        var input = document.querySelector(".todo-input");

        if (input.value == "") {
            alert("Enter some task.");
            console.log("It worked.");
        } else {
            var li = document.createElement('li');

            // li.innerHTML = input.value + ' <button id="fa-trash"> </button> <button id="fa-check"> ///<i class="fas fa-check"></i></button>';

            var del = document.createElement('button');
            var check = document.createElement('button');
            check.innerHTML = '<i class="fas fa-check"></i>';
            check.id='fa-check';
            del.innerHTML = '<i class="fas fa-trash"></i>';
            del.id = 'fa-trash';
            li.innerHTML = input.value;
            li.append(del);
            li.append(check);
            document.getElementById('main-list').append(li);
            del.addEventListener('click', deleteItem);
            check.addEventListener("click", checkItem);

            input.value = "";
        }
    }
    document.querySelector(".input-btn").addEventListener("click", addItem);
})