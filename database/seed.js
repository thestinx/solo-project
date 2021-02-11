const seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/my-first-project', function() {

  // Load Mongoose models
  seeder.loadModels([
      './database/userModel.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['User'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });

  });
});

// Data array containing seed data - documents organized by Model
var data = [
	{
		'model': 'User',
		'documents': [
			{
				'email': 'thestinx@gmail.com',
				'images': [
                    'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/1-5dd7c6a7a59ac__700.jpg',
                    'https://illumeably-bfemqo5fqfr.netdna-ssl.com/wp-content/uploads/2020/03/3-5c56ba92facd06fc41ad956288d3f5cb.jpg',
                    'https://static.boredpanda.com/blog/wp-content/uploads/2019/11/1195604005914894336-1-png__700.jpg',
                    ]
			},
		]
	}
];