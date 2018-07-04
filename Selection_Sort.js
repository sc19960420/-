// port = Arry
function selectionSort(port){
    for(let i = 0 ; i < port.length ; i ++){
        let minIndex  = i ;
        for(let j = i + 1 ; j < port.length ; j ++){
            if(port[j] < port[minIndex]){
                minIndex = j;                
            }
        }
    }
    console.log(port);
}
let newArr = [10,9,8,7,6,5,4,3,2,1];
//  字符 & 浮点数  不支持
// let newArr = ["s","d","f","g"];  
// let newArr = [10.1,9.2,8.5,7,6,5.4,1]; 
selectionSort(newArr);