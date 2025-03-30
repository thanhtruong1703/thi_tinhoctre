// lấy element 
const formres = document.getElementById("formres");
const nameelement = document.getElementById("name");
const fullnameElement = document.getElementById("fullname");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");
const confirmpasswordElement = document.getElementById("confirmpassword");


const roleelement = document.getElementById('role');


const roleError = document.getElementById('roleerror');

const fullnameerror = document.getElementById("fullnameerror");
const emailerror = document.getElementById("emailerror");
const passworderror = document.getElementById("passworderror");
const confirmpassworderror = document.getElementById("confirmpassworderror");


// lấy dữ liệu từ local
const userlocal = JSON.parse(localStorage.getItem("user")) || [];


// lấy ra 
formres.addEventListener("submit",function(e){
    // prevent 
    e.preventDefault();
    // // // chuyền dữ liệu
    // if (!fullnameElement.value){
    //     // hiện thị lỗi 
    //     fullnameerror.style.display ="block";
        
    // } else {
    //     fullnameerror.style.display ="none";
    // }

    // if (!emailElement.value){
    //     // hiện thị lỗi 
    //     emailerror.style.display ="block";
        
    // } else {
    //     emailerror.style.display ="none";
    // }

    // if (!passwordElement.value){
    //     // hiện thị lỗi 
    //     passworderror.style.display ="block";
        
    // } else {
    //     passworderror.style.display ="none";
    // }

    // if (!confirmpasswordElement.value){
    //     // hiện thị lỗi 
    //     confirmpassworderror.style.display ="block";
        
    // } else {
    //     confirmpassworderror.style.display ="none";
    // }



    //check pass 
    if (passwordElement.value !== confirmpasswordElement.value){
        confirmpassworderror.style.display="block";
        confirmpassworderror.innerHTML = "MẬT KHẨU KHÔNG KHỚP";

    } else {
        confirmpassworderror.style.display="none";
    }

    if (!role) {
        roleError.style.display = 'block';
    } else {
        roleError.style.display = 'none';
    }


    // đưa dữ liệu từ form lên localstorage 
    if ( nameelement.value && fullnameElement.value && emailElement.value && passwordElement.value && confirmpasswordElement.value &&  passwordElement.value === confirmpasswordElement.value){
        //console.log("Submits"); 
        // lấy dữ liệu từ form và gộp thành đối tượng user;
        const user = {

            id: Math.ceil(Math.random() * 100000000),
            name : nameelement.value,
            fullname : fullnameElement.value,
            email : emailElement.value,
            password : passwordElement.value,
            role :roleelement.value


        };
        console.log(user);
        //console.log("hallo");
            // push vào local
        userlocal.push(user);

        // lưu trữ lên local
        localStorage.setItem("user", JSON.stringify(userlocal));


        // chuyển hướng đăng nhập
        setTimeout(function(){
            window.location.href = "dangnhap.html";
        },1000)
        

    };
    //console.log("hallo");


});
