function checkSeatStatus(a , b){
    if(typeof a !== 'string') throw new TypeError('First parameter is not a string')
    if(typeof b !== 'number') throw new TypeError('Second parameter is not a number')

    const layout = [
        [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
        [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
        [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
        [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
      ];

}
function getRowNumber(letraFila){
//   if(letraFila.charCodeAt(0) === 65){
//     return 0
//   }else if(letraFila.charCodeAt(0) === 67){
//     return 2;
//   }
return letraFila.charCodeAt(0)-65
}

module.exports = {
  checkSeatStatus,
  getRowNumber
}
