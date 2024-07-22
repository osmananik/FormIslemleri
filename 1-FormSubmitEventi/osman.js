const form=document.querySelector(".signupForm");


form.addEventListener("submit",e=>{
    e.preventDefault(); //sayfanın yenilenmesini engeller
    console.log("Form Gönderildi");
});                                          //bu şekilde işlem yapıldığında sayfa gidiyor geliyor sürekli reflesh oluyor

//formdaki girdiğim değeri nasıl basıcam

const username=document.querySelector("#username") ;  //idsini seçeçeğim için instegram diyeş işareti kullanıcaz

form.addEventListener("submit",a=>{
    a.preventDefault();
    console.log(username.value);
    console.log(form.username.value);
})


// ^ osman $ koyarsak sadece osman geçerse eşleştirir osman $  koyarsak sadece bitişi kontrol eder ^osman koyarsak başını kontrol eder