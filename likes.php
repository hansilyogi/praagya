<!DOCTYPE html>
<html lang="en">
<script src="https://momentjs.com/downloads/moment.js"></script>
<!-- <meta value="http://15.206.249.190/api/" id="website-url"> -->
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">        
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Users Likes</h1>
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
                    <div class="card-header">
                        <h3 class="card-title"></h3>
                        <input type="text" class="form-control col-3" id="txt_searchemployee" name="txt_searchemployee" placeholder="Search Here"/>
                    </div>            
                    <table class="table table-bordered table-hover">
                        <thead class="thead-dark">
                            <tr>
                                <th>User</th>
                                <th>Post Data</th>                               
                                <th>Liked on</th>                                
                            </tr>
                        </thead>
                    <tbody id="displaydata_w">
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
    <script src="js/likes.js"></script>
  </body>
</html>
