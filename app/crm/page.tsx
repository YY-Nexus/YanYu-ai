"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { UserCheck, Users, TrendingUp, Phone, Mail, Calendar, DollarSign, Target, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react'

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                客户关系管理
              </h1>
              <p className="text-gray-600 mt-2">维护客户关系，提升业务价值</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                添加客户
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">总客户数</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      1,247
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                  <span className="text-blue-600 font-semibold">+12.5%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">活跃客户</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      892
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                    <UserCheck className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">活跃率 71.5%</div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">月度收入</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      ¥485K
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-lg">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span className="text-purple-600 font-semibold">+8.3%</span>
                  <span className="text-gray-500">vs 上月</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">转化率</p>
                    <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      24.8%
                    </p>
                  </div>
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="mt-4 text-gray-500 font-medium">目标 30%</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    销售漏斗
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { stage: "潜在客户", count: 450, percentage: 100, color: "from-blue-500 to-cyan-500" },
                  { stage: "初步接触", count: 320, percentage: 71, color: "from-green-500 to-emerald-500" },
                  { stage: "需求确认", count: 180, percentage: 40, color: "from-yellow-500 to-amber-500" },
                  { stage: "方案提交", count: 95, percentage: 21, color: "from-orange-500 to-red-500" },
                  { stage: "成交客户", count: 42, percentage: 9, color: "from-purple-500 to-indigo-500" },
                ].map((stage, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{stage.stage}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold text-lg bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                          {stage.count}
                        </span>
                        <span className="text-gray-500 text-sm">({stage.percentage}%)</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress value={stage.percentage} className="h-3 bg-gray-200" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${stage.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${stage.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    待办任务
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    task: "跟进ABC公司合作方案",
                    client: "ABC科技有限公司",
                    priority: "高",
                    deadline: "今天 16:00",
                    status: "pending"
                  },
                  {
                    task: "准备XYZ公司产品演示",
                    client: "XYZ集团",
                    priority: "中",
                    deadline: "明天 10:00",
                    status: "in-progress"
                  },
                  {
                    task: "发送报价单给DEF公司",
                    client: "DEF企业",
                    priority: "低",
                    deadline: "本周五",
                    status: "pending"
                  },
                  {
                    task: "客户满意度调研",
                    client: "GHI公司",
                    priority: "中",
                    deadline: "下周一",
                    status: "completed"
                  },
                ].map((task, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-gray-900">{task.task}</h4>
                      <Badge
                        className={
                          task.priority === "高"
                            ? "bg-red-100 text-red-700 border-red-300"
                            : task.priority === "中"
                            ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                            : "bg-green-100 text-green-700 border-green-300"
                        }
                      >
                        {task.priority}优先级
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{task.client}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{task.deadline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {task.status === "completed" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : task.status === "in-progress" ? (
                          <Clock className="h-4 w-4 text-blue-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-orange-600" />
                        )}
                        <span className={`text-sm font-medium ${
                          task.status === "completed" ? "text-green-600" :
                          task.status === "in-progress" ? "text-blue-600" : "text-orange-600"
                        }`}>
                          {task.status === "completed" ? "已完成" :
                           task.status === "in-progress" ? "进行中" : "待处理"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  重要客户
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "ABC科技有限公司",
                    contact: "张总",
                    phone: "138****8888",
                    email: "zhang@abc.com",
                    value: "¥850K",
                    status: "活跃",
                    avatar: "/placeholder.svg?height=48&width=48",
                    lastContact: "2天前"
                  },
                  {
                    name: "XYZ集团",
                    contact: "李经理",
                    phone: "139****9999",
                    email: "li@xyz.com",
                    value: "¥620K",
                    status: "跟进中",
                    avatar: "/placeholder.svg?height=48&width=48",
                    lastContact: "1周前"
                  },
                  {
                    name: "DEF企业",
                    contact: "王主管",
                    phone: "137****7777",
                    email: "wang@def.com",
                    value: "¥420K",
                    status: "潜在",
                    avatar: "/placeholder.svg?height=48&width=48",
                    lastContact: "3天前"
                  },
                ].map((client, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-12 w-12 ring-2 ring-orange-200">
                        <AvatarImage src={client.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white">
                          {client.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{client.name}</h4>
                        <p className="text-gray-600 text-sm">{client.contact}</p>
                      </div>
                      <Badge
                        className={
                          client.status === "活跃"
                            ? "bg-green-100 text-green-700 border-green-300"
                            : client.status === "跟进中"
                            ? "bg-blue-100 text-blue-700 border-blue-300"
                            : "bg-yellow-100 text-yellow-700 border-yellow-300"
                        }
                      >
                        {client.status}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Phone className="h-4 w-4" />
                        <span>{client.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Mail className="h-4 w-4" />
                        <span>{client.email}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-bold text-green-600">{client.value}</span>
                        </div>
                        <span className="text-xs text-gray-500">最后联系: {client.lastContact}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white"
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        联系
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        详情
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
