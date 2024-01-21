export interface ISaveFaqModel {
  question: string;
  answer: string;
  title: string;
  itemId: string;
}

import { QuestionModel } from "../../models/cummon-questions/question";

export interface IFolderResModel {
  level: string;
  name: string;
  itemId: string;
  faqs: QuestionModel[];
  children: [];
}
