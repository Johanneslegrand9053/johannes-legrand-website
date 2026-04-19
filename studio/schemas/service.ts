import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Leistung',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel (DE)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'title_en', title: 'Titel (EN)', type: 'string' }),
    defineField({ name: 'description', title: 'Beschreibung (DE)', type: 'text', rows: 3 }),
    defineField({ name: 'description_en', title: 'Beschreibung (EN)', type: 'text', rows: 3 }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: '1 = erste Karte',
    }),
  ],
  orderings: [{
    title: 'Reihenfolge',
    name: 'orderAsc',
    by: [{ field: 'order', direction: 'asc' }],
  }],
  preview: { select: { title: 'title', subtitle: 'order' } },
})
