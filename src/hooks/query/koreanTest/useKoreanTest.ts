import { useMutation } from "@tanstack/react-query";
import { postKoreanTestRecording } from "@apis/koreanTest";
import { PostKoreanTestResult } from "@models/koreanTest";

function useKoreanTestMutation() {
  const postResult = useMutation<PostKoreanTestResult, Error, Blob>({
    mutationFn: postKoreanTestRecording,
  });

  return { postResult };
}

export default useKoreanTestMutation;
