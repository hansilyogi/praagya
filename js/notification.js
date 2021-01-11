$(document).ready(function () {
    // loaddata();

  function loaddata() {
      // console.log("TITLE : " + $("#title").val());
      // console.log("Message : " + $("#message").val());
    $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "user/sendnotification",
        data : { "message" : $("#message").val(), "title" : $("#title").val()},
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
      success: function (data) {
        console.log(data);
      },
      complete: function () {
        alert("Notification Send to all");
      }
    });
  }

  $(document).on("click", "#btn-submit", function () {
      loaddata();
  
    })

});