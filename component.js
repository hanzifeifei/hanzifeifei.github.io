// components.js
document.getElementById('headerjs').innerHTML = `
<header>
    <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Toggle button -->
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Navbar brand -->
        <a class="navbar-brand mt-2 mt-lg-0" href="#">
          <img src="img/iconfei.jpg" height="30" alt="FeiFei Logo"
            loading="lazy" />
        </a>
        <!-- Left links -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" href="#">About FeiFei</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="research.html">Research</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="entrepreneurshipDropdown"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Entrepreneurship
            </a>
            <ul class="dropdown-menu" aria-labelledby="entrepreneurshipDropdown">
              <li><a class="dropdown-item" href="myls-ai.html">MYLS AI 2026</a></li>
              <li><a class="dropdown-item" href="uforse.html">Uforse 2016</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="professional.html">Professional Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="personal.html">Life</a>
          </li>
        </ul>
        <!-- Left links -->
      </div>
      <!-- Collapsible wrapper -->

      <!-- Right elements -->
    </div>
    <!-- Container wrapper -->
  </nav>
  <!-- Navbar -->

</header>
`;

document.getElementById('footerjs').innerHTML = `
<footer>
  <!-- Copyright -->
  <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
    <a href="https://www.linkedin.com/in/hanzifeifei" target="_blank">
   <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-linkedin"></i>
    </button>
    </a>

    <a href="https://x.com/rabitfeifei" target="_blank">
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>
     </a>

     <a href="https://www.linkedin.com/in/hanzifeifei" target="_blank">
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
    </a>

    <a href="https://www.instagram.com/hanzifeifei360/" target="_blank">
    <button type="button" class="btn btn-secondary btn-floating mx-1">
      <i class="fab fa-instagram"></i>
    </button>
    </a>

    <br>
    © 2023 Copyright:
    <a class="text-reset fw-bold">FeiFei Zifei Han</a>
  </div>
  <!-- Copyright -->


</footer>
`;