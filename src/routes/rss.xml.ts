import website from '$lib/config/website';
import { get as getPosts } from './api/posts.json';
import { format } from 'date-fns'

export async function get() {
  const posts = await getPosts();
  const body = xml(posts.body);
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body,
  }
}

const xml =
  posts => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${website.siteTitle}</title>
      <link>${website.siteUrl}</link>
      <description>${website.siteDescription}</description>
    ${posts
      .map(
        post =>
          `
        <item>
          <title>${post.meta.title}</title>
          <description>${post.meta.description}</description>
          <link>${website.siteUrl}${post.path}/</link>
          <pubDate>${format(new Date(post.meta.date),  "yyyy-MM-dd'T'HH:mm:ss'Z'")}</pubDate>
          <content:encoded>${/*post.previewHtml*/ ''} 
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${website.siteUrl}${post.path}">
                  Keep reading
                </a>
              </strong>  
            </div>
          </content:encoded>
        </item>
      `
      )
      .join('')}
  </channel>
</rss>`;