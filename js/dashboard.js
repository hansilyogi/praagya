$(document).ready(function(){
    $img_url =[];
    loaddata();
    loadpost();
    loadblockuser();
    loadmessage();
    loadlike();
    loadreport();
    loadcomment();

    function loaddata() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "user/getUsers",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.error == false) {
            if (data.data.length > 0) {
                $("#user").text(data.data.length);
            } else {
                $("#user").text(0);
            }
            } else {
            alert(data.data);
            }
        },
        });
    }

    function loadpost() {
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
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            console.log(data.data);
            if (data.error == false) {
            if (data.data.length > 0) {
                $("#postcount").text(data.data.length);
                $("#commentstab").text(data.data[1].length);
            } else {
                $("#postcount").text(0);
                $("#commentstab").text(0);
            }
            } else {
            alert(data.data);
            }
        },
        });
    }

    function loadblockuser() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "user/block_user_list",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.error == false) {
            if (data.data.length > 0) {
                $("#blockusers").text(data.data.length);
            } else {
                $("#blockusers").text(0);
            }
            } else {
            alert(data.data);
            }
        },
        });
    }

    function loadreport() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "reportPost/getReport",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.isSuccess == true) {
            if (data.Data.length > 0) {
                $("#report").text(data.Data.length);
            } else {
                $("#report").text(0);
            }
            } else {
            alert(data.data);
            }
        },
        });
    }

    function loadmessage() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "message/fetch_all_messages",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.error == false) {
            if (data.data.length > 0) {
                $("#messagetab").text(data.data.length);
            } else {
                $("#messagetab").text(0);
            }
            } else {
            alert(data.data);
            }
        },
        });
    }

    function loadcomment() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "comment/fetch_all_comments",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.isSuccess == true) {
            if (data.Data.length > 0) {
                $("#commentstab").text(data.Data.length);
            } else {
                $("#commentstab").text(0);
            }
            } else {
            alert(data.Data);
            }
        },
        });
    }

    function loadlike() {
        $.ajax({
        type: "POST",
        url: $("#website-url").attr("value") + "like/fetchAllLikes",
        dataType: "json",
        cache: false,
        beforeSend: function () {
            $("#displaydata").html(
            '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
            );
        },
        success: function (data) {
            // console.log(data.data);
            if (data.isSuccess == true) {
                if (data.Data.length > 0) {
                    $("#likestab").text(data.Data.length);
                    // console.log('asd');
                } else {
                $("#likestab").text(0);
                }
            } else {
                alert("hemmlpo");
            }
        },
        });
    }

    // function loadcomment() {
    //     $.ajax({
    //         type: "POST",
    //         url: $("#website-url").attr("value") + "comment/fetch_all",
    //         dataType: "json",
    //         data: { post_id : "5f3e37c16d1fd209c3dcc396" },
    //     cache: false,
    //     beforeSend: function () {
    //         $("#displaydata").html(
    //         '<tr><td colspan="5" class="text-center font-weight-bold">Loading...</td></tr></center>'
    //         );
    //     },
    //     success: function (data) {
    //         console.log(data.data);
    //         if (data.error == false) {
    //         if (data.data.length > 0) {
    //             $("#commentstab").text(data.data.length);
    //         } else {
    //             $("#commentstab").text(0);
    //         }
    //         } else {
    //         alert(data.data);
    //         }
    //     },
    //     });
    // }

});