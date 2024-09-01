import * as schemas from './schemas';

export type User = typeof schemas.usersTable.$inferSelect;
export type InsertUser = typeof schemas.usersTable.$inferInsert;

export type Profile = typeof schemas.profilesTable.$inferSelect;
export type InsertProfile = typeof schemas.profilesTable.$inferInsert;

// Define more types here 👇...

// ===== CUSTOM TYPES =====
export type UserWithProfile = User & { profile: Profile };
