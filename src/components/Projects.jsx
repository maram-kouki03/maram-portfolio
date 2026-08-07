import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, X, ArrowRight } from 'lucide-react'
import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

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
        {project.video ? (
          <video
            src={project.video}
            poster={project.poster || undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="media-ph">
            <div className="file">[ {project.file} ]</div>
            hover = autoplay
          </div>
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
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="section" id="projects">
      <Reveal>
        <p className="eyebrow blue">02 — Work</p>
        <h2 className="section-title">Selected projects</h2>
      </Reveal>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <ProjectCard project={p} onOpen={setSelected} />
          </Reveal>
        ))}
      </div>

      <div className="projects-foot">
        <a className="btn-ghost" href="https://github.com/maram-kouki03" target="_blank" rel="noreferrer">
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
          {project.video ? (
            <video src={project.video} poster={project.poster || undefined} controls autoPlay muted loop playsInline />
          ) : project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="media-ph">
              <div className="file">[ {project.file} ]</div>
              drop your demo clip in /public
            </div>
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
                <a className="icon-btn" href={project.live} target="_blank" rel="noreferrer" aria-label="Live demo">
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
