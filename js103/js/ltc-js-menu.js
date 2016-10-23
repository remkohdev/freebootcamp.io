function fnAddMenu(){
	// show and hide childmenus
    var l1c = document.getElementsByClassName('l1c');
	[].forEach.call(l1c, function (el1) {
		el1.onmouseover = function(){
		    var l2c = el1.getElementsByClassName('l2c');
		    [].forEach.call(l2c, function (el2) {
		    	el2.style.visibility = 'visible';
		    	el2.onmouseout = function(){
		    		el2.style.visibility = 'hidden';
		    	};
		    	el1.onmouseout = function(){
		    		el2.style.visibility = 'hidden';
		    	};
			});
		};
	});
	// change color of menu items onmouseover and onmouseout
	var l3i = document.getElementsByClassName('l3i');
	[].forEach.call(l3i, function (el3) {
		el3.onmouseover = function(){
			el3.style.backgroundColor = 'orange';
		};
		el3.onmouseout = function(){
			el3.style.backgroundColor = 'yellow';
		};
	});
}