import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dark Alpha Capital',
    short_name: 'Dark Alpha Capital',
    description: "Dark Alpha is a leading independent sponsor company in the US, specializing in private equity investments across various industries with a focus on value creation and strategic partnerships. They leverage their extensive network and expertise to identify and capitalize on unique investment opportunities, driving growth and maximizing returns for their stakeholders",
    start_url: '/home',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}