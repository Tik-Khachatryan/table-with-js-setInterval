let count = 0;

document.write("<table border='1px' style='display: inline-block;' id='myTable'></table>");

const interval = setInterval(() => {
    count++;
    let string = '<tr>';
    for (let i = 1; i <= count; i++) {
        string += '<td></td>';

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
