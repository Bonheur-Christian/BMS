'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Building2, Users, DollarSign, Calendar } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreateDepartmentPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        lead: '',
        budget: '',
        expectedMembers: '',
        location: '',
        email: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsLoading(false)
        // Redirect to departments list
        // router.push('')
    }

    return (
        <div className="p-6 space-y-8 w-[95%] mx-auto">
            {/* Header */}
            <div className="space-y-2">
                <Button onClick={() => router.back()} variant="outline" className="flex items-center gap-2 bg-none cursor-pointer text-white text-sm mb-4 hover:text-primary hover:scale-103 duration-300">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Departments
                </Button>
                <h1 className="text-4xl font-bold text-foreground">Create New Department</h1>
                <p className="text-foreground/60">Set up a new department and assign it a lead and budget</p>
            </div>

            {/* Form */}
            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Form */}
                <div className="lg:col-span-2">
                    <Card className="border-border/50 bg-card/50 backdrop-blur p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Department Name */}
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-foreground font-medium flex items-center gap-2">
                                    <Building2 className="w-4 h-4 text-primary" />
                                    Department Name
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="e.g., Engineering, Marketing, Sales"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                    required
                                />
                                <p className="text-xs text-foreground/60">Choose a clear, recognizable name for your department</p>
                            </div>

                            {/* Description */}
                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-foreground font-medium">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Describe the purpose and responsibilities of this department..."
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40 min-h-24"
                                    required
                                />
                                <p className="text-xs text-foreground/60">Help team members understand what this department does</p>
                            </div>

                            {/* Department Lead */}
                            <div className="space-y-2">
                                <Label htmlFor="lead" className="text-foreground font-medium flex items-center gap-2">
                                    <Users className="w-4 h-4 text-primary" />
                                    Department Lead
                                </Label>
                                <Input
                                    id="lead"
                                    name="lead"
                                    placeholder="Enter the name of the department lead"
                                    value={formData.lead}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                    required
                                />
                                <p className="text-xs text-foreground/60">This person will manage the department and team members</p>
                            </div>

                            {/* Budget */}
                            <div className="space-y-2">
                                <Label htmlFor="budget" className="text-foreground font-medium flex items-center gap-2">
                                    <DollarSign className="w-4 h-4 text-primary" />
                                    Annual Budget
                                </Label>
                                <Input
                                    id="budget"
                                    name="budget"
                                    type="number"
                                    placeholder="e.g., 150000"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                    required
                                />
                                <p className="text-xs text-foreground/60">Allocated annual budget for this department</p>
                            </div>

                            {/* Expected Members */}
                            <div className="space-y-2">
                                <Label htmlFor="expectedMembers" className="text-foreground font-medium">
                                    Expected Team Size
                                </Label>
                                <Input
                                    id="expectedMembers"
                                    name="expectedMembers"
                                    type="number"
                                    placeholder="e.g., 10"
                                    value={formData.expectedMembers}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                />
                                <p className="text-xs text-foreground/60">Expected number of team members (optional)</p>
                            </div>

                            {/* Location */}
                            <div className="space-y-2">
                                <Label htmlFor="location" className="text-foreground font-medium">
                                    Office Location
                                </Label>
                                <Input
                                    id="location"
                                    name="location"
                                    placeholder="e.g., San Francisco, CA"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                />
                                <p className="text-xs text-foreground/60">Where this department is primarily based</p>
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-foreground font-medium">
                                    Department Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="e.g., engineering@company.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-input border-border/50 text-foreground placeholder:text-foreground/40"
                                />
                                <p className="text-xs text-foreground/60">Contact email for the department</p>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-3 pt-6 border-t border-border/50">
                                <Button
                                    type="submit"
                                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-medium"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Creating Department...' : 'Create Department'}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.back()}
                                    className="w-full border-border/50 text-foreground hover:bg-foreground/5 bg-transparent py-6 text-base"
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>

                {/* Info Panel */}
                <div className="space-y-4">
                    <Card className="border-border/50 bg-card/50 backdrop-blur p-6 border-l-4 border-l-primary">
                        <h3 className="font-bold text-foreground mb-4">Tips for Creating a Department</h3>
                        <ul className="space-y-3 text-sm text-foreground/70">
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Choose a descriptive name that clearly identifies the department&apos;s function</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Assign a capable lead who can manage team members and delegate tasks</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Set a realistic budget based on team size and operational needs</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>Provide a clear description so team members understand the department&apos;s purpose</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span>You can add team members to the department after it&apos;s created</span>
                            </li>
                        </ul>
                    </Card>

                    <Card className="border-border/50 bg-card/50 backdrop-blur p-6">
                        <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary" />
                            Department Structure
                        </h3>
                        <div className="space-y-3 text-sm text-foreground/70">
                            <p>Each department can have:</p>
                            <ul className="space-y-2 pl-4">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    One department lead/manager
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Multiple team members
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Dedicated budget allocation
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    Unique communication channel
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
