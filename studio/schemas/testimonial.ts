import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Referenz',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', title: 'Rolle / Position', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'quote', title: 'Zitat (DE)', type: 'text', rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: 'quote_en', title: 'Zitat (EN)', type: 'text', rows: 3 }),
    defineField({
      name: 'logoImage',
      title: 'Firmen-Logo (optional)',
      type: 'image',
      options: { hotspot: false },
    }),
    defineField({ name: 'order', title: 'Reihenfolge', type: 'number' }),
  ],
  orderings: [{
    title: 'Reihenfolge',
    name: 'orderAsc',
    by: [{ field: 'order', direction: 'asc' }],
  }],
  preview: { select: { title: 'name', subtitle: 'role' } },
})
