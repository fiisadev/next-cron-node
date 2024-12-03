interface ApiKey {
  id: string;
  name: string;
  token_prefix: string;
}

export type ListApiKeyResponse = ApiKey[];

interface CreateApiKey {
  name?: string;
}

interface CreateApiKeyResponse {
  id: string;
  name: string;
  token: string;
}

type DeleteApiKeyResponse = ApiKey;
