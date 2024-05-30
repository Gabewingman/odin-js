
showName = function(){
    let name = "Peter Gabriel Bersamina";
    console.log(name);
    return name;
}

showSurName = function(){
    let surname = showName();
    let surnameSlice = surname.slice(14);
    console.log(surnameSlice);
}

showName();
showSurName();