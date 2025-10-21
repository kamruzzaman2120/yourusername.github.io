<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Career - Join Our Team</title>
  <link rel="stylesheet" href="Home.css">
</head>
<body>

  <!-- Page Header -->
  <div class="page-header">
    <h2>Career Opportunities</h2>
    <a href="Home.html">Home</a>
    <a href="#">Career</a>
  </div>

  <!-- Vacancy Section -->
  <div class="wrapper">
    <div class="section-header">
      <p>Work With Us</p>
      <h2>Current Job Openings</h2>
    </div>

    <div id="jobList" class="service">
      <!-- Jobs will load here from JS -->
    </div>
  </div>

  <!-- Apply Form (Popup) -->
  <div id="applyFormModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;
       background:rgba(0,0,0,0.7); justify-content:center; align-items:center; z-index:999;">
    <div style="background:#fff; padding:30px; width:90%; max-width:500px; border-radius:10px; position:relative;">
      <h3 style="text-align:center; color:#030f27;">Apply for <span id="jobTitle"></span></h3>
      <form id="applyForm">
        <input type="text" id="name" placeholder="Your Name" required
               style="width:100%; padding:10px; margin:10px 0;">
        <input type="email" id="email" placeholder="Your Email" required
               style="width:100%; padding:10px; margin:10px 0;">
        <input type="file" id="cv" accept=".pdf,.doc,.docx" required
               style="width:100%; padding:10px; margin:10px 0;">
        <textarea id="message" placeholder="Message (optional)" 
                  style="width:100%; padding:10px; margin:10px 0; height:80px;"></textarea>
        <button type="submit" class="btn" 
                style="background:#fdbe33; border:none; color:#030f27; padding:10px 20px; cursor:pointer;">
          Submit Application
        </button>
        <button type="button" id="closeModal" 
                style="margin-left:10px; background:#ccc; border:none; padding:10px 20px; cursor:pointer;">
          Cancel
        </button>
      </form>
    </div>
  </div>

  <script src="career.js"></script>
</body>
</html>
