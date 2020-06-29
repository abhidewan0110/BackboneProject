app = app || {};

app.models.Person = Backbone.Model.extend({ 
	defaults: { 
		'ID': '', 
		'name': '', 
		'ID': '', 
		'email': '', 
		 
 
 	},
 	
	initialize: function() { 
		var self = this; 
		if(this.get('age') >=21) { 
			self.set('type', 'Adult'); 
		} else { 
			self.set('type', 'Minor'); 
		} 
	} 
	 
}); 

app.collections.People = Backbone.Collection.extend({ 
	 
	model: app.models.Person, 
	  
	comparator: function(person) { 
		return person.get('name'); 
	} 
	  
}); 