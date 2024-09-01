import { relations } from 'drizzle-orm';

import { usersTable, profilesTable } from './user';

export const usersRelations = relations(usersTable, ({ one }) => ({
	profile: one(profilesTable), // -> A user has one profile
}));

export const profilesRelations = relations(profilesTable, ({ one }) => ({
	user: one(usersTable), // -> A profile belongs to a user
}));

// Define more relations here 👇...
