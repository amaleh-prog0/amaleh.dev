export type Capability =
  | 'rag'
  | 'vector-search'
  | 'llm'
  | 'structured-outputs'
  | 'multi-agent'
  | 'tool-calling'
  | 'github'
  | 'apis'
  | 'short-term-memory'
  | 'long-term-memory'
  | 'evaluation'
  | 'retry-logic'
  | 'human-approval';

export type ComponentType = 'frontend' | 'api' | 'db' | 'cache' | 'ai' | 'infra' | 'observability';

export interface Component {
  id: string;
  label: string;
  type: ComponentType;
  description: string;
}

export interface Edge {
  from: string;
  to: string;
  label?: string;
}

export interface Decision {
  capability: Capability;
  component: string;
  reason: string;
  alternative: string;
  whyNotAlternative: string;
}

export const COMPONENT_LIBRARY: Record<string, Component> = {
  'frontend': { id: 'frontend', label: 'Next.js', type: 'frontend', description: 'Modern React framework for the user interface.' },
  'api': { id: 'api', label: 'FastAPI', type: 'api', description: 'High-performance Python API for AI orchestration.' },
  'llm': { id: 'llm', label: 'LLM', type: 'ai', description: 'Large Language Model for core intelligence.' },
  'vector-db': { id: 'vector-db', label: 'Vector DB', type: 'db', description: 'Semantic storage for high-dimensional embeddings.' },
  'postgres': { id: 'postgres', label: 'PostgreSQL', type: 'db', description: 'Relational database for structured application data.' },
  'redis': { id: 'redis', label: 'Redis', type: 'cache', description: 'In-memory data store for caching and state.' },
  'agent-orchestrator': { id: 'agent-orchestrator', label: 'Agent Orchestrator', type: 'ai', description: 'Manages multi-agent workflows and reasoning.' },
  'tool-executor': { id: 'tool-executor', label: 'Tool Executor', type: 'infra', description: 'Safely executes external API calls and scripts.' },
  'github-connector': { id: 'github-connector', label: 'GitHub API', type: 'infra', description: 'Interfaces with GitHub for codebase access.' },
  'eval-framework': { id: 'eval-framework', label: 'Eval Framework', type: 'observability', description: 'Measures model accuracy and retrieval quality.' },
  'queue': { id: 'queue', label: 'Task Queue', type: 'infra', description: 'Handles asynchronous background processing.' },
  'admin-panel': { id: 'admin-panel', label: 'Admin Dashboard', type: 'frontend', description: 'Human-in-the-loop approval interface.' },
  'lb': { id: 'lb', label: 'Load Balancer', type: 'infra', description: 'Distributes traffic across multiple API instances.' },
  'cdn': { id: 'cdn', label: 'CDN', type: 'infra', description: 'Edge caching for static assets and API responses.' },
  'waf': { id: 'waf', label: 'WAF', type: 'infra', description: 'Web Application Firewall for security.' },
  'read-replica': { id: 'read-replica', label: 'DB Replica', type: 'db', description: 'Read-only database copies for scalability.' },
  'monitoring': { id: 'monitoring', label: 'Monitoring', type: 'observability', description: 'Prometheus/Grafana for system health.' },
};

export const CAPABILITY_MAP: Record<Capability, { components: string[]; edges: Edge[]; decision: Decision }> = {
  'rag': {
    components: ['vector-db', 'llm'],
    edges: [{ from: 'api', to: 'vector-db' }, { from: 'vector-db', to: 'llm' }],
    decision: {
      capability: 'rag',
      component: 'Vector DB',
      reason: 'Grounds responses in actual data instead of relying on model knowledge.',
      alternative: 'Fine-tuning',
      whyNotAlternative: 'Fine-tuning changes model behavior, but RAG is required for retrieving dynamic, changing information.'
    }
  },
  'vector-search': {
    components: ['vector-db'],
    edges: [{ from: 'api', to: 'vector-db' }],
    decision: {
      capability: 'vector-search',
      component: 'Vector DB',
      reason: 'Enables semantic search that understands intent, not just keywords.',
      alternative: 'SQL LIKE search',
      whyNotAlternative: 'Keyword search fails to capture meaning, making it useless for complex technical queries.'
    }
  },
  'llm': {
    components: ['llm'],
    edges: [{ from: 'api', to: 'llm' }],
    decision: {
      capability: 'llm',
      component: 'LLM',
      reason: 'Provides the core reasoning and natural language capabilities.',
      alternative: 'Rule-based systems',
      whyNotAlternative: 'Hard-coded rules cannot handle the ambiguity of natural language at scale.'
    }
  },
  'structured-outputs': {
    components: ['llm'],
    edges: [],
    decision: {
      capability: 'structured-outputs',
      component: 'LLM (Schema)',
      reason: 'Ensures AI responses are valid JSON for programmatic consumption.',
      alternative: 'Regex parsing',
      whyNotAlternative: 'Regex is fragile and breaks as soon as the LLM changes its phrasing.'
    }
  },
  'multi-agent': {
    components: ['agent-orchestrator', 'llm'],
    edges: [{ from: 'api', to: 'agent-orchestrator' }, { from: 'agent-orchestrator', to: 'llm' }],
    decision: {
      capability: 'multi-agent',
      component: 'Agent Orchestrator',
      reason: 'Breaks complex tasks into specialized roles for higher reliability.',
      alternative: 'Single Prompt',
      whyNotAlternative: 'Long prompts lead to "lost in the middle" and lower quality reasoning.'
    }
  },
  'tool-calling': {
    components: ['tool-executor'],
    edges: [{ from: 'api', to: 'tool-executor' }],
    decision: {
      capability: 'tool-calling',
      component: 'Tool Executor',
      reason: 'Allows the AI to interact with the real world securely.',
      alternative: 'Direct API calls',
      whyNotAlternative: 'Direct calls from the LLM are insecure and lack validation.'
    }
  },
  'github': {
    components: ['github-connector'],
    edges: [{ from: 'tool-executor', to: 'github-connector' }],
    decision: {
      capability: 'github',
      component: 'GitHub API',
      reason: 'Direct access to the codebase for context and updates.',
      alternative: 'Manual uploads',
      whyNotAlternative: 'Manual uploads are slow and quickly become outdated.'
    }
  },
  'apis': {
    components: ['tool-executor'],
    edges: [{ from: 'api', to: 'tool-executor' }],
    decision: {
      capability: 'apis',
      component: 'API Gateway',
      reason: 'Centralizes authentication and rate limiting for external services.',
      alternative: 'Direct integration',
      whyNotAlternative: 'Direct integration creates tight coupling and security holes.'
    }
  },
  'short-term-memory': {
    components: ['redis'],
    edges: [{ from: 'api', to: 'redis' }],
    decision: {
      capability: 'short-term-memory',
      component: 'Redis',
      reason: 'Provides sub-millisecond access to session context.',
      alternative: 'DB Storage',
      whyNotAlternative: 'Querying a relational DB for every token is too slow for real-time chat.'
    }
  },
  'long-term-memory': {
    components: ['postgres'],
    edges: [{ from: 'api', to: 'postgres' }],
    decision: {
      capability: 'long-term-memory',
      component: 'PostgreSQL',
      reason: 'Durable storage for user profiles and historical data.',
      alternative: 'NoSQL',
      whyNotAlternative: 'User data is strongly relational; NoSQL would lead to data inconsistency.'
    }
  },
  'evaluation': {
    components: ['eval-framework'],
    edges: [{ from: 'api', to: 'eval-framework' }],
    decision: {
      capability: 'evaluation',
      component: 'Eval Framework',
      reason: 'Provides quantitative metrics for model performance.',
      alternative: 'Manual Review',
      whyNotAlternative: 'Manual review doesn\'t scale and is prone to human bias.'
    }
  },
  'retry-logic': {
    components: ['queue'],
    edges: [{ from: 'api', to: 'queue' }],
    decision: {
      capability: 'retry-logic',
      component: 'Task Queue',
      reason: 'Ensures reliability for unstable external AI APIs.',
      alternative: 'Immediate Retry',
      whyNotAlternative: 'Immediate retries can lead to cascading failures (thundering herd).'
    }
  },
  'human-approval': {
    components: ['admin-panel'],
    edges: [{ from: 'tool-executor', to: 'admin-panel' }],
    decision: {
      capability: 'human-approval',
      component: 'Admin Panel',
      reason: 'Prevents AI from taking critical actions without oversight.',
      alternative: 'Confidence Thresholds',
      whyNotAlternative: 'Confidence scores are often wrong; human eyes are the only true gold standard.'
    }
  },
};

export const PRODUCTION_UPGRADES: { components: string[]; edges: Edge[] } = {
  components: ['lb', 'cdn', 'waf', 'read-replica', 'monitoring'],
  edges: [
    { from: 'cdn', to: 'lb' },
    { from: 'lb', to: 'api' },
    { from: 'waf', to: 'lb' },
    { from: 'postgres', to: 'read-replica' },
    { from: 'api', to: 'monitoring' },
    { from: 'llm', to: 'monitoring' },
  ],
};
