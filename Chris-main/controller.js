function removeItem(index){
    model.Trær.splice(index, 1)
    show();
}

function addNewItem(){
    const newObject ={
        sort: model.inputs.sort,
        type: model.inputs.blad
    }
    if(model.inputs.sort == '' || model.inputs.blad == ''){
        model.feilmelding = 'fyll inn begge feltene';
    }
    else {

        model.Trær.push(newObject);
        model.feilmelding = 'Du har valgt til en ny '
    }
    model.inputs.sort = '';
    model.inputs.blad = '';
    show();
}

function endreItem(i){
    model.Trær[i].type = model.inputs.sort;
    model.Trær[i].type = model.inputs.blad;
    show();
    
}

 function endreKnapp(i){
    let html = `<input type="text" oninput ="model.inputs.sort = this.value" value="${model.inputs.sort}" placeholder="Sort"></input>
        <input type="text" oninput ="model.inputs.blad = this.value" value="${model.inputs.blad}" placeholder="Blad">
        </input><button onclick="endreItem(${i})">Legg Til</button>`
    show();
 }