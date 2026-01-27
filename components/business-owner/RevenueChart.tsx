'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Area,
    AreaChart,
} from "recharts";

const data = [
    { name: "Jan", revenue: 4000, orders: 240 },
    { name: "Feb", revenue: 3000, orders: 198 },
    { name: "Mar", revenue: 5000, orders: 320 },
    { name: "Apr", revenue: 4500, orders: 280 },
    { name: "May", revenue: 6000, orders: 390 },
    { name: "Jun", revenue: 5500, orders: 350 },
    { name: "Jul", revenue: 7000, orders: 420 },
    { name: "Aug", revenue: 6500, orders: 400 },
    { name: "Sep", revenue: 8000, orders: 500 },
    { name: "Oct", revenue: 7500, orders: 480 },
    { name: "Nov", revenue: 9000, orders: 560 },
    { name: "Dec", revenue: 8500, orders: 530 },
];

export function RevenueChart() {
    return (
        <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Revenue Overview</CardTitle>
                <p className="text-sm text-muted-foreground">Monthly revenue and order trends</p>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="hsl(175, 84%, 32%)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="hsl(175, 84%, 32%)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" className="stroke-border" vertical={false} />
                            <XAxis
                                dataKey="name"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "hsl(180, 10%, 45%)", fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "hsl(180, 10%, 45%)", fontSize: 12 }}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "hsl(0, 0%, 100%)",
                                    border: "1px solid hsl(180, 20%, 90%)",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                }}
                                formatter={(value: number | undefined) => [`$${value?.toLocaleString() ?? '0'}`, "Revenue"]}
                            />
                            <Area
                                type="monotone"
                                dataKey="revenue"
                                stroke="hsl(175, 84%, 32%)"
                                strokeWidth={2}
                                fill="url(#colorRevenue)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
