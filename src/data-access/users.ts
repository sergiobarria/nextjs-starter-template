import 'server-only';

import { db } from '@/db';
import { unstable_cache } from 'next/cache';
import { TAGS_KEYS } from '@/config/constants';

export const getUserProfile = unstable_cache(
	async (userId: string) => {
		const result = await db.query.profilesTable.findFirst({
			where: (records, { eq }) => eq(records.id, userId),
			with: { user: true },
		});

		return result;
	},
	[TAGS_KEYS.USER_PROFILE],
	{
		revalidate: 60 * 60 * 24,
		tags: [TAGS_KEYS.USER_PROFILE],
	},
);
