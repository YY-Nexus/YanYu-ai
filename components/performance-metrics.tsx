"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Users, Target, DollarSign, Activity } from "lucide-react"

export function PerformanceMetrics() {
  const metrics = [
    {
      title: "总营收",
      value: "¥2,847,392",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      gradientColor: "from-green-600 to-emerald-600",
    },
    {
      title: "活跃用户",
      value: "12,847",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      gradientColor: "from-blue-600 to-cyan-600",
    },
    {
      title: "目标完成率",
      value: "87.3%",
      change: "+5.1%",
      trend: "up",
      icon: Target,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      gradientColor: "from-purple-600 to-indigo-600",
    },
    {
      title: "系统性能",
      value: "99.8%",
      change: "-0.2%",
      trend: "down",
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      gradientColor: "from-orange-600 to-red-600",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-white/90 backdrop-blur-sm shadow-lg"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{metric.title}</CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div
                className={`text-2xl font-bold bg-gradient-to-r ${metric.gradientColor} bg-clip-text text-transparent`}
              >
                {metric.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={metric.trend === "up" ? "default" : "secondary"}
                  className={`${
                    metric.trend === "up"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-red-100 text-red-800 hover:bg-red-100"
                  }`}
                >
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 mr-1" />
                  )}
                  {metric.change}
                </Badge>
                <span className="text-xs text-gray-500">vs 上月</span>
              </div>
              {metric.title === "目标完成率" && (
                <div className="relative">
                  <Progress value={87.3} className="h-2 bg-gray-200" />
                  <div
                    className="absolute top-0 left-0 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "87.3%" }}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
