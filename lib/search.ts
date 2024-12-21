import { tavily } from '@tavily/core';

const tavilyClient = tavily({ 
  apiKey: process.env.TAVILY_API_KEY || ''
});

export async function searchWeb(query: string) {
  try {
    const response = await tavilyClient.search(query, {
      search_depth: "advanced",
      include_domains: ["near.org", "docs.near.org", "github.com", "wiki.near.org"],
      max_results: 5
    });
    return response;
  } catch (error) {
    console.error('Tavily search error:', error);
    return null;
  }
}

export async function getContextForQuery(query: string) {
  try {
    const context = await tavilyClient.searchContext(query);
    return context;
  } catch (error) {
    console.error('Tavily context error:', error);
    return null;
  }
} 