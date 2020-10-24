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
                <h1 class="m-0 text-dark">Messages By Users</h1>
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
                        <h3 class="card-title">Display Data</h3>
                    </div>            
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>Receiver</th>
                                <th>Message</th>                              
                                <th>Image</th>                              
                                <th>Create At</th>                              
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
