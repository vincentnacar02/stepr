export interface Step {
    orderNumber: number,
    stepDescription: string,
    stepTextBody: string,
    stepTask?: Task[],
    canSkip: boolean
}

export interface Task {
    taskDescription: string,
    isCompleted: boolean
}