"use client"

import { useState } from "react"
import { DashboardHeader } from "@/components/dashboard-header"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, Shield, Calendar, FileText, Database, Search, Plus, MoreHorizontal, Building2, UserCheck, Clock, TrendingUp, Sparkles } from 'lucide-react'

export default function OperationsPage() {
  const [activeTab, setActiveTab] = useState("organization")

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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  运营管理中心
                </h1>
                <p className="text-gray-600 mt-3 text-lg">YanYu Cloud 企业运营全流程管理</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Plus className="h-5 w-5 mr-2" />
                新建任务
              </Button>
            </div>

            {/* 统计卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">总员工数</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        156
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-green-600 font-medium">+12%</span>
                    <span className="text-gray-500 ml-1">vs 上月</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">活跃部门</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        8
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-500">运营效率</span>
                    <span className="text-green-600 font-medium ml-2">98.5%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">待审批</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        23
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-orange-600 font-medium">需要处理</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-600 font-medium mb-2">在线用户</p>
                      <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        89
                      </p>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                      <UserCheck className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <span className="text-gray-500">在线率</span>
                    <span className="text-purple-600 font-medium ml-2">57%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 主要内容区域 */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
                <TabsTrigger
                  value="organization"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  组织架构
                </TabsTrigger>
                <TabsTrigger
                  value="employees"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Users className="h-4 w-4 mr-2" />
                  员工管理
                </TabsTrigger>
                <TabsTrigger
                  value="permissions"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Shield className="h-4 w-4 mr-2" />
                  权限管理
                </TabsTrigger>
                <TabsTrigger
                  value="schedule"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  考勤排班
                </TabsTrigger>
                <TabsTrigger
                  value="documents"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-rose-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  文档中心
                </TabsTrigger>
                <TabsTrigger
                  value="data"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Database className="h-4 w-4 mr-2" />
                  个人数据
                </TabsTrigger>
              </TabsList>

              <TabsContent value="organization" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                        组织架构管理
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              placeholder="搜索部门..."
                              className="pl-10 w-64 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
                            />
                          </div>
                          <Button
                            variant="outline"
                            className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent rounded-lg"
                          >
                            <Search className="h-4 w-4 mr-2" />
                            搜索
                          </Button>
                        </div>
                        <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-lg shadow-lg">
                          <Plus className="h-4 w-4 mr-2" />
                          新建部门
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                          { name: "技术部", members: 32, manager: "李技术", status: "active", color: "from-blue-500 to-cyan-500" },
                          { name: "产品部", members: 18, manager: "王产品", status: "active", color: "from-green-500 to-emerald-500" },
                          { name: "运营部", members: 24, manager: "张运营", status: "active", color: "from-purple-500 to-indigo-500" },
                          { name: "市场部", members: 15, manager: "刘市场", status: "active", color: "from-orange-500 to-red-500" },
                          { name: "人事部", members: 8, manager: "陈人事", status: "active", color: "from-pink-500 to-rose-500" },
                          { name: "财务部", members: 6, manager: "赵财务", status: "active", color: "from-yellow-500 to-amber-500" },
                        ].map((dept, index) => (
                          <Card
                            key={index}
                            className="hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-gray-50 to-gray-100 hover:scale-105"
                          >
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-xl text-gray-700">{dept.name}</h3>
                                <Badge className="bg-green-100 text-green-700 border-green-300 font-medium">
                                  正常运营
                                </Badge>
                              </div>
                              <div className="space-y-3 text-gray-600 font-medium">
                                <div className="flex justify-between">
                                  <span>部门人数:</span>
                                  <span className="font-bold text-gray-700">{dept.members}人</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>部门负责人:</span>
                                  <span className="font-bold text-gray-700">{dept.manager}</span>
                                </div>
                              </div>
                              <div className="mt-6 flex justify-between items-center">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent rounded-lg"
                                >
                                  查看详情
                                </Button>
                                <Button
                                  size="sm"
                                  className={`bg-gradient-to-r ${dept.color} hover:shadow-lg text-white rounded-lg`}
                                >
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="employees" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                        员工信息管理
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              placeholder="搜索员工..."
                              className="pl-10 w-64 border-2 border-gray-200 focus:border-green-400 rounded-lg"
                            />
                          </div>
                          <Button
                            variant="outline"
                            className="border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 bg-transparent rounded-lg"
                          >
                            筛选
                          </Button>
                        </div>
                        <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg shadow-lg">
                          <Plus className="h-4 w-4 mr-2" />
                          添加员工
                        </Button>
                      </div>

                      <div className="space-y-4">
                        {[
                          {
                            name: "张小明",
                            dept: "技术部",
                            role: "前端工程师",
                            status: "在线",
                            avatar: "/placeholder.svg?height=40&width=40",
                            color: "from-green-500 to-emerald-500",
                          },
                          {
                            name: "李小红",
                            dept: "产品部",
                            role: "产品经理",
                            status: "离线",
                            avatar: "/placeholder.svg?height=40&width=40",
                            color: "from-gray-400 to-gray-600",
                          },
                          {
                            name: "王小强",
                            dept: "运营部",
                            role: "运营专员",
                            status: "在线",
                            avatar: "/placeholder.svg?height=40&width=40",
                            color: "from-blue-500 to-cyan-500",
                          },
                          {
                            name: "刘小美",
                            dept: "市场部",
                            role: "市场推广",
                            status: "忙碌",
                            avatar: "/placeholder.svg?height=40&width=40",
                            color: "from-yellow-500 to-amber-500",
                          },
                        ].map((employee, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                          >
                            <div className="flex items-center space-x-6">
                              <Avatar className="h-16 w-16 shadow-lg">
                                <AvatarImage src={employee.avatar || "/placeholder.svg"} />
                                <AvatarFallback className={`bg-gradient-to-r ${employee.color} text-white font-bold text-xl`}>
                                  {employee.name[0]}
                                </AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-bold text-xl text-gray-700">{employee.name}</h4>
                                <p className="text-gray-600 font-medium">
                                  {employee.dept} · {employee.role}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4">
                              <Badge
                                className={
                                  employee.status === "在线"
                                    ? "bg-green-100 text-green-700 border-green-300 font-medium"
                                    : employee.status === "忙碌"
                                      ? "bg-yellow-100 text-yellow-700 border-yellow-300 font-medium"
                                      : "bg-gray-100 text-gray-700 border-gray-300 font-medium"
                                }
                              >
                                {employee.status}
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-2 border-gray-300 hover:border-green-400 hover:bg-green-50 bg-transparent rounded-lg"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="permissions" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        权限管理
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-bold text-gray-700 mb-6">角色管理</h3>
                          <div className="space-y-4">
                            {[
                              { role: "超级管理员", users: 2, permissions: "全部权限", color: "from-red-500 to-pink-500" },
                              { role: "部门经理", users: 8, permissions: "部门管理权限", color: "from-blue-500 to-cyan-500" },
                              { role: "普通员工", users: 146, permissions: "基础权限", color: "from-green-500 to-emerald-500" },
                            ].map((role, index) => (
                              <div key={index} className="p-6 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="font-bold text-lg text-gray-700">{role.role}</h4>
                                    <p className="text-gray-600 font-medium">{role.permissions}</p>
                                  </div>
                                  <Badge className={`bg-gradient-to-r ${role.color} text-white border-0 font-medium px-4 py-2`}>
                                    {role.users}人
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-bold text-gray-700 mb-6">权限分配</h3>
                          <div className="space-y-6">
                            {[
                              { module: "用户管理", level: 85, color: "from-blue-500 to-cyan-500" },
                              { module: "数据分析", level: 92, color: "from-green-500 to-emerald-500" },
                              { module: "系统设置", level: 45, color: "from-orange-500 to-red-500" },
                              { module: "财务管理", level: 23, color: "from-purple-500 to-indigo-500" },
                            ].map((perm, index) => (
                              <div key={index} className="space-y-3">
                                <div className="flex justify-between">
                                  <span className="font-bold text-gray-700">{perm.module}</span>
                                  <span className="font-bold text-lg text-blue-600">{perm.level}%</span>
                                </div>
                                <div className="relative">
                                  <Progress value={perm.level} className="h-3 bg-gray-200" />
                                  <div
                                    className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${perm.color} rounded-full transition-all duration-1000 ease-out`}
                                    style={{ width: `${perm.level}%` }}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        考勤排班管理
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="p-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-24 h-24 mx-auto mb-6 shadow-xl">
                        <Calendar className="h-12 w-12 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-700 mb-4">考勤排班功能</h3>
                      <p className="text-gray-600 mb-8 text-lg">管理员工考勤记录和排班计划</p>
                      <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <Sparkles className="h-5 w-5 mr-2" />
                        配置排班规则
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        文档知识库
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="p-6 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full w-24 h-24 mx-auto mb-6 shadow-xl">
                        <FileText className="h-12 w-12 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-700 mb-4">文档管理中心</h3>
                      <p className="text-gray-600 mb-8 text-lg">YanYu Cloud 企业知识库和文档管理</p>
                      <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <Plus className="h-5 w-5 mr-2" />
                        创建文档
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="data" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg">
                        <Database className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                        个人数据统计
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-16">
                      <div className="p-6 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full w-24 h-24 mx-auto mb-6 shadow-xl">
                        <Database className="h-12 w-12 text-white mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-700 mb-4">数据统计分析</h3>
                      <p className="text-gray-600 mb-8 text-lg">员工个人数据和绩效统计</p>
                      <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        查看详细数据
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
