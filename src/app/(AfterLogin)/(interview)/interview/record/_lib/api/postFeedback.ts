import customFetcher from "@/lib/utils/customFetcher";
export interface PostFeedbackRequest {
  videoId: number;
  content: string;
}

const postFeedback = async ({ videoId, content }: PostFeedbackRequest) => {
  const { response, data } = await customFetcher(`/feedback/${videoId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content,
    }),
  });

  return data;
};

export default postFeedback;
