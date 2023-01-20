let x = '';
let y = '';
let sign = '';
let finish = false;
const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','*','/'];
const out = document.querySelector('.calc-screen p');
function clearAll (){
x='';
y='';
sign='';
finish=false;
out.textContent = 0
}
document.querySelector('.ac').onclick = clearAll;
document.querySelector('.buttons').onclick = (event) => {
 if(!event.target.classList.contains('btn')) return;
 if(event.target.classList.contains('ac')) return;

 out.textContent='';
 const key = event.target.textContent;
 if(digit.includes(key)){
    if(x === '' & sign === ''){
        x += key;
        out.textContent = x;
    }else if (x!== '' && y!== '' && finish){
y = key;
finish = false;
out.textContent = y;
    }else{
        y += key;
        out.textContent = y;
    }


 
 }
 if(action.includes(key)){
    sign = key;
    out.textContent = sign;
    
    return;
 }
if(key==='='){
    if(y === '') y = x;
    switch (sign) {
        case '+':
            x = (+x) + (+y)
            break;
            case '-':
            x = x - y;
            break;
            case '*':
           x = x * y; 
            break;
            case '/':
                if(y === '0'){
                    out.textContent = 'Ошибка';
                    x='';
                    y='';
                    sign='';
                    return;
                }
            x = x / y;
            break;
    }
    finish = true;
    out.textContent = x;
}

    }
 
