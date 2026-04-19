import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'tag',
      title: 'Tag (DE)',
      type: 'string',
      description: 'z.B. "Restrukturierung", "Wachstum", "PMI"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag_en',
      title: 'Tag (EN)',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Titel (DE)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title_en',
      title: 'Titel (EN)',
      type: 'string',
    }),
    defineField({
      name: 'industry',
      title: 'Branche',
      type: 'string',
      description: 'z.B. "Mittelstand | Industrie"',
    }),
    defineField({
      name: 'result',
      title: 'Ergebnis (DE)',
      type: 'string',
      description: 'z.B. "EBITDA +12% innerhalb von 3 Monaten"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'result_en',
      title: 'Ergebnis (EN)',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung (DE)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description_en',
      title: 'Beschreibung (EN)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'order',
      title: 'Reihenfolge',
      type: 'number',
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
    select: { title: 'title', subtitle: 'tag' },
  },
})
