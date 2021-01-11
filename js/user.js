$(document).ready(function () {
  loaddata();

  var exdata = [];

  $("#btn-excel").on("click",function(){
    $("#example").table2excel({
      exclude: ".noExport",
      filename: "name-of-the-file.xls"
    });
  });
  

  // $("#example").dataTable({
  //       dom: "Bfrtip",
  //       buttons: [
  //         'copy', 'csv', 'excel', 'pdf', 'print',
  //       ],
  // });

  function loaddata() {
    $.ajax({
      type: "POST",
      url: $("#website-url").attr("value") + "user/getUsers",
      data : { "UserId" : "5f39b8b1412523089a4a5b54"},
      dataType: "json",
      cache: false,
      beforeSend: function () {
        $("#displaydata").html(
          '<tr><td class="text-center font-weight-bold">Loading...</td></tr></center>'
        );
      },
      success: function (data) {
        exdata = data.data;
        console.log(exdata);
        if (data.error == false) {
          if (data.data.length > 0) {
            $("#displaydata").html("");
            for (i = 0; i < data.data.length; i++) {
              // console.log(" loop :" + i);
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
                  data.data[i].name +
                  `</td>
                  <td>` +
                  data.data[i].email +
                  `</td>
                  <td>` +
                  data.data[i].mobileNumber +
                  `</td>
                  <td>` +
                  status+
                  `</td>` +
                  `<td>` +
                  `<a href="userview.php?id=` +
                  data.data[i]._id +
                  `">View More</a>` +
                  `</td>` +
                  `</tr>`
              );
            }
          } else {
            $("#displaydata").html(
              '<tr><td class="text-center font-weight-bold">No record Found!</td></tr></center>'
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
              location.reload();
          } else {
            $("#user-" + dataId)
              .removeClass("fa-toggle-on text-success")
              .addClass("fa-toggle-off text-danger");
              location.reload();
          }
        } else {
          alert("Something went wrong");
        }
      },
    });
  });
});
