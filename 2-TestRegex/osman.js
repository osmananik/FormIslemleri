const username ="111osman";
const pattern=/[a-z]{6,10}/;  //başlangıçta ve bitişinde olması gereken değerleri belirtir

    // let sonuc=pattern.test(username); //regex yapısına dair test işlemi yapmamızı sağlamaktadır

    // //console.log(sonuc);  //ekrana true veya false değer dönecektir


    // if(sonuc)
    // {
    //     console.log("başarılı");
    // }

    // else
    // {
    //     console.log("başarısız");
    // }

    let sonuc=username.search(pattern);
    console.log(sonuc);   //başarısızsa console -1 değeri basmaktadır