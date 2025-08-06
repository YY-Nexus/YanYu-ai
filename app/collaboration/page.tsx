"use client"

import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, MessageSquare, Calendar, FileText, Clock, CheckCircle, AlertCircle, Plus, Video, Paperclip } from 'lucide-react'

export default function CollaborationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                协同办公
              </h1>
              <p className="text-gray-600 mt-2">团队协作，高效沟通</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg">
                <Plus className="h-4 w-4 mr-2" />
                创建项目
              </Button>
              <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg">
                <Video className="h-4 w-4 mr-2" />
                发起会议
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      项目概览
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "移动端应用开发",
                      progress: 75,
                      status: "进行中",
                      team: 8,
                      deadline: "2024-02-15",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      name: "品牌重塑项目",
                      progress: 45,
                      status: "设计阶段",
                      team: 5,
                      deadline: "2024-03-01",
                      color: "from-purple-500 to-indigo-500"
                    },
                    {
                      name: "客户服务优化",
                      progress: 90,
                      status: "即将完成",
                      team: 6,
                      deadline: "2024-01-25",
                      color: "from-green-500 to-emerald-500"
                    },
                  ].map((project, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-900">{project.name}</h4>
                        <Badge
                          className={
                            project.status === "进行中"
                              ? "bg-blue-100 text-blue-700 border-blue-300"
                              : project.status === "设计阶段"
                              ? "bg-purple-100 text-purple-700 border-purple-300"
                              : "bg-green-100 text-green-700 border-green-300"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>进度</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={project.progress} className="h-2 bg-gray-200" />
                          <div
                            className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${project.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4" />
                            <span>{project.team} 人团队</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4" />
                            <span>截止 {project.deadline}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      团队消息
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      user: "李四",
                      message: "移动端UI设计稿已完成，请大家review",
                      time: "5分钟前",
                      avatar: "/placeholder.svg?height=32&width=32",
                      hasAttachment: true
                    },
                    {
                      user: "王五",
                      message: "今天的站会改到下午3点，会议室B",
                      time: "15分钟前",
                      avatar: "/placeholder.svg?height=32&width=32",
                      hasAttachment: false
                    },
                    {
                      user: "赵六",
                      message: "API文档更新完毕，新增了用户认证接口",
                      time: "1小时前",
                      avatar: "/placeholder.svg?height=32&width=32",
                      hasAttachment: true
                    },
                  ].map((msg, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <Avatar className="h-8 w-8 ring-2 ring-orange-200">
                        <AvatarImage src={msg.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-xs">
                          {msg.user[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900">{msg.user}</span>
                          <span className="text-xs text-gray-500">{msg.time}</span>
                        </div>
                        <p className="text-gray-700 text-sm">{msg.message}</p>
                        {msg.hasAttachment && (
                          <div className="flex items-center space-x-1 mt-2 text-xs text-blue-600">
                            <Paperclip className="h-3 w-3" />
                            <span>附件</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      今日会议
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "产品规划会议",
                      time: "10:00 - 11:30",
                      participants: 8,
                      status: "进行中",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      title: "技术评审",
                      time: "14:00 - 15:00",
                      participants: 5,
                      status: "即将开始",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      title: "客户反馈讨论",
                      time: "16:30 - 17:30",
                      participants: 6,
                      status: "待开始",
                      color: "from-orange-500 to-red-500"
                    },
                  ].map((meeting, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-gray-900">{meeting.title}</h4>
                        <Badge
                          className={
                            meeting.status === "进行中"
                              ? "bg-green-100 text-green-700 border-green-300"
                              : meeting.status === "即将开始"
                              ? "bg-blue-100 text-blue-700 border-blue-300"
                              : "bg-orange-100 text-orange-700 border-orange-300"
                          }
                        >
                          {meeting.status}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>{meeting.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4" />
                          <span>{meeting.participants} 人参与</span>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className={`w-full mt-3 bg-gradient-to-r ${meeting.color} hover:shadow-lg text-white`}
                      >
                        {meeting.status === "进行中" ? "加入会议" : "查看详情"}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      最近文档
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    {
                      name: "产品需求文档 v2.1",
                      author: "张三",
                      time: "2小时前",
                      status: "已更新"
                    },
                    {
                      name: "API接口设计规范",
                      author: "李四",
                      time: "1天前",
                      status: "新建"
                    },
                    {
                      name: "用户体验报告",
                      author: "王五",
                      time: "2天前",
                      status: "已完成"
                    },
                  ].map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                        <FileText className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm">{doc.name}</h4>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <span>{doc.author}</span>
                          <span>•</span>
                          <span>{doc.time}</span>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className={
                          doc.status === "已更新"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : doc.status === "新建"
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-gray-50 text-gray-700 border-gray-200"
                        }
                      >
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
