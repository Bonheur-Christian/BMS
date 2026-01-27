'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Mon", sales: 120 },
    { name: "Tue", sales: 180 },
    { name: "Wed", sales: 150 },
    { name: "Thu", sales: 220 },
    { name: "Fri", sales: 280 },
    { name: "Sat", sales: 200 },
    { name: "Sun", sales: 160 },
];

export function SalesChart() {
    return (
        <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold">Weekly Sales</CardTitle>
                <p className="text-sm text-muted-foreground">Daily sales performance this week</p>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
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
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "hsl(0, 0%, 100%)",
                                    border: "1px solid hsl(180, 20%, 90%)",
                                    borderRadius: "8px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                }}
                                cursor={{ fill: "hsl(175, 84%, 32%, 0.1)" }}
                            />
                            <Bar
                                dataKey="sales"
                                fill="hsl(175, 84%, 32%)"
                                radius={[6, 6, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
