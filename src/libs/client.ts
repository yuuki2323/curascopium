import { Locale } from "@/navigation";
import {
  MicroCMSImage,
  MicroCMSListContent,
  MicroCMSListResponse,
  MicroCMSQueries,
  createClient,
} from "microcms-js-sdk";

export interface MicroCMSPost extends MicroCMSListContent {
  title: string;
  content: string;
  category: MicroCMSCategory | null;
  photo?: MicroCMSImage;
}

interface MicroCMSCategory extends MicroCMSListContent {
  name: string;
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("Please define MICROCMS_SERVICE_DOMAIN in your .env");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("Please define MICROCMS_API_KEY in your .env");
}

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN as string,
  apiKey: process.env.MICROCMS_API_KEY as string,
});

export const getList = async (locale: Locale, queries?: MicroCMSQueries) => {
  const listData: MicroCMSListResponse<MicroCMSPost> = await client.getList({
    endpoint: `news-${locale}`,
    queries,
  });
  return listData;
};

export const getDetail = async (
  locale: Locale,
  postId: string,
  queries?: MicroCMSQueries
) => {
  const detailData: MicroCMSPost = await client.getListDetail({
    endpoint: `news-${locale}`,
    contentId: postId,
    queries,
  });

  return detailData;
};
