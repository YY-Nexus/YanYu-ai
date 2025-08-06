"use client"

import { useState } from "react"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Target,
  TrendingUp,
  Clock,
  Eye,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Download,
  RefreshCw,
} from "lucide-react"
import { ChartTooltip } from "@/components/ui/chart"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("performance")
  const [isLoading, setIsLoading] = useState(false)

  // 核心业绩数据
  const performanceData = [
    { name: "1月", revenue: 120000, target: 100000, completion: 120 },
    { name: "2月", revenue: 98000, target: 100000, completion: 98 },
    { name: "3月", revenue: 135000, target: 120000, completion: 112.5 },
    { name: "4月", revenue: 142000, target: 130000, completion: 109.2 },
    { name: "5月", revenue: 158000, target: 140000, completion: 112.8 },
    { name: "6月", revenue: 175000, target: 150000, completion: 116.7 },
  ]

  // 营销数据
  const marketingData = [
    { channel: "线上推广", leads: 1250, conversion: 18.5, cost: 25000 },
    { channel: "社交媒体", leads: 890, conversion: 22.3, cost: 15000 },
    { channel: "邮件营销", leads: 650, conversion: 15.2, cost: 8000 },
    { channel: "线下活动", leads: 420, conversion: 35.8, cost: 30000 },
    { channel: "合作伙伴", leads: 380, conversion: 28.9, cost: 12000 },
  ]

  // 时间维度数据
  const timelineData = [
    { time: "09:00", activity: 45, efficiency: 78 },
    { time: "10:00", activity: 62, efficiency: 85 },
    { time: "11:00", activity: 78, efficiency: 92 },
    { time: "12:00", activity: 35, efficiency: 65 },
    { time: "13:00", activity: 28, efficiency: 58 },
    { time: "14:00", activity: 85, efficiency: 88 },
    { time: "15:00", activity: 92, efficiency: 95 },
    { time: "16:00", activity: 88, efficiency: 90 },
    { time: "17:00", activity: 75, efficiency: 82 },
    { time: "18:00", activity: 45, efficiency: 70 },
  ]

  // 饼图数据
  const pieData = [
    { name: "新客户", value: 35, color: "#10B981" },
    { name: "老客户", value: 45, color: "#3B82F6" },
    { name: "潜在客户", value: 20, color: "#F59E0B" },
  ]

  const handleRefresh = async () => {
    setIsLoading(true)
    // 模拟数据刷新
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <aside className="w-[120px] bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl transition-all duration-300 ease-out">
        <NarrowNavigation />
      </aside>

      <div className="flex-1 border-l border-slate-200 ml-[-1px] overflow-auto flex flex-col">
        <DashboardHeader />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* 页面标题 */}
            <div className="flex items-center justify-between animate-slide-in-left">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  业绩数字看板
                </h1>
                <p className="text-gray-600 mt-3 text-lg">实时监控核心指标，数据驱动业务决策</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent px-6 py-3 rounded-xl transition-all duration-300"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-5 h-5 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                  刷新数据
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  导出报表
                </Button>
              </div>
            </div>

            {/* 关键指标卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">总营收</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        ¥828,000
                      </p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-600 font-medium ml-1">+12.5%</span>
                      </div>
                    </div>
                    <div className="w-3 h-16 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full shadow-lg"></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">客户转化率</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        23.8%
                      </p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-600 font-medium ml-1">+3.2%</span>
                      </div>
                    </div>
                    <div className="w-3 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shadow-lg"></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">活跃用户</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        3,247
                      </p>
                      <div className="flex items-center mt-2">
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                        <span className="text-red-600 font-medium ml-1">-2.1%</span>
                      </div>
                    </div>
                    <div className="w-3 h-16 bg-gradient-to-b from-orange-500 to-red-500 rounded-full shadow-lg"></div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">目标完成率</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        112.3%
                      </p>
                      <div className="flex items-center mt-2">
                        <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                        <span className="text-emerald-600 font-medium ml-1">+8.7%</span>
                      </div>
                    </div>
                    <div className="w-3 h-16 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full shadow-lg"></div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 功能选项卡 */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
                <TabsTrigger
                  value="performance"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Target className="w-4 h-4 mr-2" />
                  核心业绩指标
                </TabsTrigger>
                <TabsTrigger
                  value="marketing"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  营销专项指标
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  时间维度分析
                </TabsTrigger>
                <TabsTrigger
                  value="visualization"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  可视化分析
                </TabsTrigger>
              </TabsList>

              {/* 核心业绩指标 */}
              <TabsContent value="performance" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          月度营收趋势
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">营收目标达成情况分析</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={performanceData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis dataKey="name" stroke="#6b7280" />
                            <YAxis stroke="#6b7280" />
                            <ChartTooltip />
                            <Line type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} name="实际营收" />
                            <Line
                              type="monotone"
                              dataKey="target"
                              stroke="#9ca3af"
                              strokeDasharray="5 5"
                              name="目标营收"
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                          <BarChart3 className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          目标完成率
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">各月份目标达成情况</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {performanceData.map((item, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-gray-700">{item.name}</span>
                              <div className="flex items-center space-x-3">
                                <span className="text-gray-600 font-medium">
                                  ¥{item.revenue.toLocaleString()} / ¥{item.target.toLocaleString()}
                                </span>
                                <Badge
                                  className={
                                    item.completion >= 100
                                      ? "bg-green-100 text-green-700 border-green-300"
                                      : "bg-orange-100 text-orange-700 border-orange-300"
                                  }
                                >
                                  {item.completion.toFixed(1)}%
                                </Badge>
                              </div>
                            </div>
                            <div className="relative">
                              <Progress value={Math.min(item.completion, 100)} className="h-3 bg-gray-100" />
                              <div
                                className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ease-out ${
                                  item.completion >= 100
                                    ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                    : "bg-gradient-to-r from-orange-500 to-red-500"
                                }`}
                                style={{ width: `${Math.min(item.completion, 100)}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 营销专项指标 */}
              <TabsContent value="marketing" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        营销渠道效果分析
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">各营销渠道的获客成本和转化效果</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left p-4 font-bold text-gray-700">营销渠道</th>
                            <th className="text-left p-4 font-bold text-gray-700">潜在客户</th>
                            <th className="text-left p-4 font-bold text-gray-700">转化率</th>
                            <th className="text-left p-4 font-bold text-gray-700">营销成本</th>
                            <th className="text-left p-4 font-bold text-gray-700">获客成本</th>
                            <th className="text-left p-4 font-bold text-gray-700">效果评级</th>
                          </tr>
                        </thead>
                        <tbody>
                          {marketingData.map((item, index) => {
                            const customerCost = Math.round(item.cost / ((item.leads * item.conversion) / 100))
                            const rating = item.conversion > 25 ? "优秀" : item.conversion > 20 ? "良好" : "一般"
                            const ratingColor =
                              item.conversion > 25
                                ? "bg-green-100 text-green-700 border-green-300"
                                : item.conversion > 20
                                  ? "bg-blue-100 text-blue-700 border-blue-300"
                                  : "bg-orange-100 text-orange-700 border-orange-300"

                            return (
                              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-gray-700">{item.channel}</td>
                                <td className="p-4 text-gray-600">{item.leads.toLocaleString()}</td>
                                <td className="p-4">
                                  <div className="flex items-center space-x-3">
                                    <span className="font-medium text-gray-700">{item.conversion}%</span>
                                    <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                                      <div
                                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                                        style={{ width: `${Math.min(item.conversion * 2, 100)}%` }}
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td className="p-4 text-gray-600">¥{item.cost.toLocaleString()}</td>
                                <td className="p-4 text-gray-600">¥{customerCost.toLocaleString()}</td>
                                <td className="p-4">
                                  <Badge className={`${ratingColor} font-medium`}>{rating}</Badge>
                                </td>
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 时间维度分析 */}
              <TabsContent value="timeline" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        工作效率时间分布
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">员工活跃度和工作效率的时间维度分析</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={timelineData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis dataKey="time" stroke="#6b7280" />
                          <YAxis stroke="#6b7280" />
                          <ChartTooltip />
                          <Bar dataKey="activity" fill="#10B981" name="活跃度" />
                          <Bar dataKey="efficiency" fill="#3B82F6" name="效率指数" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 可视化分析 */}
              <TabsContent value="visualization" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          客户结构分析
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">客户类型分布情况</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <ChartTooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                          <Activity className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          实时数据监控
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">关键指标实时状态</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                            <span className="font-medium text-gray-700">系统运行状态</span>
                          </div>
                          <Badge className="bg-emerald-100 text-emerald-700 border-emerald-300 font-medium">正常</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
                            <span className="font-medium text-gray-700">数据同步状态</span>
                          </div>
                          <Badge className="bg-blue-100 text-blue-700 border-blue-300 font-medium">同步中</Badge>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
                            <span className="font-medium text-gray-700">告警通知</span>
                          </div>
                          <Badge className="bg-orange-100 text-orange-700 border-orange-300 font-medium">
                            2条待处理
                          </Badge>
                        </div>

                        <div className="pt-6 border-t border-gray-200">
                          <div className="text-gray-600 font-medium mb-2">数据更新时间</div>
                          <div className="font-medium text-gray-700">{new Date().toLocaleString("zh-CN")}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
