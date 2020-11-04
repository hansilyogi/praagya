$(document).ready(function () {
    loaddata();

    function convertdatetostring(date) {
      if (date != "" && date != undefined) {
        date = date.split("-");
        date = date[2] + "/" + date[1] + "/" + date[0];
      } else {
        datetime = "";
      }
      return date;
    }

    function loaddata() {
        $.ajax({
          type: "POST",
          url: $("#website-url").attr("value") + "reportPost/getReport",
          dataType: "json",
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
                for(i = 0; i < data.Data.length; i++) {
                  r_date = moment(data.Data[i].date).format("DD/MM/YYYY");
                  $("#displaydata_w").append(
                    `<tr>
                      <td>` +
                      data.Data[i].reportedBy[0].name +
                      `</td>
                      <td>` +
                      r_date +
                      `</td>
                      <td>` +
                      data.Data[i].reportedUser['name'] +
                      `</td>
                      <td>` +
                      data.Data[i].post_id['_id'] +
                      `</td>
                      <td>` +
                      data.Data[i].reason +
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
              alert(data.Data);
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

});