import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Website Einstellungen',
  type: 'document',
  fields: [
    defineField({
      name: 'contactEmail',
      title: 'Kontakt E-Mail',
      type: 'string',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'cvFile',
      title: 'CV (PDF)',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'footerTagline',
      title: 'Footer Tagline (DE)',
      type: 'string',
    }),
    defineField({
      name: 'footerTagline_en',
      title: 'Footer Tagline (EN)',
      type: 'string',
    }),
    defineField({
      name: 'footerCopyright',
      title: 'Copyright Text',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: 'Website Einstellungen' }) },
})
