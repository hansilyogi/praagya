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
                create_date = moment(data.data[i].createdAt).format("DD/MM/YYYY");
                update_date = moment(data.data[i].updatedAt).format("DD/MM/YYYY");
                $("#displaydata").append(
                  `<tr>`+
                    // `<td>` +
                    // data.data[i].sender_id.name +
                    // `</td>
                    // <td>` +
                    // data.data[i].receiver_id.name +
                    // `</td>
                    `<td>` +
                    data.data[i].message +
                    `</td>
                     <td>` + 
                    create_date +
                    `</td>
                     <td>` +
                    update_date + 
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

    $('#txt_searchemployee').keyup(function(){
      var search = $(this).val();
      $('table tbody tr').hide();
      var len = $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0)+'")').length;
      if(len > 0){
        $('table tbody tr:not(.notfound) td:contains("'+search.charAt(0) + search.slice(1)+'")').each(function(){
          $(this).closest('tr').show();
        });
      }else{
        $('.notfound').show();
      }
    });

  
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
  
  // <td><a href = "+ $("#website-url").attr("value") +"uploads/" +
  //                   data.Data.ProfileImage + " target=_blank>View Image</a></td>