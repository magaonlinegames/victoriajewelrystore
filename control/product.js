function openBuyForm(){
  $(".prod-details").hide();
  $(".buy-form").fadeIn();
}


$(".nb-logo").click(
  function(){
    window.location = 'index.html';
  }
);

$(".buy-product").submit(function(e){
  return false;
});
function buyProduct(){
  var name, email, contact, homeAddress, questions;
  name = $(".name-of-client").val();
  email = $(".email-of-client").val();
  contact = $(".contact-of-client").val();
  address = $(".address-of-client").val();
  questions = $(".question-of-client").val();

  if (name == "" || emaill == "" || contact == "" || address == "" || question == "") {
    $(".error-txt").html("In order for us to serve you well, please fill all inputs");
    setTimeout(
      function(){
        $(".error-txt").html("");
      },3000
    );
  } else {

  }
}
