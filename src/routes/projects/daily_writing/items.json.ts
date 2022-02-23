import {get as getPosts} from '../../api/posts.json';

export const get = async () => {
  const posts = (await getPosts()).body;
  const dailyWritingPosts = posts.filter(p => p.meta.project === 'daily-writing');
  const items = dailyWritingPosts.map(post => ({
        date: post.meta.date,
        url: post.path,
        title: post.meta.title,
        twitterUrl: post.meta.twitter_post_url
    }));
  return {
    body: items,
  }
}