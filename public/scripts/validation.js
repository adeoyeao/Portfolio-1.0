// Form Validation
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const nameLabel = document.querySelector("#name-label");
const emailLabel = document.querySelector("#email-label");
const messageLabel = document.querySelector("#message-label");
const regex = /\w{2,}/gi;
const emailRegex = /\w{2,}\@\w{2,}\.\w{2,}/gi;
const submit = document.querySelector("#submit");

let nameLabelText;
let emailLabelText;
let messageLabelText;

window.innerWidth < 700
  ? ((nameLabelText = "!"), (emailLabelText = "!"), (messageLabelText = "!"))
  : ((nameLabelText = "Please provide your full name"),
    (emailLabelText = "Please provide a valid email address"),
    (messageLabelText = "Let me know how I can help"));

if (document.querySelector("#submit") !== null) {
  submit.addEventListener("click", (event) => {
    nameLabel.className = "";
    emailLabel.className = "";
    messageLabel.className = "";
    name.className = "";
    email.className = "";
    message.className = "";

    name.value == ""
      ? (event.preventDefault(),
        (nameLabel.textContent = nameLabelText),
        nameLabel.classList.add("invalid-label"),
        name.classList.add("invalid-border"))
      : email.value == ""
      ? (event.preventDefault(),
        (emailLabel.textContent = emailLabelText),
        emailLabel.classList.add("invalid-label"),
        email.classList.add("invalid-border"))
      : message.value == ""
      ? (event.preventDefault(),
        (nameLabel.textContent = messageLabelText),
        messageLabel.classList.add("invalid-label"),
        message.classList.add("invalid-border"))
      : !nameRegex.test(name.value)
      ? (event.preventDefault(),
        (nameLabel.textContent = nameLabelText),
        nameLabel.classList.add("invalid-label"),
        name.classList.add("invalid-border"))
      : !emailRegex.test(email.value)
      ? (event.preventDefault(),
        (emailLabel.textContent = emailLabelText),
        emailLabel.classList.add("invalid-label"),
        email.classList.add("invalid-border"))
      : true;
  });
}
export { submit };
