// 随机生成测试用例
//  Math.randow
'use strict';

// 数组长度  rangeL && rangeR 表示数组波动范围
function creatHelper(len,rangeL,rangeR){
    let arr = new Array();
    
    for(let i = 0 ; i < len ; i ++) {
        if(rangeL > rangeR) {
            arr.push(rangeR + Math.floor((Math.random() * (rangeL - rangeR + 1))))
        }else{
            arr.push(rangeL + Math.floor((Math.random() * (rangeR - rangeL + 1))))
        }
    }
    // 存在相同值
    console.log(arr);
    return arr;
}
creatHelper(15,50,12);