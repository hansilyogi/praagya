<!DOCTYPE html>
<html lang="en">
<script src="https://momentjs.com/downloads/moment.js"></script>
<?php include('header.php'); ?>
<!-- <meta value="http://15.206.249.190/api/" id="website-url"> -->
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">        
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Comments</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>        
        <div class="content">
          <div class="container-fluid table-responsive p-0" style="height: 500px;">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title"></h3>
                <input type="text" class="form-control col-3" id="txt_searchemployee" name="txt_searchemployee" placeholder="Search Here"/>
              </div>            
              <table class="table table-bordered table-hover table-head-fixed text-nowrap">
                <thead>
                  <tr>
                    <th>Commented By</th>
                    <th>Comment</th>
                    <th>Commented on Date</th>
                    <th>Post Image</th>                 
                    <th>Posted By</th>                 
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
    <script src="js/comments.js"></script>
  </body>
</html>
