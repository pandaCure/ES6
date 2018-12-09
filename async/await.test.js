let a = 0;
const computer = async () => {
    console.log(a)
    a = a + await 10;
    console.log(a) // 10
    a = (await 10) + a; // 20
    console.log(a)
    a =  await 10 + a; // 3
    console.log(a)
}
computer()
a++
console.log(a) // 1