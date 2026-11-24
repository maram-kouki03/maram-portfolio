import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ArrowRight, Play } from 'lucide-react'
import { projects, categories } from '../data/projects.js'
import { profile } from '../data/profile.js'
import Reveal from './Reveal.jsx'

// Shown when a project has neither a demo video nor a screenshot.
function MediaTile({ project }) {
  return (
    <div className="media-ph media-tile">
      <div className="file">~/projects/{project.id}</div>
      <div className="tile-tags">{project.tags.slice(0, 3).join(' · ')}</div>
    </div>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <div
      className="project-card"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' ? onOpen(project) : null)}
    >
      <div className="project-media">
        {project.demoVideo ? (
          <video
            src={project.demoVideo}
            poster={project.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        ) : project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <MediaTile project={project} />
        )}
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.blurb}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
        {project.demoVideo && (
          <span className="demo-btn">
            <Play size={14} /> Watch demo
          </span>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  const visible = filter === 'all' ? projects : projects.filter((p) => p.categories.includes(filter))

  return (
    <section className="section" id="projects">
      <Reveal>
        <p className="eyebrow blue">02 — Work</p>
        <h2 className="section-title">Selected projects</h2>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="filter-chips" role="tablist" aria-label="Filter projects">
          {categories.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={filter === c.id}
              className={`chip filter-chip${filter === c.id ? ' active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <Reveal key={`${filter}-${p.id}`} delay={(i % 3) * 0.08}>
            <ProjectCard project={p} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <div className="projects-foot">
        <a className="btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
          View All Projects <ArrowRight size={17} />
        </a>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-media">
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
          {project.demoVideo ? (
            <video src={project.demoVideo} poster={project.poster || undefined} controls autoPlay muted loop playsInline />
          ) : project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <MediaTile project={project} />
          )}
        </div>
        <div className="modal-body">
          <div className="modal-head">
            <h3>{project.title}</h3>
            <div className="modal-links">
              {project.github && (
                <a className="icon-btn" href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a className="icon-btn" href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
