//    Base idea for this is that if you pick a number at random 1-500 
//    every time a random number generator picks one you have a lower
//    chance than if you stay with a single number

const Loop = 499 // Norm(100-300) Amount of times the MAIN for() 
const SubLoopAmt = 1000000 // Amount of times the code loops throughout the for()

//  Static For()
const StaticNum = Math.floor(Math.random(1) * 500) // This stays the same no matter what
let StaticString = []
let StaticAmtSame = 0

// Changing For()
let String = []
let AmtSame = 0

// Winner
let StaticWin = 0
let ChangingWin = 0


for(let MainLoop = 0; MainLoop < Loop; MainLoop++) {

    for (let i = 0; i < SubLoopAmt; i ++) { // Static Loop
        const Num = Math.floor(Math.random(1) * 500)
        if(Num == StaticNum) {
            StaticAmtSame++
        }
        StaticString.push(Num)
    }
    const StaticSumNum = StaticString.reduce(function(a, b){
        return a + b;
    }, 0)
    console.log(`Static Loop Finished| Average Num: ${(StaticSumNum/StaticString.length)}| Num: ${StaticNum}| Same: ${StaticAmtSame}  | Precentage Of NumberSame: ${StaticAmtSame/StaticString.length*100} | ${SubLoopAmt} Loops`)
    
    
    for (let i = 0; i < SubLoopAmt; i ++) { // Changing Loop
        const Num = Math.floor(Math.random(1) * 500)
        if(Num == Math.floor(Math.random(1) * 500)) {
            AmtSame++
        }
        String.push(Num)
    }
    const SumNum = String.reduce(function(a, b){
        return a + b;
    }, 0)
    
    console.log(`Changing Loop Finished| Average Num: ${(SumNum/String.length)}| Same: ${AmtSame}  | Precentage Of NumberSame: ${AmtSame/String.length*100} | ${SubLoopAmt} Loops`)
    
    if (StaticAmtSame > AmtSame) {
        console.log("%cStatic Won!", "color: red;")
        StaticWin++
    } else {
        console.log("%cChaning Won!", "color: red;")
        ChangingWin++
    }
    console.log(`Static:${StaticWin}/Changing:${ChangingWin}`)
    AmtSame = 0; StaticAmtSame = 0; StaticString = []; String = []
}

console.log(`Finished Math| Static: ${StaticWin}| Changing: ${ChangingWin}
Amount Of Main Loops: ${Loop}| Amount Of Sub Loops: ${SubLoopAmt}`)