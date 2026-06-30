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
          <p className="section-eyebrow">Selected work</p>
          <h2>Campaigns that moved culture<br />and the numbers</h2>
          <p className="section-lead">
            Four projects across snacks, beverages, and beauty — each built on a
            cultural insight and measured against business results.
          </p>
        </div>

        <div className="cases-grid">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              index={index}
              variant={index % 4 === 0 || index % 4 === 3 ? 'wide' : 'standard'}
              onClick={() => setSelectedCaseId(caseStudy.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
