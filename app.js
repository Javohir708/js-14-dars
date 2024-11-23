// 1. a sonidan b sonigacha juft sonlarni array qilib qaytaring. 
{
    let a = 1
    let b = 30

    let array = []

    for(let i = a; i <= b; i++) {
        if (i % 2 === 0){
            array.push(i)
        }
    }

    console.log(array);
}
{
    let a = 1;
    let b = 30;

    let array = []

    function recursive () {
        
        if (a % 2 === 0) {
            array.push(a)
        }
        a++;
        if(a <= b){
            recursive();
        }
    }
    recursive()
    console.log(array);
}

// 2. a sonigacha 10 lik sonlarni array qilib qaytaring. a = 45 >> 10, 20, 30, 40
{
    let a = 45

    let array = []
    for(let i = 10; i < a; i++) {
        if (i % 10 === 0){
            array.push(i)
        }
    }

    console.log(array);
}

// 3. a sonigacha sonlarni kvadratini array qilib qaytaring.
{
    let a = 18

    let array = []

    for (let i = 1; i <= a; i++) {
        array.push(i ** 2)
    }

    console.log(array);
}
{
    let a = 1;
    let oxiri = 18; 
    let array = [];
    
    function recursive() {
        if (a <= oxiri) { 
            array.push(a ** 2); 
            a++; 
            recursive(); 
        }
    }
    
    recursive();
    console.log(array);
}

// 4. parametrda kelgan sonni tartib bilan qaytaradigan funksiya
{
    function number (son) {
        let tartibli = String(son).split('')
        return tartibli.sort().join('')
    }

    console.log(number(354261));
}

// 5. string belgisini oxirida so'roq belgisi bo'lsa shuni olib tashlaydigan funksiya

// 6. a soni berilgan. Array ichiga a sonini a marta joylang. 
{
  let a = 8

  let array = []

  for (let i = 1; i <= a; i++) {
    array.push(a)
  }

  console.log(array);
}
{
    let a = 8
    let array = []

    let qiymat = 1
    function recursive () {
        if (qiymat > a){
            return array
        }
        array.push(a)
        qiymat++

        return recursive()
    }

    recursive()
    console.log(array);
}

// 7. funksiyaga falsy qiymat kirsa false, truthy qiymat kirsa true qaytaradigan funksiya tuzing.
function tekshirish (qiymat) {
    if (qiymat){
        return 'true'
    }else {
        return 'false'
    }
}

console.log(tekshirish(NaN));