function placeOrder() {
  let firstName = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let seeds = prompt("What type of seeds do you want?");

  let heading = document.querySelector("footer");

  let question = `${firstName} ${email} ${seeds}`;
  if (question === `${question}`) {
    heading.innerHTML = "Thank you for placing your order! We'll be in touch!";
  }
}

let orderButton = document.querySelector("#order-button");

orderButton.addEventListener("click", placeOrder);
