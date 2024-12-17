
function combineNames(firstNames, lastNames) {
    let fullNames = [];
    if (firstNames.length > lastNames.length) {
        len = firstNames.length;
    }
    else {
        len = lastNames.length;
    }

    for (let i = 0; i < len; i++) {
        if (firstNames[i] == null) {
            fullNames.push((i + 1) + ". " + lastNames[i])
        }
        else if (lastNames[i] == null) {
            fullNames.push((i + 1) + ". " + firstNames[i])
        }
        else {
            fullNames.push((i + 1) + ". " + firstNames[i] + " " + lastNames[i])
        }
    }
    return fullNames;
}

let firstNames = ["Bob", "Jill", "Kate", "Maci"];
let lastNames = ["Gregory", "Wurtz", "Bishop"];
let fullNames = combineNames(firstNames, lastNames);

for (let i = 0; i < fullNames.length; i++) {
    console.log(fullNames[i]);
}