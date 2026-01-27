import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar, Download, RefreshCw } from "lucide-react";
import { StatCard } from "@/components/business-owner/StatCard";
import { RevenueChart } from "@/components/business-owner/RevenueChart";
import { SalesChart } from "@/components/business-owner/SalesChart";
import { RecentTransactions } from "@/components/business-owner/RecentTransactions";

const stats = [
    {
        title: "Total Revenue",
        value: "$84,254",
        change: "+12.5%",
        changeType: "positive" as const,
        icon: DollarSign,
    },
    {
        title: "Active Users",
        value: "12,847",
        change: "+8.2%",
        changeType: "positive" as const,
        icon: Users,
    },
    {
        title: "Total Orders",
        value: "3,642",
        change: "-2.4%",
        changeType: "negative" as const,
        icon: ShoppingCart,
    },
    {
        title: "Growth Rate",
        value: "24.8%",
        change: "+4.1%",
        changeType: "positive" as const,
        icon: TrendingUp,
    },
];

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="mx-auto w-[95%] px-4 py-8 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground">Analytics</h1>
                        <p className="mt-1 text-muted-foreground">
                            Track your business performance and growth metrics
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="outline" size="sm" className="gap-2">
                            <Calendar className="h-4 w-4" />
                            Last 30 days
                        </Button>
                        <Button variant="outline" size="sm" className="gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Refresh
                        </Button>
                        <Button size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>
                {/* Stats Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard key={stat.title} {...stat} />
                    ))}
                </div>

                {/* Charts Row */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <RevenueChart />
                    <SalesChart />
                </div>

                {/* Bottom Row */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <RecentTransactions />
                </div>
            </div>
        </div>
    );
};

export default Index;
