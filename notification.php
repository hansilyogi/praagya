<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
    <body class="hold-transition sidebar-mini">
        <div class="wrapper">
        <?php include('navbar.php'); ?>
            <div class="content-wrapper">
                <div class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">NOTIFY ALL</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="card card-success">
                                <div class="card-header">
                            </div>
                            <form role="form">
                                <div class="card-body row">    
                                    <div class="form-group col-md-6">
                                        <label for="title">Title</label>
                                        <input type="text" class="form-control" id="title">                        
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="message">Message</label>
                                        <input type="text" class="form-control" id="message">
                                    </div>
                                </div>
                                <div class="card-footer" id="btn-submit-on">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        id="btn-submit">
                                        Send All
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <!-- <footer class="main-footer">
                All rights reserved.
            </footer> -->
        </div>        
        <?php include('script.php'); ?>
        <script src="js/notification.js"></script>
    </body>
</html>
