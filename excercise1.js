const weekMaps=[
    {day:"sun",value:1},
    {day:"mon",value:2},
    {day:"tue",value:4},
    {day:"wed",value:8},
    {day:"thu",value:16},
    {day:"fri",value:32},
    {day:"sat",value:64},
]; 

let weeks=["mon","tue","fri"];

//let new_week = weekMaps[i].day.includes(weeks[i]);


// const totval = function (){
//     for(let i=0;i<=weekMaps.length;i++)

//         for(i=0;i<=weeks.length;i++)
//             if (weekMaps[i].day==weeks[i])
                
//                 console.log(weekMaps[i].day,weeks[i]);
//             else
                
//                 console.log(weekMaps[i].day,weeks[i]);
// }

const totval1 = function (){
    let j=1;
    for(let j=1;j<weekMaps.length;j++)
        console.log(weekMaps[j].day);
        let i = 0;
        if(weekMaps[j].day === weeks[i])
            {
                console.log(weeks.value);
            }
        else 
            console.log(weeks+'hi');
        


}

console.log(totval1());






















// const totval = function (){
//     for(j=0;i<=weekMaps.length;j++)

//         for(i=0;i<=weekMaps.length;i++)
//             if (weekMaps[j].day==weeks[i])
                
//                 console.log(weekMaps[j].day,weeks[i]);
//             else
                
//                 console.log(weekMaps[j].day,weeks[i]);
// }



// let new_week = function myFun(weeks) {
//     return weekMaps.filter((weeks)=>{
//         return weekMaps.indexOf(weeks) === -1;
//     });
// };

//console.log(weekMaps[i].day,weeks[i]);


