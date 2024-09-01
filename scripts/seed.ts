/**
 * Use this file to seed your database with data that your app needs to run.
 * This is useful for development and testing purposes.
 */

async function seed() {
	console.log('=> 🌱 Seeding the database...');
	// Add your seed data here 👇
}

seed()
	.then(() => {
		console.log('=> ✅ Database seeded successfully.');
		process.exit(0);
	})
	.catch(error => {
		console.error('Error seeding database:', error);
		process.exit(1);
	});
