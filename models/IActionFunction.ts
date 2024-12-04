export type ActionFunction = (
    previousState: any,
    formData: FormData
) => Promise<{ message: string}>