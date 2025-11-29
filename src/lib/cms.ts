/**
 * CMS INTEGRATION LAYER
 * ======================
 * 
 * This file provides a unified interface for content management.
 * Currently uses local JSON files, but structured to easily swap
 * in Sanity, Contentful, or any other headless CMS.
 * 
 * To integrate a CMS:
 * 1. Install the CMS SDK (e.g., @sanity/client, contentful)
 * 2. Replace the fetch functions below with CMS queries
 * 3. Update the return types as needed
 */

import { BlogPost, GalleryImage } from './types'
import blogPosts from '@/data/blog-posts.json'
import galleryImages from '@/data/gallery-images.json'

/**
 * BLOG POST FUNCTIONS
 */

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // TODO: Replace with CMS query
  // Example with Sanity:
  // const posts = await sanityClient.fetch(`
  //   *[_type == "post" && published == true] | order(date desc) {
  //     slug,
  //     title,
  //     excerpt,
  //     date,
  //     author,
  //     "image": mainImage.asset->url
  //   }
  // `)
  // return posts

  return blogPosts as BlogPost[]
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // TODO: Replace with CMS query
  // Example with Sanity:
  // const post = await sanityClient.fetch(`
  //   *[_type == "post" && slug.current == $slug][0] {
  //     slug,
  //     title,
  //     content,
  //     date,
  //     author,
  //     "image": mainImage.asset->url
  //   }
  // `, { slug })
  // return post

  const posts = blogPosts as BlogPost[]
  return posts.find(post => post.slug === slug) || null
}

export async function getRecentBlogPosts(limit: number = 3): Promise<BlogPost[]> {
  // TODO: Replace with CMS query with limit
  const posts = await getAllBlogPosts()
  return posts.slice(0, limit)
}

/**
 * GALLERY FUNCTIONS
 */

export async function getAllGalleryImages(): Promise<GalleryImage[]> {
  // TODO: Replace with CMS query
  // Example with Sanity:
  // const images = await sanityClient.fetch(`
  //   *[_type == "galleryImage"] | order(_createdAt desc) {
  //     _id,
  //     title,
  //     alt,
  //     category,
  //     "src": image.asset->url
  //   }
  // `)
  // return images

  return galleryImages as GalleryImage[]
}

export async function getGalleryImagesByCategory(category: string): Promise<GalleryImage[]> {
  // TODO: Replace with CMS query filtered by category
  const images = await getAllGalleryImages()
  return images.filter(img => img.category === category)
}

/**
 * CMS CONFIGURATION EXAMPLES
 * ==========================
 * 
 * SANITY SETUP:
 * -------------
 * 1. Install: npm install @sanity/client
 * 2. Create sanity.config.ts:
 *    import { createClient } from '@sanity/client'
 *    export const sanityClient = createClient({
 *      projectId: 'your-project-id',
 *      dataset: 'production',
 *      apiVersion: '2024-01-01',
 *      useCdn: true,
 *    })
 * 
 * CONTENTFUL SETUP:
 * -----------------
 * 1. Install: npm install contentful
 * 2. Create contentful.config.ts:
 *    import { createClient } from 'contentful'
 *    export const contentfulClient = createClient({
 *      space: 'your-space-id',
 *      accessToken: 'your-access-token',
 *    })
 * 
 * Then replace the functions above with appropriate queries.
 */