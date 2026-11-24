// Experience is grouped by organisation; each one lists its roles, newest first.
// A role with `current: true` gets a "Current" badge.

export const experience = [
  {
    org: 'WiseVision AI Technologies',
    period: '2026 — Present',
    roles: [
      {
        title: 'Computer Vision Engineer (Part-time)',
        subtitle: 'Multi-Camera Multi-Target Tracking',
        period: 'Sep 2026 — Present',
        current: true,
        points: [
          'Developing cross-camera identity continuity with YOLO-Pose and BoT-SORT.',
          'Matching hand-offs through shared-coordinate motion prediction and boundary/direction checks, with OSNet Re-ID as tie-break and fallback.',
        ],
      },
      {
        title: 'AI / Computer Vision Intern',
        subtitle: 'Retail analytics, CRK client project',
        period: 'Apr 2026 — Aug 2026',
        points: [
          'Built real-time retail video analytics: detection, tracking, staff/customer classification and counting.',
          'For client CRK Maroquinier, linked Jetson events with Joolan POS data via a FastAPI/SQLite backend and a React dashboard for store KPIs and conversion.',
          'Deployed on a private Windows Server VM via a one-step PowerShell installer and self-restarting service.',
        ],
      },
    ],
  },
  {
    org: "SUP'COM Junior Enterprise",
    period: 'Mandate 2026 — 2027',
    roles: [
      {
        title: 'Quality Manager',
        points: [
          'Maintain quality standards, review all project deliverables before client hand-off, and drive improvement.',
        ],
      },
    ],
  },
]

export const education = [
  {
    org: "SUP'COM — Higher School of Communication of Tunis",
    period: '2025 — Present',
    roles: [
      {
        title: 'Engineering Degree in Information & Communication Technologies',
        points: ['Focus on LLMs, AI agents, computer vision and software engineering.'],
      },
    ],
  },
  {
    org: 'IPEIEM, Tunis',
    period: '2022 — 2025',
    roles: [
      {
        title: 'Preparatory Cycle',
        points: ['Top 5% in the National Entrance Exam.'],
      },
    ],
  },
]
