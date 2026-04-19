import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Erfahrung / CV',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Unternehmen',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Standort',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
      description: '1 = neueste Position',
    }),
    defineField({
      name: 'roles',
      title: 'Positionen',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'period',
              title: 'Zeitraum',
              type: 'string',
              description: 'z.B. "März 2025 – Heute"',
            },
            {
              name: 'role',
              title: 'Rolle (DE)',
              type: 'string',
            },
            {
              name: 'role_en',
              title: 'Rolle (EN)',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Beschreibung (DE)',
              type: 'text',
              rows: 4,
            },
            {
              name: 'description_en',
              title: 'Beschreibung (EN)',
              type: 'text',
              rows: 4,
            },
          ],
          preview: {
            select: { title: 'role', subtitle: 'period' },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Reihenfolge',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'company', subtitle: 'location' },
  },
})
