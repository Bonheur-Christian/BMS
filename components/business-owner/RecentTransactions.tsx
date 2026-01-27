import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const transactions = [
  {
    id: 1,
    customer: "Sarah Johnson",
    email: "sarah.j@email.com",
    amount: "$1,250.00",
    status: "completed",
    date: "2 min ago",
  },
  {
    id: 2,
    customer: "Michael Chen",
    email: "m.chen@email.com",
    amount: "$890.00",
    status: "pending",
    date: "15 min ago",
  },
  {
    id: 3,
    customer: "Emily Davis",
    email: "emily.d@email.com",
    amount: "$2,100.00",
    status: "completed",
    date: "1 hour ago",
  },
  {
    id: 4,
    customer: "James Wilson",
    email: "j.wilson@email.com",
    amount: "$450.00",
    status: "completed",
    date: "2 hours ago",
  },
  {
    id: 5,
    customer: "Lisa Anderson",
    email: "l.anderson@email.com",
    amount: "$3,200.00",
    status: "failed",
    date: "3 hours ago",
  },
];

export function RecentTransactions() {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold">Recent Transactions</CardTitle>
        <p className="text-sm text-muted-foreground">Latest customer transactions</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-medium">
                  {transaction.customer
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-foreground">{transaction.customer}</p>
                <p className="text-sm text-muted-foreground">{transaction.email}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-foreground">{transaction.amount}</p>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    transaction.status === "completed"
                      ? "default"
                      : transaction.status === "pending"
                      ? "secondary"
                      : "destructive"
                  }
                  className={
                    transaction.status === "completed"
                      ? "bg-success/10 text-success hover:bg-success/20"
                      : transaction.status === "pending"
                      ? "bg-warning/10 text-warning hover:bg-warning/20"
                      : ""
                  }
                >
                  {transaction.status}
                </Badge>
                <span className="text-xs text-muted-foreground">{transaction.date}</span>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
