export interface IStepsModel {
  title?: string;
  content?: JSX.Element;
  summary?: JSX.Element;
  stepIndex?: number;
  currentStep?: boolean;
  completed?: boolean;
}
