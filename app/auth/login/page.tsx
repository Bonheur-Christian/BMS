'use client'

import React from "react"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const router = useRouter()

    const validateForm = () => {
        if (!email || !password) {
            setError('All fields are required')
            return false
        }
        return true
    }

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if (!validateForm()) return

        setIsLoading(true)
        await new Promise(resolve => setTimeout(resolve, 1500))

        router.push('/portal/business-owner/dashboard')
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
                        <h1 className="text-4xl font-bold text-foreground mb-3">Welcome Back</h1>
                        <p className="text-muted-foreground">Sign in to your account to continue</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleLogin} className="space-y-5">
                        {/* Error Alert */}
                        {error && (
                            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex gap-3">
                                <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                                <p className="text-sm text-destructive">{error}</p>
                            </div>
                        )}

                        {/* Email Field */}
                        <div className="space-y-2">
                            <Label htmlFor="email">
                                Email Address
                            </Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                <Input
                                    autoFocus
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
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">
                                    Password
                                </Label>
                                <Link href="#" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
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

                        {/* Remember Me */}
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember"
                                checked={rememberMe}
                                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                            />
                            <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                                Remember me for 30 days
                            </label>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full gap-2 group py-6 text-base font-medium mt-8"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                            {!isLoading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />}
                        </Button>
                    </form>

                    {/* Signup Link */}
                    <p className="text-center text-muted-foreground mt-6">
                        Don&apos;t have an account?{' '}
                        <Link href="/auth/signup" className="text-primary hover:underline font-bold transition">
                            Create account
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
