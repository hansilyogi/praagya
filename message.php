<!DOCTYPE html>
<html lang="en">
<script src="https://momentjs.com/downloads/moment.js"></script>
<?php include('header.php'); ?>
  <body class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
    <?php include('navbar.php'); ?>
      <div class="content-wrapper">        
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">Messages By Users</h1>
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container-fluid -->
        </div>        
        <!-- <div class="content">
          <div class="row">
            <div class="col-md-6">
              <div class="card direct-chat direct-chat-warning">
                <div class="card-header">
                  <h3 class="card-title">Direct Chat</h3>
                </div>
              </div>
            <div>
          </div>
        </div> -->

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
                    <!-- <th>Sender</th>
                    <th>Receiver</th> -->
                    <th>Message</th>                              
                    <!-- <th>Image</th>                               -->
                    <!-- <th>Create At</th>                               -->
                    <th>Last Updated</th>                              
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
    <script src="js/message.js"></script>
  </body>
</html>
