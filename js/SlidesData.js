var faker = require('faker');

module.exports= {
	init: function() {
		localStorage.clear();
		localStorage.setItem('slides', JSON.stringify([
			{
				title: faker.company.catchPhrase(),
				image: faker.image.cats(),
				points: [
					faker.lorem.sentence(),
					faker.lorem.sentence()
				]
			},
			{
				title: faker.company.catchPhrase(),
				image: faker.image.cats(),
				points: [
					faker.lorem.sentence(),
					faker.lorem.sentence()
				]
			},
			{
				title: faker.company.catchPhrase(),
				image: faker.image.cats(),
				points: [
					faker.lorem.sentence(),
					faker.lorem.sentence()
				]
			},
			{
				title: faker.company.catchPhrase(),
				image: faker.image.cats(),
				points: [
					faker.lorem.sentence(),
					faker.lorem.sentence()
				]
			}
		]));
	}
}