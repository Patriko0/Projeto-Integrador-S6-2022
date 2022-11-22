import $ from "jquery";

function btn_reset(buttons) {
  for (const button of buttons) {
    button.classList.remove("btn-ativo");
    $(`#${button.id}-text`).slideUp(300);
    $(`#${button.id}-text`).removeClass('texto-ativo')
    
  }
}

$(document).ready(function () {
  let buttons = $(".card-btn");
  for (const button of buttons) {
    button.onclick = () => {
      if (!button.classList[1]) {
        btn_reset(buttons);
        $(`#${button.id}-text`).slideDown(300);
        $(`#${button.id}-text`).addClass('texto-ativo')

        button.classList.add("btn-ativo");
      }
    };
  }
});
