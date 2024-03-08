
let addValue = document.querySelector("#addValue");
let result = document.querySelector("#result");

const addList = () => {
    if (addValue.value === '') {
        alert("내용을 입력해주세요.")
    } else {
        let list = document.createElement("li");
        let text = document.createElement("span")
        let check = document.createElement("input");
        let del = document.createElement("button");
        
        text.innerText = addValue.value;
        check.setAttribute("type", "checkbox");
        del.innerText = "X";
        del.addEventListener("click", (e) => {
            e.target.parentElement.remove();
        })
        check.addEventListener("change", (e) => {
            if(check.checked) {
                text.className = "checkList"
            } else {
                text.className = ""
            }
        })
        
        list.appendChild(check);
        list.appendChild(text);
        list.appendChild(del);

        result.appendChild(list);
        addValue.value = '';
    }
}   