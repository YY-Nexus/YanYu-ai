"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Users,
  TrendingUp,
  Phone,
  Mail,
  Calendar,
  DollarSign,
  Target,
  MessageSquare,
  Search,
  Filter,
  Plus,
  Eye,
  Edit,
  Building,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  Rocket,
  Star,
} from "lucide-react"

export default function CRMPage() {
  const [selectedCustomer, setSelectedCustomer] = useState<number | null>(null)

  const customers = [
    {
      id: 1,
      name: "阿里巴巴集团",
      contact: "张经理",
      phone: "138-0013-8888",
      email: "zhang@alibaba.com",
      status: "活跃客户",
      value: 2500000,
      lastContact: "2天前",
      stage: "合作中",
      avatar: "/placeholder.svg?height=40&width=40",
      industry: "互联网",
      location: "杭州",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      name: "腾讯科技",
      contact: "李总监",
      phone: "139-0013-9999",
      email: "li@tencent.com",
      status: "潜在客户",
      value: 1800000,
      lastContact: "1周前",
      stage: "商务谈判",
      avatar: "/placeholder.svg?height=40&width=40",
      industry: "互联网",
      location: "深圳",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "华为技术",
      contact: "王部长",
      phone: "137-0013-7777",
      email: "wang@huawei.com",
      status: "重点客户",
      value: 3200000,
      lastContact: "3天前",
      stage: "方案制定",
      avatar: "/placeholder.svg?height=40&width=40",
      industry: "通信",
      location: "深圳",
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      name: "字节跳动",
      contact: "赵主管",
      phone: "136-0013-6666",
      email: "zhao@bytedance.com",
      status: "新客户",
      value: 950000,
      lastContact: "5天前",
      stage: "初步接触",
      avatar: "/placeholder.svg?height=40&width=40",
      industry: "互联网",
      location: "北京",
      color: "from-orange-500 to-red-500",
    },
  ]

  const salesFunnel = [
    { stage: "线索获取", count: 156, value: 15600000, conversion: 100, color: "from-blue-500 to-cyan-500" },
    { stage: "初步接触", count: 89, value: 8900000, conversion: 57, color: "from-green-500 to-emerald-500" },
    { stage: "需求确认", count: 45, value: 4500000, conversion: 51, color: "from-purple-500 to-indigo-500" },
    { stage: "方案制定", count: 28, value: 2800000, conversion: 62, color: "from-orange-500 to-red-500" },
    { stage: "商务谈判", count: 18, value: 1800000, conversion: 64, color: "from-pink-500 to-rose-500" },
    { stage: "合同签署", count: 12, value: 1200000, conversion: 67, color: "from-yellow-500 to-amber-500" },
  ]

  const opportunities = [
    {
      id: 1,
      title: "阿里云服务升级项目",
      customer: "阿里巴巴集团",
      value: 850000,
      probability: 85,
      stage: "商务谈判",
      closeDate: "2024-02-15",
      owner: "销售经理A",
      priority: "high",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      title: "企业数字化转型咨询",
      customer: "华为技术",
      value: 1200000,
      probability: 70,
      stage: "方案制定",
      closeDate: "2024-03-01",
      owner: "销售经理B",
      priority: "high",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "移动应用开发服务",
      customer: "字节跳动",
      value: 650000,
      probability: 45,
      stage: "需求确认",
      closeDate: "2024-02-28",
      owner: "销售经理C",
      priority: "medium",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const communications = [
    {
      id: 1,
      customer: "阿里巴巴集团",
      type: "电话沟通",
      content: "讨论了Q1季度的合作计划，客户对新产品很感兴趣",
      time: "2小时前",
      owner: "销售经理A",
      status: "已完成",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      customer: "腾讯科技",
      type: "邮件跟进",
      content: "发送了详细的产品方案和报价单",
      time: "1天前",
      owner: "销售经理B",
      status: "等待回复",
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      customer: "华为技术",
      type: "会议拜访",
      content: "现场演示产品功能，客户反馈积极",
      time: "3天前",
      owner: "销售经理A",
      status: "已完成",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "活跃客户":
        return "bg-green-100 text-green-700 border-green-300"
      case "重点客户":
        return "bg-purple-100 text-purple-700 border-purple-300"
      case "潜在客户":
        return "bg-blue-100 text-blue-700 border-blue-300"
      case "新客户":
        return "bg-orange-100 text-orange-700 border-orange-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-300"
      case "medium":
        return "bg-orange-100 text-orange-700 border-orange-300"
      case "low":
        return "bg-green-100 text-green-700 border-green-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 页面标题 */}
        <div className="flex items-center justify-between animate-slide-in-left">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              客户关系引擎
            </h1>
            <p className="text-gray-600 mt-3 text-lg">智能化客户管理，提升销售效率</p>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Plus className="h-5 w-5 mr-2" />
              新增客户
            </Button>
          </div>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-medium mb-2">客户总数</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    1,234
                  </p>
                  <p className="text-green-600 font-medium mt-1">+12% 较上月</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-medium mb-2">销售额</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    ¥8.5M
                  </p>
                  <p className="text-green-600 font-medium mt-1">+18% 较上月</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-medium mb-2">转化率</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    23.5%
                  </p>
                  <p className="text-green-600 font-medium mt-1">+3.2% 较上月</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 font-medium mb-2">活跃商机</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    89
                  </p>
                  <p className="text-green-600 font-medium mt-1">+7 较上周</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="customers" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="customers"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Users className="h-4 w-4 mr-2" />
              客户管理
            </TabsTrigger>
            <TabsTrigger
              value="funnel"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Target className="h-4 w-4 mr-2" />
              销售漏斗
            </TabsTrigger>
            <TabsTrigger
              value="opportunities"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Rocket className="h-4 w-4 mr-2" />
              商机跟进
            </TabsTrigger>
            <TabsTrigger
              value="communications"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              沟通记录
            </TabsTrigger>
          </TabsList>

          {/* 客户管理 */}
          <TabsContent value="customers" className="space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      客户列表
                    </span>
                  </CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        placeholder="搜索客户..."
                        className="pl-10 w-64 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
                      />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 rounded-lg bg-transparent"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      筛选
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customers.map((customer) => (
                    <div
                      key={customer.id}
                      className={`p-6 border-0 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                        selectedCustomer === customer.id
                          ? "ring-4 ring-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 shadow-xl"
                          : "bg-gradient-to-r from-gray-50 to-gray-100"
                      }`}
                      onClick={() => setSelectedCustomer(customer.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <Avatar className="h-16 w-16 ring-4 ring-white shadow-lg">
                            <AvatarImage src={customer.avatar || "/placeholder.svg"} />
                            <AvatarFallback
                              className={`bg-gradient-to-r ${customer.color} text-white font-bold text-xl`}
                            >
                              {customer.name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center gap-4 mb-2">
                              <h3 className="font-bold text-xl text-gray-700">{customer.name}</h3>
                              <Badge className={`${getStatusColor(customer.status)} font-medium`}>
                                {customer.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-6 text-gray-600 font-medium">
                              <span className="flex items-center gap-2">
                                <Building className="h-4 w-4" />
                                {customer.industry}
                              </span>
                              <span className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                {customer.location}
                              </span>
                              <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {customer.lastContact}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                            ¥{(customer.value / 10000).toFixed(0)}万
                          </div>
                          <div className="text-gray-600 font-medium mb-4">{customer.stage}</div>
                          <div className="flex items-center gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg bg-transparent"
                            >
                              <Phone className="h-4 w-4 mr-1" />
                              呼叫
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-green-300 hover:border-green-500 hover:bg-green-50 rounded-lg bg-transparent"
                            >
                              <Mail className="h-4 w-4 mr-1" />
                              邮件
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-lg"
                            >
                              <Eye className="h-4 w-4 mr-1" />
                              详情
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 销售漏斗 */}
          <TabsContent value="funnel" className="space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    销售漏斗分析
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">跟踪销售流程各阶段的转化情况</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {salesFunnel.map((stage, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${stage.color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg`}
                          >
                            {index + 1}
                          </div>
                          <h3 className="font-bold text-xl text-gray-700">{stage.stage}</h3>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-xl text-gray-700">{stage.count} 个客户</div>
                          <div className="text-gray-600 font-medium">¥{(stage.value / 10000).toFixed(0)}万</div>
                        </div>
                      </div>
                      <div className="ml-16">
                        <div className="relative">
                          <Progress value={stage.conversion} className="h-4 bg-gray-100" />
                          <div
                            className={`absolute top-0 left-0 h-4 bg-gradient-to-r ${stage.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${stage.conversion}%` }}
                          />
                        </div>
                        <div className="flex justify-between text-gray-600 font-medium mt-2">
                          <span>转化率: {stage.conversion}%</span>
                          <span>平均客单价: ¥{(stage.value / stage.count / 10000).toFixed(1)}万</span>
                        </div>
                      </div>
                      {index < salesFunnel.length - 1 && (
                        <div className="absolute left-6 top-16 w-0.5 h-8 bg-gray-300 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    67%
                  </div>
                  <div className="text-gray-600 font-medium">整体转化率</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Clock className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    28天
                  </div>
                  <div className="text-gray-600 font-medium">平均销售周期</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <DollarSign className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    ¥85万
                  </div>
                  <div className="text-gray-600 font-medium">平均客单价</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 商机跟进 */}
          <TabsContent value="opportunities" className="space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                    <Rocket className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    商机管理
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">跟踪和管理销售商机</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {opportunities.map((opportunity) => (
                    <div
                      key={opportunity.id}
                      className="p-6 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="font-bold text-xl text-gray-700">{opportunity.title}</h3>
                            <Badge className={`${getPriorityColor(opportunity.priority)} font-medium`}>
                              {opportunity.priority === "high"
                                ? "🔥 高优先级"
                                : opportunity.priority === "medium"
                                  ? "⚡ 中优先级"
                                  : "📋 低优先级"}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-600 font-medium mb-4">
                            <div>
                              <span className="font-bold">客户:</span> {opportunity.customer}
                            </div>
                            <div>
                              <span className="font-bold">金额:</span>
                              <span
                                className={`ml-1 font-bold bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent`}
                              >
                                ¥{(opportunity.value / 10000).toFixed(0)}万
                              </span>
                            </div>
                            <div>
                              <span className="font-bold">阶段:</span> {opportunity.stage}
                            </div>
                            <div>
                              <span className="font-bold">负责人:</span> {opportunity.owner}
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-gray-600 font-medium">成交概率</span>
                              <span className="font-bold text-lg text-blue-600">{opportunity.probability}%</span>
                            </div>
                            <div className="relative">
                              <Progress value={opportunity.probability} className="h-3 bg-gray-100" />
                              <div
                                className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${opportunity.color} rounded-full transition-all duration-1000 ease-out`}
                                style={{ width: `${opportunity.probability}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="ml-8 text-right">
                          <div className="text-gray-600 font-medium mb-2">预计成交</div>
                          <div className="font-bold text-lg text-gray-700 mb-4">{opportunity.closeDate}</div>
                          <div className="flex gap-3">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 rounded-lg bg-transparent"
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              编辑
                            </Button>
                            <Button
                              size="sm"
                              className={`bg-gradient-to-r ${opportunity.color} hover:shadow-lg text-white rounded-lg`}
                            >
                              <Star className="h-4 w-4 mr-1" />
                              跟进
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    89
                  </div>
                  <div className="text-gray-600 font-medium">活跃商机</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    ¥2.7M
                  </div>
                  <div className="text-gray-600 font-medium">预期收入</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    65%
                  </div>
                  <div className="text-gray-600 font-medium">平均成交概率</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    12
                  </div>
                  <div className="text-gray-600 font-medium">本月预计成交</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 沟通记录 */}
          <TabsContent value="communications" className="space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    沟通记录
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-600 text-lg">客户沟通历史和跟进记录</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {communications.map((comm) => (
                    <div
                      key={comm.id}
                      className="p-6 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-3">
                            <h3 className="font-bold text-xl text-gray-700">{comm.customer}</h3>
                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 font-medium">
                              {comm.type}
                            </Badge>
                            <Badge
                              className={
                                comm.status === "已完成"
                                  ? "bg-green-100 text-green-700 border-green-300"
                                  : "bg-orange-100 text-orange-700 border-orange-300"
                              }
                            >
                              {comm.status}
                            </Badge>
                          </div>
                          <p className="text-gray-700 mb-4 text-lg leading-relaxed">{comm.content}</p>
                          <div className="flex items-center gap-6 text-gray-600 font-medium">
                            <span className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {comm.time}
                            </span>
                            <span className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              {comm.owner}
                            </span>
                          </div>
                        </div>
                        <div className="ml-6">
                          {comm.status === "已完成" ? (
                            <div className="p-3 bg-green-100 rounded-full">
                              <CheckCircle className="h-6 w-6 text-green-600" />
                            </div>
                          ) : comm.status === "等待回复" ? (
                            <div className="p-3 bg-orange-100 rounded-full">
                              <AlertCircle className="h-6 w-6 text-orange-600" />
                            </div>
                          ) : (
                            <div className="p-3 bg-red-100 rounded-full">
                              <XCircle className="h-6 w-6 text-red-600" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Phone className="h-10 w-10 text-blue-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    156
                  </div>
                  <div className="text-gray-600 font-medium">本月通话</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Mail className="h-10 w-10 text-green-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    89
                  </div>
                  <div className="text-gray-600 font-medium">邮件往来</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Calendar className="h-10 w-10 text-purple-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    23
                  </div>
                  <div className="text-gray-600 font-medium">会议拜访</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    92%
                  </div>
                  <div className="text-gray-600 font-medium">响应及时率</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
