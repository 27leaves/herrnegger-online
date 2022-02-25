import { variables } from "$lib/variables";

export const getTweets = async (tweetIds:string[]) => {
    const idsParam = tweetIds.filter(id => typeof id !== 'undefined').join(',');
    const result = await fetch(`https://api.twitter.com/2/tweets?ids=${idsParam}`, {
      headers: {
          Authorization: `Bearer ${variables.twitterBearerToken}`
      }
  });
  return await result.json();
}