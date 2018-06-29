export interface Step {
    orderNumber: number,
    stepDescription: string,
    stepTextBody: string,
    stepTask?: Task[],
    stepTime: StepTime,
    canSkip: boolean
}

export interface Task {
    taskDescription: string,
    isCompleted: boolean
}

export interface StepTime {
    from: string,
    to: string
}