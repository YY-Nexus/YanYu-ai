"use client"

import { useState } from "react"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Brain,
  MessageSquare,
  FileText,
  Send,
  Phone,
  Video,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Star,
  Zap,
  BookOpen,
  TrendingUp,
} from "lucide-react"

export default function CollaborationPage() {
  const [activeTab, setActiveTab] = useState("teamwork")
  const [message, setMessage] = useState("")

  // 团队协作数据
  const teamProjects = [
    {
      id: 1,
      name: "Q2营销策划",
      status: "进行中",
      progress: 75,
      members: ["张三", "李四", "王五"],
      deadline: "2024-06-30",
      priority: "高",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 2,
      name: "客户服务优化",
      status: "待开始",
      progress: 0,
      members: ["赵六", "钱七"],
      deadline: "2024-07-15",
      priority: "中",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      name: "系统升级项目",
      status: "已完成",
      progress: 100,
      members: ["孙八", "周九", "吴十"],
      deadline: "2024-05-20",
      priority: "高",
      color: "from-green-500 to-emerald-500",
    },
  ]

  // AI助理对话记录
  const aiConversations = [
    {
      id: 1,
      type: "user",
      message: "帮我分析一下本月的销售数据",
      time: "14:30",
    },
    {
      id: 2,
      type: "ai",
      message: "根据数据分析，本月销售额较上月增长12.5%，主要增长来源于线上渠道。建议继续加强数字化营销投入。",
      time: "14:31",
    },
    {
      id: 3,
      type: "user",
      message: "有什么具体的优化建议吗？",
      time: "14:32",
    },
    {
      id: 4,
      type: "ai",
      message: "建议：1. 优化产品页面转化率 2. 加强社交媒体营销 3. 实施客户留存策略 4. 分析竞品定价策略",
      time: "14:33",
    },
  ]

  // 沟通渠道数据
  const communicationChannels = [
    { name: "即时消息", users: 156, status: "active", unread: 12, color: "from-blue-500 to-cyan-500" },
    { name: "视频会议", users: 45, status: "active", unread: 0, color: "from-green-500 to-emerald-500" },
    { name: "邮件系统", users: 203, status: "active", unread: 8, color: "from-purple-500 to-indigo-500" },
    { name: "项目讨论", users: 89, status: "active", unread: 5, color: "from-orange-500 to-red-500" },
  ]

  // 学习课程数据
  const learningCourses = [
    {
      id: 1,
      title: "数字化营销实战",
      instructor: "李老师",
      progress: 68,
      duration: "4小时",
      rating: 4.8,
      students: 234,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "团队协作技巧",
      instructor: "王老师",
      progress: 45,
      duration: "3小时",
      rating: 4.6,
      students: 189,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "AI工具应用指南",
      instructor: "张老师",
      progress: 92,
      duration: "2小时",
      rating: 4.9,
      students: 156,
      color: "from-purple-500 to-indigo-500",
    },
  ]

  const handleSendMessage = () => {
    if (message.trim()) {
      // 处理发送消息逻辑
      setMessage("")
    }
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
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  协作沟通平台
                </h1>
                <p className="text-gray-600 mt-3 text-lg">团队协作、智能助理、学习成长一体化平台</p>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 bg-transparent px-6 py-3 rounded-xl transition-all duration-300"
                >
                  <Video className="w-5 h-5 mr-2" />
                  发起会议
                </Button>
                <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  新建讨论
                </Button>
              </div>
            </div>

            {/* 功能选项卡 */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
                <TabsTrigger
                  value="teamwork"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Users className="w-4 h-4 mr-2" />
                  工作协同
                </TabsTrigger>
                <TabsTrigger
                  value="ai-assistant"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  智能运管助理
                </TabsTrigger>
                <TabsTrigger
                  value="communication"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  沟通渠道
                </TabsTrigger>
                <TabsTrigger
                  value="learning"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  学习平台
                </TabsTrigger>
              </TabsList>

              {/* 工作协同 */}
              <TabsContent value="teamwork" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            团队项目管理
                          </span>
                        </CardTitle>
                        <CardDescription className="text-gray-600">跟踪项目进度和团队协作状态</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {teamProjects.map((project) => (
                            <Card
                              key={project.id}
                              className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] border-0 bg-gradient-to-r from-gray-50 to-gray-100"
                            >
                              <CardContent className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                  <h3 className="font-bold text-lg text-gray-700">{project.name}</h3>
                                  <div className="flex items-center space-x-3">
                                    <Badge
                                      className={
                                        project.status === "进行中"
                                          ? "bg-blue-100 text-blue-700 border-blue-300"
                                          : project.status === "已完成"
                                            ? "bg-green-100 text-green-700 border-green-300"
                                            : "bg-orange-100 text-orange-700 border-orange-300"
                                      }
                                    >
                                      {project.status}
                                    </Badge>
                                    <Badge
                                      className={
                                        project.priority === "高"
                                          ? "bg-red-100 text-red-700 border-red-300"
                                          : "bg-yellow-100 text-yellow-700 border-yellow-300"
                                      }
                                    >
                                      {project.priority}优先级
                                    </Badge>
                                  </div>
                                </div>

                                <div className="space-y-4">
                                  <div className="flex items-center justify-between">
                                    <span className="font-medium text-gray-600">进度</span>
                                    <span className="font-bold text-lg text-blue-600">{project.progress}%</span>
                                  </div>
                                  <div className="relative">
                                    <Progress value={project.progress} className="h-3 bg-gray-200" />
                                    <div
                                      className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${project.color} rounded-full transition-all duration-1000 ease-out`}
                                      style={{ width: `${project.progress}%` }}
                                    />
                                  </div>

                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <Calendar className="w-4 h-4 text-gray-500" />
                                      <span className="text-gray-600 font-medium">截止: {project.deadline}</span>
                                    </div>
                                    <div className="flex -space-x-2">
                                      {project.members.slice(0, 3).map((member, index) => (
                                        <Avatar key={index} className="h-8 w-8 border-2 border-white shadow-lg">
                                          <AvatarFallback className="text-sm font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                            {member.charAt(0)}
                                          </AvatarFallback>
                                        </Avatar>
                                      ))}
                                      {project.members.length > 3 && (
                                        <div className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center shadow-lg">
                                          <span className="text-xs font-medium text-gray-600">
                                            +{project.members.length - 3}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-xl">
                          <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                            <Clock className="w-5 h-5 text-white" />
                          </div>
                          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            今日任务
                          </span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span className="font-medium text-gray-700">完成月度报告</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <AlertCircle className="w-5 h-5 text-orange-500" />
                            <span className="font-medium text-gray-700">客户需求评审</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="font-medium text-gray-700">团队周会准备</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-blue-500" />
                            <span className="font-medium text-gray-700">产品演示PPT</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* 智能运管助理 */}
              <TabsContent value="ai-assistant" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        AI智能助理
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">基于数据分析的智能决策支持</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="h-[400px] border-0 rounded-xl p-6 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                          <div className="space-y-6">
                            {aiConversations.map((conv) => (
                              <div
                                key={conv.id}
                                className={`flex ${conv.type === "user" ? "justify-end" : "justify-start"}`}
                              >
                                <div
                                  className={`max-w-[80%] p-4 rounded-xl shadow-lg ${
                                    conv.type === "user"
                                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                                      : "bg-white border-0 shadow-md"
                                  }`}
                                >
                                  <p className="font-medium">{conv.message}</p>
                                  <p className="text-xs opacity-70 mt-2">{conv.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Input
                            placeholder="向AI助理提问..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                            className="border-2 border-gray-200 focus:border-blue-400 rounded-xl"
                          />
                          <Button
                            onClick={handleSendMessage}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl px-6"
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-lg">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-bold text-gray-700">AI分析洞察</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Zap className="w-5 h-5 text-yellow-500" />
                              <span className="font-medium text-gray-700">营收增长趋势良好，建议加大投入</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <TrendingUp className="w-5 h-5 text-emerald-500" />
                              <span className="font-medium text-gray-700">客户满意度提升15%</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <AlertCircle className="w-5 h-5 text-orange-500" />
                              <span className="font-medium text-gray-700">库存周转率需要关注</span>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg font-bold text-gray-700">智能建议</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-3">
                            <div className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                              <p className="font-medium text-blue-800">优化客户服务流程，预计可提升效率20%</p>
                            </div>
                            <div className="p-3 bg-green-100 rounded-lg border-l-4 border-green-500">
                              <p className="font-medium text-green-800">调整营销策略，重点关注高价值客户群体</p>
                            </div>
                            <div className="p-3 bg-orange-100 rounded-lg border-l-4 border-orange-500">
                              <p className="font-medium text-orange-800">建议增加员工培训投入，提升整体技能水平</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 沟通渠道 */}
              <TabsContent value="communication" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                          <MessageSquare className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          沟通渠道状态
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">各沟通渠道的使用情况和活跃度</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {communicationChannels.map((channel, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02]"
                          >
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-4 h-4 rounded-full ${
                                  channel.status === "active" ? "bg-emerald-500 shadow-lg" : "bg-gray-400"
                                } ${channel.status === "active" ? "animate-pulse" : ""}`}
                              ></div>
                              <div>
                                <p className="font-bold text-gray-700">{channel.name}</p>
                                <p className="text-gray-600 font-medium">{channel.users} 活跃用户</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              {channel.unread > 0 && (
                                <Badge className="bg-red-100 text-red-700 border-red-300 font-medium">
                                  {channel.unread}
                                </Badge>
                              )}
                              <Button
                                size="sm"
                                className={`bg-gradient-to-r ${channel.color} hover:shadow-lg text-white rounded-lg`}
                              >
                                进入
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                          <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          快速联系
                        </span>
                      </CardTitle>
                      <CardDescription className="text-gray-600">常用联系人和快捷操作</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12 shadow-lg">
                              <AvatarFallback className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold">
                                张
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-gray-700">张经理</p>
                              <p className="text-gray-600 font-medium">技术部</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg bg-transparent"
                            >
                              <MessageSquare className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-green-300 hover:border-green-500 hover:bg-green-50 rounded-lg bg-transparent"
                            >
                              <Phone className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 rounded-lg bg-transparent"
                            >
                              <Video className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12 shadow-lg">
                              <AvatarFallback className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold">
                                李
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-gray-700">李总监</p>
                              <p className="text-gray-600 font-medium">销售部</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg bg-transparent"
                            >
                              <MessageSquare className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-green-300 hover:border-green-500 hover:bg-green-50 rounded-lg bg-transparent"
                            >
                              <Phone className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 rounded-lg bg-transparent"
                            >
                              <Video className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12 shadow-lg">
                              <AvatarFallback className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold">
                                王
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-bold text-gray-700">王主管</p>
                              <p className="text-gray-600 font-medium">市场部</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-blue-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg bg-transparent"
                            >
                              <MessageSquare className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-green-300 hover:border-green-500 hover:bg-green-50 rounded-lg bg-transparent"
                            >
                              <Phone className="w-3 h-3" />
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 rounded-lg bg-transparent"
                            >
                              <Video className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* 学习平台 */}
              <TabsContent value="learning" className="space-y-6">
                <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                        <BookOpen className="w-5 h-5 text-white" />
                      </div>
                      <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        在线学习课程
                      </span>
                    </CardTitle>
                    <CardDescription className="text-gray-600">提升技能，持续学习成长</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {learningCourses.map((course) => (
                        <Card
                          key={course.id}
                          className="hover:shadow-xl transition-all duration-500 cursor-pointer hover:scale-105 border-0 bg-gradient-to-br from-gray-50 to-gray-100"
                        >
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <div>
                                <h3 className="font-bold text-lg text-gray-700">{course.title}</h3>
                                <p className="text-gray-600 font-medium">讲师: {course.instructor}</p>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="font-medium text-gray-600">学习进度</span>
                                <span className="font-bold text-lg text-blue-600">{course.progress}%</span>
                              </div>
                              <div className="relative">
                                <Progress value={course.progress} className="h-3 bg-gray-200" />
                                <div
                                  className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000 ease-out`}
                                  style={{ width: `${course.progress}%` }}
                                />
                              </div>

                              <div className="flex items-center justify-between text-gray-600 font-medium">
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                  <span>{course.rating}</span>
                                </div>
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-gray-600 font-medium">{course.students} 人学习</span>
                                <Button
                                  size="sm"
                                  className={`bg-gradient-to-r ${course.color} hover:shadow-lg text-white rounded-lg`}
                                >
                                  {course.progress > 0 ? "继续学习" : "开始学习"}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
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
