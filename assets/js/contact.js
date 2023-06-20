function sendEmail(){
  Email.send({
    SecureToken: "88851abb-105f-4031-9fbc-d43bd9ea26db",
    From : "jromerorangel216@gmail.com",
    To : "jromerorangel216@gmail.com",
    Subject : "New Content Form Enquiry",
    Body : "Name: " + document.getElementById("name").value + 
    " email: " + document.getElementById("email").value + " message: " +
    document.getElementById("message").value,

    ReplyFrom : document.getElementById("email").value,
}).then(
  message => alert("Message Sent Succesfully")
);
}
