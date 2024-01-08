<?php include 'common/header.php';?>
<?php include 'common/navigation.php';?>

<style>
  .enq_page{
    display: none;
  }
</style>
<section class="enquiry_page">
  <div class="hero_section">
    <div class="section_title">
      <div class="title_wrapper">
        <h5>You can send your enquiry via the form below.</h5>
        <h2>
          Enquiry
        </h2>
        <div class="title_name">

          <div class="title_icon">
            <span class="left_shape"></span>
            <img src="assets/images/title_icon_white.png" alt="">
            <span class="right_shape"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="enq_page_wrapper">
    <h3 class="enq_title">Tour Name : &nbsp; <span>Pokhara, Nepal</h3>
    <div class="container">
      <div class="form_wrapper">

        <div class="form_details">
          <form action="">
            <div class="details_wrap">
              <div class="form_group">
                <label for="">Your Name: <span class="mandatory">*</span></label>
                <input type="text" placeholder="Enter Your Name">
              </div>
            </div>
            <div class="details_wrap">
              <div class="form_group">
                <label for="">Your Email: <span class="mandatory">*</span></label>
                <input type="text" placeholder="Enter Your Email">
              </div>
            </div>
            <div class="details_wrap">
              <div class="details_flx">
                <div class="form_group">
                  <label for="">Country: <span class="mandatory">*</span></label>
                  <input type="text" placeholder="Country Name">
                </div>
                <div class="form_group">
                  <label for="">Contact Number: <span class="mandatory">*</span></label>
                  <input type="text" placeholder="Enter Your Contact Number">
                </div>
              </div>
              <div class="details_flx">
                <div class="form_group">
                  <label for="">No.of Adults: <span class="mandatory">*</span></label>
                  <input type="text" placeholder="No. of Adults">
                </div>
                <div class="form_group">
                  <label for="">No. of Children: <span class="mandatory">*</span></label>
                  <input type="text" placeholder="No. of Children">
                </div>
              </div>
            </div>
            <div class="details_wrap">
              <div class="form_group">
                <label for="">Enquiry Subject: <span class="mandatory">*</span></label>
                <input type="text" placeholder="Enter Your Subject">
              </div>
            </div>
            <div class="details_wrap">
              <div class="form_group">
                <label for="">Your Message: <span class="mandatory">*</span></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </div>
            <div class="form_btn">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>






<?php include 'common/footer.php';?>