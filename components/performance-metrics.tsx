"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Award } from 'lucide-react'

const metrics = [
  {
    title: "月度营收",
    value: "¥2,847,392",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-green-500 to-emerald-500",
    progress: 85,
  },
  {
    title: "活跃用户",
    value: "18,429",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    progress: 72,
  },
  {
    title: "目标完成率",
    value: "94.2%",
    change: "+5.1%",
    trend: "up",
    icon: Target,
    color: "from-purple-500 to-indigo-500",
    progress: 94,
  },
  {
    title: "客户满意度",
    value: "4.8/5.0",
    change: "-0.2%",
    trend: "down",
    icon: Award,
    color: "from-orange-500 to-red-500",
    progress: 96,
  },
]

export function PerformanceMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card 
          key={index} 
          className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {metric.title}
            </CardTitle>
            <div className={`p-2 bg-gradient-to-r ${metric.color} rounded-lg shadow-lg`}>
              <metric.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  metric.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  {metric.trend === "up" ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{metric.change}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>进度</span>
                  <span>{metric.progress}%</span>
                </div>
                <div className="relative">
                  <Progress value={metric.progress} className="h-2 bg-gray-200" />
                  <div
                    className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
