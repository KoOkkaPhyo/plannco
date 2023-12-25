$(document).ready(function(){


	//start back to top
		$(".btn-backtotops").hide();

		$(window).scroll(function(){
			var getscrolltops = $(this).scrollTop();



			if( getscrolltops >= 370){
				$(".btn-backtotops").fadeIn(1000);
			}else{
				$(".btn-backtotops").fadeOut(1000);
			}
		});
	//end back to top





	//start nav bar

		$(window).scroll(function(){
			let position = $(this).scrollTop();
			// console.log(position);

			if(position >= 200){
				$(".navbar").addClass("navmenus")
			}else{
				$(".navbar").removeClass("navmenus")
			}
		});

		$(".navbuttons").click(function(){
			$(this).toggleClass("crossxs");
		});

	//end nav bar


	// start property section
		$(".propertylists").click(function(){
				
			// $(this).addClass('activeitems');
			$(this).addClass('activeitems').siblings().removeClass('activeitems');

			let filtervalue = $(this).attr("data-filter");
				filtervalue = $(this).data("filter");

				// console.log(filtervalue);

				if(filtervalue === "all"){
					$(".filters").show("slide",500);
				}else{
					$(".filters").hide();


					// no need not method just to know
					$(".filters").not("." + filtervalue).hide("slide",500);
					$(".filters").filter('.'+filtervalue).show("slide",500);

				}

		});	


	// end property section	

	// start adv section
			$(window).scroll(function(){

				var getscrolltt = $(this).scrollTop();
					// console.loh(getscrolltt);

				if(getscrolltt >= 900){
					$('.advimages').addClass('fromlefts');
					$('.advtexts').addClass('fromrights');
				}else{
					$('.advimages').removeClass('fromlefts');
					$('.advtexts').removeClass('fromrights');
				}
			})

	// end adv section


	 // start footer section
			const getyear = $("#getyear");
			const getfullyear = new Date().getFullYear();

			getyear.text(getfullyear);


	 // End footer section 

});