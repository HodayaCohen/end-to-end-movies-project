 $(document).ready(function() {

     validate = function() {

         // clears the error when user types a new value

     }
     $("input").change(function() {
         $("#result").html("");

     });

     return {
         // Validation for name input

         ValidateName: function(inputtxt) {
             var pattern = /[0-9a-zA-Zא-ת\s!?=+-.,']+$/m;
             if (NotEmpty(inputtxt) == false) {
                 $("#result").html("Enter a name");
                 $("#name").css("border", "solid 1px red");
                 $("#result").css({ "color": "red", "fontFamily": "Arial" });
                 return false;

             } else if (!pattern.test(inputtxt)) {
                 $("#result").html("Use only A-Z or Digits");
                 $("#name").css("border", "solid 1px red");
                 $("#result").css({ "color": "red", "fontFamily": "Arial" });
                 return false;

             } else {
                 return true;
             }
         },

         // Check if input isn't empty
         NotEmpty: function(inputtxt) {
             if (inputtxt == "" || inputtxt == "undefined") {
                 return false;
             }
         }
     };






     if (NotEmpty(inputtxt) == false) {
         $("#result").html("Enter a Phone");
         $("#phone").css("border", "solid 1px red");
         $("#result").css({ "color": "red", "fontFamily": "Arial" });
         return false;

     } else if ((chell.test(inputtxt)) || (Phone.test(inputtxt))) {
         return true;

     } else {
         $("#result").html("Phone must Contain 9 or 10 digits");
         $("#phone").css("border", "solid 1px red");
         $("#result").css({ "color": "red", "fontFamily": "Arial" });
         return false;

     }

 }





 });