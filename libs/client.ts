import {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

interface MicroCMSPost {
  title: string;
  content: string;
  category: string;
  photo: MicroCMSImage;
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export const getList = async (
  queries?: MicroCMSQueries
): Promise<MicroCMSListResponse<MicroCMSPost>> => {
  const listData = await client.getList({
    endpoint: "news",
    queries,
  });
  return listData;
};

export const getDetail = async (postId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail({
    endpoint: "news",
    contentId: postId,
    queries,
  });

  return detailData;
};
