import { useState } from 'react'
import { caseStudies } from '../data/cases'
import CaseStudyCard from './CaseStudyCard'
import CaseStudyDetail from './CaseStudyDetail'
import './CaseStudies.css'

export default function CaseStudies() {
  const [selectedCaseId, setSelectedCaseId] = useState(null)

  const selectedCase = selectedCaseId
    ? caseStudies.find(c => c.id === selectedCaseId)
    : null

  if (selectedCase) {
    return (
      <CaseStudyDetail
        caseStudy={selectedCase}
        onBack={() => setSelectedCaseId(null)}
      />
    )
  }

  return (
    <section id="cases" className="case-studies section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2>Featured Work</h2>
          <p>Strategic campaigns that delivered measurable cultural and commercial impact</p>
        </div>

        <div className="cases-grid">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              onClick={() => setSelectedCaseId(caseStudy.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
