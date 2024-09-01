import { sql } from 'drizzle-orm';
import { sqliteTable, text, integer, index } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';

export const usersTable = sqliteTable('users', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	created: text('created')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
	modified: text('modified'),

	name: text('name').notNull(),
	email: text('email').notNull().unique(),
	password: text('password').notNull(), // -> hashed password
	active: integer('active', { mode: 'boolean' }).default(true), // -> 1 = active, 0 = inactive
	// Add more columns here...
});

export const profilesTable = sqliteTable(
	'profiles',
	{
		id: text('id')
			.primaryKey()
			.$defaultFn(() => createId()),
		created: text('created')
			.notNull()
			.default(sql`CURRENT_TIMESTAMP`),
		modified: text('modified'),

		userId: text('userId')
			.notNull()
			.references(() => usersTable.id, { onDelete: 'cascade' }), // -> This is a database constraint, useful for the ORM
		// Add more columns here...
	},
	table => {
		return {
			userIdIndex: index('user_id_index').on(table.userId), // -> Add index on userId, useful for performance
		};
	},
);
