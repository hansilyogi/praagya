$(document).ready(function () {
    loaddata();

    function loaddata() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "comment/fetch_all_comments",
        dataType: "json",
        // data: { post_id : "5f3e37c16d1fd209c3dcc396" },
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
        },
        success: function (data) {
          console.log(data);
        if (data.isSuccess == true) {
            if (data.Data.length > 0) {
              $("#displaydata").html("");
              for (i = 0; i < data.Data.length; i++) {
                create_date = moment(data.Data[i].created).format("DD/MM/YYYY");
                status =
                  data.Data[i].Status == false
                    ? '<i class="fa fa-toggle-off text-danger statusupdate" id=user-' +
                      data.Data[i]._id +
                      " data-id=" +
                      data.Data[i]._id +
                      ' data-up = 0 aria-hidden="true"></i>'
                    : '<i class="fa fa-toggle-on text-success statusupdate" id=user-' +
                      data.Data[i]._id +
                      "  data-id=" +
                      data.Data[i]._id +
                      ' data-up = 1 aria-hidden="true"></i>';
                $("#displaydata").append(
                  `<tr>
                    <td>` +
                    data.Data[i].name +
                    `</td>
                    <td>` +
                    data.Data[i].comment +
                    `</td>
                    <td>` +
                    create_date +
                    `</td>
                    <td>
                    <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/`+ data.Data[i].post_id.post_img +`" alt="Photo" width="100" height="100">
                    </td>
                    <td>` +
                    data.Data[i].post_id.user_id.name +
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
  