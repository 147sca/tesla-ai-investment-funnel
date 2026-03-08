document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("button");
  const emailInput = document.querySelector("input");

  button.addEventListener("click", () => {

    const email = emailInput.value;

    if(!email){
      alert("Enter your email");
      return;
    }

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data => {
      alert("Early access requested!");
      emailInput.value = "";
    })
    .catch(() => {
      alert("Server error");
    });

  });

});
