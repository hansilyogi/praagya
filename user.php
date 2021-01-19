<!DOCTYPE html>
<html lang="en">
<?php include('header.php'); ?>
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
</head>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">        
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark" style="float :"><b>Users</b></h1>
              </div>
            </div>
          </div>
        </div>        
        <!-- <div class="content">
          <div class="container-fluid table-responsive">
                <div class="card">
                    <div class="card-header">
                      <h3 class="card-title col-9"></h3>
                      <input type="text" class="form-control col-3" id="txt_searchemployee" name="txt_searchemployee" placeholder="Search Here"/>
                    </div>            
                    <button class="dt-button buttons-excel buttons-html5" tabindex="0" aria-controls="example" type="button"><span>Excel</span></button>
                    <table id="example" class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Mobile</th>                                
                                <th>Action</th>
                                <th>View More</th>                                
                            </tr>
                        </thead>
                    <tbody id="displaydata">
                    </tbody>
                </table>
            </div>
          </div>
        </div> -->

        <button type="button" id="btn-excel" style="float:right" class="btn btn-app bg-success"><i class="fas fa-file-excel"></i>  Export to Excel</button><br>
        <table id="example" class="display table table-bordered table-hover nowrap" style="width:100%">
        <thead class="thead-dark">
            <tr>
              <th style="text-align: center; vertical-align: middle;">Name</th>
              <th style="text-align: center">Mail</th>
              <th style="text-align: center">Mobile</th>                        
              <th style="text-align: center">State</th>
              <th style="text-align: center">Board Name</th>
              <th style="text-align: center" class="noExport">Action</th>
              <th style="text-align: center" class="noExport">View More</th>
            </tr>
        </thead>
        <tbody id="displaydata">
        </tbody>
        </table>
      </div>      
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>        
    <?php include('script.php'); ?>
    <script src="js/user.js"></script>
  </body>
</html>
