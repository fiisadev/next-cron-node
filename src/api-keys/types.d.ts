export interface ApiKey {
  id: string;
  name: string;
  token_prefix: string;
}

export type ListApiKeyResponse = ApiKey[];

export interface CreateApiKey {
  name?: string;
}

export interface CreateApiKeyResponse {
  id: string;
  name: string;
  token: string;
}

export type DeleteApiKeyResponse = ApiKey;
