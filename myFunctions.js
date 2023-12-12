function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
    function validateForm() {
            const fullnameInput = document.getElementById('fullname');
            const fullnameError = document.getElementById('fullname-error');
            const fullname = fullnameInput.value;
    const birthdateInput = document.getElementById('birthdate');
    const birthdateError = document.getElementById('birthdate-error');
    const birthdate = birthdateInput.value;
    let nationalID = document.forms["myForm"]["nationalID"].value;
    let PhoneNumber = document.forms["myForm"]["PhoneNumber"].value;
    let email = document.forms["myForm"]["email"].value;
    let isValid = true;
    if (fullname === '') {
      fullnameError.textContent = 'يرجى إدخال الاسم الكامل';
    } else {
      fullnameError.textContent = '';
    }
    if (birthdate === '') {
        birthdateError.textContent = 'يرجى إدخال تاريخ الميلاد';
      } else {
        birthdateError.textContent = '';
    }
    if (nationalID == "" || nationalID.length > 11) {
      alert("يرجى إدخال رقم وطني صحيح.");
      isValid = false;
    }
    if (isValid) {
      alert("تم إرسال البيانات بنجاح.");
      document.forms["myForm"]["name"].value = "";
      document.forms["myForm"]["birthdate"].value = "";
      document.forms["myForm"]["nationalID"].value = "";
      closeForm();
    }
    function openForm() {
        document.getElementById("myForm").style.display = "block";
      }
      function closeForm() {
        document.getElementById("myForm").style.display = "none";
      }
      function validateForm() {
      }
  }  
  var code;
function createCaptcha() {
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length + 1);
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canvas = document.createElement("canvas");
    canvas.id = "captcha";
    canvas.width = 200;
    canvas.height = 50;
    var ctx = canvas.getContext("2d");
    ctx.font = "35px Georgia";
    ctx.padding ="12px"
    ctx.strokeText(captcha.join(""), 0, 30);
    canvas.style.letterSpacing = 5 + 'px';
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canvas);
}
function validateCaptcha(e) {
    if (document.getElementById("captchaText").value == code) {
        alert("Valid Captcha")
        document.getElementById("captchaText").value =""
    } else {
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}