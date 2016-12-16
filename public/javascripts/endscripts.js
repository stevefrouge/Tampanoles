new WOW().init();

    $(document).ready(function () {
        //$("#menuContainer").sticky({ topSpacing: 0 });

        var x = 1;
        $(window).scroll(function () {
           
            x += 1;
            if (x == 5) {
                $("#menuContainer").sticky({ topSpacing: 0 });
            }

        });


        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

       
        today = mm+'/'+dd+'/'+yyyy;
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var firstDate = new Date(yyyy,mm,dd);
        var secondDate = new Date(2017,09,02);

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
        $("#spnDays").html(diffDays);
    });

  
    $("#txtSearch").keyup(function (e) {
        if (e.keyCode == 13) {
            
            var search = $("#txtSearch").val();
            // alert(search);
            var site = "https://www.google.com/search?as_q=" + search + "&as_epq=&as_oq=&as_eq=&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=tampanoles.com&as_occt=any&safe=images&tbs=&as_filetype=&as_rights=&gws_rd=ssl";

            window.open(site);
        }
    });

    var isDown = false;
    $("#aAwards").click(function () {
        if (isDown == true) {
            $("#divAwards").slideUp("slow", function () {
                // Animation complete.
                isDown = false;
            });
        } else {
            $("#divAwards").slideDown("slow", function () {
                // Animation complete.
                isDown = true;
            });
        }

    });