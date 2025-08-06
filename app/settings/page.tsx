"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Heart, Shield, Cog, Smartphone, Database, FileText, Server, Clock, HardDrive, Activity, Download, RefreshCw, AlertTriangle, Sparkles } from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("health")
  const [autoBackup, setAutoBackup] = useState(true)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="flex h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* 侧边导航 */}
      <div className="w-20 bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl">
        <NarrowNavigation />
      </div>

      {/* 主内容区域 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航 */}
        <DashboardHeader />

        {/* 主要内容 */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* 页面标题 */}
            <div className="flex items-center justify-between animate-slide-in-left">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <Cog className="h-8 w-8 text-white" />
                  </div>
                  系统设置中心
                </h1>
                <p className="text-gray-600 mt-3 text-lg">YanYu Cloud 系统配置与管理</p>
              </div>
              <div className="flex items-center space-x-4">
                <Badge className="bg-green-100 text-green-700 border-green-300 px-4 py-2 font-medium">
                  <Activity className="h-4 w-4 mr-2" />
                  系统正常
                </Badge>
              </div>
            </div>

            {/* 系统状态概览 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">系统版本</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        v2.1.3
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                      <Cog className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 text-gray-500 font-medium">最新稳定版本</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">运行时间</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        15天
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 text-gray-500 font-medium">系统稳定运行</div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">存储使用</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        68%
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                      <HardDrive className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="relative">
                      <Progress value={68} className="h-3 bg-gray-200" />
                      <div
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "68%" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 主要内容区域 */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
                <TabsTrigger
                  value="health"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  健康助理
                </TabsTrigger>
                <TabsTrigger
                  value="security"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  秘钥管理
                </TabsTrigger>
                <TabsTrigger
                  value="config"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Cog className="h-4 w-4 mr-2" />
                  系统配置
                </TabsTrigger>
                <TabsTrigger
                  value="apps"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Smartphone className="h-4 w-4 mr-2" />
                  应用下载
                </TabsTrigger>
              </TabsList>

              <TabsContent value="health" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                          员工健康管理
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="health-notifications" className="font-medium text-gray-700">
                            健康提醒通知
                          </Label>
                          <Switch
                            id="health-notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-pink-500 data-[state=checked]:to-rose-500"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="break-reminders" className="font-medium text-gray-700">
                            休息提醒
                          </Label>
                          <Switch
                            id="break-reminders"
                            defaultChecked
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-cyan-500"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="exercise-tracking" className="font-medium text-gray-700">
                            运动跟踪
                          </Label>
                          <Switch
                            id="exercise-tracking"
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-lg text-gray-700">健康数据统计</h4>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                            <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                              92%
                            </p>
                            <p className="text-gray-600 font-medium">健康指数</p>
                          </div>
                          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                            <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                              8.2h
                            </p>
                            <p className="text-gray-600 font-medium">平均睡眠</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          健康建议
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300">
                          <div className="flex items-start space-x-4">
                            <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1" />
                            <div>
                              <h4 className="font-bold text-yellow-800 mb-2">工作时间提醒</h4>
                              <p className="text-yellow-700 font-medium">
                                建议每工作1小时休息10分钟，保护视力和身体健康
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-bold text-lg text-gray-700">今日健康任务</h4>
                          <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded w-5 h-5" defaultChecked />
                              <span className="font-medium text-gray-700">喝水 8 杯 (已完成 6/8)</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded w-5 h-5" />
                              <span className="font-medium text-gray-700">站立休息 5 次</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <input type="checkbox" className="rounded w-5 h-5" />
                              <span className="font-medium text-gray-700">眼部放松练习</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                          <Shield className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          API 秘钥管理
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="api-key" className="font-medium text-gray-700">
                            主 API 秘钥
                          </Label>
                          <div className="flex space-x-3 mt-2">
                            <Input
                              id="api-key"
                              type="password"
                              value="yk_live_••••••••••••••••"
                              readOnly
                              className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent rounded-lg"
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="webhook-secret" className="font-medium text-gray-700">
                            Webhook 密钥
                          </Label>
                          <div className="flex space-x-3 mt-2">
                            <Input
                              id="webhook-secret"
                              type="password"
                              value="whsec_••••••••••••••••"
                              readOnly
                              className="flex-1 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent rounded-lg"
                            >
                              <RefreshCw className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-bold text-lg text-gray-700 mb-4">安全设置</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <Label htmlFor="two-factor" className="font-medium text-gray-700">
                              双因素认证
                            </Label>
                            <Switch
                              id="two-factor"
                              defaultChecked
                              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500"
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="ip-whitelist" className="font-medium text-gray-700">
                              IP 白名单
                            </Label>
                            <Switch
                              id="ip-whitelist"
                              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-orange-500 data-[state=checked]:to-red-500"
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <Label htmlFor="session-timeout" className="font-medium text-gray-700">
                              会话超时
                            </Label>
                            <Switch
                              id="session-timeout"
                              defaultChecked
                              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-purple-500 data-[state=checked]:to-indigo-500"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                          <FileText className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          安全日志
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { time: "2024-01-15 14:30", event: "API 密钥更新", status: "成功", color: "from-green-500 to-emerald-500" },
                          { time: "2024-01-15 10:15", event: "登录验证", status: "成功", color: "from-blue-500 to-cyan-500" },
                          { time: "2024-01-14 16:45", event: "权限变更", status: "成功", color: "from-purple-500 to-indigo-500" },
                          { time: "2024-01-14 09:20", event: "异常登录尝试", status: "已阻止", color: "from-red-500 to-pink-500" },
                          },
                          { time: "2024-01-14 09:20", event: "异常登录尝试", status: "已阻止", color: "from-red-500 to-pink-500" },
                        ].map((log, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                          >
                            <div>
                              <p className="font-bold text-gray-700">{log.event}</p>
                              <p className="text-gray-600 font-medium">{log.time}</p>
                            </div>
                            <Badge
                              className={
                                log.status === "成功"
                                  ? "bg-green-100 text-green-700 border-green-300 font-medium"
                                  : "bg-red-100 text-red-700 border-red-300 font-medium"
                              }
                            >
                              {log.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="config" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                          <Server className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                          系统信息
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <Label className="text-gray-600 font-medium">部署环境</Label>
                          <p className="font-bold text-gray-700">生产环境</p>
                        </div>
                        <div>
                          <Label className="text-gray-600 font-medium">服务器时间</Label>
                          <p className="font-bold text-gray-700">2024-01-15 15:30:45</p>
                        </div>
                        <div>
                          <Label className="text-gray-600 font-medium">运行时间</Label>
                          <p className="font-bold text-gray-700">15天 8小时</p>
                        </div>
                        <div>
                          <Label className="text-gray-600 font-medium">数据库版本</Label>
                          <p className="font-bold text-gray-700">PostgreSQL 15.2</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-lg text-gray-700">系统资源</h4>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">CPU 使用率</span>
                            <span className="font-bold text-lg text-blue-600">23%</span>
                          </div>
                          <div className="relative">
                            <Progress value={23} className="h-3 bg-gray-200" />
                            <div
                              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: "23%" }}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">内存使用率</span>
                            <span className="font-bold text-lg text-green-600">67%</span>
                          </div>
                          <div className="relative">
                            <Progress value={67} className="h-3 bg-gray-200" />
                            <div
                              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: "67%" }}
                            />
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">磁盘使用率</span>
                            <span className="font-bold text-lg text-orange-600">45%</span>
                          </div>
                          <div className="relative">
                            <Progress value={45} className="h-3 bg-gray-200" />
                            <div
                              className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: "45%" }}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                          <Database className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          数据备份
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="auto-backup" className="font-medium text-gray-700">
                            自动备份
                          </Label>
                          <Switch
                            id="auto-backup"
                            checked={autoBackup}
                            onCheckedChange={setAutoBackup}
                            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500"
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="backup-frequency" className="font-medium text-gray-700">
                            备份频率
                          </Label>
                          <select className="px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-medium focus:border-green-400">
                            <option>每日</option>
                            <option>每周</option>
                            <option>每月</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-bold text-lg text-gray-700">备份历史</h4>
                        <div className="space-y-3">
                          {[
                            { date: "2024-01-15", size: "2.3 GB", status: "成功", color: "from-green-500 to-emerald-500" },
                            { date: "2024-01-14", size: "2.1 GB", status: "成功", color: "from-blue-500 to-cyan-500" },
                            { date: "2024-01-13", size: "2.0 GB", status: "成功", color: "from-purple-500 to-indigo-500" },
                          ].map((backup, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                            >
                              <div>
                                <p className="font-bold text-gray-700">{backup.date}</p>
                                <p className="text-gray-600 font-medium">{backup.size}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Badge className="bg-green-100 text-green-700 border-green-300 font-medium">
                                  {backup.status}
                                </Badge>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 bg-transparent rounded-lg"
                                >
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        立即备份
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        系统日志
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { time: "15:30:45", level: "INFO", message: "YanYu Cloud 系统启动完成", color: "from-blue-500 to-cyan-500" },
                        { time: "15:29:12", level: "INFO", message: "数据库连接已建立", color: "from-green-500 to-emerald-500" },
                        { time: "15:28:33", level: "WARN", message: "磁盘空间使用率较高", color: "from-yellow-500 to-amber-500" },
                        { time: "15:27:01", level: "INFO", message: "用户认证服务启动", color: "from-purple-500 to-indigo-500" },
                        { time: "15:26:45", level: "INFO", message: "API 服务启动", color: "from-pink-500 to-rose-500" },
                      ].map((log, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl font-mono hover:shadow-lg transition-all duration-300"
                        >
                          <span className="text-gray-600 font-medium">{log.time}</span>
                          <Badge
                            className={
                              log.level === "INFO"
                                ? "bg-blue-100 text-blue-700 border-blue-300 font-medium"
                                : log.level === "WARN"
                                  ? "bg-yellow-100 text-yellow-700 border-yellow-300 font-medium"
                                  : "bg-red-100 text-red-700 border-red-300 font-medium"
                            }
                          >
                            {log.level}
                          </Badge>
                          <span className="flex-1 text-gray-700 font-medium">{log.message}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="apps" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "YanYu Cloud Mobile",
                      platform: "iOS",
                      version: "v2.1.0",
                      size: "45.2 MB",
                      icon: "📱",
                      description: "YanYu Cloud 移动端应用，随时随地管理您的业务",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      name: "YanYu Cloud Mobile",
                      platform: "Android",
                      version: "v2.1.0",
                      size: "38.7 MB",
                      icon: "🤖",
                      description: "YanYu Cloud 安卓版本，功能完整的移动办公解决方案",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      name: "YanYu Desktop",
                      platform: "Windows",
                      version: "v1.5.2",
                      size: "125.8 MB",
                      icon: "💻",
                      description: "YanYu Cloud 桌面版，提供更强大的功能和更好的体验",
                      color: "from-purple-500 to-indigo-500",
                    },
                    {
                      name: "YanYu Desktop",
                      platform: "macOS",
                      version: "v1.5.2",
                      size: "118.3 MB",
                      icon: "🍎",
                      description: "专为 Mac 用户优化的 YanYu Cloud 桌面应用",
                      color: "from-orange-500 to-red-500",
                    },
                    {
                      name: "YanYu CLI Tools",
                      platform: "命令行",
                      version: "v0.8.1",
                      size: "12.5 MB",
                      icon: "⚡",
                      description: "开发者工具包，支持自动化部署和管理",
                      color: "from-yellow-500 to-amber-500",
                    },
                    {
                      name: "YanYu Browser Extension",
                      platform: "浏览器插件",
                      version: "v1.2.0",
                      size: "2.1 MB",
                      icon: "🔌",
                      description: "浏览器扩展，快速访问 YanYu Cloud 功能",
                      color: "from-pink-500 to-rose-500",
                    },
                  ].map((app, index) => (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-4xl">{app.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-gray-700">{app.name}</h3>
                            <div className="flex items-center space-x-3 mt-2">
                              <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300 font-medium">
                                {app.platform}
                              </Badge>
                              <span className="text-gray-600 font-medium">{app.version}</span>
                            </div>
                            <p className="text-gray-600 font-medium mt-3">{app.description}</p>
                            <div className="flex items-center justify-between mt-6">
                              <span className="text-gray-500 font-medium">{app.size}</span>
                              <Button
                                size="sm"
                                className={`bg-gradient-to-r ${app.color} hover:shadow-lg text-white rounded-lg`}
                              >
                                <Download className="h-4 w-4 mr-2" />
                                下载
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
