import { createClient } from 'microcms-js-sdk';

 export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
 });

 export const getList = async (queries) => {
  const listData = await client.getList({
   endpoint: "news",
   queries,
  });
  return listData;
 };
 
 export const getDetail = async (
  postId,
  queries
 ) => {
  const detailData = await client.getListDetail({
   endpoint: "news",
   contentId:postId,
   queries,
  });

  return detailData;
 };