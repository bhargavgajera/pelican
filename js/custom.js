

/*========================================================
					Phonegap functions
=========================================================*/

document.addEventListener("deviceready", onDeviceReady, false);



function onDeviceReady() {
	setTimeout(function(){navigator.splashscreen.hide();	
	
	},1000);

	//alert("yes my device is ready");
	
	
	
}






















 $(document).ready(function(){
	 
	 $("#contact-form").submit(function(event){
		 event.preventDefault()
			$.mobile.loading( 'show');
			
			setTimeout(function(){$.mobile.loading( 'hide');
			navigator.notification.alert(
			    'We will contact you soon',  // message
			    alertDismissed,         // callback
			    'Thank you for Registration',            // title
			    'Ok'                  // buttonName
			);
			
			},1000)
	});
	 
function alertDismissed(){
	
	jQuery.mobile.changePage("#home", {transition: "slide",reverse: false});
	jQuery("#contact-form")[0].reset();
	}
	 
 $("input,textarea").each(function() {
  $(this).data('holder',$(this).attr('placeholder'));

   $(this).focusin(function(){
       $(this).attr('placeholder','');
   });
   
   $(this).focusout(function(){
       $(this).attr('placeholder',$(this).data('holder'));
   });
 });	

	})
	
	
	
function alertbox(title,content)
{
	//alert(content);
	navigator.notification.alert(content,null,title,'ok');
}

