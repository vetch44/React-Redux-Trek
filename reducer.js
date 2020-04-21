const initialState = {
    pie:false,
    dru:false,
    trze:false,
    czwar:false,
    pia:false,
    pojaw:true,
    pojaw2:true,
    pojaw3:true,
    pojaw4:true,
    pojaw5:true,
    ilo: 0,
    policzone: 0
};

const reducer = (state = initialState, action) => {
    const newState = {...state};
switch (action.type) {
    case "Annapurna":
    newState.pie=!state.pie;
    newState.dru=false;
    newState.trze=false;
    newState.czwar=false;
    newState.pia=false;
    break;
    case "Mirador":
    newState.trze=!state.trze;
    newState.pie=false;
    newState.dru=false;
    newState.czwar=false;
    newState.pia=false;
    break;
    case "Kongsleden":
    newState.czwar=!state.czwar;
    newState.pie=false;
    newState.dru=false;
    newState.trze=false;
    newState.pia=false;
    break;
    case "Robson":
    newState.pia=!state.pia;
    newState.pie=false;
    newState.dru=false;
    newState.trze=false;
    newState.czwar=false;
    break;
    case "Inca":
    newState.dru=!state.dru;
    newState.pie=false;
    newState.trze=false;
    newState.czwar=false;
    newState.pia=false;

    break;
    case "Add":
    newState.policzone= state.policzone + 250;
    newState.pojaw=false;
    break;
    case "Add2":
    newState.policzone= state.policzone + 50
    newState.pojaw2=false;
    break;
    case "Add3":
    newState.policzone= state.policzone + 100
    newState.pojaw3=false;
    break;
    case "Add4":
    newState.policzone= state.policzone + 30
    newState.pojaw4=false;
    break;
    case "Add5":
    newState.policzone= state.policzone + 42
    newState.pojaw5=false;
    break;
    case "Substract":
    newState.policzone= state.policzone - 250;
    newState.pojaw=true;
    break;
    case "Substract2":
    newState.policzone= state.policzone - 50
    newState.pojaw2=true;
    break;
    case "Substract3":
    newState.policzone= state.policzone - 100
    newState.pojaw3=true;
    break;
    case "Substract4":
    newState.policzone= state.policzone - 30
    newState.pojaw4=true;
    break;
    case "Substract5":
    newState.policzone= state.policzone - 42
    newState.pojaw5=true;
    break;
    default:
    break;
}
    return newState;
}

export default reducer;