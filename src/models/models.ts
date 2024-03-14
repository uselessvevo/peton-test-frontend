export type Status = "В работе" | "Подготовка" | "Завершено"

export interface Checklist {
    id: number
    number: string
    title: string
    date?: Date
}

export interface Ticket {
    id: number
    code: string
    project: string
    job: string
    checklist: Checklist | null
    status: Status
    deadline: Date
};