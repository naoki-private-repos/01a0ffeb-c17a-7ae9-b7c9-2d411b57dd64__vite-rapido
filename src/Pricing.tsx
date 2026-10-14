import React from 'react'
import './Pricing.css'

interface PricingProps {
  onNavigate?: (path: string) => void
}

interface Plan {
  id: string
  name: string
  price: string
  period: string
  description: string
  featured?: boolean
  features: string[]
  buttonText: string
}

const plans: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Essential features for individuals getting started.',
    features: [
      '1 project included',
      'Community support',
      '5 GB cloud storage',
      'Basic analytics',
      'Standard response time',
    ],
    buttonText: 'Get Started Free',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$19',
    period: '/month',
    featured: true,
    description: 'Advanced tools and resources for professionals.',
    features: [
      'Unlimited projects',
      'Priority email support',
      '50 GB cloud storage',
      'Advanced analytics',
      'Custom domains',
      '99.9% uptime SLA',
    ],
    buttonText: 'Upgrade to Pro',
  },
  {
    id: 'team',
    name: 'Team',
    price: '$49',
    period: '/month',
    description: 'Complete collaboration suite for fast-growing teams.',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      '500 GB cloud storage',
      'Dedicated support',
      'Team audit logs',
      'SSO & SAML authentication',
    ],
    buttonText: 'Get Started with Team',
  },
]

export default function Pricing({ onNavigate }: PricingProps) {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate) {
      e.preventDefault()
      onNavigate('/')
    }
  }

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <a href="/" onClick={handleBack} className="back-link">
          ← Back to Home
        </a>
        <h1 className="pricing-title">Plans &amp; Pricing</h1>
        <p className="pricing-subtitle">
          Choose the plan that best fits your needs. Transparent pricing, no hidden fees.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${plan.featured ? 'featured' : ''}`}
          >
            {plan.featured && <div className="popular-badge">Most Popular</div>}
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>
            <div className="plan-price">
              <span className="price-amount">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="feature-check" aria-hidden="true">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={`plan-button ${plan.featured ? 'primary' : ''}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
