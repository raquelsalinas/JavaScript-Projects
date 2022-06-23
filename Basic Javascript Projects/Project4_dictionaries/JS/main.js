//Function for dictionary
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:"5",
        Sound:"Bark!"
    };

    //Deleting sound property from animal object
    delete Animal.Sound;

    document.getElementById("Dictionary").innerHTML = Animal.Sound
}