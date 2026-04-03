const projects = [
    {
        id: 'chintu',
        title: 'Chintu AI',
        tag: 'Autonomous AI Co-founder',
        desc: 'Local-first autonomous assistant for Windows with policy-gated execution, reusable skills, and multi-model orchestration. Features a Flutter-based chat-first UI and native Win32/macOS integrations.',
        tech: ['Python', 'Flutter', 'LLMs', 'Automation'],
        img: 'assets/chintu_ai.png',
        github: 'https://github.com/Sasidhar-7302/Chintu_AI.git',
        detailedDesc: 'A fully autonomous "God Mode" AI orchestrator built to manage a professional digital footprint. Transitioned from a legacy regex-based router to a robust Swarm-based multi-agent architecture with integrated Critic Agents for self-correction.',
        keyFeatures: [
            { title: 'Swarm Intelligence', desc: 'Coordinating multiple specialized agents for research, coding, and DevOps.' },
            { title: 'Hardware Optimized', desc: 'Custom resource management for NVIDIA RTX 3060 orchestration.' },
            { title: 'Human-in-the-Loop', desc: 'Secure proxy for critical filesystem and financial operations.' }
        ],
        diagram: `graph TD
    User([User]) <--> UI[Flutter Desktop UI]
    UI <--> WS{WebSocket Bridge}
    WS <--> Core[Python Core Runtime]
    Core <--> Swarm[LLM Agent Swarm]
    Core <--> Memory[(ChromaDB Memory)]
    Core --> Policy{Policy Gate}
    Policy -->|Approved| Exec[Native Skill Execution]
    Policy -->|Denied| Audit[Audit Log]
    Exec <--> Win32[Win32/macOS API]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A local-first autonomous AI co-founder for Windows orchestrating native skills and web automation with HIL safety.
- **Assumptions**: Local NVIDIA RTX 3060 for latency targets; Windows 10/11 environment; Intermittent internet for cloud-fallback.

### 1) Functional Requirements
- **Core**: NL command processing (Chat/Voice); Multi-step task planning; Policy-gated skill execution (Win32/Files); Browser automation.
- **Non-Core**: Multi-channel sync (Telegram); Self-learning style mirroring; Real-time hardware telemetry.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: High-frequency event throughput (JSONL streams); Distributed "Skill-as-a-Service" registry.
- **Latency**: <150ms for UI command ACK. **P95 latency** < 1.5s for local LLM inference — critical because GC pauses and VRAM contention cause unpredictable spikes. 500ms fallback under heavy load.
- **Durability**: No message/event lost on connection loss via persistent JSONL append.
- **CAP**: **AP** for UI telemetry (eventual consistency); **CP** for Policy evaluation (strict consistency required for safety).

### 3) Core Entities
- **User / DeviceSession**: Unique identifiers for security and multi-device state tracking.
- **Run / Step**: The atomic task unit and its execution lifecycle.
- **Policy**: Rules for risk classification (Low/Med/High).
- **Data Stores**: **SQLite** (Structured metadata), **ChromaDB** (Semantic memory), **JSONL** (Append-only durability).

### 4) API Design
- **Protocols**: **WebSockets** for real-time bi-directional state sync (less expensive persistent connection); **REST** for historical lookups; **gRPC** for internal service-to-service calls.
- **Auth**: OAuth/JWT for channel authentication and local security tokens.

### 5) High-Level Design (Functional)
- **Flow**: User Command → CommandHandler → PolicyEngine → ActionDispatcher → LLMSwarm → SkillExec → EvidenceReceipt.
- **Offline**: Local fallback for Whisper/Ollama ensures 90% functionality without internet.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Local Hub)
graph TD
    UI[Flutter UI] <--> WS[WS Service]
    WS <--> Core[Python Core]
    Core <--> localLLM[Ollama/Llama]
    Core <--> Skills[Win32/Automation]

#### B) After Scaling (Enterprise Fleet)
graph TD
    Clients[[User Fleet]] --> LB[L7 Load Balancer]
    LB --> Gateway[API Gateway]
    Gateway <--> Discovery[Service Registry]
    Gateway <--> Relay[Event Relay - Redis]
    Relay <--> Worker[[Agent Workers]]
    Worker <--> S3[(Policy Store)]
    Worker <--> Kafka[(Telemetry Stream)]
`
    },
    {
        id: 'gi-scribe',
        title: 'GI Scribe',
        tag: 'Clinical Intelligence Engine',
        desc: 'Professional-grade clinical transcription and summarization suite for Gastroenterology. 100% offline inference using Whisper Large-v3 and Llama 3.1, ensures zero-cloud HIPAA compliance.',
        tech: ['Next.js', 'PyTorch', 'Whisper', 'CUDA'],
        img: 'assets/gi_scribe.png',
        github: 'https://github.com/Sasidhar-7302/GI_Scribe.git',
        detailedDesc: 'High-fidelity clinical transcription suite optimized for gastroenterologists. Specializes in multi-modal symptom extraction and automated SOAP note generation with strict adherence to medical ontologies.',
        keyFeatures: [
            { title: 'Symptom Extraction', desc: 'LLM-driven identification of GI-specific and systemic patient concerns.' },
            { title: 'EHR-Ready', desc: 'Generates professional, structured HPI and Assessment sections.' },
            { title: 'Physician-First', desc: 'Focus on high-accuracy transcription ($<$2% WER) and cognitive load reduction.' }
        ],
        diagram: `graph LR
    Audio((Ambient Audio)) --> Whisper[Whisper Large-v3]
    Whisper --> Trans[Refined Transcript]
    Trans --> Synthesis[Syndromic Synthesis Engine]
    Synthesis --> Llama[Llama 3.1 70B]
    Llama --> EHR[EHR-Ready Clinical Note]
    EHR --> Approval[Physician Approval]
    Approval --> Feedback[Self-Learning Style Loop]
    Feedback --> Synthesis`,
        systemDesign: `
### 0) Quick Framing
- **What**: An air-gapped, AI-powered ambient clinical scribe fine-tuned for high-accuracy ($<$2% WER) gastroenterology documentation.
- **Assumptions**: Local NVIDIA RTX 3060 for offline inference; Zero-cloud data flow for HIPAA; Multi-tenant iPad-to-Hub connectivity.

### 1) Functional Requirements
- **Core**: Real-time ambient audio capture; Clinical-grade transcription (Whisper L-v3); Specialized Phonetic Audit (CAC) for GI terms; Two-pass SOAP note synthesis.
- **Non-Core**: Self-learning style alignment from physician edits; ICD-10/CPT code suggestions; Longitudinal history correlation.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Scaling concurrent exam room sessions; Local inference queuing.
- **Latency**: <100ms audio chunk ACK (surgical-grade responsiveness). **P95 latency** < 3.0s for end-to-end note synthesis — VRAM-swapping during concurrent Whisper + Llama inference is the primary tail risk.
- **Durability**: Zero-loss recording via atomic local write buffers. "Safe to delete" after EHR upload or 7-day retention period.
- **Sync**: **DeviceSession** tracking per exam room; 95% sync latency < 300ms for live feedback.
- **CAP**: **CP** for Record Finalization (strict consistency); **AP** for Live Transcription stream (availability over minor text jitter).

### 3) Core Entities
- **Encounter**: The master session object tracking patient/doctor context.
- **Transcript Segment**: Timestamped audio-text pairs with 'Raw' and 'CAC-Corrected' states.
- **ClinicalNote**: Specialized medical schema (HPI, ROS, PE, A/P).
- **Data Stores**: **SQLite** (Relational metadata/feedback), **Filesystem** (High-speed audio-blob storage with shredding support).

### 4) API Design
- **Protocols**: **WebSockets** for real-time binary audio streaming (persistent and lower overhead); **REST** for session management; **gRPC** for internal model service routing.
- **Auth**: JWT for local station-to-hub security.

### 5) High-Level Design (Functional)
- **Flow**: Audio Stream → Whisper (LoRA) → Phonetic Auditor (CAC) → Two-Pass Summarizer (Extract+Synthesis) → Self-Learning Loop → EHR Dispatch.
- **Privacy**: No external API calls; all weights resident in local VRAM.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Clinical Station)
graph TD
    App[iPad Client] <--> Hub[Desktop Scribe Hub]
    Hub <--> Whisper[Medical Whisper]
    Hub <--> Llama[Llama 3.1 CAC]
    Hub <--> DB[(SQLite)]

#### B) After Scaling (Clinic-Wide Cluster)
graph TD
    Rooms[[Multi-Room Clients]] --> LB[L7 Medical Proxy]
    LB --> ScribePool[[Distributed Inference Nodes]]
    ScribePool <--> Cache[Redis Session State]
    ScribePool <--> Shared[(Encrypted Storage)]
    ScribePool --> EHR[Integration Gateway]

### 7) Maintenance / Ops
- **Health Checks**: Automated model checksum verification (SHA-256) on boot to prevent bit-rot in weights.
- **Cleanup**: StorageManager implements a rolling 7-day TTL with multi-pass file shredding (HIPAA compliant).
- **Observability**: Prometheus/Grafana dashboard for VRAM headroom and inference latency telemetry.

### 8) Additional Requirements
- **Precision**: Pipeline standardized on **BFloat16** (Ampere-native) to eliminate matmul rounding errors in deep LoRA induction.
- **LoRA**: Rank-32 Low-Rank Adaptation targets all attention matrices (Q, K, V, O) for precise GI terminology capture without catastrophic forgetting.
`
    },
    {
        id: 'ghost-writer',
        title: 'Ghost Writer',
        tag: 'Desktop Interview Copilot',
        desc: 'Stealth-oriented meeting assistant with local transcription and screenshot-aware LLM answers. Uses native Rust for audio loopback and Electron for a performant overlay UI.',
        tech: ['Electron', 'React', 'Rust', 'Ollama'],
        img: 'assets/ghost_writer.png',
        github: 'https://github.com/chintuai2026/Ghost_Writer.git',
        detailedDesc: 'Stealth-oriented desktop copilot for real-time meeting assistance. Captures dual-channel audio (microphone + system loopback) via native Rust bindings, transcribes locally with Whisper.cpp, and provides screenshot-aware AI answers through a low-profile Electron overlay.',
        keyFeatures: [
            { title: 'Dual-Audio Capture', desc: 'Native Rust loopback captures system audio alongside microphone input for full meeting context.' },
            { title: 'Stealth Overlay', desc: 'Frameless, always-on-top Electron window with hotkey toggle for discreet operation.' },
            { title: 'RAG-Grounded Answers', desc: 'SQLite-backed semantic search over past meetings for contextually accurate LLM responses.' }
        ],
        diagram: `graph TD
    subgraph OS_Layer [OS Integration]
        Mic[Microphone]
        Loopback[System Audio Rust]
        Screen[Screen Capture]
    end
    subgraph Processing [Stealth Engine]
        Whisper[Local Whisper.cpp]
        Vision[Ollama Vision]
    end
    Mic & Loopback --> Whisper
    Screen --> Vision
    Whisper & Vision --> Orchestrator[LLM Orchestrator]
    Orchestrator <--> RAG[(SQLite/MiniLM RAG)]
    Orchestrator --> Overlay[Stealth Electron Overlay]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A stealth-oriented desktop copilot providing real-time meeting transcription and screenshot-aware AI assistance via a native Rust/Electron overlay.
- **Assumptions**: Desktop environment (Win/mac86) with local audio access; User requires low-profile operation (stealth); Local RAG for private meeting search.

### 1) Functional Requirements
- **Core**: Dual-audio capture (Mic + System Loopback); Real-time Whisper STT; Contextual Vision (Screenshot attach); Stealth Overlay UI.
- **Non-Core**: Meeting recap auto-generation; RAG-backed grounding; Custom behavioral/technical prompt templates.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Scales with local meeting history (SQLite FTS5); Distributed prompt template sync.
- **Latency**: <100ms overlay toggle (stealth demands instant feedback). **P95 latency** < 2.0s for LLM answer generation — audio buffer flush and GPU cold-starts are the dominant tail contributors.
- **Throughput**: Dual-channel PCM stream processing; High-speed local embedding generation.
- **Durability**: Persistent SQLite meeting storage; "Safe to delete" after 30-day auto-purge or manual archival.
- **Multi-tenant**: **DeviceSession** tracking for local settings and history across hardware; Idempotent deliver of RAG results.
- **CAP**: **CP** for meeting records (consistency is paramount); **AP** for real-time transcription feedback (availability over perfect historical alignment).

### 3) Core Entities
- **MeetingSession**: The lifecycle container for a live transcription event.
- **ContextSnapshot**: The bundled state (Transcript + Screenshot + RAG) sent to the LLM.
- **CredentialStore**: AES-encrypted vault for API keys.
- **Data Stores**: **SQLite** (Meetings & Embeddings), **Encrypted local file** (Credentials), **Local FS** (Audio artifacts).

### 4) API Design
- **Protocols**: **Electron IPC** with context isolation for secure internal state passing; **REST/WS** for External LLM/STT providers; **Polling** for audio levels.
- **Auth**: Encrypted local token vault for multi-provider API keys.

### 5) High-Level Design (Functional)
- **Flow**: Mic/Loopback (Rust) → whisper.cpp (Local) → ContextBuilder (TS) → Intelligence Routing (Ollama/Cloud) → Stealth UI (React).
- **Stealth**: Rust-based loopback avoids detection by standard communication apps.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Desktop Monolith)
graph TD
    User([User]) --> Overlay[Electron UI]
    Overlay <--> Main[Electron Main]
    Main <--> Rust[Rust Loopback]
    Main <--> Whisper[Local Whisper.cpp]
    Main <--> RAG[(SQLite RAG)]

#### B) After Scaling (Enterprise Fleet)
graph TD
    Devices[[User Fleet]] --> Gateway[Deployment Manager]
    Gateway <--> PromptService[S3 Template Store]
    Gateway <--> Analytics[Activity Service]
    Devices <--> CloudLLM[LLM Relay Hub]
    CloudLLM <--> Vault[Secure Key Store]

### 7) Maintenance / Ops
- **Installs**: runtime-installer.js handles automated download of ai-runtime.zip from GitHub Releases based on app version.
- **Logging**: Configurable LOG_LEVEL (info/debug) for field-troubleshooting audio driver collisions.

### 8) Additional Requirements
- **Multi-platform**: Native Rust bindings (Neon/NAPI-RS) cross-built for Windows x64 and macOS arm64.
- **Encryption**: AES-GCM for all local-stored credentials.
`
    },
    {
        id: 'smarthire',
        title: 'SmartHire',
        tag: 'AI Recruitment Platform',
        desc: 'End-to-end recruitment suite that scrapes jobs from multiple APIs and optimizes resumes using AI. Features an automated ATS mapping system and daily email referral service.',
        tech: ['Flask', 'Scrapy', 'NLP', 'PostgreSQL'],
        img: 'assets/smarthire.png',
        github: 'https://github.com/Sasidhar-7302/SmartHire.git',
        detailedDesc: 'Enterprise recruitment platform focusing on "Technical Signal" over "Resume Noise". Implements blind-grading and automated skill assessments to eliminate hiring bias.',
        keyFeatures: [
            { title: 'Bias Mitigation', desc: 'Anonymized candidate profiles and purely performance-based ranking.' },
            { title: 'Skill Mapping', desc: 'Deep matching between project repositories and job requirements.' },
            { title: 'Engine Scaling', desc: 'System designed to handle 50k+ daily candidate sessions via L7 load balancing.' }
        ],
        diagram: `graph TD
    Sources[[17+ Job APIs & ATS Feeds]] --> Scraper[Multi-API Scraper]
    Scraper --> Filter[Junior/Entry-Level Filter]
    Filter --> Matcher[Skill Gap Analysis Engine]
    Resume[User Resume] --> Matcher
    Matcher --> DB[(PostgreSQL)]
    DB --> Dashboard[Flask Web UI]
    DB --> Alerts[Daily Email Service]
    Dashboard --> Tracker[Application Management]`,
        systemDesign: `
### 0) Quick Framing
- **What**: An intelligent job search and application orchestration platform that automates high-volume discovery, profile matching, and resume tailoring for early-career engineers.
- **Assumptions**: RapidAPI integration (JSearch/LinkedIn); Local match caching; 2-hour refresh cycles via background worker.

### 1) Functional Requirements
- **Core**: Multi-source aggregation (17+ APIs + 140+ ATS feeds); Semantic Match Scoring; Deterministic Experience Filtering (Jr./Entry-level focus); Automated Resume Tailoring.
- **Non-Core**: Daily email "Top Match" alerts; Referral network mapping (27+ companies); Applicant tracking funnel (Applied -> Offer).

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: High-concurrency matching for 100k+ users; Partitioned scraper fleet.
- **Latency**: <200ms dashboard stat hydration. **P95 latency** < 3.0s for full AI match scoring across 100+ raw postings — the tail is dominated by external API rate-limits and PostgreSQL write-lock contention during batch ingestion.
- **Throughput**: Ingestion of 5,000+ new job postings per hour across distributed providers.
- **Durability**: Zero-loss application funnel tracking. "Safe to delete" job data after 60-day expiry or when status is 'archived'.
- **CAP**: **CP** for Application state (consistency is essential for legal/tracking); **AP** for the global job feed (availability over cross-region parity).

### 3) Core Entities
- **UserProfile**: Canonical candidate data + resume embeddings.
- **JobPosting**: Unified multi-source schema with ATS-mapping metadata.
- **MatchResult**: Join entity tracking scores and skill-gap analysis.
- **Application**: The state-machine tracking the candidate's journey (id, status, timeline).
- **Data Stores**: **PostgreSQL** (Scaled relational persistence), **Redis** (Caching hot scraper results & counts), **S3** (Tailored PDF artifacts).

### 4) API Design
- **Protocols**: **RESTful** endpoints for candidate experience; **WebSockets** for real-time scrape progress updates; **gRPC** for internal Matching $\leftrightarrow$ Scraper coordination.
- **Auth**: OAuth 2.0 / JWT for secure multi-platform access.

### 5) High-Level Design (Functional)
- **Flow**: Background Scraper (APScheduler) → API Aggregator → Experience Filter → Match Engine (NLP) → Dashboard Refresh → Daily Email Alert.
- **Intelligence**: Skill-gap parser identifies "Missing Keywords" to assist in profile optimization.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Monolithic Hub)
graph TD
    UI[Flask Dashboard] <--> App[App Logic]
    App <--> DB[(SQLite)]
    App <--> AIService[Matching Service]
    App <--> Scrapers[[Multi-API Scrapers]]

#### B) After Scaling (Micro-Service Cluster)
graph TD
    Client[[Mobile/Web]] --> Gateway[API Gateway]
    Gateway --> ScrapeService[Scraper Cluster]
    Gateway --> MatchSvc[Inference Engine]
    Gateway --> UserSvc[Service Registry]
    ScrapeService --> Kafka[(Job Event Stream)]
    Kafka --> MatchSvc
    MatchSvc --> DB[(Sharded RDS)]

### 7) Maintenance / Ops
- **Hygiene**: clean_experience_jobs.py runs as a daily cron to purge non-entry-level hallucinations.
- **Observability**: Structured logging for API quota tracking and provider failure rates.

### 8) Additional Requirements
- **F1-OPT Focus**: Automated exclusion logic for "Citizenship Required" markings.
- **Multi-API Fallback**: Dynamic routing to alternate job boards if primary providers (LinkedIn/Indeed) fail.
`
    },
    {
        id: 'govbid',
        title: 'GoBid',
        tag: 'Federal Compliance Suite',
        desc: 'AI-assisted proposal tool for U.S. Government solicitations. Extracts verbatim obligations from PDFs and generates compliance matrices for large-scale federal bids.',
        tech: ['Next.js', 'Prisma', 'AI', 'PDF-Parsing'],
        img: 'assets/govbid.png',
        github: 'https://github.com/Sasidhar-7302/GoBid.git',
        detailedDesc: 'Competitive intelligence platform for government procurement. Scans thousands of municipal and federal bidding portals to identify high-probability wins for contracting firms.',
        keyFeatures: [
            { title: 'Tender Analysis', desc: 'Automated extraction of budget caps, deadlines, and technical requirements.' },
            { title: 'Predictive Bidding', desc: 'ML-based scoring of historical winning bids versus current proposals.' },
            { title: 'Global Ingestion', desc: 'Centralized discovery across 12+ fragmented government portals.' }
        ],
        diagram: `graph LR
    PDF[Solicitation PDF] --> Parser[PDF-Parse v2]
    Parser --> Chunker[Semantic Chunker]
    Chunker --> Extractor[Requirement Extraction]
    Extractor --> Matrix[Compliance Matrix UI]
    Matrix --> Excel[ExcelJS Export]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A mission-critical compliance orchestration platform that transforms complex federal solicitation PDFs into auditable, high-fidelity requirement matrices for proposal teams.
- **Assumptions**: Layout-aware parsing (preserves tables); Air-gapped AI validation (Ollama); Multi-tenant workspace isolation.

### 1) Functional Requirements
- **Core**: Layout-aware PDF-to-Markdown parsing; Verbatim Obligation Extraction (Shall/Must/Will); Section Anchoring & Page Mapping; Multi-tenant review workspaces (RLS-enforced); Excel Compliance Matrix Export.
- **Non-Core**: SAM.gov Notice ID metadata integration; Confidence Scoring & Red-Flagging queue; Full server-side audit trail.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Support for 1,000+ simultaneous 500-page solicitation ingestions; Horizontally scaling extraction workers.
- **Latency**: <200ms UI project navigation. **P95 latency** < 5.0s for individual requirement classification — spikes are driven by large-table PDF render-buffer overflows and AI extraction-queue cold-starts.
- **Throughput**: Processing of 10,000+ requirement candidates per hour per cluster.
- **Fault Tolerance**: Stateless workers with automatic retry logic; Fail-fast pattern for corrupted PDFs.
- **Read-heavy vs Write-heavy**: Write-heavy during initial "Parse & Extract" phase ($10k+$ inserts); Read-heavy during "Human-in-the-loop" review and matrix export.
- **Durability**: Zero-loss requirement state. "Safe to delete" 30 days after project archival or explicit deletion by the user.
- **Multi-tenant**: **DeviceSession** tracking for synchronized review states across large proposal teams (95% sync latency < 300ms; <1% inconsistency).
- **CAP**: **CP** for Requirement data (Accuracy/Consistency over Availability is mandatory for federal compliance work).

### 3) Core Entities
- **SolicitationProject**: The root container for a specific bid (id, owner_id, status).
- **Document**: Metadata for the source PDF (id, project_id, storage_path).
- **RequirementChunk**: Verbatim text fragments anchored to Section/Page (id, raw_text, page_number, section_id).
- **ComplianceMatrix**: The final review state per requirement (id, disposition, user_response).
- **Data Stores**: **PostgreSQL** (Mandatory for RLS & relational integrity), **S3** (Object storage for large PDF artifacts), **Redis** (Real-time review state sync).

### 4) API Design
- **Protocols**: **REST/GraphQL** for complex workspace CRUD; **WebSockets** for real-time extraction progress bars; **gRPC** for low-latency internal coordination between app and GPU workers.
- **Auth**: OAuth 2.0 / JWT integration with mandatory MFA for enterprise users.

### 5) High-Level Design (Functional)
- **Flow**: PDF Upload (S3) → LlamaParse (Layout-aware) → Semantic Chunker → Regex Candidate Detection → LLM Validator (Ollama) → Review Matrix → ExcelJS Export.
- **Integrity**: Each extracted row maintains a "link to source" anchor, allowing one-click verification in the PDF viewer.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Next.js Monolith)
graph TD
    UI[Next.js App Router] <--> API[API Routes]
    API <--> DB[(SQLite/Postgres)]
    API <--> Worker[Local Extraction Worker]
    Worker <--> Ollama[Ollama LLM]

#### B) After Scaling (Distributed Pipeline)
graph TD
    Client[[Proposal Team]] --> Gateway[API Gateway / LB]
    Gateway --> ProjSvc[Project Microservice]
    Gateway --> AIInference[AI Worker Fleet]
    ProjSvc --> Kafka[(Extraction Task Queue)]
    Kafka --> AIInference
    AIInference --> S3[(PDF Blob Storage)]
    AIInference --> DB[(Multi-AZ PostgreSQL)]

### 7) Maintenance / Ops
- **Hygiene**: Weekly "Red Flag" audit of low-confidence extractions to refine deterministic regex rules.
- **Observability**: Metrics for extraction precision; Logs for PDF parsing "unsupported layout" errors.

### 8) Additional Requirements
- **Encryption**: AES-256 for all at-rest solicitation storage.
- **Federal Standards**: Comprehensive audit logs for NIST/HIPAA compliance equivalence.
`
    },
    {
        id: 'claims-agent',
        title: 'Claims Agent',
        tag: 'Enterprise RAG Agent',
        desc: 'Insurance intelligence platform utilizing Retrieval-Augmented Generation (RAG) to process complex claims documentation and provide data-grounded policy insights.',
        tech: ['Streamlit', 'LangChain', 'VectorDB', 'Python'],
        img: 'assets/claims_agent.png',
        github: 'https://github.com/Sasidhar-7302/Claims_Agent.git',
        detailedDesc: 'Autonomous multi-agent system for insurance claim adjudication. Built on Databricks, utilizing LangGraph to model complex legal and medical validation loops.',
        keyFeatures: [
            { title: 'LangGraph Orchestration', desc: 'Stateful agentic workflows for claim verification and fraud detection.' },
            { title: 'RAG Pipelines', desc: 'Knowledge-grounded extraction from unstructured claim PDFs and evidence.' },
            { title: 'Delta Lake Ingestion', desc: 'High-throughput data ingestion with schema enforcement and validation.' }
        ],
        diagram: `graph TD
    Email[Incoming Claim Email] --> Ingest[LangGraph Ingest]
    Ingest --> Triage{Triage Node}
    Triage -->|Claim| Extract[Entity Extraction]
    Triage -->|Non-Claim| End([End])
    Extract --> Policy[Policy Matching]
    Policy <--> RAG[(ChromaDB Policy Hub)]
    RAG --> Analyze[LLM Reasoning]
    Analyze --> HIL[Human-in-the-Loop Review]
    HIL --> Send{Final Approval}
    Send --> Outbox[Gmail/SMTP Dispatch]`,
        systemDesign: `
### 0) Quick Framing
- **What**: An enterprise-grade claims orchestration engine that automates insurance/warranty triage and analysis using RAG-powered LLMs with mandatory human-in-the-loop (HITL) validation hubs.
- **Assumptions**: OAuth2-guarded Gmail/IMAP ingestion; ChromaDB for low-latency retrieval; LangGraph for stateful checkpointing.

### 1) Functional Requirements
- **Core**: Automated Ingestion (Gmail/IMAP); Triple-Triage (Claim vs. Spam); RAG-Powered Policy Matching (retrieving warranty clauses); Human-in-the-loop (HITL) dispatch gates; Auditable Review Packets (alignment evidence).
- **Non-Core**: Image OCR (Tesseract); Multi-provider LLM failover (Ollama/Groq/Gemini); PDF text extraction.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Capable of handling 50k+ claims per month per tenant; Horizontal scaling of inference workers.
- **Latency**: <300ms UI state transitions (adjuster dashboards tolerate moderate latency). **P95 latency** < 15.0s for the full automated analysis pipeline — heavy PDF-OCR processing and LLM token-stream stalls are the primary tail risks.
- **Throughput**: Parallel processing of 100+ concurrent claim threads using LangGraph's asynchronous mode.
- **Fault Tolerance**: Durable checkpointing (SQLite) allowing long-running claim cycles (up to 2 weeks) to survive server restarts.
- **Read-heavy vs Write-heavy**: Write-heavy during ingestion and analysis node updates; Read-heavy during human adjuster review.
- **Durability**: Zero-loss event delivery using idempotent outbox guards. "Safe to delete" 7 years after closure (legal standard).
- **CAP**: **CP** for Claim status and Audit logs (Consistency is mandatory for legal/regulatory integrity).

### 3) Core Entities
- **ClaimThread**: The root lifecycle container for a customer inquiry.
- **PolicyDocument**: Versioned insurance/warranty text chunked for RAG.
- **ReviewPacket**: The evidence bundle presented to the human adjuster.
- **CheckpointState**: Serialized workflow snapshots for mid-process recovery.
- **Data Stores**: **PostgreSQL** (Relational claim history), **ChromaDB** (Vector store for high-volume policies), **Redis** (Adjuster thread-locking).

### 4) API Design
- **Protocols**: **REST** for the adjuster dashboard; **Webhooks** for corporate email gateway alerts; **gRPC** for internal Graph Solver $\leftrightarrow$ OCR-PDF worker coordination.
- **Auth**: OAuth 2.0 / JWT for secure multi-tenant access.

### 5) High-Level Design (Functional)
- **Flow**: Ingest Engine (Gmail API) → Triage Node → Policy Retrieval (ChromaDB) → LLM Analysis (Reasoning Node) → Review Packet Generator → Human Review Interrupt → Outbound Dispatch Gate.
- **Data Guard**: All outbound communication is held in a "Draft" relay until an explicit human "Final Approval" signal is received.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Streamlit Monolith)
graph TD
    User([Adjuster]) --> UI[Streamlit Portal]
    UI <--> Graph[LangGraph Orchestrator]
    Graph <--> DB[(SQLite Checkpoints)]
    Graph <--> AI[Ollama/Cloud LLM]
    Graph --> Ingest[Mailbox Poller]

#### B) After Scaling (Distributed Pipeline)
graph TD
    Ingest[Auth-Guarded Ingest] --> Kafka[(Event Stream)]
    Kafka --> Graph[Service Mesh of Solver Nodes]
    Graph --> State[(Sharded Redis Checkpoints)]
    Graph --> RAG[(ChromaDB Vector Hub)]
    Graph --> Inplace[Human Review UI]
    Inplace --> Outbox[Idempotent SMTP Cluster]

### 7) Maintenance / Ops
- **Quality**: Weekly "RAG Accuracy" evaluation against labeled test sets.
- **Observability**: Reasoning path tracing (LangSmith) for audit-ready transparency.

### 8) Additional Requirements
- **Encryption**: TLS 1.3 for all inbox polling; AES-GCM-256 for at-rest claim PII.
- **Collision Detection**: Real-time thread locking to prevent adjusters from double-reviewing claims.
`
    },
    {
        id: 'gut-guru',
        title: 'Gut Guru',
        tag: 'Digestive Health AI',
        desc: 'Personalized health monitoring app focused on digestive wellness. Leverages Flutter for a smooth cross-platform experience and Firebase for real-time patient data tracking.',
        tech: ['Flutter', 'Firebase', 'HealthAI'],
        img: 'assets/gut_guru.png',
        github: 'https://github.com/Sasidhar-7302/Gut_Guru.git',
        detailedDesc: 'Advanced health correlation engine for nutritional genomics and biometric tracking. Employs rigorous statistical methods to distinguish biological signal from noise in wellness data.',
        keyFeatures: [
            { title: 'Statistical Gating', desc: 'Spearman Rho and BH-FDR correction to prevent false correlation discovery.' },
            { title: 'Real-time Biometrics', desc: 'Sub-10ms ingestion from wearable health devices (Apple Watch / Garmin).' },
            { title: 'Multi-device Sync', desc: 'Consistent state across Mobile PWA and high-resolution web dashboards.' }
        ],
        diagram: `graph TD
    User([User]) --> App[Flutter Mobile App]
    Health[HealthKit / Health Connect] --> App
    Watch[Apple Watch Connectivity] --> App
    App --> Storage[(Firebase Cloud Firestore)]
    Storage --> Pipeline[Correlation Pipeline]
    Pipeline --> Stats[Spearman & BH-FDR Correction]
    Stats --> Insights[Pattern Discovery UI]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A personalized BI-style health analytics platform that correlates digestive symptoms with high-fidelity wearable data (HRV, Sleep, Stress) using robust statistical pipelines.
- **Assumptions**: Sub-daily (intraday) health data availability (HealthKit/Health Connect); NoSQL primary store for flexible symptom schemas.

### 1) Functional Requirements
- **Core**: Multi-platform Symptom Logging (Mobile/Watch); Background Health Ingestion (Steps, Sleep, HRV); Statistical Correlation Engine (Spearman + BH-FDR correction); Intraday Window Analysis (1h to 12h pre-symptom); Data Readiness Gating.
- **Non-Core**: Synthetic Data Generator for regression testing; Automatic health-source failover; Native Apple Watch log-sync.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Support for 100k+ active users; Serverless scaling for heavy correlation workloads.
- **Latency**: <150ms for real-time symptom log confirmation. **P95 latency** < 3.0s for dashboard hydration — Spearman rank calculations over 90-day datasets and Firestore cold-starts are the dominant tail contributors.
- **Throughput**: Processing of 1,000+ health snapshots per second across the user base.
- **Fault Tolerance**: Offline-first architecture; Local write-ahead logs for disconnected symptom entries.
- **Read-heavy vs Write-heavy**: Write-heavy for raw health metric streams (HR/Steps); Read-heavy for per-user analytics and report discovery.
- **Durability**: Zero-loss log delivery using session-aware buffers. "Safe to delete" 2 years after account deactivation or upon HIPAA-style "Right to be Forgotten" requests.
- **Multi-tenant**: **DeviceSession** tracking to manage offsets between Smartphone and Watch (95% sync latency < 300ms; <0.5% state drift).
- **CAP**: **AP** for Ingestion (Availability over Consistency — logs must be captured even in poor signal); **CP** for Analytics Reports (Consistency is required to prevent misleading health insights).

### 3) Core Entities
- **SymptomEntry**: Unique event log (id, user_id, timestamp, severity, symptoms[]).
- **HealthSnapshot**: Normalized metric chunk (id, type, value, window_start, window_end).
- **CorrelationReport**: Calculated insight (id, coefficient, p-value, q-value, sample_size).
- **DeviceSession**: Persistent identifier for Phone/Watch sync management.
- **Data Stores**: **Firestore** (Schema-less symptom logs), **SQLite** (Local mobile cache), **BigQuery** (Future population-level research).

### 4) API Design
- **Protocols**: **REST/Firebase SDK** for document CRUD; **MethodChannels** for native HealthKit $\leftrightarrow$ Dart bridges; **WebSockets** for real-time Phone/Watch state parity.
- **Auth**: Firebase Auth with mandatory PII encryption layers.

### 5) High-Level Design (Functional)
- **Flow**: App/Watch Log → Normalized Snapshot → Cloud Firestore → Readiness Gate → Spearman Calculator → BH-FDR Adjuster → Insights UI.
- **Reliability**: No correlation is calculated or displayed unless the sample size $N$ meets a minimum statistical significance threshold.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Mobile + Firebase)
graph TD
    User([Symptom Log]) --> App[Flutter Mobile App]
    Watch[Apple Watch] --> App
    App --> Firebase[(Cloud Firestore)]
    Firebase --> Engine[Local Correlation Engine]
    Engine --> UI[Insights Dashboard]

#### B) After Scaling (Cloud-Native Pipeline)
graph TD
    Device[[Watch / Phone]] --> Ingest[High-Throughput Ingest Gateway]
    Ingest --> PubSub[(Google Cloud Pub/Sub)]
    PubSub --> AggSvc[Metric Aggregator]
    PubSub --> CorrSvc[Distributed Correlation Fleet]
    AggSvc --> BigQuery[(BigQuery Analytics Hub)]
    CorrSvc --> Cache[(Redis Report Cache)]
    Cache --> Client[[User Dashboard]]

### 7) Maintenance / Ops
- **Hygiene**: Monthly "Statistical Drift" audit using synthetic regression suites.
- **Observability**: Real-time monitoring of "Data Readiness" failures across the user base.

### 8) Additional Requirements
- **Encryption**: AES-256 for all stored health metrics.
- **Safety**: Hard-coded UI barriers preventing causation claims; explicit "Informational Only" disclaimers.
`
    },
    {
        id: 'geopulse',
        title: 'GeoPulse',
        tag: 'Geopolitical Dashboard',
        desc: 'High-signal event tracking for finance-curious investors. Maps world events to market directions and provides a personalized "Morning Brief" digest.',
        tech: ['Next.js', 'Prisma', 'Tailwind', 'Finance'],
        img: 'assets/gpf_dashboard.png',
        github: 'https://github.com/Sasidhar-7302/Geopolitics_Finance_Dashboard.git',
        detailedDesc: 'Geopolitical intelligence platform mapping world events to market volatility. Converts thousands of daily GDELT and RSS events into actionable financial risk assessments.',
        keyFeatures: [
            { title: 'Trust Scorer', desc: 'Multi-factored source verification and duplicate-reporting analysis.' },
            { title: 'Morning Brief', desc: 'Personalized AI-ranked reports on why an event matters to specific tickers.' },
            { title: 'Kafka Streams', desc: 'Distributed intelligence pipeline designed for high horizontal scale and sub-second ingestion.' }
        ],
        diagram: `graph TD
    Feeds[[RSS & GDELT APIs]] --> Ingest[Normalized Ingest]
    Ingest --> Enrichment[Enrichment & Trust Scorer]
    Enrichment --> Correlation[Market Correlation Engine]
    Correlation <--> DB[(Supabase Postgres)]
    DB --> Brief[Morning Brief Builder]
    DB --> Dashboard[Next.js 16 UI]
    Dashboard <--> Stripe[Stripe Billing]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A mission-critical geospatial and financial intelligence platform that converts raw global news into high-signal market-impact vectors for elite investors and analysts.
- **Assumptions**: Massive unstructured ingestion via RSS and GDELT 2.0; High-frequency LLM enrichment for sentiment and "Why it matters" summaries.

### 1) Functional Requirements
- **Core**: Unified Ingestion (RSS, GDELT); Multi-Factored Trust Scoring (Source overlap, provenance checks); Asset Correlation Engine (Mapping events to NYSE/NASDAQ tickers); Personalized Morning Brief (AI-ranked); Global Severity Map.
- **Non-Core**: Durable Saved Views (Complex multi-filter states); Stripe-backed Premium Entitlements; Public "High-Signal" Preview.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: High horizontal scalability for the ingestion worker fleet; Support for 50k+ active concurrent subscribers.
- **Latency**: <200ms for core dashboard interactions. **P95 latency** < 2.5s for enrichment and personalized brief generation — tail is driven by LLM sentiment-scoring spikes and PostgreSQL indexing delays during high-volume geopolitical events.
- **Throughput**: Enrichment of 5,000+ geopolitical events per hour during global volatility events.
- **Fault Tolerance**: Staged pipeline (Fetch → Normalize → Enrich → Commit) to prevent data corruption; Idempotent ingestion logic.
- **Read-heavy vs Write-heavy**: Read-heavy for the investor dashboard; Write-heavy for the background ingestion and enrichment workers.
- **Durability**: No events lost due to idempotent ingestion state tracking. "Safe to delete" low-signal data after 3 months; 5-year archival for high-impact regulatory logs.
- **Multi-tenant**: **DeviceSession** tracking to keep watchlists and alerts synced across Mobile PWA and Desktop browsers (95% sync latency < 300ms).
- **CAP**: **AP** for the Event Feed (Displaying news with slight lag is acceptable to ensure 100% dashboard uptime); **CP** for Entitlements & Billing (Consistency is mandatory for subscription state).

### 3) Core Entities
- **Event**: The atomic unit (id, title, content, sentiment, trust_score, symbols[]).
- **Asset**: Market ticker data (symbol, sector, current_price, volatility_index).
- **SavedFilter**: Durable search params (user_id, region, severity, symbols).
- **Digest**: Pre-calculated morning brief packet.
- **DeviceSession**: Persistent identifier per login node for synchronized alerts.
- **Data Stores**: **PostgreSQL (Supabase)** for complex relational joins; **Redis** for sub-10ms feed caching.

### 4) API Design
- **Protocols**: **REST** for filtered event delivery and user preference CRUD; **Serverless Cron** entrypoints for automated ingestion; **Webhooks** for Stripe payment reconciliation.
- **Auth**: Supabase Auth with JWT and server-side session cookies for enhanced security.

### 5) High-Level Design (Functional)
- **Flow**: Source Spider → Ingestion Crawler → NLP Sentiment Scorer → Correlation Engine (Event $\cap$ Ticker) → Supabase DB → Notification Dispatcher → UI.
- **Verification**: Trust metadata is calculated using source diversity and duplicate reporting counts to minimize "Single Source of Failure" news traps.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Next.js Monolith)
graph TD
    RSS[[RSS Feeds]] --> API[Next.js API Routes]
    GDELT[[GDELT API]] --> API
    API --> Prisma[Prisma ORM]
    Prisma --> DB[(Supabase Postgres)]
    DB --> UI[Investor Dashboard]

#### B) After Scaling (Distributed Intelligence)
graph TD
    Spiders[[Crawler Fleet]] --> MQ[(Kafka Topic: Raw News)]
    MQ --> EnrichSvc[NLP Enrichment Microservice]
    MQ --> CorrSvc[Correlation Microservice]
    EnrichSvc --> DB[(Primary Postgres)]
    CorrSvc --> DB
    DB --> Cache[(Redis Feed Cache)]
    Cache --> LoadBalancer{L7 LB}
    LoadBalancer --> Client[[User PWA / Dashboard]]

### 7) Maintenance / Ops
- **Hygiene**: Automated TTL cleanups for low-signal historical noise.
- **Observability**: Source health monitoring to track provider downtime or API schema breaks.

### 8) Additional Requirements
- **Encryption**: AES-256 for private user watchlists and search histories.
- **Platform**: PWA support optimized for low-latency market alerts on mobile.
`
    },
    {
        id: 'sims',
        title: 'SIMS',
        tag: 'Surgical Inventory System',
        desc: 'Enterprise asset management for medical facilities. Tracks high-value surgical inventory, monitors expiry, and coordinates resource allocation for procedure rooms.',
        tech: ['React', 'Firebase', 'Healthcare', 'Recharts'],
        img: 'assets/sims.png',
        github: 'https://github.com/Sasidhar-7302/Sims.git',
        detailedDesc: 'Enterprise surgical inventory system for GI Specialists of Georgia. Ensures 100% equipment availability for critical procedures through real-time stock-scheduling integration.',
        keyFeatures: [
            { title: '7-Day Audit Trail', desc: 'Immutable action logging for clinical compliance and error recovery.' },
            { title: 'Procedure Reservation', desc: 'Automated kit pre-allocation tied to surgical operating room schedules.' },
            { title: 'Offline-First', desc: 'Firestore-backed persistent storage for unreliable hospital network environments.' }
        ],
        diagram: `graph LR
    Admin([Admin]) & Staff([Staff]) --> UI[React 18 Dashboard]
    UI <--> Context[Auth & Theme Context]
    Context <--> Firebase[Firebase Multi-Service]
    Firebase <--> Inventory[(Firestore Inventory)]
    Firebase <--> Schedule[(Firestore Schedules)]
    Schedule --> Reservation[Inventory Reservation]
    Reservation <--> Inventory
    UI --> Recharts[Analytics Visualization]`,
        systemDesign: `
### 0) Quick Framing
- **What**: A mission-critical enterprise asset management suite designed for high-stakes surgical environments, synchronizing life-saving inventory with real-time operative schedules.
- **Assumptions**: Strict compliance with healthcare data residency protocols; High availability requirements during hospital network instability.

### 1) Functional Requirements
- **Core**: Real-time Inventory Ledger (Stock, Expiry, Batch tracking); Procedure-Inventory Mapping (Pre-allocation of kits); Multi-tier Admin Escalation; Immutable Action Logging (7-day audit trail); Automated Stock Gating.
- **Non-Core**: Dark Theme optimization for low-light surgical theaters; Excel Bulk Import/Export for legacy data migration.

### 2) Non-Functional Requirements (NFRs)
- **Scalability**: Support for 1,000+ simultaneous hospital staff across multiple clinic locations; Virtualized rendering for catalogs exceeding 5,000+ SKUs.
- **Latency**: <100ms for stock decrementing (surgical environments demand instant feedback). **P95 latency** < 1.5s for inventory reconciliation — concurrent batch updates during shift-changes are the primary source of tail latency.
- **Throughput**: Sustained 500+ inventory state-mutations per minute during peak operative hours.
- **Fault Tolerance**: Offline-first design using persistent disk-caching to ensure surgical staff can access critical supply data during WAN or hospital network failures.
- **Read-heavy vs Write-heavy**: Balanced; Read-heavy for inventory lookups; Write-heavy for real-time audit logs and movement tracking.
- **Durability**: Zero-loss event handling via Firestore's write-ahead logs. "Safe to delete" non-critical action logs after 7 days; 7-year retention for financial and surgical audit records.
- **Multi-tenant**: **DeviceSession** tracking to manage concurrent inventory edits between ward-tablets and admin-desktops (95% sync latency < 300ms; <1% state inconsistency).
- **CAP**: **CP** for Inventory & Scheduling (Strong consistency is required to prevent double-booking or "ghost-stock" errors); **AP** for Audit Logs (Logging can be slightly delayed to prioritize primary UI responsiveness).

### 3) Core Entities
- **Item**: Root inventory asset (id, name, sku, current_stock, min_threshold).
- **Batch**: Expiry-tagged subset of an Item (batch_id, exp_date, supplier_id).
- **Procedure**: Surgical event (id, patient_id, required_items[], status).
- **UserAction**: The audit unit (user_id, action_type, payload, timestamp).
- **DeviceSession**: Per-login node identifier for session-aware synchronization.
- **Data Stores**: **Cloud Firestore (NoSQL)** for flexible supply schemas and real-time sync; **Local IndexedDB** for zero-latency offline access in the OR.

### 4) API Design
- **Protocols**: **Real-time WebSockets (Firebase SDK)** for bidirectional state propagation; **RESTful Hooks** for heavy bulk operations (Excel imports); **gRPC** for internal inventory service-to-service calls.
- **Auth**: Firebase Auth with JWT and role-based claim verification (Admin vs. Staff).

### 5) High-Level Design (Functional)
- **Flow**: Staff Action → Optimistic UI Update → Firestore Write-Ahead Log → Cloud Mutation → Real-time Broadcast → Peer Sync.
- **Verification**: Built-in conflict resolution that prioritizes "Last Write Wins" for basic status but uses "Atomic Increments" for stock levels to prevent race conditions.

### 6) Diagrams (Mermaid)
#### A) Before Scaling (Firebase Monolith)
graph LR
    UI[React 18 Dashboard] <--> Firebase[Firebase Multi-Service]
    Firebase <--> Inventory[(Firestore Inventory)]
    Firebase <--> Schedule[(Firestore Schedules)]
    Schedule --> Reservation[Inventory Reservation]
    Reservation <--> Inventory

#### B) After Scaling (Distributed Medical Services)
graph TD
    LB{L7 Load Balancer} --> Gateway[API Gateway]
    Gateway --> InvSvc[Inventory Microservice]
    Gateway --> SchedSvc[Scheduling Microservice]
    Gateway --> AuditSvc[Audit & Compliance Svc]
    InvSvc <--> Cache[(Redis Master)]
    SchedSvc <--> DB[(Postgres: CP Mode)]
    AuditSvc --> Warehouse[(BigQuery Data Lake)]
    Cache --> Client[[Hospital Tablets]]

### 7) Maintenance / Ops
- **Cleanup**: Automated Cloud Functions for the 7-day "Audit-Log" TTL (Time-To-Live).
- **Observability**: Heatmaps for high-usage surgical supplies to optimize storage layouts.

### 8) Additional Requirements
- **Encryption**: AES-256 for PII (Patient Identifiable Information) in compliance with healthcare regulations.
- **Hardware**: Barcode/QR integration for "At-the-shelf" mobile scanning during intake.
`
    },
    {
        id: 'one-device',
        title: 'One Device',
        tag: 'Hardware Product Concept',
        desc: 'A futuristic "Mother Device" designed to orchestrate personal technology ecosystems through a centralized, minimalist hardware interface.',
        tech: ['Product Design', 'Hardware', 'Industrial Design'],
        img: 'assets/one_device.png',
        github: '#',
        diagram: `graph TD
    OneDevice[SY-01 Hub] <--> Mesh[Device Mesh Protocol]
    Mesh <--> IoT[Home/Industrial IoT]
    OneDevice <--> NLI[Natural Language Interface]
    NLI <--> Core[Orchestrator Core]
    Core <--> Security[Encrypted Vault]`
    },
    {
        id: 'portfolio',
        title: 'SY Portfolio',
        tag: 'Futuristic Portfolio Platform',
        desc: 'The developer portal you are currently viewing. Built for maximum performance, minimal aesthetics, and interactive project discovery.',
        tech: ['HTML5', 'Vanilla CSS', 'Native JS'],
        img: 'assets/portfolio_thumb.png',
        github: 'https://github.com/Sasidhar-7302/PersonalPorfolioWebsite',
        diagram: `graph LR
    Visitor([Visitor]) --> UI[Glassmorphic UI]
    UI --> Interaction[Magnetic & Scroll Interactions]
    Interaction --> Discovery[Project Deep-View]
    Discovery --> Architecture[Live Mermaid Rendering]`
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');
    const gridGlow = document.querySelector('.grid-glow');
    const modal = document.querySelector('.modal');
    const modalBody = document.querySelector('.modal-body');
    const expToggles = document.querySelectorAll('.exp-toggle');

    // 0. Experience Toggle Logic
    expToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const content = toggle.parentElement.querySelector('.exp-content');
            const isExpanded = content.classList.toggle('expanded');
            toggle.textContent = isExpanded ? 'Show Less' : 'Show More';
        });
    });

    // ═══════════════ 3D CAROUSEL ENGINE ═══════════════
    const carouselTrack = document.getElementById('main-project-carousel');
    const prevBtn = document.querySelector('.carousel-nav.prev');
    const nextBtn = document.querySelector('.carousel-nav.next');
    const orbitRing = document.querySelector('.bg-orbit-ring');
    const totalCards = projects.length;
    const angleStep = 360 / totalCards;
    
    function getCarouselRadius() {
        if (window.innerWidth <= 768) return 280;
        if (window.innerWidth <= 1024) return 400;
        return 540;
    }
    
    let radius = getCarouselRadius();
    let currentAngle = 0;
    let autoRotateInterval;

    // Handle window resize for responsive 3D radius
    window.addEventListener('resize', () => {
        radius = getCarouselRadius();
        if (typeof updateCarousel === 'function') updateCarousel();
    });

    // 1. Render cards into the carousel track
    if (carouselTrack) {
        projects.forEach((p, i) => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <img src="${p.img}" alt="${p.title}" class="project-img">
                <div class="project-content">
                    <div class="project-tag">${p.tag}</div>
                    <h3 class="project-title">${p.title}</h3>
                </div>
            `;
            card.addEventListener('click', () => openModal(p));
            carouselTrack.appendChild(card);
        });

        // 2. Position cards in a circle and apply fade/scale
        function updateCarousel() {
            const cards = carouselTrack.querySelectorAll('.project-card');
            cards.forEach((card, i) => {
                const cardAngle = angleStep * i + currentAngle;
                card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;

                // Normalize angle to 0-360
                let normalizedAngle = ((cardAngle % 360) + 360) % 360;
                // Cards at 0 deg = front, 180 deg = back
                // Cosine gives us 1 at front, -1 at back
                const cosVal = Math.cos((normalizedAngle * Math.PI) / 180);
                
                // Opacity: full at front, faded at back
                const opacity = Math.max(0.15, (cosVal + 1) / 2);
                card.style.opacity = opacity;

                // Scale: uniform size, only slightly smaller at back
                const scale = 0.85 + 0.15 * ((cosVal + 1) / 2);
                card.style.transform += ` scale(${scale})`;

                // z-index: front cards on top
                card.style.zIndex = Math.round(cosVal * 100);

                // Blur far-away cards slightly
                const blurAmount = cosVal < 0 ? Math.abs(cosVal) * 3 : 0;
                card.style.filter = `blur(${blurAmount}px)`;
            });

            // Sync orbit ring
            if (orbitRing) {
                orbitRing.style.transform = `translate(-50%, -50%) rotate(${-currentAngle}deg)`;
            }
        }

        // 3. Rotation controls
        function rotateCarousel(direction) {
            currentAngle += direction * angleStep;
            updateCarousel();
        }

        if (prevBtn) prevBtn.addEventListener('click', () => {
            rotateCarousel(1);
            resetAutoRotate();
        });
        if (nextBtn) nextBtn.addEventListener('click', () => {
            rotateCarousel(-1);
            resetAutoRotate();
        });

        // 4. Drag and Touch-to-Rotate
        let isDragging = false;
        let dragStartX = 0;
        let dragStartAngle = 0;

        function handleDragStart(x) {
            isDragging = true;
            dragStartX = x;
            dragStartAngle = currentAngle;
            carouselTrack.style.transition = 'none';
            stopAutoRotate();
        }

        function handleDragMove(x) {
            if (!isDragging) return;
            const dx = x - dragStartX;
            currentAngle = dragStartAngle + dx * 0.4; // Sensitivity
            updateCarousel();
        }

        function handleDragEnd() {
            if (!isDragging) return;
            isDragging = false;
            carouselTrack.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            startAutoRotate();
        }

        // Mouse Events
        carouselTrack.parentElement.addEventListener('mousedown', (e) => handleDragStart(e.clientX));
        window.addEventListener('mousemove', (e) => { 
            if(isDragging) e.preventDefault(); 
            handleDragMove(e.clientX); 
        }, {passive: false});
        window.addEventListener('mouseup', handleDragEnd);

        // Touch Events (Mobile Swipe)
        carouselTrack.parentElement.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].clientX), {passive: true});
        window.addEventListener('touchmove', (e) => { 
            if(isDragging && e.cancelable) e.preventDefault(); 
            handleDragMove(e.touches[0].clientX); 
        }, {passive: false});
        window.addEventListener('touchend', handleDragEnd);

        // 5. Auto-Rotate
        function startAutoRotate() {
            autoRotateInterval = setInterval(() => {
                rotateCarousel(-1);
            }, 4000);
        }

        function stopAutoRotate() {
            clearInterval(autoRotateInterval);
        }

        function resetAutoRotate() {
            stopAutoRotate();
            startAutoRotate();
        }

        // Pause on hover
        carouselTrack.parentElement.addEventListener('mouseenter', stopAutoRotate);
        carouselTrack.parentElement.addEventListener('mouseleave', startAutoRotate);

        // Initialize
        updateCarousel();
        startAutoRotate();
    }

    // 2. Neuron Animation
    const canvas = document.getElementById('neuron-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxParticles = 80;
    const connectionDist = 150;
    const mouse = { x: null, y: null, radius: 150 };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = 2;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 242, 255, 0.3)';
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < maxParticles; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p1, i) => {
            p1.update();
            p1.draw();
            
            // Connect to other particles
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < connectionDist) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 242, 255, ${1 - dist/connectionDist})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x) {
                const dx = p1.x - mouse.x;
                const dy = p1.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    ctx.strokeStyle = `rgba(0, 242, 255, ${1 - dist/mouse.radius})`;
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    initParticles();
    animate();

    // 2b. Custom Cursor & Interaction
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        follower.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
        
        mouse.x = x;
        mouse.y = y;
    });

    // 3. Modal Logic
    const renderSystemDesign = (content) => {
        const lines = content.split('\n');
        let result = '';
        let mermaidBuffer = '';
        let isMermaid = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const trimmed = line.trim();
            
            if (trimmed.startsWith('graph')) {
                isMermaid = true;
                mermaidBuffer = line + '\n';
                continue;
            }

            if (isMermaid) {
                if (trimmed.startsWith('###') || (trimmed === '' && i + 1 < lines.length && lines[i+1].trim().startsWith('###'))) {
                    result += `<div class="mermaid">${mermaidBuffer}</div>`;
                    isMermaid = false;
                    mermaidBuffer = '';
                } else {
                    mermaidBuffer += line + '\n';
                    continue;
                }
            }

            if (trimmed.startsWith('###')) {
                result += `<h3 class="blueprint-header">${trimmed.replace('###', '')}</h3>`;
            } else if (trimmed.startsWith('####')) {
                result += `<h4 class="blueprint-subheader">${trimmed.replace('####', '')}</h4>`;
            } else if (trimmed.startsWith('-')) {
                result += `<p class="blueprint-token">${trimmed}</p>`;
            } else if (trimmed !== '') {
                result += `<p class="blueprint-line">${trimmed}</p>`;
            }
        }
        if (isMermaid) result += `<div class="mermaid">${mermaidBuffer}</div>`;
        return result;
    };

    const openModal = (p) => {
        modalBody.innerHTML = `
            <div class="modal-header">
                <div class="terminal-text">> initializing_detail_view_v2.0</div>
                <h1>${p.title}</h1>
                <div class="project-tag">${p.tag}</div>
            </div>

            <div class="modal-tabs">
                <button class="tab-btn active" data-tab="overview">Overview</button>
                ${(p.systemDesign || p.diagram) ? `<button class="tab-btn" data-tab="architecture">Architecture</button>` : ''}
            </div>

            <div id="overview" class="tab-content overview-content active">
                <img src="${p.img}" class="modal-img" alt="${p.title}">
                <div class="modal-long-desc">${p.detailedDesc || p.desc}</div>
                
                <div class="key-features">
                    ${(p.keyFeatures || []).map(f => `
                        <div class="feature-item">
                            <h4>${f.title}</h4>
                            <p>${f.desc}</p>
                        </div>
                    `).join('')}
                </div>

                <div class="modal-actions" style="margin-top: 2rem;">
                    ${p.github !== '#' ? `<a href="${p.github}" target="_blank" class="link-btn">View Source [GitHub]</a>` : ''}
                    <div class="modal-tech" style="margin-top: 1.5rem;">
                        ${p.tech.map(t => `<span class="tag" style="margin-right:0.5rem; opacity:0.6; font-family:var(--font-mono); font-size:0.7rem;">[${t}]</span>`).join('')}
                    </div>
                </div>
            </div>

            <div id="architecture" class="tab-content system-design-content">
                <div class="terminal-text">> accessing_deep_architecture_vault</div>
                <div class="design-blueprint">
                    ${p.systemDesign ? renderSystemDesign(p.systemDesign) : `<div class="mermaid">${p.diagram || ''}</div>`}
                </div>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Tab Switching Logic
        const tabs = modalBody.querySelectorAll('.tab-btn');
        const contents = modalBody.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-tab');
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                modalBody.querySelector(`#${target}`).classList.add('active');

                if (target === 'architecture') {
                    mermaid.run({
                        nodes: modalBody.querySelectorAll('.mermaid'),
                    });
                }
            });
        });

        // Initial render of first tab's mermaid if it exists (e.g. for projects without systemDesign but with diagram)
        if (!p.systemDesign && p.diagram) {
            setTimeout(() => {
                mermaid.run({
                    nodes: modalBody.querySelectorAll('.mermaid'),
                });
            }, 100);
        }
    };

    document.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // 4. Experience Toggle Logic
    document.querySelectorAll('.exp-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.exp-item');
            const isExpanded = item.classList.contains('expanded');
            
            // Close others if you want accordion effect (optional, leaving multi-open for now per current UI)
            item.classList.toggle('expanded');
            btn.textContent = isExpanded ? 'Show More' : 'Show Less';
        });
    });

    // 5. Typing Effect Utility
    function typeEffect(element, text, speed = 40) {
        element.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // 6. Typing Effect for Hero
    const terminalSubtitle = document.querySelector('.hero .terminal-text');
    if (terminalSubtitle) {
        const heroText = "> sasidhar_yepuri --spec dist_systems --domains [med, fin, privacy] --year 2026";
        typeEffect(terminalSubtitle, heroText, 50);
    }

    // 7. Reveal & Staggered Animations + Label Typing
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;

                // Handle Section Labels (Type them out)
                if (el.classList.contains('section-label')) {
                    const originalText = el.getAttribute('data-text') || el.textContent;
                    if (!el.getAttribute('data-typed')) {
                        el.setAttribute('data-text', originalText);
                        typeEffect(el, originalText, 30);
                        el.setAttribute('data-typed', 'true');
                    }
                }

                // Handle Staggered Bento Skills
                if (el.classList.contains('skills-bento')) {
                    const items = el.querySelectorAll('.bento-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    revealObserver.unobserve(el);
                    return;
                }

                // Standard Reveal
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
                revealObserver.unobserve(el);
            }
        });
    }, observerOptions);

    // Initialize labels for typing (store original text)
    document.querySelectorAll('.section-label').forEach(label => {
        label.setAttribute('data-text', label.textContent);
        label.textContent = ""; // Hide until intersection
        revealObserver.observe(label);
    });

    // Observe containers for staggered effects
    const skillsBento = document.querySelector('.skills-bento');
    if (skillsBento) {
        skillsBento.style.opacity = '1'; // Ensure container is visible
        skillsBento.querySelectorAll('.bento-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(40px)';
            item.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        });
        revealObserver.observe(skillsBento);
    }

    // Standard reveal elements
    document.querySelectorAll('.reveal:not(.bento-item)').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        revealObserver.observe(el);
    });

    // 3. Scroll Progress Bar Logic
    const progressBar = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.pageYOffset / totalHeight) * 100;
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    });
});
