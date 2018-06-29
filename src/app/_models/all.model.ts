export interface Step {
    orderNumber: number,
    stepDescription: string,
    stepTextBody: string,
    stepTask?: Task[],
    stepTime: StepTime,
    canSkip: boolean,
    progress: number
}

export interface Task {
    taskDescription: string,
    isCompleted: boolean
}

export interface StepTime {
    from: string,
    to: string
}