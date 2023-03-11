import {
  STORIES_IDS_DATA,
  STORIES_DATA,
  COMMENTS_DATA,
  RESET_COMMENTS_DATA,
} from "../reduser"

export const setStoriesIdsData = (idsData: number[]): any => ({
  type: STORIES_IDS_DATA,
  payload: idsData,
})

export const setStoriesData = (idsData: any): any => ({
  type: STORIES_DATA,
  payload: idsData,
})

export const setComments = (Data: any): any => ({
  type: COMMENTS_DATA,
  payload: Data,
})
export const setResetComments = (Data: []): any => ({
  type: RESET_COMMENTS_DATA,
  payload: Data,
})
