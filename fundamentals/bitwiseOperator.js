let a = 50, b = 100 
// 128  64  32  16  8   4   2   1
//  0   0   1   1   0   0   1   0 // 50
//  0   1   1   0   0   1   0   0 // 100
//  0   0   1   0   0   0   0   0 // 32 (50 & 100)

console.log('Bitwise AND & operator => a & b: ', a & b)

// 128  64  32  16  8   4   2   1
//  0   0   1   1   0   0   1   0 // 50
//  0   1   1   0   0   1   0   0 // 100
//  0   1   1   1   0   1   1   0 // 118 (50 | 100)
console.log('Bitwise OR | operator  => a | b: ', a | b)

// 128  64  32  16  8   4   2   1
//  0   0   1   1   0   0   1   0 // 50
//  0   1   1   0   0   1   0   0 // 100
//  0   1   0   1   0   1   1   0 // 86 (50 ^ 100)
// XOR - 1 when both values are different otherwise it is 0
console.log('Bitwise XOR ^ operator => a ^ b: ', a ^ b)

// 128  64  32  16  8   4   2   1
//  0   0   1   1   0   0   1   0 // 50
//  1   1   0   0   1   1   0   1 // 205
console.log('Bitwise NOT ~ operator => ~a   : ', ~a)