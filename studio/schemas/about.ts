import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'about',
  title: 'Über mich',
  type: 'document',
  fields: [
    defineField({ name: 'label', title: 'Label (DE)', type: 'string' }),
    defineField({ name: 'label_en', title: 'Label (EN)', type: 'string' }),
    defineField({ name: 'title', title: 'Überschrift (DE)', type: 'string' }),
    defineField({ name: 'title_en', title: 'Überschrift (EN)', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio-Text 1 (DE)', type: 'text', rows: 4 }),
    defineField({ name: 'bio_en', title: 'Bio-Text 1 (EN)', type: 'text', rows: 4 }),
    defineField({ name: 'bio2', title: 'Bio-Text 2 (DE)', type: 'text', rows: 4 }),
    defineField({ name: 'bio2_en', title: 'Bio-Text 2 (EN)', type: 'text', rows: 4 }),
    defineField({
      name: 'highlights',
      title: 'Bullet Points',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'text', title: 'Text (DE)', type: 'string' },
          { name: 'text_en', title: 'Text (EN)', type: 'string' },
        ],
        preview: { select: { title: 'text' } },
      }],
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({ name: 'badgeValue', title: 'Badge Zahl (z.B. "15+")', type: 'string' }),
    defineField({ name: 'badgeLabel', title: 'Badge Beschriftung (DE)', type: 'string', description: 'z.B. "Jahre\\nFührung"' }),
    defineField({ name: 'badgeLabel_en', title: 'Badge Beschriftung (EN)', type: 'string' }),
  ],
  preview: { select: { title: 'title', media: 'image' } },
})
