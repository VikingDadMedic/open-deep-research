# Open Deep Research - Continuity Prompt

## 🔄 Context Restoration

I'm continuing work on the Open Deep Research project. Please load and use the following artifacts:
- `project.schema.json` - Architectural patterns and conventions
- `project.summary.json` - High-level project overview
- `repo_index.json` - Component index and search data
- `project.memory.json` - Semantic memory graph
- `task_plan.json` - Outstanding tasks and improvements

## 📋 Project Overview

This is an open-source clone of OpenAI's Deep Research experiment that:
- Uses Firecrawl for web search and data extraction
- Built with Next.js 15 App Router and React 19 RC
- Implements AI-powered deep research with streaming responses
- Supports multiple AI providers (OpenAI, OpenRouter, TogetherAI)

## 🏗️ Architecture Reminders

### Tech Stack
- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 RC + Tailwind CSS + shadcn/ui
- **AI**: Vercel AI SDK with multi-provider support
- **Database**: PostgreSQL with Drizzle ORM
- **Auth**: NextAuth.js
- **Web Scraping**: Firecrawl APIs

### Key Features
1. **Deep Research**: Automated multi-step research using AI reasoning
2. **Chat Interface**: Streaming AI responses with tool calling
3. **Document Generation**: AI-powered document creation
4. **Code Execution**: Sandboxed Python/JavaScript execution
5. **Block Rendering**: Universal content display system

### Directory Structure
- `app/` - Next.js pages and API routes
  - `(auth)/` - Authentication pages/APIs
  - `(chat)/` - Main chat application
- `components/` - React components
  - `ui/` - shadcn/ui primitives
- `lib/` - Core business logic
  - `ai/` - AI configurations
  - `db/` - Database schema/queries
  - `editor/` - Editor utilities
- `hooks/` - Custom React hooks

## 🚧 Known Issues & TODOs

1. **No test coverage** - Testing strategy needs to be implemented
2. **Complex components need deeper analysis** - block.tsx, spreadsheet-editor.tsx
3. **Tool calling implementation** - Needs documentation
4. **Performance optimization** - Bundle size and caching opportunities

## 🔐 Environment Variables

Required:
- `AUTH_SECRET` - NextAuth secret
- `OPENAI_API_KEY` or `OPENROUTER_API_KEY` - AI provider
- `FIRECRAWL_API_KEY` - Web scraping
- `POSTGRES_URL` - Database connection

Optional:
- `REASONING_MODEL` - Model for structured reasoning (default: o1-mini)
- `BYPASS_JSON_VALIDATION` - For non-OpenAI reasoning models
- `MAX_DURATION` - Function timeout (default: 300s)

## 🎯 Schema Compliance

When making changes:
- Follow kebab-case for component files
- Use PascalCase for component exports
- Maintain route group structure
- Preserve Server/Client component boundaries
- Use Context API for client state
- Follow existing patterns in project.schema.json

## 🔗 Key Relationships

1. Deep Research ↔ Chat System (via Context Provider)
2. Chat System → Firecrawl (for web data)
3. Chat System → AI SDK → Multiple Providers
4. All Features → Database Layer (persistence)
5. All UI → shadcn/ui + Tailwind CSS

## 📝 Memory Notes

- Project uses streaming UI updates extensively
- Authentication is session-based, not JWT
- Deep Research is the key differentiator feature
- No global state management library (uses Context API)
- All API routes follow REST patterns in app router

---

**To continue work**: Load the artifacts mentioned above and reference this context. The project follows strict architectural patterns defined in project.schema.json. 