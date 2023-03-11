import { Story } from "../types"

export const HOST = "https://hacker-news.firebaseio.com/v0"

export const fetchArrComments = async (item: any): Promise<any> => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
  )
  const comments = await response.json()

  return comments
}

export const fetchTopStoriesIds = async (): Promise<number[]> => {
  const response = await fetch(`${HOST}/topstories.json`)
  const topStoriesIds = await response.json()
  // console.log(topStoriesIds)
  return topStoriesIds
}

export const fetchStory = async (id: number): Promise<Story> => {
  const response = await fetch(`${HOST}/item/${id}.json`)
  const storyData = await response.json()
  // console.log(storyData)

  const story: Story = {
    id: storyData.id,
    by: storyData.by,
    title: storyData.title,
    url: storyData.url,
    score: storyData.score,
    time: storyData.time,
    descendants: storyData.descendants,
    kids: storyData.kids,
  }
  return story
}

export const fetchStories = async (ids: number[]): Promise<Story[]> => {
  const stories = await Promise.all(ids.map(fetchStory))
  stories.sort((a, b) => b.time - a.time)
  // console.log(stories)
  return stories
}

// fetchTopStoriesIds()
// fetchStory(28554565)
// fetchStories([28554565, 28554565])
