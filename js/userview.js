$(document).ready(function () {
  var id = $(location).attr("href").split("=")[1];

  loaddata();

  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "user/webget",
      data: { user_id: id },
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
        $("#username").html("Loading...");
      },
      success: function (data) {
        console.log(data);
        if (data.error == false) {
          $("#displaydata").html("");
          $("#username").html(data.data.name);
          gen = data.data.gender == "m" ? "Male" : "Female";
          status =
            data.data.Status == false
              ? '<i class="fa fa-toggle-off text-danger statusupdate" id=user-' +
                data.data._id +
                " data-id=" +
                data.data._id +
                ' data-up = 0 aria-hidden="true"></i>'
              : '<i class="fa fa-toggle-on text-success statusupdate" id=user-' +
                data.data._id +
                "  data-id=" +
                data.data._id +
                ' data-up = 1 aria-hidden="true"></i>';
          if(!data.data.schoolAddress){
          $("#displaydata").append(
            "<tr><td>Name</td><td>" +
              data.data.name +
              "</td></tr>" +
              "<tr><td>Membership Number</td><td>" +
              data.data.stateCode +
              data.data.affiliationCode +
              "-" +
              data.data.membershipNumber +
              "</td></tr>" +
              "<tr><td>Certificate Link</td><td>" +
              "<a target=_blank href='http://15.206.249.190/api/" +
              data.data.membershipPDF +
              "'>Click Here</a>" +
              "</td></tr>" +
              "<tr><td>Email</td><td>" +
              data.data.email +
              "</td></tr>" +
              "<tr><td>Personal Number</td><td>" +
              data.data.mobileNumber +
              "</td></tr>" +
              "<tr><td>Whatsapp Number</td><td>" +
              data.data.whatsappNumber +
              "</td></tr>" +
              "<tr><td>Country</td><td>" +
              data.data.country.Name +
              "</td></tr>" +
              "<tr><td>State</td><td>" +
              data.data.state.name +
              "</td></tr>" +
              "<tr><td>City</td><td>" +
              data.data.city +
              "</td></tr>" +
              "<tr><td>Gender</td><td>" +
              gen +
              "</td></tr>" +
              "<tr><td>DOB</td><td>" +
              data.data.dob +
              "</td></tr>" +
              "<tr><td>School Name</td><td>" +
              data.data.schoolName +
              "</td></tr>" +
              "<tr><td>School Address</td><td>" +
              `<p></p>` +
              "</td></tr>" +
              "<tr><td>School Location</td><td>" +
              "<a target='_blank' href='https://www.google.com/maps?q=" +
              data.data.schoolLocation +
              "'>" +
              "Click Here</a>" +
              "</td></tr>" +
              "<tr><td>Affiliated With</td><td>" +
              data.data.affilatedWith.Name +
              "</td></tr>" +
              "<tr><td>Affiliated Number</td><td>" +
              data.data.afillatedNumber +
              "</td></tr>" +
              "<tr><td>Status</td><td>" +
              status +
              "</td></tr>"
          );
          }
          else{
            $("#displaydata").append(
              "<tr><td>Name</td><td>" +
                data.data.name +
                "</td></tr>" +
                "<tr><td>Membership Number</td><td>" +
                data.data.stateCode +
                data.data.affiliationCode +
                "-" +
                data.data.membershipNumber +
                "</td></tr>" +
                "<tr><td>Certificate Link</td><td>" +
                "<a target=_blank href='http://15.206.249.190/api/" +
                data.data.membershipPDF +
                "'>Click Here</a>" +
                "</td></tr>" +
                "<tr><td>Email</td><td>" +
                data.data.email +
                "</td></tr>" +
                "<tr><td>Personal Number</td><td>" +
                data.data.mobileNumber +
                "</td></tr>" +
                "<tr><td>Country</td><td>" +
                data.data.country.Name +
                "</td></tr>" +
                "<tr><td>State</td><td>" +
                data.data.state.name +
                "</td></tr>" +
                "<tr><td>City</td><td>" +
                data.data.city +
                "</td></tr>" +
                "<tr><td>Gender</td><td>" +
                gen +
                "</td></tr>" +
                "<tr><td>DOB</td><td>" +
                data.data.dob +
                "</td></tr>" +
                "<tr><td>School Name</td><td>" +
                data.data.schoolName +
                "</td></tr>" +
                "<tr><td>School Address</td><td>" +
                data.data.schoolAddress +
                "</td></tr>" +
                "<tr><td>School Location</td><td>" +
                "<a target='_blank' href='https://www.google.com/maps?q=" +
                data.data.schoolLocation +
                "'>" +
                "Click Here</a>" +
                "</td></tr>" +
                "<tr><td>Affiliated With</td><td>" +
                data.data.affilatedWith.Name +
                "</td></tr>" +
                "<tr><td>Affiliated Number</td><td>" +
                data.data.afillatedNumber +
                "</td></tr>" +
                "<tr><td>Status</td><td>" +
                status +
                "</td></tr>"
            );
          }
        } else {
          $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">No Record Found</td></tr></center>'
          );
        }
      },
    });
  }

  $(document).on("click", ".statusupdate", function () {
    var dataId = $(this).attr("data-id");
    var up = $(this).attr("data-up");
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "user/verifyUser",
      data: { type: "patchstatus", Id: dataId, Status: up },
      dataType: "json",
      cache: false,
      success: function (data) {
        if (data.error == false) {
          if ($("#user-" + dataId).hasClass("fa-toggle-off")) {
            $("#user-" + dataId)
              .removeClass("fa-toggle-off text-danger")
              .addClass("fa-toggle-on text-success");
          } else {
            $("#user-" + dataId)
              .removeClass("fa-toggle-on text-success")
              .addClass("fa-toggle-off text-danger");
          }
        } else {
          alert("Something went wrong");
        }
      },
    });
  });
});
