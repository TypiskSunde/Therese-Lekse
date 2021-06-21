let appDiv = document.getElementById('app');
show()
function show(){
let html = `${model.feilmelding}<br>Trær:`;
for(let i = 0; i < model.Trær.length; i++){
    html += `<li onclick="endreItem(${i})">${model.Trær[i].sort} <br><br>
    <br>Type: ${model.Trær[i].type}</li>
    <button onclick="removeItem(${i})">Slett</button> 
    <button onclick="endreKnapp(${i})">Endre</button> <br>
    <hr>
    `
}

html += `<input type="text" oninput ="model.inputs.sort = this.value" value="${model.inputs.sort}" placeholder="Sort"></input>
<input type="text" oninput ="model.inputs.blad = this.value" value="${model.inputs.blad}" placeholder="Blad">
</input><button onclick="addNewItem()">Legg Til</button>`
appDiv.innerHTML = html;
}