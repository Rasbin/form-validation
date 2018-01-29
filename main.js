const deleteSkills = () => {
    const cross = document.querySelectorAll('.skills span');

    Array.from(cross).forEach((element) => {
        element.addEventListener('click', (e)=> {
            let label = e.target.previousElementSibling;
            let box = label.parentElement;

            box.parentElement.removeChild(box);
        })
    });
} ;


deleteSkills()

const addButton = document.getElementById('add-button');

const addText = document.getElementById('add-text');

addButton.addEventListener('click', (e) => {

    let inputText = document.getElementById('add-text').value;
    let newId = inputText.split(" ").join("-");

    var x = document.createElement("input");
    x.setAttribute("type", "checkbox");
    x.id = newId;

    var newline = document.createElement("br");
    x.setAttribute("value", document.getElementById('add-text').value);
    var y = document.createElement("label");
    y.setAttribute("for",newId);
    y.innerHTML = inputText;

    var span = document.createElement("span");
    span.textContent = "\u274C";

    var z = document.createElement("div");
    z.setAttribute("class", "del-box");

    z.appendChild(x);
    z.appendChild(newline);
    z.appendChild(y);
    z.appendChild(span);

    document.getElementById('left-side').appendChild(z);
    deleteSkills();
})

function fixErrorMsg(nameOfId, valid) {
    const input = document.getElementById(nameOfId)
    if (!valid) input.classList.add("invalid");
}

const email = document.getElementById('email');
const confirmEmail = document.getElementById('conf-email');


confirmEmail.addEventListener('blur',(e) => {
    if (email.value !== confirmEmail.value) {
        confirmEmail.setCustomValidity('invalid')
    } else {
        confirmEmail.setCustomValidity('')
    }
});
