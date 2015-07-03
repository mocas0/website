
//Initialize skrollr
if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    skrollr.init({
        forceHeight: false
    });
}

$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});

// $(window).load(function() {
//    $('#photos').BalancedGallery({
//             autoResize: true,                   // re-partition and resize the images when the window size changes
//             background: null,                   // the css properties of the gallery's containing element
//             idealHeight: 150,                  // ideal row height, only used for horizontal galleries, defaults to half the containing element's height
//             idealWidth: null,                   // ideal column width, only used for vertical galleries, defaults to 1/4 of the containing element's width
//             maintainOrder: true,                // keeps images in their original order, setting to 'false' can create a slightly better balance between rows
//             orientation: 'horizontal',          // 'horizontal' galleries are made of rows and scroll vertically; 'vertical' galleries are made of columns and scroll horizontally
//             padding: 5,                         // pixels between images
//             shuffleUnorderedPartitions: true,   // unordered galleries tend to clump larger images at the begining, this solves that issue at a slight performance cost
//             viewportHeight: null,               // the assumed height of the gallery, defaults to the containing element's height
//             viewportWidth: null                 // the assumed width of the gallery, defaults to the containing element's width
//         });
// });

// $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
// }); 

var populateProject = function(card) {
	var name = card.data("name");
	var date = card.data("date");
	var tag = card.data("tag");
	var desc = card.data("desc");
	// var skills = card.data("skills");
	var skills = card.data("skills").split(",");
	var purpose = card.data("purpose");
	var image = card.data("image");

	$("#projectName").html(name);	
	$("#projectDesc").html(desc);	
	$("#projectDates").html(date);	
	$("#projectPurpose").html(purpose);	
	$("#projectTag").html(tag);	
	$("#projectImage").attr("src", "projects/" + image + ".png");	

	if(tag == "") {
		$("#projectTag").hide();	
	}

	$("#projectSkills").html("");

	$.each(skills, function(index, value) {
	  $("#projectSkills").append("<span>" + value + "</span>");
	});
}

populateProject($("#edwinProject"));

$( ".card" ).click(function() {
	var card = $(this);

	populateProject(card);
	
});