export class CustomError extends Error {
  response?: {
    data: object;
    status: number;
    headers: string;
  };
}
