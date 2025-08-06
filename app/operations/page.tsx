"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Cog, Server, Database, Shield, Activity, AlertTriangle, CheckCircle, Clock, HardDrive, Cpu, Wifi, Zap } from 'lucide-react'

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                运营管理
              </h1>
              <p className="text-gray-600 mt-2">系统监控与运维管理</p>
            </div>
            <Badge className="bg-green-100 text-green-700 border-green-300 px-4 py-2 font-medium">
              <Activity className="h-4 w-4 mr-2" />
              系统运行正常
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">CPU 使用率</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      23%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">正常范围</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">内存使用</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      67%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <HardDrive className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">8GB / 12GB</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">网络延迟</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      12ms
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <Wifi className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">网络良好</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">运行时间</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      15天
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">稳定运行</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Server className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    服务器状态
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Web服务器", status: "运行中", uptime: "99.9%", load: 23, color: "from-green-500 to-emerald-500" },
                  { name: "数据库服务器", status: "运行中", uptime: "99.8%", load: 45, color: "from-blue-500 to-cyan-500" },
                  { name: "缓存服务器", status: "运行中", uptime: "99.7%", load: 67, color: "from-yellow-500 to-amber-500" },
                  { name: "文件服务器", status: "维护中", uptime: "98.5%", load: 0, color: "from-red-500 to-pink-500" },
                ].map((server, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-gradient-to-r ${server.color} rounded-lg`}>
                          <Server className="h-4 w-4 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900">{server.name}</h4>
                      </div>
                      <Badge
                        className={
                          server.status === "运行中"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : "bg-red-100 text-red-700 border-red-300"
                        }
                      >
                        {server.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>负载</span>
                        <span>{server.load}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={server.load} className="h-2 bg-gray-200" />
                        <div
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${server.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${server.load}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>正常运行时间</span>
                        <span>{server.uptime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    系统警报
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    type: "警告",
                    message: "磁盘空间使用率超过80%",
                    time: "5分钟前",
                    severity: "medium",
                    resolved: false
                  },
                  {
                    type: "信息",
                    message: "系统备份已完成",
                    time: "1小时前",
                    severity: "low",
                    resolved: true
                  },
                  {
                    type: "错误",
                    message: "数据库连接超时",
                    time: "2小时前",
                    severity: "high",
                    resolved: true
                  },
                  {
                    type: "警告",
                    message: "内存使用率持续上升",
                    time: "3小时前",
                    severity: "medium",
                    resolved: false
                  },
                ].map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-1 rounded-full ${
                      alert.severity === "high" ? "bg-red-500" :
                      alert.severity === "medium" ? "bg-yellow-500" : "bg-blue-500"
                    }`}>
                      {alert.resolved ? (
                        <CheckCircle className="h-4 w-4 text-white" />
                      ) : (
                        <AlertTriangle className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge
                          className={
                            alert.type === "错误"
                              ? "bg-red-100 text-red-700 border-red-300"
                              : alert.type === "警告"
                              ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                              : "bg-blue-100 text-blue-700 border-blue-300"
                          }
                        >
                          {alert.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                      <p className="text-gray-700 text-sm">{alert.message}</p>
                      {alert.resolved && (
                        <p className="text-green-600 text-xs mt-1">已解决</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  性能指标
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-700">响应时间</h4>
                  <div className="space-y-3">
                    {[
                      { name: "API响应", value: 120, unit: "ms", target: 200, color: "from-green-500 to-emerald-500" },
                      { name: "数据库查询", value: 45, unit: "ms", target: 100, color: "from-blue-500 to-cyan-500" },
                      { name: "页面加载", value: 1.2, unit: "s", target: 2, color: "from-purple-500 to-indigo-500" },
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{metric.name}</span>
                          <span className="text-gray-600">{metric.value}{metric.unit}</span>
                        </div>
                        <div className="relative">
                          <Progress value={(metric.value / metric.target) * 100} className="h-2 bg-gray-200" />
                          <div
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${(metric.value / metric.target) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-700">吞吐量</h4>
                  <div className="space-y-3">
                    {[
                      { name: "请求/秒", value: 1250, target: 2000, color: "from-orange-500 to-red-500" },
                      { name: "事务/分钟", value: 890, target: 1000, color: "from-yellow-500 to-amber-500" },
                      { name: "并发用户", value: 156, target: 200, color: "from-pink-500 to-rose-500" },
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{metric.name}</span>
                          <span className="text-gray-600">{metric.value}</span>
                        </div>
                        <div className="relative">
                          <Progress value={(metric.value / metric.target) * 100} className="h-2 bg-gray-200" />
                          <div
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${(metric.value / metric.target) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-gray-700">资源使用</h4>
                  <div className="space-y-3">
                    {[
                      { name: "CPU", value: 23, unit: "%", color: "from-blue-500 to-cyan-500" },
                      { name: "内存", value: 67, unit: "%", color: "from-green-500 to-emerald-500" },
                      { name: "磁盘", value: 45, unit: "%", color: "from-purple-500 to-indigo-500" },
                    ].map((metric, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium text-gray-700">{metric.name}</span>
                          <span className="text-gray-600">{metric.value}{metric.unit}</span>
                        </div>
                        <div className="relative">
                          <Progress value={metric.value} className="h-2 bg-gray-200" />
                          <div
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${metric.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
