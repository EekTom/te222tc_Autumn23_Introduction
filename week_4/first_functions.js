//Function 1
function checking_value(x){
    let value = x
    if (value < 0){
        console.log ('The following number has a negative value:')
        return value
    } else {
        console.log('The following number has a positive value:')
        return value
    }
}

console.log(checking_value (1))
console.log(checking_value(-1))

//Function 2
function checking_year(a, b, c, d){
    let millenium = a * 1000
    let century = b * 100
    let decade = c * 10
    let year = d * 1
    let selected_year = millenium+century+decade+year
    console.log('The year is the following:')
    return selected_year
}

console.log(checking_year(2, 0, 2, 3))
console.log(checking_year(3, 2, 0, 2))

//Function 3
function rectangle_area(length, width){
    let area = length * width
    console.log('The rectangles area is ' + area + '.')
    return area
}

console.log(rectangle_area(8, 3))