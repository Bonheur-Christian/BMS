'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ArrowLeft, ArrowRight, Building2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function CreateBusinessPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    description: '',
    website: '',
    country: '',
    state: '',
    city: '',
    foundedYear: '',
  })

  const industries = [
    'Technology',
    'Manufacturing',
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Real Estate',
    'Hospitality',
    'Transportation',
    'Other',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    console.log('Business created:', formData)
    // Redirect to business details
  }

  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <Link href="/portal/business-owner/businesses" className="flex items-center gap-2 text-primary hover:text-primary/80 text-sm mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Businesses
        </Link>
        <h1 className="text-3xl font-bold text-foreground">Create New Business</h1>
        <p className="text-foreground/60">Set up your business structure and details</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-4 flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                s === step
                  ? 'bg-primary text-primary-foreground'
                  : s < step
                    ? 'bg-primary/30 text-primary'
                    : 'bg-foreground/10 text-foreground/50'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div className={`flex-1 h-1 rounded-full transition-all ${s < step ? 'bg-primary' : 'bg-foreground/10'}`} />
            )}
          </div>
        ))}
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur p-8">
        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Basic Information</h2>
              <p className="text-foreground/60">Tell us about your business</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="businessName" className="text-foreground">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Enter business name"
                  className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <Label htmlFor="industry" className="text-foreground">
                  Industry *
                </Label>
                <Select value={formData.industry} onValueChange={(value) => handleSelectChange(value, 'industry')}>
                  <SelectTrigger className="mt-2 bg-input border-border/50 text-foreground">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((ind) => (
                      <SelectItem key={ind} value={ind}>
                        {ind}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="description" className="text-foreground">
                  Business Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your business (optional)"
                  className="mt-2 min-h-32 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-foreground">
                  Website
                </Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Business Location</h2>
              <p className="text-foreground/60">Where is your business based?</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="country" className="text-foreground">
                  Country *
                </Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Enter country"
                  className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="state" className="text-foreground">
                    State/Province
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    placeholder="Enter state"
                    className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                  />
                </div>
                <div>
                  <Label htmlFor="city" className="text-foreground">
                    City
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter city"
                    className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Additional Info */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Additional Information</h2>
              <p className="text-foreground/60">Help us understand your business better</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="foundedYear" className="text-foreground">
                  Year Founded
                </Label>
                <Input
                  id="foundedYear"
                  name="foundedYear"
                  type="number"
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  placeholder="2023"
                  className="mt-2 bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                />
              </div>

              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Next Steps</h4>
                <ul className="text-sm text-foreground/70 space-y-2">
                  <li>✓ Create your business entity</li>
                  <li>✓ Set up your organizational structure</li>
                  <li>✓ Invite team members</li>
                  <li>✓ Define roles and permissions</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={step === 1}
            className="border-border/50 text-foreground hover:bg-foreground/5 disabled:opacity-50 bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-foreground/60">
            Step {step} of 3
          </div>

          {step < 3 ? (
            <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : (
            <Link href="/dashboard/businesses">
              <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Create Business
                <Building2 className="w-4 h-4" />
              </Button>
            </Link>
          )}
        </div>
      </Card>
    </div>
  )
}
