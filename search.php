<!--Includes the header and sets the title -->
<?php 
    $title = 'Flixx | Search Movies & Shows';
    include_once './header.php'; 
?>

    <!-- Search Movies -->
    <?php include_once './components/searchBox.php'; ?>

    <!-- Search Results -->
    <section id="search-results-wrapper" class="container">
      <heading id="search-results-heading"></heading>

      <!-- Dynamic search results loaded through javascript fetch api -->
      <div id="search-results" class="grid"></div>
      
      <div id="pagination">
        <div class="pagination">
          <button class="btn btn-primary" id="prev">Prev</button>
          <button class="btn btn-primary" id="next">Next</button>
          <div class="page-counter">Page 1 of 5</div>
        </div>
      </div>
    </section><!-- Search-results -->

    <!-- Footer -->
    <?php include_once './footer.php'; ?>

    <!-- Loads a spinner while the Api fetches the data -->
     <?php include_once './components/spinner.php'; ?>

  </body>
</html>
