"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { BarChart3, TrendingUp, TrendingDown, Users, DollarSign, Target, Eye, Clock, Award } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                数据分析
              </h1>
              <p className="text-gray-600 mt-2">深入了解业务表现和趋势</p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-300 px-4 py-2 font-medium">
              <TrendingUp className="h-4 w-4 mr-2" />
              数据实时更新
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">总收入</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ¥2,847K
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-green-600 font-semibold">+12.5%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">活跃用户</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      18,429
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-semibold">+8.2%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">转化率</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      24.8%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                  <span className="text-red-600 font-semibold">-2.1%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">页面浏览</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      156K
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-orange-600" />
                  <span className="text-orange-600 font-semibold">+15.3%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    部门业绩排名
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "销售部", value: 95, color: "from-green-500 to-emerald-500" },
                  { name: "市场部", value: 87, color: "from-blue-500 to-cyan-500" },
                  { name: "技术部", value: 82, color: "from-purple-500 to-indigo-500" },
                  { name: "客服部", value: 78, color: "from-orange-500 to-red-500" },
                  { name: "人事部", value: 71, color: "from-pink-500 to-rose-500" },
                ].map((dept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{dept.name}</span>
                      <span className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                        {dept.value}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={dept.value} className="h-3 bg-gray-200" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${dept.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${dept.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    重点关注指标
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      2.3s
                    </p>
                    <p className="text-gray-600 font-medium">平均响应时间</p>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      94.2%
                    </p>
                    <p className="text-gray-600 font-medium">目标完成率</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-700">本月亮点</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">新用户注册量增长 25%</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">客户满意度达到 4.8/5.0</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">移动端访问占比提升至 68%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
