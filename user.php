<!DOCTYPE html>
<html lang="en">
<!-- <meta value="http://15.206.249.190/api/" id="website-url"> -->
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">        
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Users</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>        
        <div class="content">
            <div class="container-fluid table-responsive">
                <div class="card">
                    <!-- <div class="card-header">
                        <h3 class="card-title">Display Data</h3>
                    </div>             -->
                    <table id="example1" class="table table-bordered table-hover">
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
        </div>        
      </div>      
      <footer class="main-footer">
        All rights reserved.
      </footer>
    </div>        
    <?php include('script.php'); ?>
    <script src="js/user.js"></script>
  </body>
</html>
