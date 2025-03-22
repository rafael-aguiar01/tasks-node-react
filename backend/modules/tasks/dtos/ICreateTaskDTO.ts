interface ICreateTaskDTO {
    title: string, 
    description: string,
    status: 'PENDING' | 'COMPLETED'
}