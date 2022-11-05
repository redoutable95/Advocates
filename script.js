const menu = document.querySelector(".header__menu");
const toggle = document.querySelector(".burger-toggle");
const headerLogo = document.querySelector(".header__logo");
const promoSlides = document.querySelectorAll(".promo__slide");
const submitBtn = document.querySelector("#submit-btn");
const form = document.querySelector("#form");
toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggle.classList.toggle("active");
  headerLogo.classList.toggle("active");
});

for (let item of menu.children) {
  item.addEventListener("click", () => {
    menu.classList.toggle("active");
    toggle.classList.toggle("active");
    headerLogo.classList.toggle("active");
  });
}

let slideNum = 0;

function slider() {
  promoSlides[0].classList.toggle("active");
  promoSlides[1].classList.toggle("active");
}
setInterval(slider, 5000);

document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll("input[data-tel]");
  var getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, "");
  };

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+" + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    // Clear input after remove last symbol
    var inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("input", onPhoneInput, false);
    phoneInput.addEventListener("paste", onPhonePaste, false);
  }
});
// submitBtn.addEventListener("click", (evt) => {
//   // evt.preventDefault();
//   for (let i = 0; i < 3; i++) {
//     form.children[i].value = "";
//   }

// const name = form.children[0].value;
// const phone = form.children[1].value;
// const email = form.children[2].value;
// fetch(
//   `https://api.telegram.org/bot5769509280:AAHhyJVNBbQbB97FqlqFf5hXa4hEYt2HPUI/sendMessage?chat_id=-848137333&parse_mode=html&text=Имя:${name} Телефон: ${phone} Email: ${email}`,
//   {
//     method: "POST",
//     // mode: 'no-cors'
//   }
// );
// });
