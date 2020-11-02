const op={
    1(a,b){
        console.log("somando")
        return a+b
    },
    2(a,b){
        console.log("subtraindo")
        return a-b
    },
    3(a,b){
        console.log("multiplicando")
        return a*b
    },
    4(a,b){
        console.log("dividindo")
        return a/b
    },
    5(a,b){
        console.log("potenciando")
        return Math.pow(a,b)
    },
    6(a){
        console.log("executando raiz")
        return Math.sqrt(a)
    }

}
var pop=+prompt("1-soma, 2-subtração,3-multiplicação,4-divisão,5-potenciação,6-radiciação.")
const r=op[pop]
var n1=+prompt("Operando 1")
var n2=+prompt("Operando 2 ou expoente")
console.log(r(n1,n2))