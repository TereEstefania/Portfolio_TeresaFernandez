 const btn = document.getElementById("btnTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.remove("d-none");
    } else {
      btn.classList.add("d-none");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// Contact Form Handler
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Mostrar mensaje de carga
  const submitBtn = this.querySelector("button[type='submit']");
  const originalText = submitBtn.textContent;
  submitBtn.textContent = "Enviando...";
  submitBtn.disabled = true;

  // Obtener datos del formulario
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Enviar a la función de Netlify
  fetch("/.netlify/functions/send-email", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      alert("¡Tu mensaje ha sido enviado correctamente!");
      contactForm.reset();
    } else {
      alert("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.");
  })
  .finally(() => {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  });
});

