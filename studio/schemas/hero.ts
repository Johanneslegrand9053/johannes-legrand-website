import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'available', title: 'Verfügbarkeits-Badge (DE)', type: 'string' }),
    defineField({ name: 'available_en', title: 'Verfügbarkeits-Badge (EN)', type: 'string' }),
    defineField({ name: 'subtitle', title: 'Untertitel (DE)', type: 'string' }),
    defineField({ name: 'subtitle_en', title: 'Untertitel (EN)', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline (DE)', type: 'string' }),
    defineField({ name: 'tagline_en', title: 'Tagline (EN)', type: 'string' }),
    defineField({ name: 'description', title: 'Beschreibungstext (DE)', type: 'text', rows: 4 }),
    defineField({ name: 'description_en', title: 'Beschreibungstext (EN)', type: 'text', rows: 4 }),
    defineField({
      name: 'profileImage',
      title: 'Profilbild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Statistiken',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', title: 'Zahl', type: 'number' },
          { name: 'suffix', title: 'Suffix (z.B. "+" oder " Mrd. €+")', type: 'string' },
          { name: 'label', title: 'Beschriftung (DE)', type: 'string' },
          { name: 'label_en', title: 'Beschriftung (EN)', type: 'string' },
        ],
      }],
    }),
  ],
  preview: { select: { title: 'subtitle' } },
})
