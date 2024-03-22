import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://darkalphacapital.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://darkalphacapital.com/home',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://darkalphacapital.com/criteria',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://darkalphacapital.com/about',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    {
      url: 'https://darkalphacapital.com/team',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://darkalphacapital.com/strategy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: 'https://darkalphacapital.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      }
  ]
}