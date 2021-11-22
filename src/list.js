import books from "./data";
const Genre = (Category) => {
    Category = [];
    for(let object of books){
        for(let multiObject in object){
            Category.push(multiObject);
        }
    }
return Category;
}
const bData = (data) =>{
    data = [];
    for(let object of books){
        for(let multiObject in object){
            for(let number in object[multiObject]){
                for(let property in object[multiObject][number]) {
                    if (object[multiObject][number][property] === '2021') {
                        data.push(property + ": " + object[multiObject][number][property] + " (Nauja knyga)")
                    } else {
                        data.push(property + ": " + object[multiObject][number][property])
                    }
                }
            }
        }
    }
    return data
}
export {Genre, bData};