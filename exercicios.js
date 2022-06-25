// function dominio(site) {



//     If (site.slice(1,7)==="https://") 
//         return console.log(site)
    
//     Else ////(site.slice(1,7)!=="https://")
            
//         return "https://"+site
            
//     }

// console.log(dominio('americanas.com.br'))

// const dobro = (num) => num*2;
// const triplo = (num) => num*3;
// const aplicar = (num, operacao) => operacao (num);

// const somar = (num1 , num2) => num1 + num2;
// const subtrair = (num1 , num2) => num1 - num2;
// const dividir = (num1 , num2) => num1 / num2;
// const multiplicar = (num1 , num2) => num1 * num2;
// const calculadora = (num1, num2, operacao) => operacao (num1, num2);

// console.log(calculadora(100,50,multiplicar));

//If ternário
// function dominio(site) {
//     (site.slice(1,7)==="http://") ? console.log(site) : console.log("http://"+site)
//         }

// dominio('twitter.com')

 let site = " "
 function dominio(site) {
     if(site.slice(1,7)==="http://")
     {
      return console.log(site);
    }
      else 
      {
        console.log("http://"+site);
      }
    }
 
dominio('twitter.com')




