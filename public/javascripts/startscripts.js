(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=285262614825981";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



function showEmail() {
        $("#divEmailList").slideToggle("slow", function () {
            // Animation complete.
        });
    }


var currentDiv = "divGrant";
    function changeBoard(div) {
        if (currentDiv != div) {
            $("#" + currentDiv).fadeToggle("slow", "linear", function () {
                $("#" + div).fadeToggle("slow", "linear");
                currentDiv = div;
            });
        }
    }
