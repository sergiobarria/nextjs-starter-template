CREATE TABLE `profiles` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`modified` text,
	`userId` text NOT NULL,
	FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`created` text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`modified` text,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`active` integer DEFAULT true
);
--> statement-breakpoint
CREATE INDEX `user_id_index` ON `profiles` (`userId`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);