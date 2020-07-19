function add(n1,n2){
    console.log(`Addition : ${Number(n1)+Number(n2)}`);
}

function sub(n1,n2){
    console.log(`Subtraction ${n1-n2}`);
}

function multi(n1,n2){
    console.log(`Multiplication ${n1*n2}`);
}

function divi(n1,n2){
    console.log(`Division ${n1/n2}`);
}

function sqr_root(num){
    console.log(`Square root ${Math.sqrt(num).toFixed(2)}`);
}

function percent(val,total){
    console.log(`${((val/total)*(1/100))*10000}%`);
}

