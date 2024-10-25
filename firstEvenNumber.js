// Trouver le premier nombre pair dans un tableau
const numbers = [1, 3, 7, 8, 10];

const findFirstEven = (array) => {
    for (i = 0; i < array.length; i++) {
        if (numbers[i] % 2 == 0) {
            console.log(numbers[i]);
            break;
        }
    }
}

findFirstEven(numbers); // 8