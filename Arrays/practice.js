/*let marks =[85,97,44,37,76,60]
let sum =0;
for(let i=0; i<marks.length; i++){ 
    sum = sum + marks[i];
}
console.log(sum);
let avrg = sum/marks.length;
console.log(avrg);//66.5
*/
/*let items = [250,645,300,900,50];

for(let i=0; i<items.length;i++){
    console.log("Real Price",items[i]);
    let offers = items[i]*0.1;
    items[i] -= offers;
    console.log("Price decreased",offers);
    console.log("Offer price",items[i]);
}*/

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
console.log(companies);
companies.shift();
console.log(companies);
companies[1]="Ola";
console.log(companies);
companies.push("Amazon");
console.log(companies);