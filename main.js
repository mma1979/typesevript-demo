function sum (x , y) {
var xNum = parseInt(x)
if(isNaN(xNum)){
    console.error('x must be a number')
    return;
}

var yNum = parseInt(y)
if(isNaN(yNum)){
    console.error('y must be a number')
    return;
}

console.log(xNum + yNum)

}

sum(10, "y")