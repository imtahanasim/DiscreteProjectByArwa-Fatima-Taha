import { Link } from 'react-router-dom';
import {
  Activity,
  Archive,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  Database,
  FileText,
  FolderTree,
  Layers,
  LineChart,
  Network,
  Workflow,
  Images
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const capabilityHighlights = [
  {
    title: 'Discrete Structure Pipeline',
    description:
      '17 metropolitan markets are modelled as graph nodes while commodity price co-movements become weighted edges, enabling rigorous network interrogation.',
    icon: Layers
  },
  {
    title: 'Temporal Coverage',
    description:
      'Monthly CPI snapshots from March 2023 through December 2024 (22 time slices) are harmonized to observe regime shifts, shocks, and stabilization periods.',
    icon: LineChart
  },
  {
    title: 'Algorithmic Stack',
    description:
      'Floyd–Warshall routing, force-directed physics, entropy-based weighting, and poset validation (Hasse diagrams) power the inference layer.',
    icon: Activity
  },
  {
    title: 'Story-Ready Outputs',
    description:
      'Automated composite rankings, heat maps, and exportable plots feed executive decks, investor briefs, and academic appendices without manual stitching.',
    icon: BarChart3
  }
];

const pipelineStages = [
  {
    title: 'Acquisition & Harmonization',
    details:
      'Raw CPI bulletins (PDF, XLSX, CSV) are parsed, typo-corrected, and normalized against PBS base years before feeding the analytics stack.',
    artifacts: ['pipeline/preprocess.py', 'data/processed/*.csv']
  },
  {
    title: 'Similarity & Weighting',
    details:
      'Cosine similarity matrices are generated per category, then tuned via equal, entropy, correlation, or stakeholder-specific weights.',
    artifacts: ['pipeline/similarity.py', 'pipeline/weighting.py']
  },
  {
    title: 'Graph Construction',
    details:
      'Thresholded adjacency matrices construct multi-layer graphs ready for topology checks, component analysis, and centrality scoring.',
    artifacts: ['pipeline/graph_builder.py', 'output/graphs/*.gpickle']
  },
  {
    title: 'Narrative Visualization',
    details:
      'Force-directed canvases, temporal Hasse diagrams, live heat maps, and executive summaries expose weak links and resilient corridors.',
    artifacts: ['src/pages/VisualizationPage.tsx', 'Submission_Package/1.Executive_Summary_Visuals']
  }
];

const researchCommitments = [
  {
    label: 'Data Grain',
    value: '17 cities × 7 commodity clusters × 22 months (2,618 time-series points)'
  },
  {
    label: 'Versioned Outputs',
    value: '1000+ intermediate files archived for auditability & peer review'
  },
  {
    label: 'Quality Gates',
    value: 'Six validation scripts covering missingness, z-score drift, and cluster stability'
  },
  {
    label: 'Documentation',
    value: 'Full submission dossier with executive visuals, technical report, and code'
  }
];

const submissionContainers = [
  {
    title: '1. Executive Summary Visuals',
    path: 'Submission_Package/1.Executive_Summary_Visuals',
    icon: Images,
    summary:
      'Twelve 3840×2160 PNGs—four heatmap grids, four network evolution plates, four stability verdicts—sequenced to tell the story in under five slides.',
    purpose:
      'Give reviewers instant situational awareness with cinematic storyboards that mirror the visuals on the Visualization page but lock the color keys, annotations, and typography.',
    usage:
      'Drop any of these PNGs directly into a deck. They already include safe margins, descriptive captions, and reference tags (e.g., “Fig. S-02”) tied back to the report.',
    files: [
      {
        name: 'Heatmap_Grid_[Cluster]_AllQuarters.png',
        detail:
          'Four grids (Food Staples, Fruits & Veg, Meat & Dairy, Oils & Condiments) that stack quarter-over-quarter CPI deltas for all 17 cities.'
      },
      {
        name: 'Network_Evolution_[Cluster]_AllQuarters.png',
        detail:
          'Snapshots of the similarity graph every quarter so you can literally see the edges densify or fragment under different regimes.'
      },
      {
        name: 'Stability_Analysis_[Cluster].png',
        detail:
          'Dual-axis volatility cones + resilience callouts that are cited in the policy recommendations section of the manuscript.'
      }
    ],
    qa: [
      'Checksum every PNG after export and note the hash in Submission_Package/config.yaml.',
      'Legends, units, and annotations are locked so no one needs Illustrator to make edits.',
      'Each file embeds EXIF notes with the pipeline command and timestamp that produced it.'
    ]
  },
  {
    title: '2. Final Report Documents',
    path: 'Submission_Package/2.Final_Report_Documents',
    icon: FileText,
    summary:
      'The narrative spine: a 40+ page Word document plus the Excel workbook that backs every ranking table and chart.',
    purpose:
      'Bundle the prose, references, and data tables that accrediting bodies require for a discrete structures research submission.',
    usage:
      'Start with Project_Report.docx for the full story, then pivot to Final_Rankings_Summary.xlsx to slice composite scores by commodity cluster, city, or similarity threshold.',
    files: [
      {
        name: 'Project_Report.docx',
        detail:
          'Manuscript covering methodology, validation, scenario notes, and policy implications with cross-links to every figure ID.'
      },
      {
        name: 'Final_Rankings_Summary.xlsx',
        detail:
          'Workbook with slicers for threshold, weighting regime, and cluster; includes spark lines for temporal comparisons and hidden sheets with pivot caches.'
      }
    ],
    qa: [
      'Track changes are disabled and metadata scrubbed before packaging.',
      'Each table is footnoted with the CSV filename from the Analysis_Output_Archive.',
      'Document properties list the config.yaml commit hash and the pipeline version.'
    ]
  },
  {
    title: '3. Source Code',
    path: 'Submission_Package/3.Source_Code',
    icon: FolderTree,
    summary:
      'Frozen copy of the backend analytics stack—including pipeline modules, helper scripts, and the run_pipeline.py entry point.',
    purpose:
      'Guarantee anyone can regenerate the graphs, CSVs, and PNG plates without hunting through the main repo.',
    usage:
      'Set up a virtualenv, install requirements, and run `python run_pipeline.py --config ../config.yaml`. Scripts inside scripts/ handle report generation and custom weighting audits.',
    files: [
      {
        name: 'pipeline/preprocess.py',
        detail:
          'Parses PBS PDFs/CSVs, harmonizes base years, and emits normalized per-cluster CSVs into data/processed.'
      },
      {
        name: 'pipeline/similarity.py + weighting.py',
        detail:
          'Build cosine similarity matrices and apply equal, entropy, correlation, or stakeholder-defined weights.'
      },
      {
        name: 'pipeline/graph_builder.py + visualize.py + hasse.py',
        detail:
          'Construct NetworkX graphs, compute Hasse diagrams, and export `.gpickle` plus annotated PNGs that feed the frontend.'
      },
      {
        name: 'run_pipeline.py & scripts/',
        detail:
          'Automation harness plus helper utilities (custom_weighting.py, generate_report.py) used during submission crunch.'
      }
    ],
    qa: [
      'README inside the folder documents Python version, dependency pins, and GPU/CPU expectations.',
      'Smoke tests guard against NaNs, missing directories, or config mismatches before a run completes.',
      'Logs/ captures stdout/stderr from the last official submission run for auditors.'
    ]
  },
  {
    title: '4. Analysis Output Archive',
    path: 'Submission_Package/4.Analysis_Output_Archive',
    icon: Archive,
    summary:
      'An evidence locker containing every intermediate CSV, graph object, Hasse diagram, and publication-grade PNG exported by the pipeline.',
    purpose:
      'Let reviewers trace any statement back to raw numbers or serialized graph states without re-running the computation.',
    usage:
      'If someone asks “which file backs this plot,” point them here. Manifests inside each subfolder list file counts and SHA256 hashes.',
    files: [
      {
        name: 'aggregated/, centralities/, reports/',
        detail:
          'CSV collections covering per-month metrics, degree/closeness/betweenness tables, and narrative-friendly report extracts.'
      },
      {
        name: 'graphs/, hasse/, plots/',
        detail:
          'NetworkX `.gpickle` snapshots, Hasse CSV/PNG pairs for every threshold, and 168 PNG charts ready for print.'
      },
      {
        name: 'similarity_matrices/ + reports_summary/',
        detail:
          'Raw cosine matrices plus a markdown digest explaining how to interpret each export directory.'
      }
    ],
    qa: [
      'Each subfolder includes manifest.md with file counts + checksums.',
      'Folder names mirror CLI `--export` flags to keep automation deterministic.',
      'Spot checks compare aggregated CSV stats against Final_Rankings_Summary.xlsx before sealing the archive.'
    ]
  },
  {
    title: '5. Data (Raw → Processed)',
    path: 'Submission_Package/5.data',
    icon: Database,
    summary:
      'Chronological mirror of PBS releases plus our processed derivatives, split by year and pipeline stage.',
    purpose:
      'Preserve provenance: you can always go back to the untouched PDFs/XLSX files or inspect the exact CSV we fed into similarity calculations.',
    usage:
      'Use 2023/2024/2025 folders when auditing government bulletins; use raw/ vs processed/ to diff our cleaning steps line by line.',
    files: [
      {
        name: '2023/, 2024/, 2025/ folders',
        detail:
          'Original PBS PDFs (and 2025 XLSX supplements) annotated via README files with publication dates and notable events.'
      },
      {
        name: 'raw/*.csv',
        detail:
          'Direct exports from the PBS releases—no alterations. Ideal for regression testing our preprocessing.'
      },
      {
        name: 'processed/*.csv',
        detail:
          'Normalized tables after unit conversions, missing-value handling, and city name harmonization.'
      }
    ],
    qa: [
      'Raw files are write-protected to avoid accidental edits.',
      'Processed CSVs include `source_file` + `processing_timestamp` columns for lineage.',
      'README explains every anomaly fix with cross-links to preprocess commits.'
    ]
  },
  {
    title: 'config.yaml',
    path: 'Submission_Package/config.yaml',
    icon: BookOpenCheck,
    summary:
      'The single configuration artifact that orchestrates weighting schemes, thresholds, export directories, and file provenance.',
    purpose:
      'Act as the contract between code and outputs—anyone re-running the pipeline with this file will reproduce the submission exactly.',
    usage:
      'Pass it into `run_pipeline.py --config Submission_Package/config.yaml` or load it inside the frontend to sync weighting presets.',
    files: [
      {
        name: 'config.yaml',
        detail:
          'YAML schema covering commodity clusters, city lists, weighting presets, timeline slices, export toggles, and comments with the authoritative commit hash.'
      }
    ],
    qa: [
      'Validated against a JSON schema before every run to ensure required keys exist.',
      'Inline comments document default vs experiment settings so tweaks remain auditable.'
    ]
  }
];

// Deep-dive metadata for submission containers (previously used in the narrative footer)
// has been removed from the live layout to keep the ProjectOverviewPage concise.

export default function ProjectOverviewPage() {
  const heroRef = useScrollReveal<HTMLElement>({ threshold: 0.05 });
  const capabilityRef = useScrollReveal<HTMLElement>();
  const pipelineRef = useScrollReveal<HTMLElement>();
  const provenanceRef = useScrollReveal<HTMLElement>();
  const narrativesRef = useScrollReveal<HTMLElement>();
  const submissionRef = useScrollReveal<HTMLElement>();

  return (
    <div className="bg-[#020617] text-slate-100 h-auto pb-12">
      <section
        ref={heroRef}
        className="group reveal relative overflow-hidden border-b border-cyan-500/10 bg-gradient-to-b from-[#020617] via-[#030A1E] to-[#010409] px-6 py-16"
      >
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-10 right-0 w-[480px] h-[480px] bg-cyan-500/20 blur-[160px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto space-y-10">
          <p className="font-mono text-xs tracking-[0.4em] text-cyan-300 uppercase">Project Dossier</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
            Pakistan Economic Observatory <span className="text-cyan-400">Research Stack</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            This microsite documents the entire discrete-structures experiment: how we ingested price bulletins,
            constructed similarity graphs, validated every relation, and shipped a decision-ready experience.
            Every micro-choice—from preprocessing thresholds to entropy-based weight adjustments—is described
            for transparent peer review.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/visualization"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/60 bg-cyan-500/10 px-6 py-3 font-semibold text-cyan-200 hover:bg-cyan-500/20 transition-colors"
            >
              Launch Visualization
            </Link>
            <Link
              to="/team"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 font-semibold text-slate-200 hover:bg-white/5 transition-colors"
            >
              Meet the Contributors
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={capabilityRef}
        className="group reveal max-w-6xl mx-auto px-6 py-16 grid gap-6 md:grid-cols-2"
      >
        {capabilityHighlights.map((item, idx) => (
          <div
            key={item.title}
            className="glow-card rounded-2xl p-6 backdrop-blur opacity-0 translate-y-8 group-data-[visible=true]:opacity-100 group-data-[visible=true]:translate-y-0 transition-all duration-700 hover-lift"
            style={{ transitionDelay: `${150 + idx * 80}ms` }}
          >
            <div className="flex items-center gap-4">
              <item.icon className="h-10 w-10 text-cyan-400" />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </section>

      <section
        ref={pipelineRef}
        className="group reveal bg-black/20 border-y border-white/5 py-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs">
            <Workflow className="h-4 w-4" /> Analysis Flight Plan
          </div>
          <h2 className="mt-4 text-3xl font-bold text-white">Minute-by-minute pipeline coverage</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {pipelineStages.map((stage) => (
              <div
                key={stage.title}
                className="glow-card rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200">{stage.title}</h3>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{stage.details}</p>
                <div className="mt-4 text-xs font-mono text-slate-400">
                  Key Artifacts:
                  <ul className="mt-2 space-y-1">
                    {stage.artifacts.map((artifact) => (
                      <li key={artifact} className="flex items-center gap-2 text-[11px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-300" />
                        {artifact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={provenanceRef}
        className="group reveal max-w-6xl mx-auto px-6 py-16"
      >
        <div className="flex items-center gap-3 text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs">
          <Database className="h-4 w-4" /> Provenance & Validation
        </div>
        <h2 className="mt-4 text-3xl font-bold text-white">Operational assurances</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {researchCommitments.map((commitment) => (
            <div key={commitment.label} className="glow-card rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{commitment.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{commitment.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={narrativesRef}
        className="group reveal bg-black/30 border-t border-white/5 px-6 py-16"
      >
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[2fr,1fr]">
          <div>
            <div className="flex items-center gap-3 text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs">
              <Network className="h-4 w-4" /> Research Narratives
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">Insights we can now defend</h2>
            <ul className="mt-6 space-y-6">
              <li className="border-l-2 border-cyan-400/70 pl-4 hover-lift transition-transform duration-300">
                <p className="text-lg font-semibold text-white">Integration scoring across commodity regimes</p>
                <p className="text-sm text-slate-300 mt-2">
                  Composite centrality results reveal that Food Staples networks reach a 0.78 density by late 2024,
                  while Non-Food Essentials plateau at 0.42—alerting policymakers to stubborn fragmentation.
                </p>
              </li>
              <li className="border-l-2 border-purple-400/70 pl-4 hover-lift transition-transform duration-300">
                <p className="text-lg font-semibold text-white">Shock propagation tracing</p>
                <p className="text-sm text-slate-300 mt-2">
                  Interactive timeline + Hasse diagramming pinpoints May 2024 as a temporary antisymmetry break,
                  aligning with diesel subsidy adjustments recorded by PBS.
                </p>
              </li>
              <li className="border-l-2 border-pink-400/70 pl-4 hover-lift transition-transform duration-300">
                <p className="text-lg font-semibold text-white">Policy-ready documentation</p>
                <p className="text-sm text-slate-300 mt-2">
                  Submission bundles combine 100+ annotated figures, raw CSV releases, and an auditable config file,
                  letting reviewers reproduce every figure with a single pipeline command.
                </p>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Milestones</p>
              <ol className="mt-4 space-y-3 text-sm text-slate-200">
                <li>✔️ Data crawl & schema freeze — Feb 2024</li>
                <li>✔️ Similarity engine v2 — Jun 2024</li>
                <li>✔️ Visualization refactor — Sep 2024</li>
                <li>🟡 Multi-page narrative site — Nov 2025</li>
              </ol>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Documentation trail</p>
              <ul className="mt-4 space-y-2 text-sm text-cyan-200">
                <li className="flex items-center gap-2">
                  <BookOpenCheck className="h-4 w-4" /> DEPLOYMENT.md
                </li>
                <li className="flex items-center gap-2">
                  <BookOpenCheck className="h-4 w-4" /> Submission_Package/2.Final_Report_Documents
                </li>
                <li className="flex items-center gap-2">
                  <BookOpenCheck className="h-4 w-4" /> README.md (tech stack + scripts)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={submissionRef}
        className="group reveal border-t border-white/10 bg-gradient-to-b from-[#030A1E] to-[#010409] px-6 py-16"
      >
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <div className="flex items-center gap-3 text-cyan-400 font-semibold uppercase tracking-[0.2em] text-xs">
              <FolderTree className="h-4 w-4" /> Submission Atlas
            </div>
            <h2 className="mt-4 text-3xl font-bold text-white">Minute detailing of every archive container</h2>
            <p className="mt-4 text-slate-300 text-base leading-relaxed">
              The `Submission_Package` directory is more than a dump—it is a curated dossier. Each folder mirrors a stage
              of our workflow so reviewers can traverse from polished visual to raw CPI bulletin without guessing. The cards below
              explain exactly what lives where, how it was produced, and when to reference it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {submissionContainers.map((container, idx) => (
              <article
                key={container.title}
                className="glow-card rounded-3xl p-6 opacity-0 translate-y-8 group-data-[visible=true]:opacity-100 group-data-[visible=true]:translate-y-0 transition-all duration-700 hover-lift"
                style={{ transitionDelay: `${200 + idx * 90}ms` }}
              >
                <div className="flex items-center gap-3">
                  <container.icon className="h-8 w-8 text-cyan-300" />
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-400 break-all">{container.path}</p>
                    <h3 className="text-xl font-semibold text-white mt-1 break-words">{container.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-200 leading-relaxed">{container.summary}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cyan-200">Why it exists</p>
                <p className="text-sm text-slate-300 leading-relaxed">{container.purpose}</p>
                <div className="mt-6 grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Key files & outputs</p>
                    <ul className="mt-3 space-y-3 text-sm text-slate-200">
                      {container.files.map((file) => (
                        <li key={file.name} className="rounded-2xl bg-white/5 p-3 border border-white/10">
                          <p className="font-semibold text-white break-all">{file.name}</p>
                          <p className="text-slate-300 text-xs mt-1 leading-relaxed">{file.detail}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">How we use it</p>
                      <p className="mt-2 text-sm text-slate-200 leading-relaxed">{container.usage}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">QA ritual</p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {container.qa.map((step) => (
                          <li key={step} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-400" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


