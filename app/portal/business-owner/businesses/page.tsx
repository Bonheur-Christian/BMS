'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Plus, Building2, MoreVertical } from 'lucide-react'
import Link from 'next/link'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export default function BusinessesPage() {
    const businesses = [
        {
            id: 1,
            name: 'Tech Startup Inc',
            industry: 'Software Development',
            employees: 24,
            departments: 4,
            status: 'Active',
            founded: '2022',
            revenue: '$2.5M',
        },
        {
            id: 2,
            name: 'Digital Marketing Co',
            industry: 'Marketing & Advertising',
            employees: 12,
            departments: 2,
            status: 'Active',
            founded: '2023',
            revenue: '$450K',
        },
        {
            id: 3,
            name: 'Consulting Group',
            industry: 'Business Consulting',
            employees: 8,
            departments: 1,
            status: 'Active',
            founded: '2023',
            revenue: '$1.2M',
        },
    ]

    return (
        <div className="p-6 space-y-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">Businesses</h1>
                    <p className="text-foreground/60">Manage all your business entities in one place</p>
                </div>
                <Link href="businesses/create">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                        <Plus className="w-4 h-4" />
                        New Business
                    </Button>
                </Link>
            </div>

            {/* Businesses Grid */}
            <div className="grid gap-6">
                {businesses.map((business) => (
                    <Link key={business.id} href={`businesses/${business.id}`}>
                        <Card className="border-border/50 bg-card/50 backdrop-blur p-6 hover:border-primary/50 hover:bg-card/80 transition-all cursor-pointer group">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 rounded-lg bg-primary/10">
                                            <Building2 className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {business.name}
                                            </h3>
                                            <p className="text-sm text-foreground/60 mt-1">{business.industry}</p>
                                        </div>
                                    </div>

                                    {/* Business Stats */}
                                    <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-border/50">
                                        <div>
                                            <p className="text-xs text-foreground/60">Employees</p>
                                            <p className="text-lg font-bold text-foreground mt-1">{business.employees}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-foreground/60">Departments</p>
                                            <p className="text-lg font-bold text-foreground mt-1">{business.departments}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-foreground/60">Founded</p>
                                            <p className="text-lg font-bold text-foreground mt-1">{business.founded}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-foreground/60">Revenue</p>
                                            <p className="text-lg font-bold text-accent mt-1">{business.revenue}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-foreground">
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">Edit Settings</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer">View Analytics</DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer text-destructive">Archive</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
