function findDuplicates(value) {
    let arr = [];
    for (let i = 0; i < value.length; i++) {
        let duplicated = 0;
        for (let j = 0; j < value.length; j++) {
            if (value[i] === value[j]) {
                duplicated++;
            }
        }
        if(duplicated > 1 && !arr.includes(value[i])) {
            arr.push(value[i]);
        }
    }
    return arr;
}

console.log(findDuplicates([4, 2, 7, 4, 2, 9]));