let count = 0;

document.write("<table border='1px' style='display: inline-block;' id='myTable'></table>");

let arr = [];
for(let k = 0; k < 101; k++){
    const color1 = Math.round(Math.random()*254),
          color2 = Math.round(Math.random()*254),
          color3 = Math.round(Math.random()*254);
    arr.push('rgb('+ color1 + ',' + color2 + ',' + color3 +')');
}

const interval = setInterval(() => {
    count++;
    let string = '<tr>';
    for (let i = 1; i <= count; i++){

        string += '<td id="td" style="background-color: '+ arr[i] +'">'+ i +'</td>';

        if (i % 10 === 0) {
            string += '</tr><tr>';
        }
    }

    string += '</tr>';
    myTable.innerHTML = string;

    if (count === 100) {
        clearInterval(interval)
    }

}, 70);

