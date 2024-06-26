import { ReactNode } from "react";
import { QuestionType } from "../../../_lib/atoms/interviewState";

interface QuestionListViewerProps {
  questionId: number;
  questionList: QuestionType[];
  timer: ReactNode;
}

export const QuestionViewer = ({ questionId, questionList, timer }: QuestionListViewerProps) => {
  const questionContent = questionList.find(
    (question) => question.questionId === questionId,
  )?.questionContent;
  const questionNumber =
    questionList.findIndex((question) => question.questionId === questionId) + 1;

  return (
    <div className="fixed top-0 left-0 right-0 w-[85%] bg-black bg-opacity-70 p-4 rounded-b-lg text-white text-base z-10 m-auto">
      <div className="flex items-start w-full justify-between">
        <div>
          <span className="bg-white text-black px-4 py-1 rounded-2xl text-base font-bold min-w-[50px] text-center">
            {questionNumber}번 질문
          </span>
          <span className="text-sm flex-1 text-center mx-2 max-h-32 md:max-h-[15%] overflow-y-scroll md:overflow-y-auto md:text-lg">
            {questionContent}
          </span>
        </div>
        {timer}
      </div>
    </div>
  );
};

interface AnswerViewerProps {
  questionId: number;
  questionList: QuestionType[];
}
export const AnswerViewer = ({ questionId, questionList }: AnswerViewerProps) => {
  const answerContent = questionList.find(
    (question) => question.questionId === questionId,
  )?.answerContent;

  return (
    <div className="fixed bottom-[20%] left-0 right-0 w-[85%] bg-black bg-opacity-70 p-4 rounded-lg text-white text-base z-10 m-auto">
      <div className="flex items-start w-full justify-between">
        <span className="bg-white text-black px-4 py-1 rounded-2xl text-base font-bold text-center">
          답변
        </span>
        <span className="text-sm flex-1 text-center mx-2 max-h-32 md:max-h-[15%] overflow-y-scroll md:overflow-y-auto md:text-lg">
          {answerContent}
        </span>
      </div>
    </div>
  );
};
