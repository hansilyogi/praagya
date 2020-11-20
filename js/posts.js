$(document).ready(function () {
    loaddata_demo();
    $img_url =[];

    function loaddata() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "post/get_all_post_comments",
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="8" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
        },
        success: function (data) {
          console.log(data);
          if (data.isSuccess == true) {
            if (data.Data.length > 0) { 
              $("#displaydata").html("");
              for (i = 0; i < data.Data.length; i++) {
                create_date = moment(data.Data[i].createdAt).format("DD/MM/YYYY");
                $img_url[i] = data.Data[i].user_id;
                      if(data.Data[i].Comments.length > 0){
                        for(j=0; j < data.Data[i].Comments.length; j++){
                          comment_date = moment(data.Data[i].Comments[j].created).format("DD/MM/YYYY");
                          $("#displaydata_1").append(
                            `<div class="row">
                              <div class="col-md-6 mx-auto">
                                <div class="card card-widget">
                                  <div class="card-header">
                                    <div class="user-block">
                                      <img class="img-circle" src="http://15.206.249.190/api/uploads/users_profile_img/`+ data.Data[i].user_id.img+`" alt="User Image">
                                      <span class="username"><a href="#">`+data.Data[i].user_id.name+`</a></span>
                                      <span class="description">Shared publicly -`+create_date+`</span>
                                    </div>
                                  </div>
                                  <div class="card-body">
                                    <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/`+data.Data[i].post_img+`" alt="Photo"><br><br>
                                    <p> Status :`+ data.Data[i].post_data +`</p><hr>
                                    <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                                    <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                                    <span class="float-right text-muted">` + data.Data[i].likes +` ` + `likes -` +` `+ data.Data[i].commentsCount + ` ` + `comments</span>
                                  </div>
                                  <div class="card-footer card-comments">
                                    <div class="card-comment">
                                      <img class="img-circle img-sm" src="http://15.206.249.190/api/uploads/users_profile_img/`+ data.Data[i].Comments[j].user_img+ `" alt="User Image">
                                      <div class="comment-text">
                                        <span class="username">
                                        `+ data.Data[i].Comments[j].name+
                                        `<span class="text-muted float-right">`+comment_date+ `</span>
                                        </span>`
                                        + data.Data[i].Comments[j].comment+
                                      `</div>
                                    </div>`
                          );
                        }
                      }
                      else{
                        $("#displaydata_1").append(
                          `<div class="col-md-6 mx-auto">
                              <div class="card card-widget">
                                <div class="card-header">
                                  <div class="user-block">
                                    <img class="img-circle" src="http://15.206.249.190/api/uploads/users_profile_img/`+ data.Data[i].user_id.img+`" alt="User Image">
                                    <span class="username"><a href="#">`+data.Data[i].user_id.name+`</a></span>
                                    <span class="description">Shared publicly -`+create_date+`</span>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/`+data.Data[i].post_img+`" alt="Photo"><br><br>
                                  <p> Status :`+ data.Data[i].post_data +`</p><hr>
                                  <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                                  <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                                  <span class="float-right text-muted">` + data.Data[i].likes +` ` + `likes -` +` `+ data.Data[i].commentsCount + ` ` + `comments</span><hr>
                                </div>
                              </div>
                            </div>`
                        );
                      }
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

    function loaddata_demo() {
      $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "post/get_all_post_comments",
        dataType: "json",
        cache: false,
        beforeSend: function () {
          $("#displaydata").html(
            '<tr><td colspan="8" class="text-center font-weight-bold">Loading...</td></tr></center>'
          );
        },
        _success: function (data) {
          console.log(data);
          if (data.isSuccess == true) {
            if (data.Data.length > 0) {
              $("#displaydata").html("");
              for (i = 0; i < data.Data.length; i++) {
                create_date = moment(data.Data[i].createdAt).format("DD/MM/YYYY");
                $img_url[i] = data.Data[i].user_id;
                if (data.Data[i].Comments.length > 0) {
                  $("#displaydata_1").append(
                    `<div class="row">
                              <div class="col-md-6 mx-auto">
                                <div class="card card-widget">
                                  <div class="card-header">
                                    <div class="user-block">
                                      <img class="img-circle" src="http://15.206.249.190/api/uploads/users_profile_img/` + data.Data[i].user_id.img + `" alt="User Image">
                                      <span class="username"><a href="#">` + data.Data[i].user_id.name + `</a></span>
                                      <span class="description">Shared publicly -` + create_date + `</span>
                                      <span class="float-right description">Post ID  -  ` + data.Data[i]._id + `</span> 
                                    </div>
                                  </div>
                                  <div class="card-body">
                                    <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/` + data.Data[i].post_img + `" alt="Photo"><br><br>
                                    <h5> Status :` + data.Data[i].post_data + `</h5><hr>
                                    <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                                    <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                                    <span class="float-right text-muted">` + data.Data[i].likes + ` ` + `likes -` + ` ` + data.Data[i].Comments.length + ` ` + `comments</span>
                                  </div>
                                  <div class="card-footer card-comments">
                                    <div id="comment_` + i + `">
                                      <h5>Comments</h5><hr>
                                    </div>
                                  </div>`
                  );
                  for (j = 0; j < data.Data[i].Comments.length; j++) {
                    comment_date = moment(data.Data[i].Comments[j].created).format("DD/MM/YYYY");
                    $("#comment_" + i).append(
                      `<img class="img-circle img-sm" src="http://15.206.249.190/api/uploads/users_profile_img/` + data.Data[i].Comments[j].user_img + `" alt="User Image">
                                      <div class="comment-text">
                                        <span class="username">
                                          ` + data.Data[i].Comments[j].name +
                      `<span class="text-muted float-right"><b>` + comment_date + `</b></span>
                                        </span><b>`
                      + data.Data[i].Comments[j].comment +
                      `</b></div>
                                        </div>
                                      </div>
                                    <br>`
                    );
                  }
                }
                else {
                  $("#displaydata_1").append(
                    `<div class="row">
                            <div class="col-md-6 mx-auto">
                              <div class="card card-widget">
                                <div class="card-header">
                                  <div class="user-block">
                                    <img class="img-circle" src="http://15.206.249.190/api/uploads/users_profile_img/` + data.Data[i].user_id.img + `" alt="User Image">
                                    <span class="username"><a href="#">` + data.Data[i].user_id.name + `</a></span>
                                    <span class="description">Shared publicly -` + create_date + `</span>
                                    <span class="float-right description">Post ID  -  ` + data.Data[i]._id + `</span>
                                  </div>
                                </div>
                                <div class="card-body">
                                  <img class="img-fluid pad" src="http://15.206.249.190/api/uploads/users_posts_img/` + data.Data[i].post_img + `" alt="Photo"><br><br>
                                  <p> Status :` + data.Data[i].post_data + `</p><hr>
                                  <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                                  <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                                  <span class="float-right text-muted">` + data.Data[i].likes + ` ` + `likes -` + ` ` + data.Data[i].commentsCount + ` ` + `comments</span><hr>
                                </div>
                              </div>
                            </div>
                          </div>`
                  );
                }
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
        get success() {
          return this._success;
        },
        set success(value) {
          this._success = value;
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
  
