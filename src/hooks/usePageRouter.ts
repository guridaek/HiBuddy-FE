import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../routerConfig";
import { KoreanTestResult } from "@models/koreanTest";

function usePageRouter() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goToMainPage = () => {
    navigate(ROUTER_PATH.MAIN);
  };

  const goToLoginPage = () => {
    navigate(ROUTER_PATH.LOGIN);
  };

  const goToThreadListPage = () => {
    navigate(ROUTER_PATH.THREAD_LIST);
  };

  const goToThreadViewPage = (postId: number) => {
    navigate(ROUTER_PATH.THREAD_VIEW.replace(":postId", postId.toString()));
  };

  const goToPostThreadPage = () => {
    navigate(ROUTER_PATH.POST_THREAD);
  };

  const goToOnboardingPage = () => {
    navigate(ROUTER_PATH.ONBOARDING);
  };

  const goToEditThreadPage = (postId: number) => {
    navigate(ROUTER_PATH.EDIT_THREAD.replace(":postId", postId.toString()));
  };

  const goToMyThreadListPage = () => {
    navigate(ROUTER_PATH.MY_THREAD_LIST);
  };

  const goToSavedThreadListPage = () => {
    navigate(ROUTER_PATH.SAVED_THREAD_LIST);
  };

  const goToKoreanTestPage = () => {
    navigate(ROUTER_PATH.KOREAN_TEST);
  };

  const goToTestStartPage = () => {
    navigate(ROUTER_PATH.TEST_START);
  };

  const goToRecordPage = (scriptId: number) => {
    navigate(ROUTER_PATH.RECORD.replace(":scriptId", scriptId.toString()));
  };

  const goToThreadSearchPage = (keyword: string) => {
    navigate(ROUTER_PATH.SEARCHED_THREAD_LIST.replace(":keyword", keyword));
  };

  const goToTestResultPage = (testId: number, testResult?: KoreanTestResult) => {
    navigate(ROUTER_PATH.TEST_RESULT.replace(":testId", testId.toString()), {
      state: { testResult },
    });
  };

  return {
    goBack,
    goToMainPage,
    goToLoginPage,
    goToThreadListPage,
    goToThreadViewPage,
    goToPostThreadPage,
    goToOnboardingPage,
    goToEditThreadPage,
    goToMyThreadListPage,
    goToSavedThreadListPage,
    goToKoreanTestPage,
    goToTestStartPage,
    goToRecordPage,
    goToThreadSearchPage,
    goToTestResultPage,
  };
}

export default usePageRouter;
