const removeNote = (arr, item) => {
    let newArry = [...arr]
    const index = newArry.findIndex((element) => element === item)
    if (index !== -1){
        newArry.slice(index, 1)
        return newArry
    }
}

module.exports = removeNote;