let firstbar = document.getElementById('typeinkg');

console.log(firstbar)
firstbar.addEventListener('keyup', convert);

function convert(e) {
    let kg = e.target.value;
    let gram = kg * 1000;
    document.getElementById("ingram").value = gram;
    let pound = kg * 2.205;
    document.getElementById("inpound").value = pound;

}