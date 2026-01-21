'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Mail, Lock, User, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function SignupPage() {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [agreeTerms, setAgreeTerms] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const validateForm = () => {
        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required')
            return false
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match')
            return false
        }
        if (password.length < 8) {
            setError('Password must be at least 8 characters')
            return false
        }
        if (!agreeTerms) {
            setError('You must agree to the terms and conditions')
            return false
        }
        return true
    }

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!validateForm()) return

        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-1/2 bg-background flex flex-col justify-between p-8 lg:p-12">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/bms-logo.png"
                        alt="BMS logo"
                        width={90}
                        height={90}
                    />
                    <div className="flex flex-col leading-tight ms-[-3.5rem]">
                        <span className="text-lg font-bold text-foreground">
                            BMS
                        </span>
                        <span className="text-xs text-muted-foreground">
                            Business Management Platform
                        </span>
                    </div>
                </Link>

                {/* Form Content */}
                <div className="w-full max-w-sm mx-auto">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-foreground mb-3">Create Account</h1>
                        <p className="text-muted-foreground">Join thousands of businesses using BMS</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-5">
                        {/* Error Alert */}
                        {error && (
                            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex gap-3">
                                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-destructive">{error}</p>
                            </div>
                        )}

                        {/* Full Name Field */}
                        <div className="space-y-2">
                            <Label htmlFor="fullname">
                                Full Name
                            </Label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    autoFocus
                                    id="fullname"
                                    type="text"
                                    placeholder="John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    className="pl-10 border border-primary/40"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-10 border-primary/40"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-10 pr-10 border-primary/40"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">
                                Confirm Password
                            </Label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    id="confirmPassword"
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="pl-10 pr-10 border-primary/40"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start gap-3 pt-2">
                            <Checkbox
                                id="terms"
                                checked={agreeTerms}
                                onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                                className="mt-1"
                            />
                            <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                                I agree to the{' '}
                                <Link href="#" className="text-primary hover:underline font-medium">
                                    Terms of Service
                                </Link>{' '}
                                and{' '}
                                <Link href="#" className="text-primary hover:underline font-medium">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full gap-2 group py-6 text-base font-medium mt-8"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Creating account...' : 'Create Account'}
                            {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />}
                        </Button>
                    </form>

                    {/* Login Link */}
                    <p className="text-center text-muted-foreground mt-6">
                        Already have an account?{' '}
                        <Link href="/auth/login" className="text-primary hover:underline font-bold transition">
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* Bottom spacing */}
                <div />
            </div>

            {/* Right Side - Marketing */}
            <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 flex-col justify-center items-start p-12 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl -z-10" />

                {/* Content */}
                <div className="relative z-10 max-w-md">
                    <h2 className="text-5xl font-bold text-white mb-4 leading-tight">
                        Manage your business from anywhere
                    </h2>
                    <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                        Track inventory, manage workers, assign tasks, and monitor operations all in one place.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/30 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                            </div>
                            <span className="text-teal-50 font-medium">Real-time inventory tracking</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/30 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                            </div>
                            <span className="text-teal-50 font-medium">Role-based worker management</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-600/30 flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                            </div>
                            <span className="text-teal-50 font-medium">Complete audit trails</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
