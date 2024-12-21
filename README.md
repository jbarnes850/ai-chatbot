<a href="https://near.studio.ai">
  <img alt="NEAR Studio AI - Intelligent Developer Environment for the NEAR Ecosystem" src="app/(chat)/opengraph-image.png">
  <h1 align="center">NEAR AI Studio</h1>
</a>

<p align="center">
  An AI-powered Developer Environment for Building, Testing, and Learning in the NEAR Ecosystem
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#ai-capabilities"><strong>AI Capabilities</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- 🎨 Advanced Development Environment
  - Interactive Canvas UI for code editing and visualization
  - Real-time Python code execution via WebAssembly
  - Inline artifact preview for immediate feedback
  - Multi-user collaboration with chat sharing
  - Built-in user feedback collection system
  - Optimized performance with react-scan

- 🤖 AI-Powered Development
  - Smart code completion and suggestions for NEAR smart contracts
  - Natural language queries for NEAR documentation and codebase
  - Automated testing suggestions and code analysis
  - Interactive debugging assistance

- 🛠 Development Tools
  - Built-in NEAR contract testing environment
  - Real-time contract deployment simulation
  - Gas fee estimation and optimization suggestions
  - Integration with NEAR Explorer for transaction monitoring

- 📚 Learning & Documentation
  - Interactive tutorials for NEAR development
  - Context-aware documentation access
  - Best practices and pattern suggestions
  - Community-contributed examples and templates

- 💻 Technical Foundation
  - [Next.js](https://nextjs.org) App Router with React Server Components
  - [AI SDK](https://sdk.vercel.ai/docs) for advanced language model integration
  - [shadcn/ui](https://ui.shadcn.com) with Tailwind CSS for modern UI
  - Secure authentication via [NextAuth.js](https://github.com/nextauthjs/next-auth)

- 🔄 Data Persistence
  - [Vercel Postgres](https://vercel.com/storage/postgres) for session management
  - [Vercel Blob](https://vercel.com/storage/blob) for storing contract artifacts
  - Seamless integration with NEAR Protocol

## AI Capabilities

NEAR Studio AI leverages multiple AI models optimized for different aspects of NEAR development:

- **Code Generation**: Specialized models for NEAR smart contract development
- **Documentation Assistant**: Quick access to NEAR documentation and best practices
- **Testing Assistant**: Automated test case generation and security analysis
- **Optimization Helper**: Suggestions for gas optimization and performance improvements

## Key Features in Detail

### Interactive Canvas UI

- Split-view interface with code editor and preview
- Real-time syntax highlighting and error detection
- Customizable layout for different workflows

### Python Execution Environment

- Browser-based Python runtime via WebAssembly
- Real-time code execution and output
- Support for common data science and blockchain libraries

### Collaboration Tools

- Shareable chat sessions for team collaboration
- Persistent chat history and code snippets
- Real-time feedback and commenting system

### Performance Optimizations

- Enhanced React performance via react-scan
- Optimized asset loading and caching
- Responsive design for all device sizes

## Deploy Your Own

Deploy your own instance of NEAR Studio AI to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fnear-studio-ai&env=AUTH_SECRET,OPENAI_API_KEY,NEAR_NETWORK&envDescription=Configure+your+NEAR+Studio+AI+environment&envLink=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fnear-studio-ai%2Fblob%2Fmain%2F.env.example)

## Running locally

You'll need to configure environment variables as defined in `.env.example`. This includes NEAR network configuration and AI model API keys.

1. Install dependencies:

```bash
pnpm install
```

2. Set up your environment:

```bash
# Install Vercel CLI
npm i -g vercel

# Link your local instance
vercel link

# Pull environment variables
vercel env pull
```

3. Start the development server:

```bash
pnpm dev
```

Your NEAR Studio AI instance will be running at [localhost:3000](http://localhost:3000/).

## Contributing

We welcome contributions from the NEAR community! Whether it's adding new features, improving documentation, or reporting bugs, please feel free to make a pull request or open an issue.

## License

Licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for more information.

## Model Providers

NEAR Studio AI supports multiple state-of-the-art language models:

### OpenAI Models
- GPT-4o - Default model for complex tasks
- GPT-4o mini - Lightweight model for quick tasks
- O1 (2024) - Latest OpenAI model with enhanced capabilities

### Hyperbolic Models
- Llama 3 70B - Meta's largest instruction-tuned model
- Qwen 32B - Advanced multilingual model with strong coding capabilities

### Anthropic Models
- Claude 3 Sonnet - Latest Claude model with enhanced reasoning

You can easily switch between these models in the chat interface to find the best fit for your development needs.
