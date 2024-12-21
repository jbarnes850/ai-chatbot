// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
  provider: 'openai' | 'anthropic' | 'hyperbolic';
}

export const models: Array<Model> = [
  {
    id: 'gpt-4o-mini',
    label: 'GPT 4o mini',
    apiIdentifier: 'gpt-4o-mini',
    description: 'Small model for fast, lightweight tasks',
    provider: 'openai'
  },
  {
    id: 'gpt-4o',
    label: 'GPT 4o',
    apiIdentifier: 'gpt-4o',
    description: 'For complex, multi-step tasks',
    provider: 'openai'
  },
  {
    id: 'o1-2024-12-17',
    label: 'OpenAI O1',
    apiIdentifier: 'o1-2024-12-17',
    description: 'Latest OpenAI model with enhanced capabilities',
    provider: 'openai'
  },
  {
    id: 'llama-3-70b',
    label: 'Llama 3 70B',
    apiIdentifier: 'meta-llama/Llama-3.3-70B-Instruct',
    description: 'Meta\'s largest instruction-tuned model',
    provider: 'hyperbolic'
  },
  {
    id: 'qwen-32b',
    label: 'Qwen 32B',
    apiIdentifier: 'Qwen/QwQ-32B-Preview',
    description: 'Advanced multilingual model with strong coding capabilities',
    provider: 'hyperbolic'
  },
  {
    id: 'claude-3-sonnet',
    label: 'Claude 3 Sonnet',
    apiIdentifier: 'claude-3-5-sonnet-20241022',
    description: 'Latest Claude model with enhanced reasoning',
    provider: 'anthropic'
  }
] as const;

export const DEFAULT_MODEL_NAME: string = 'gpt-4o';
