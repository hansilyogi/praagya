$(document).ready(function () {
    loaddata();
    $img_url =[];

    function loaddata() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "post/fetch",
        dataType: "json",
        data : {
          "user_id":"5f39b920412523089a4a5b55",
          "page":"1"
        },
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="8" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
          // $("#displaydata_1").html(
          //   '<h5 class="text-center font-weight-bold">This is executed</h5></center>'
          // );
        },
        success: function (data) {
          console.log(data.data);
          
          if (data.error == false) {
            if (data.data.length > 0) { 
              $("#displaydata").html("");
              for (i = 0; i < data.data.length; i++) {
                $img_url[i] = data.data[i].user_id;
                console.log($img_url[i]);
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
                // $("#displaydata").append(
                //   `<tr>
                //     <td>` +
                //     data.data[i].user_id.name +
                //     `</td>
                //         <td>` +
                //     data.data[i].post_data +
                //     `</td>
                //     <td>` +
                //     data.data[i].likes +
                //     `</td>
                //      <td>` +
                //     data.data[i].commentsCount +
                //     `</td>
                //      <td>` +
                //     data.data[i].post_img +
                //     `</td>
                //      <td>` + 
                //     data.data[i].usersLiked +
                //     `</td>
                //      <td>` +
                //     data.data[i].createdAt + 
                //     `</td>
                //      <td>` +
                //     data.data[i].updatedAt +
                //     `</td>` + 
                //     `</tr>`
                // );
              $("#displaydata_1").append(
                `<div class="row">
                  <div class="col-md-6 mx-auto">
                    <div class="card card-widget">
                      <div class="card-header">
                        <div class="user-block">
                          <img class="img-circle" src="http://15.206.249.190/api/uploads/users_profile_img/`+ data.data[i].user_id.img + `" alt="User Image">
                          <span class="username"><a href="#">`+ data.data[i].user_id.name +`</a></span>
                          <span class="description">Shared publicly - `+ data.data[i].updatedAt +`</span>
                        </div>
                      </div>
                      <div class="card-body">
                        <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/`+ data.data[i].post_img +`" alt="Photo">
                        <p>I took this photo this morning. What do you guys think?</p>
                        <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                        <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                        <span class="float-right text-muted">` + data.data[i].likes +` ` + `likes -` +` `+ data.data[i].commentsCount + ` ` + `comments</span><hr>
                      </div>
                    </div>
                  </div>
                </div>`
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

    function loaddata_1() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "comment/fetch_all",
        dataType: "json",
        data: { post_id : "5f3e37c16d1fd209c3dcc396" },
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="4" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
        },
        success: function (data_1) {
          console.log(data_1.data);
        if (data_1.error == false) {
            if (data_1.data.length > 0) {
              $("#displaydata").html("");
              for (i = 0; i < data_1.data.length; i++) {
                status =
                  data_1.data[i].Status == false
                    ? '<i class="fa fa-toggle-off text-danger statusupdate" id=user-' +
                      data_1.data[i]._id +
                      " data-id=" +
                      data_1.data[i]._id +
                      ' data-up = 0 aria-hidden="true"></i>'
                    : '<i class="fa fa-toggle-on text-success statusupdate" id=user-' +
                      data_1.data[i]._id +
                      "  data-id=" +
                      data_1.data[i]._id +
                      ' data-up = 1 aria-hidden="true"></i>';
                $("#displaydata_2").append(
                  `<div class="row">
                    <div class="col-md-6 mx-auto">
                      <div class="card card-widget">
                      </div>
                    </div>
                  </div>`
                );
              }
            } else {
              $("#displaydata").html(
                '<tr><td colspan="5" class="text-center font-weight-bold">No record Found!</td></tr></center>'
              );
            }
          } else {
            alert(data_1.data);
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
  