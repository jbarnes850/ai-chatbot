import { openai } from '@ai-sdk/openai';
import { anthropic } from '@ai-sdk/anthropic';
import { hyperbolic } from '@ai-sdk/hyperbolic';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';
import { Model } from './models';

const providers = {
  openai: openai,
  anthropic: anthropic,
  hyperbolic: hyperbolic
};

export const customModel = (model: Model) => {
  const provider = providers[model.provider];
  
  if (!provider) {
    throw new Error(`Unknown provider: ${model.provider}`);
  }

  return wrapLanguageModel({
    model: provider(model.apiIdentifier),
    middleware: customMiddleware,
  });
};
