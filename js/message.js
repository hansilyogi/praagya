$(document).ready(function () {
    loaddata();
  
    function loaddata() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "message/fetch_all_messages",
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
        },
        success: function (data) {
          console.log(data.data);
          
          if (data.error == false) {
            if (data.data.length > 0) {
              $("#displaydata").html("");
              for (i = 0; i < data.data.length; i++) {
                status =
                  data.data[i].Status == false
                    ? '<i class="fa fa-toggle-off text-danger statusupdate" id=user-' +
                      data.data[i]._id +
                      " data-id=" +
                      data.data[i]._id +
                      ' data-up = 0 aria-hidden="true"></i>'
                    : '<i class="fa fa-toggle-on text-success statusupdate" id=user-' +
                      data.data[i]._id +
                      "  data-id=" +
                      data.data[i]._id +
                      ' data-up = 1 aria-hidden="true"></i>';
                $("#displaydata").append(
                  `<tr>
                    <td>` +
                    data.data[i].sender_id.name +
                    `</td>
                        <td>` +
                    data.data[i].receiver_id.name +
                    `</td>
                    <td>` +
                    data.data[i].message +
                    `</td>
                     <td>` +
                    data.data[i].img +
                    `</td>
                     <td>` + 
                    data.data[i].createdAt +
                    `</td>
                     <td>` +
                    data.data[i].updatedAt + 
                    `</td>
                     </tr>`
                );
              }
            } else {
              $("#displaydata").html(
                '<tr><td colspan="5" class="text-center font-weight-bold">No record Found!</td></tr></center>'
              );
            }
          } else {
            alert(data.data);
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
  