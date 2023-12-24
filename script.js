let button = document.querySelector('button');
let x = document.querySelector('h1');
let a = "yellow";
let count = 0;
button.addEventListener('click',()=>{

    color(a);
    times(count);

})

let color = (value)=>{

    switch(value)
    {
        case 'yellow':
            a = "red";
            button.style.background= a ;
            break;
        
            case 'red':
            a = "green";
            button.style.background=a;
            break;

        
            case "green":
            a = "yellow";
            button.style.background = a;
            break;
    }
    

}

let times =()=>{
    count = count + 1;
    x.querySelector('span').innerHTML=`${count}`;
    
}

