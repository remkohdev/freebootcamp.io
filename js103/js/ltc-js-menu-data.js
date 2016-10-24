var profile = {
	'type' : 'profile',
	'data' : [
	 	{
	 		'name' : 'Contact',
	 		'link' : 'contact.html'
	 	},
	 	{
	 		'name' : 'About',
	 		'link' : 'about.html'
	 	},
		{
			'name' : 'Friends',
	 		'link' : 'members.html'
	  	},
	 	{
	 		'name' : 'My_Groups',
	 		'link' : 'groups.html'
	 	},
	 	{
	 		'name' : 'My_Categories',
	 		'link' : 'categories.html'
	 	},
	 	{
	 		'name' : 'My_Points',
	 		'link' : 'points.html'
	 	}
 	]
};

var members = {
	'type' : 'members',
	'data' : [
		{
		'id': 1,
		'name': 'remkohdev',
		'link': 'member.html',
		'profile': {
			'firstname':'Remko',
			'lastname':'de Knikker',
			'twitter':'remkohdev',
			'email':'remkohdev@us.ibm.com',
			'linkedin':'http://linkedin.com/in/remkohdev'
		},
		'friends':[2,3],
		'groups':[1],
		'categories':[],
		'points':[]
		},
	 	{
		'id': 2,
		'name': 'tombaker',
		'link': 'member.html',
		'profile':{
			'firstname':'Tom',
			'lastname':'Baker',
			'twitter':null,
			'email':null,
			'linkedin': 'https://uk.linkedin.com/in/tomlawsonbaker'
		},
		'friends':[1],
		'groups':['UK','US'],
		'categories':[],
		'points':[]
		},
	 	{
		'id': 3,
		'name': 'basarts',
		'link': 'member.html',
		'profile':{
			'firstname':'Bas',
			'lastname':'Arts',
			'twitter':null,
			'email':null,
			'linkedin': 'https://it.linkedin.com/in/bas-arts-81277a42'
		},
		'friends':[1],
		'groups':['IT','NL'],
		'categories':[],
		'points':[]
		}
	]
};

var groups = {
	'type' : 'groups',
	'data' : [
		{'id': 'NL','name': 'Netherlands','link': 'group.html'},
		{'id': 'UK','name': 'United_Kingdom','link': 'group.html'},
		{'id': 'US','name': 'United_States','link': 'group.html'},
		{'id': 'GR','name': 'Greece','link': 'group.html'},
		{'id': 'CN','name': 'China','link': 'group.html'},
		{'id': 'IT','name': 'Italy','link': 'group.html'},
		{'id': 'IL','name': 'Israel','link': 'group.html'},
		{'id': 'SL','name': 'Sierra_Leone','link': 'group.html'},
		{'id': 'DE','name': 'Germany','link': 'group.html'},
		{'id': 'FR','name': 'France','link': 'group.html'},
		{'id': 'BE','name': 'Belgium','link': 'group.html'}
	]
};

var menu = [
	{
		'name':'Home',
		'link': 'index.html'
	}, 
	{
		'name':'Profile',
	 	'submenu' : profile
	}, 
	{
		'name':'Members',
	 	'submenu' : members
	}, 
	{
		'name':'Groups',
	 	'submenu' : groups
	}, 
	{
		'name':'About_LTC',
		'link' : 'aboutltc.html'
	}
];




