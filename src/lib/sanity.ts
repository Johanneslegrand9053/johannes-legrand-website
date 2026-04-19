import { createClient } from '@sanity/client'
import { createImageUrlBuilder as imageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const sanityClient = createClient({
  projectId: 'c0w7chas',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]`)
}

export async function getHero() {
  return sanityClient.fetch(`*[_type == "hero"][0]`)
}

export async function getAbout() {
  return sanityClient.fetch(`*[_type == "about"][0]`)
}

export async function getServices() {
  return sanityClient.fetch(`*[_type == "service"] | order(order asc)`)
}

export async function getTestimonials() {
  return sanityClient.fetch(`*[_type == "testimonial"] | order(order asc)`)
}

export async function getCaseStudies() {
  return sanityClient.fetch(`*[_type == "caseStudy"] | order(order asc)`)
}

export async function getExperience() {
  return sanityClient.fetch(`*[_type == "experience"] | order(order asc)`)
}
