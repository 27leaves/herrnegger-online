import { getTweets } from '$lib/services/TwitterService';
import {get as getPosts} from '../../api/posts.json';
// const twitterRegex = '/status/(\d+)';
// const twitterRegex: Regexp = /https?:/ig;
const twitterRegex = /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)/

export const get = async () => {
  const posts = (await getPosts()).body;
  const dailyWritingPosts = posts.filter(p => p.meta.project === 'daily-writing');
  const items = dailyWritingPosts.map(post => ({
        date: post.meta.date,
        url: post.path,
        title: post.meta.title,
        twitterUrl: post.meta.twitter_post_url,
        tweetId: post.meta.twitter_post_url ? post.meta.twitter_post_url.match(twitterRegex)[2] : undefined,
    })).reverse();
  const tweetIds = items.map(itm => itm.tweetId);
  const tweets = await getTweets(tweetIds);
  const filledItems = items.map(item => ({
      ...item,
      tweet: tweets.data.find(tweet => tweet.id === item.tweetId)
  }));
  return {
    body: filledItems,
  }
}