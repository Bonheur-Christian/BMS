import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function StatCard({ title, value, change, changeType, icon: Icon }: StatCardProps) {
  return (
    <Card className="group relative overflow-hidden border-0 bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "text-sm font-medium",
                  changeType === "positive" && "text-success",
                  changeType === "negative" && "text-destructive",
                  changeType === "neutral" && "text-muted-foreground"
                )}
              >
                {change}
              </span>
              <span className="text-sm text-muted-foreground">vs last month</span>
            </div>
          </div>
          <div className="rounded-xl bg-primary/10 p-3 transition-colors duration-300 group-hover:bg-primary/20">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
