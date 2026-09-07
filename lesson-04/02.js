

function includesElement(array, element) {
    for (let i = 0; i < array.length; i++) {
        const mistery = array[i]

        if (mistery === element) {
            return true;
        } 
    }

    return false
}


function findUniqueElements(arrayWithDuplicates) {
    const arrayNoDuplicates = []
    for (let i = 0; i < arrayWithDuplicates.length; i++) {
        
        const currentElement = arrayWithDuplicates[i]
        const isElementAlreadyInResultArray = includesElement(arrayNoDuplicates, currentElement)

        if (!isElementAlreadyInResultArray) {
            arrayNoDuplicates.push(currentElement)
        }
    }
   

    return arrayNoDuplicates
}




findUniqueElements([4, 9, 245, 99, 4, 8, 9, 245, 77, 8])

