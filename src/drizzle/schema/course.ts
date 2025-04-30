import { pgTable, text } from 'drizzle-orm/pg-core';
import { createdAt, id, updatedAt } from '../schemaHelper';
import { relations } from 'drizzle-orm';
import { CourseProductTable } from '@/src/drizzle/schema/courseProduct';

export const CourseTable = pgTable('courses', {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
});

export const CourseRelationships = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
}));
