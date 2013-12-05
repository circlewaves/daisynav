/*
 *	DaisyNav - jQuery plugin 
 *	Handle responsive navigation in good way
 *	Version 1.0.0
 *
 *	http://circlewaves.com/products/freebies/daisynav-responsive-dropdown-navigation/
 *
 *	http://circlewaves.com
 *
 *	Copyright 2013 CircleWaves (support@circlewaves.com)
 *	Under the MIT License
 */
 
// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

    $.extend({
        daisyNav: function () {
				
					$('ul.menu-list li.has-submenu>a').append('<span class="menu-expand"></span>');
						
					$('.menu-toggle-button').click(function(){
						//if exist data-menu-id - bind for id, else - bind for class
						if($(this).data('menu-id')){
							var data_menu_id=$(this).data('menu-id').split(' '); //for multiple menu - split id by space ' '
							var data_menu_id_count=data_menu_id.length; //IDs count
							for(var i=0;i<data_menu_id_count;i++){ //toogle class for each binded menu id
								var menu_id=data_menu_id[i]; 
								if(menu_id){
									$( "#"+menu_id ).toggleClass( 'show-for-devices' );
								}					
							}	
						}else{
							$('ul.menu-list').toggleClass( 'show-for-devices' );
						}
						$(this).toggleClass( 'active' );
					});
					
					$('.menu-list .menu-expand').click(function(e){
						e.preventDefault();
						$(this).parent().next('ul').toggleClass('show-for-devices');
					});	

        }
    });

})( jQuery, window, document );
