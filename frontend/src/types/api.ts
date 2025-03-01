export type Response = {
  success: boolean;
};

export type SuccessfulResponse = {
  success: true;
} & Response;

export type ErrorResponse = {
  success: false;
  message?: string;
} & Response;

export type PaginatedResponse<T> = {
  limit?: number;
  offset?: number;
  count: number;
  results: T[];
} & SuccessfulResponse;
