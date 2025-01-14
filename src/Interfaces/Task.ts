import { CSSProperties } from "react";

export interface ITask {
    taskid: string;
    goalid: string;
    title: string;
    duration: number;
    start: string;
    deadline: string;
    goalColor: string;
    parentGoalId: string;
}

export interface ITaskOfDay {
  scheduled: ITask[],
  impossible: ITask[],
  freeHrsOfDay: number,
  scheduledHrs: number,
  colorBands: CSSProperties[],
}
