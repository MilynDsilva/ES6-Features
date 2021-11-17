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

const new_week = (days) => {
    days.weeks=weeks.includes(days.day);
    return weekMaps;
}

const sum1 = (sum,days) => sum+days.value;

const totalvalue = weekMaps.filter(new_week);

//console.log(totalvalue)

const finalop = weekMaps.reduce(new_week);

console.log(finalop);

//const finalop = totalvalue.reduce(sum1);

// const finalop1 = weekMaps.reduce(sum1);
// console.log(finalop);