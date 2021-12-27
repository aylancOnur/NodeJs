const PI = Math.PI;

const arguments = process.argv.slice(2);

const areaOfTheCircle = (pi,r) => {
    console.log(`Area Of The Circle => ${pi * Math.pow(r,2)}`)
}

areaOfTheCircle(PI, arguments[0] * 1)