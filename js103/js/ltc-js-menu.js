function fnAddMenu(currentmemberid, menu){

	// build menu
	var elMainMenu = document.getElementsByClassName('main-menu');

	for (var key1 in menu) {

		var menuItem = menu[key1];
		var menuName = menuItem['name'];
		var link = menuItem['link'];
		var submenu = menuItem['submenu'];

		// <div class="l1c l1c1">
		var l1c = document.createElement('div');    
		l1c.setAttribute("class", "l1c l1c1"); 
		var t1 = document.createTextNode(menuName);
		if(link){
			a = document.createElement('a');
			a.appendChild(t1);
			a.href = link;
			l1c.appendChild(a);
		}else{
			l1c.appendChild(t1); 
		}
		if(submenu){
			// <div class="l2c l2c1">
			var l2c = document.createElement('div'); 
			l2c.setAttribute("class", "l2c l2c1"); 
			// <div class="l3i">Contact</div>
			var type = submenu['type'];
			var data = submenu['data'];

			if(type=='profile' || type=='groups' || type=='members'){
				for (var key in data) {
					var item = data[key];
					var iName = item['name'];
					var iLink = item['link'];

					var l3i = document.createElement('div'); 
					l3i.setAttribute("class", "l3i");
					var t2 = document.createTextNode(iName);

					if(iLink){
						var a2 = document.createElement('a');
						a2.appendChild(t2);
						a2.href = iLink;
						l3i.appendChild(a2);
					}else{
						l3i.appendChild(t2); 
					}

					l2c.appendChild(l3i);
				}
			}
			l1c.appendChild(l2c);
		}
		
		elMainMenu[0].appendChild(l1c);
	}

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