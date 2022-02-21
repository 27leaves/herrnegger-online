---
title: 'Daily Writing'
description: 'In January 2022, I wrote 30 days in a row.'
started_date: 2022-01-08
---

<script context="module">
	export const load = async ({ fetch }) => {
		const getItems = await fetch('/projects/daily_writing/items.json');
		const items = await getItems.json();

		return {
			props: {
				items,
			}
		};
	};
</script>

<script>
  import ProjectList from '$lib/components/ProjectList.svelte';
  export let items;
</script>

In January 2022, I joined the Ship 30 For 30 community.

It is a cohort-based digital writing course where the goal is to write and publish 30 articles over 30 days. For me, the thought of writing down my thoughts and publish them online [felt really scary](/blog/decision). I needed a push from good friends to sign up for this, and now I'm really happy that I did it. This was definitely one of the better decisions of my life.

The funny thing is that I never was interested in digital writing. I tried to get away from social media platforms over the last years and digital writing sounded like a step in the other direction. Why would anyone even be interested in some stuff that I wrote?

Everyone who knows me, knows that I try to always take a step back and question my thoughts. Were all of those reasons just excuses for not starting something exciting? Whenever it's possible, I try to deal with those fears and do it nonetheless. So I had my own reasons for joining:

* Dealing with the fear of putting myself out there (I had terrible nights because of this)
* Overcoming perfectionism (Putting something out there every day in ~1 hour of work cannot be perfect, and that should be alright)

Along the way, I also made some new friends, learned how to use Twitter, wrote one semi-viral post and learned how concistency really can pay off. You can read about that in [a course review](/blog/30-essays-in-30-days-my-honest-review) and how this experience also [lead to other projects](/blog/my-new-projects-progressing-from-daily-writing) such as building this website in public.

All in all, I'm very happy that I made this and overcame the fear. The first blog posts on this site are basically essays that I wrote over the course of those 30 days.

<ProjectList {items} />