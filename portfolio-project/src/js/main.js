//  const btn = document.getElementById("btnTop");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 300) {
//       btn.classList.remove("d-none");
//     } else {
//       btn.classList.add("d-none");
//     }
//   });

//   btn.addEventListener("click", () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   });

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}



// Función para inicializar EmailJS cuando esté disponible

  (function () {
    emailjs.init("AUzrDd5fbQ3bi90wv") // 👈 reemplazar
  })();

  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("status-message");
  //const alertTrigger = document.getElementById('liveAlertBtn')
// if (alertTrigger) {
//   alertTrigger.addEventListener('click', () => {
    
//   })
// }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9y6kmjs",   // 👈 reemplazar
        "template_0sp4l9u",  // 👈 reemplazar
        this
      )
      .then(
        () => {
            appendAlert('Nice, you triggered this alert message!', 'success')
          //statusMessage.textContent = "Mensaje enviado correctamente ✅";
          form.reset();
        },
        (error) => {
          statusMessage.textContent =
            "Error al enviar el mensaje ❌";
          console.error(error);
        }
      );
  });




