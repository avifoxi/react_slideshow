var faker = require('faker');

module.exports= {
	init: function() {
		localStorage.clear();
		localStorage.setItem('slides', JSON.stringify([
			
			/*
			
				other params in each slide -- 
				optional second arguments for show on load, on timed reveal, or on facilitator click
				ala
				slide = {
					title: {
						text: 'Whatever the text should be',
						reveal: <'onLoad' || 'facilitatorCue' || 'timedReveal300ms'>
					}, 
					image: {
						url: 'blabla.bla',
						reveal: 'facilitatorCue'
					},
					points: [
						{
							text: 'bla',
							reveal: 'onLoad'
						},
						{}
					]
				}

			*/
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