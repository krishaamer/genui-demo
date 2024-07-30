/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ihh54BKKMvY
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Badge } from "@/components/ui/badge"
import { ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"
import { Pie, PieChart, CartesianGrid, XAxis, Line, LineChart } from "recharts"

export function Balance() {
  const transactions = [
    {
      id: 1,
      date: "2024-06-15",
      merchant: "亞馬遜",
      amount: -1650.0,
      category: "購物",
      esgRating: "B",
    },
    {
      id: 2,
      date: "2024-06-12",
      merchant: "星巴克",
      amount: -127.5,
      category: "餐飲",
      esgRating: "A",
    },
    {
      id: 3,
      date: "2024-06-10",
      merchant: "租金",
      amount: -36000.0,
      category: "住房",
      esgRating: "N/A",
    },
    {
      id: 4,
      date: "2024-06-08",
      merchant: "薪資",
      amount: 75000.0,
      category: "收入",
      esgRating: "N/A",
    },
    {
      id: 5,
      date: "2024-06-05",
      merchant: "超市",
      amount: -3761.1,
      category: "購物",
      esgRating: "C",
    },
  ]
  const income = transactions.filter((tx) => tx.amount > 0).reduce((total, tx) => total + tx.amount, 0)
  const expenses = transactions.filter((tx) => tx.amount < 0).reduce((total, tx) => total + tx.amount, 0)
  const balance = income + expenses
  const esgRatings = transactions.reduce((ratings, tx) => {
    if (tx.esgRating !== "N/A") {
      if (!ratings[tx.esgRating]) {
        ratings[tx.esgRating] = 0
      }
      ratings[tx.esgRating]++
    }
    return ratings
  }, {})
  const savings = balance - expenses
  return (
    <div className="grid min-h-screen w-full bg-muted/40 p-4 sm:p-6 md:grid-cols-[280px_1fr] md:gap-6">
      <div className="flex flex-col gap-6">
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">帳戶餘額</div>
          <div className="mb-2 text-4xl font-bold">NT${balance.toFixed(2)}</div>
          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
            <div>
              <div>收入</div>
              <div>NT${income.toFixed(2)}</div>
            </div>
            <div>
              <div>支出</div>
              <div>NT${Math.abs(expenses).toFixed(2)}</div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">最近交易</div>
          <div className="grid gap-4">
            {transactions.map((tx) => (
              <div key={tx.id} className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="grid gap-1">
                  <div className="font-medium">{tx.merchant}</div>
                  <div className="text-sm text-muted-foreground">{tx.date}</div>
                  {tx.esgRating !== "N/A" && (
                    <Badge
                      variant="outline"
                      className={`border-${
                        tx.esgRating === "A" ? "green-600" : tx.esgRating === "B" ? "yellow-600" : "red-600"
                      } bg-background`}
                    >
                      <CircleXIcon
                        className={`h-3 w-3 -translate-x-1 animate-pulse fill-${
                          tx.esgRating === "A" ? "green-300" : tx.esgRating === "B" ? "yellow-300" : "red-300"
                        } text-${tx.esgRating === "A" ? "green-300" : tx.esgRating === "B" ? "yellow-300" : "red-300"}`}
                      />
                      {tx.esgRating}
                    </Badge>
                  )}
                </div>
                <div
                  className={`rounded-md px-2 py-1 text-sm font-medium ${
                    tx.amount > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                  }`}
                >
                  NT${tx.amount.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">儲蓄</div>
          <div className="mb-2 text-4xl font-bold">NT${savings.toFixed(2)}</div>
          <p className="text-muted-foreground">
            這是您的淨儲蓄額,即您的帳戶餘額減去您的支出。這筆錢可以用來投資、存款或應急基金。
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">支出明細</div>
          <PiechartcustomChart className="aspect-square" />
        </div>
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">收入與支出</div>
          <LinechartChart className="aspect-[9/4]" />
        </div>
        <div className="rounded-lg bg-background p-6 shadow">
          <div className="mb-4 text-2xl font-bold">ESG評級解釋</div>
          <div className="grid gap-4">
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-green-600 bg-background">
                <CircleIcon className="h-3 w-3 -translate-x-1 animate-pulse fill-green-300 text-green-300" />
                A
              </Badge>
              <p>高ESG評級(A)表示該公司在環境、社會和治理方面有強大的實踐,使其成為更可持續和負責任的投資。</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-yellow-600 bg-background">
                <TriangleIcon className="h-3 w-3 -translate-x-1 animate-pulse fill-yellow-300 text-yellow-300" />
                B
              </Badge>
              <p>中等ESG評級(B)表示該公司在環境、社會和治理方面有一些積極的實踐,但仍有改進空間。</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-red-600 bg-background">
                <XIcon className="h-3 w-3 -translate-x-1 animate-pulse fill-red-300 text-red-300" />
                C
              </Badge>
              <p>低ESG評級(C)表示該公司在環境、社會和治理方面的實踐較弱,可能是一項不太可持續的投資。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  )
}


function CircleXIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}


function LinechartChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Line dataKey="desktop" type="natural" stroke="var(--color-desktop)" strokeWidth={2} dot={false} />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function PiechartcustomChart(props) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          visitors: {
            label: "Visitors",
          },
          chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
          },
          safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
          },
          firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
          },
          edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
          },
          other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
          },
        }}
      >
        <PieChart>
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Pie
            data={[
              { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
              { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
              { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
              { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
              { browser: "other", visitors: 90, fill: "var(--color-other)" },
            ]}
            dataKey="visitors"
            nameKey="browser"
          />
        </PieChart>
      </ChartContainer>
    </div>
  )
}


function TriangleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
