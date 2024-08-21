// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Add Sticky Header
window.addEventListener('scroll', function () {
  var header = document.querySelector('.page-navbar');
  header.classList.toggle('scroll', window.pageYOffset > 100);
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").addClass("active");
  $(".nav-overlay").addClass("active");
});

// SideBar
$(".nav-overlay").on("click", function () {
  $(".links").removeClass("active");
  $(this).removeClass("active");
});

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
if ($(".select").length > 0) {
  $(".select").select2({
    dir: isRtl ? "rtl" : "ltr",
    minimumResultsForSearch: Infinity,
    placeholder: function () {
      $(this).data("placeholder");
    },
  });
}

/************* Upload Files Or Img *************/
let loginInputs = document.querySelectorAll(".img-upload-input");

loginInputs.forEach((input) => {
  if (input.classList.contains("profile")) {
    let img = input.parentElement.querySelector(".profile-img .img");
    let imageSrc = img.getAttribute("src");
    input.onchange = function () {
      let reader = new FileReader();
      if (input.files[0]) {
        reader.readAsDataURL(input.files[0]);
      } else {
        img.setAttribute("src", imageSrc);
        img.classList.remove("wid");
      }

      reader.onload = () => {
        img.setAttribute("src", reader.result);
        img.classList.add("wid");
      };
    };
  } else {
    input.addEventListener("change", function () {
      imgPreview(input);
    });
  }
});


// ImgPreview Function
function imgPreview(input) {
  var file = input.files[0];
  var mixedfile = file["type"].split("/");
  var filetype = mixedfile[0];
  let photoContainer = $(input).closest(".upload-con").find(".photo-con");

  const multiple = $(input).attr("multiple");

  if (multiple) {
    if (filetype == "image") {
      uploadMultiImgs(input, photoContainer);
    } else if (filetype == "application") {
      uploadFile(input, photoContainer);
    }
  } else {
    if (filetype == "image") {
      uploadImg(input, photoContainer);
    } else if (filetype == "application") {
      photoContainer.empty();
      uploadFile(input, photoContainer);
    } else {
      alert("Invalid file type");
    }
  }
}

// uploadMultiImgs
function uploadMultiImgs(input, photoContainer) {
  for (file of input.files) {
    let reader = new FileReader();
    reader.onload = () => {
      let img = `
          <div class="hidden-img">
              <input type='hidden' value='${reader.result}' />
              <a class="fancybox" data-fancybox="gallery" href="${reader.result}">
                  <img class="img" src="${reader.result}" />
              </a>

              <button type='button' class='remove-img'>
                  <i class="fa-solid fa-xmark"></i>
              </button>

          </div>
      `;

      photoContainer.append(img);
      removeIcon();
    };
    reader.readAsDataURL(file);
  }
}

// Upload Image
function uploadImg(input, photoContainer) {
  var reader = new FileReader();
  reader.onload = function (e) {
    photoContainer.empty();
    let img = `
        <div class="hidden-img">

            <a class="fancybox" data-fancybox="gallery" href="${e.target.result}">
                <img class="img" src="${e.target.result}" />
            </a>

            <button type='button' class='remove-img'>
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>
    `;

    photoContainer.append(img);
    removeIcon();
  };
  reader.readAsDataURL(input.files[0]);
}

// uploadFiles
function uploadFile(input, photoContainer) {
  Object.values(input.files).forEach(function (file) {
    var name = file.name;

    let myFile = `
          <div class="upload-label">
              <input type='hidden' value='${name}' />
              <img src='./assets/imgs/icons/pdf-file.gif' />
              <span>${name}</span>
              <button type='button' class='remove-img'>
                <i class="fa-solid fa-xmark"></i>
              </button>
          </div>
        `;

    photoContainer.append(myFile);
    removeIcon();
  });
}

// Remove Icon
function removeIcon() {
  $(".remove-img").on("click", function (e) {
    if (e.target.closest(".hidden-img")) {
      e.target.closest(".hidden-img").remove();
    } else if (e.target.closest(".upload-label")) {
      e.target.closest(".upload-label").remove();
    }
  });
}

removeIcon();


/******************* All Sliders *******************/
$(document).ready(function () {

  /************ services Carousel ***********/
  let isRtl = $('html[lang="ar"]').length > 0;
  $(".home-slider").owlCarousel({
    items: 1,
    loop: true,
    animateOut: "fadeOut",
    rtl: isRtl,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1500,
    smartSpeed: 1500,
  });

  /************ services Carousel ***********/
  $(".services-slider").owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
    responsive: {
      991: {
        items: 3,
      },
      560: {
        items: 2,
      },
    },
  });

  /************ Clients Carousel ***********/
  const owlclients = $(".clients-slider");

  owlclients.on("changed.owl.carousel", function (event) {
    setTimeout(() => {
      owlclients.find(".owl-stage-outer").addClass("py-3");
    }, 0.1);
  });
  owlclients.owlCarousel({
    items: 2,
    loop: true,
    rtl: isRtl,
    margin: 35,
    dots: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 2800,
    autoplaySpeed: 2800,
    autoplayHoverPause: true,
    responsive: {
      1000: {
        items: 6,
      },
      800: {
        items: 4,
      },
      400: {
        items: 3,
        margin: 20,
      },
    },
  });

  /************ customers Carousel ***********/
  const owlCustomers = $(".customers-slider");

  owlCustomers.owlCarousel({
    items: 1,
    rtl: isRtl,
    autoplaySpeed: 3000,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: false,
    margin: 25,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    navText: [
      `<i class="fa-solid fa-arrow-right-long"></i>`,
      `<i class="fa-solid fa-arrow-left-long"></i>`,
    ],
  });
});
