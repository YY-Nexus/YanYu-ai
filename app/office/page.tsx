"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Zap,
  FileText,
  Users,
  Brain,
  Target,
  Timer,
  Sparkles,
  Rocket,
} from "lucide-react"

export default function OfficePage() {
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60) // 25分钟
  const [isRunning, setIsRunning] = useState(false)
  const [currentSession, setCurrentSession] = useState(1)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && pomodoroTime > 0) {
      interval = setInterval(() => {
        setPomodoroTime((time) => time - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, pomodoroTime])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const automationProcesses = [
    { name: "报销流程", enabled: true, processed: 156, successRate: 98, color: "from-emerald-500 to-teal-600" },
    { name: "请假审批", enabled: true, processed: 89, successRate: 100, color: "from-blue-500 to-cyan-600" },
    { name: "采购申请", enabled: false, processed: 23, successRate: 87, color: "from-purple-500 to-indigo-600" },
    { name: "合同审核", enabled: true, processed: 45, successRate: 95, color: "from-orange-500 to-red-500" },
  ]

  const pendingApprovals = [
    {
      id: 1,
      type: "报销申请",
      applicant: "张三",
      amount: "¥1,250",
      priority: "high",
      time: "2小时前",
      color: "bg-red-100 text-red-700",
    },
    {
      id: 2,
      type: "请假申请",
      applicant: "李四",
      duration: "3天",
      priority: "normal",
      time: "4小时前",
      color: "bg-blue-100 text-blue-700",
    },
    {
      id: 3,
      type: "采购申请",
      applicant: "王五",
      amount: "¥8,500",
      priority: "urgent",
      time: "1小时前",
      color: "bg-purple-100 text-purple-700",
    },
    {
      id: 4,
      type: "培训申请",
      applicant: "赵六",
      duration: "2天",
      priority: "low",
      time: "1天前",
      color: "bg-green-100 text-green-700",
    },
  ]

  const efficiencyTools = [
    { name: "AI写作助手", usage: 85, efficiency: "+32%", icon: Brain, color: "from-purple-500 to-pink-500" },
    { name: "智能翻译", usage: 67, efficiency: "+28%", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { name: "数据分析", usage: 92, efficiency: "+45%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { name: "会议纪要", usage: 74, efficiency: "+38%", icon: Users, color: "from-orange-500 to-red-500" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* 页面标题 */}
        <div className="flex items-center justify-between animate-slide-in-left">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              智能办公助手
            </h1>
            <p className="text-gray-600 mt-3 text-lg">提升工作效率，智能化办公体验</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge
              variant="outline"
              className="text-orange-600 border-orange-300 bg-orange-50 px-4 py-2 text-sm font-medium"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              今日效率提升 +42%
            </Badge>
          </div>
        </div>

        <Tabs defaultValue="automation" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-2">
            <TabsTrigger
              value="automation"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-amber-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Rocket className="h-4 w-4 mr-2" />
              流程自动化
            </TabsTrigger>
            <TabsTrigger
              value="time"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Timer className="h-4 w-4 mr-2" />
              时间管理
            </TabsTrigger>
            <TabsTrigger
              value="approval"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <CheckCircle className="h-4 w-4 mr-2" />
              OA审批
            </TabsTrigger>
            <TabsTrigger
              value="tools"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white rounded-lg transition-all duration-300"
            >
              <Brain className="h-4 w-4 mr-2" />
              效能工具
            </TabsTrigger>
          </TabsList>

          {/* 流程自动化 */}
          <TabsContent value="automation" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {automationProcesses.map((process, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 group"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-gray-700">{process.name}</CardTitle>
                      <Switch
                        checked={process.enabled}
                        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-500 data-[state=checked]:to-emerald-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600 font-medium">今日处理</span>
                      <span
                        className={`font-bold text-xl bg-gradient-to-r ${process.color} bg-clip-text text-transparent`}
                      >
                        {process.processed}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 font-medium">成功率</span>
                        <span className="font-bold text-lg text-green-600">{process.successRate}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={process.successRate} className="h-3 bg-gray-100" />
                        <div
                          className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${process.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${process.successRate}%` }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    自动化效果统计
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      2.5小时
                    </div>
                    <div className="text-gray-600 font-medium">今日节省时间</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      98.5%
                    </div>
                    <div className="text-gray-600 font-medium">平均成功率</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      313
                    </div>
                    <div className="text-gray-600 font-medium">今日处理总数</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 时间管理 */}
          <TabsContent value="time" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 番茄钟 */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                      <Timer className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                      番茄钟计时器
                    </span>
                  </CardTitle>
                  <CardDescription className="text-gray-600">专注工作，提升效率</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="text-center">
                    <div className="text-7xl font-mono font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
                      {formatTime(pomodoroTime)}
                    </div>
                    <div className="text-gray-600 mb-8 text-lg">第 {currentSession} 个番茄钟</div>
                    <div className="flex justify-center gap-4">
                      <Button
                        onClick={() => setIsRunning(!isRunning)}
                        className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isRunning ? <Pause className="h-5 w-5 mr-2" /> : <Play className="h-5 w-5 mr-2" />}
                        {isRunning ? "暂停" : "开始"}
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setPomodoroTime(25 * 60)
                          setIsRunning(false)
                        }}
                        className="border-2 border-gray-300 hover:border-red-400 hover:bg-red-50 px-8 py-3 rounded-xl transition-all duration-300"
                      >
                        <RotateCcw className="h-5 w-5 mr-2" />
                        重置
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 今日统计 */}
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      今日时间统计
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">专注时间</span>
                      <span className="font-bold text-lg text-blue-600">4小时 25分钟</span>
                    </div>
                    <div className="relative">
                      <Progress value={73} className="h-3 bg-gray-100" />
                      <div
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "73%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">完成番茄钟</span>
                      <span className="font-bold text-lg text-green-600">8 / 12</span>
                    </div>
                    <div className="relative">
                      <Progress value={67} className="h-3 bg-gray-100" />
                      <div
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "67%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">效率评分</span>
                      <span className="font-bold text-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                        85分
                      </span>
                    </div>
                    <div className="relative">
                      <Progress value={85} className="h-3 bg-gray-100" />
                      <div
                        className="absolute top-0 left-0 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: "85%" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI时间建议 */}
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    AI时间优化建议
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-orange-800 mb-3 text-lg">最佳专注时段</h4>
                    <p className="text-orange-700">根据您的历史数据，上午9-11点是您的黄金专注时间</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <h4 className="font-bold text-blue-800 mb-3 text-lg">休息建议</h4>
                    <p className="text-blue-700">建议每工作50分钟休息10分钟，有助于保持高效率</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* OA审批 */}
          <TabsContent value="approval" className="space-y-8">
            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    待审批事项
                  </span>
                </CardTitle>
                <CardDescription className="text-gray-600">共 {pendingApprovals.length} 项待处理</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-6 border-0 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`p-3 rounded-full ${item.color}`}>
                          <AlertCircle className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-bold text-lg text-gray-700">{item.type}</div>
                          <div className="text-gray-600 mt-1">
                            申请人：{item.applicant} • {item.amount || item.duration} • {item.time}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 rounded-lg bg-transparent"
                        >
                          查看
                        </Button>
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-lg shadow-lg"
                        >
                          审批
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    24
                  </div>
                  <div className="text-gray-600 font-medium">今日已审批</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                    4
                  </div>
                  <div className="text-gray-600 font-medium">待处理</div>
                </CardContent>
              </Card>
              <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    2.3小时
                  </div>
                  <div className="text-gray-600 font-medium">平均处理时间</div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* 效能工具 */}
          <TabsContent value="tools" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {efficiencyTools.map((tool, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 group"
                >
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4 text-xl">
                      <div className={`p-3 bg-gradient-to-r ${tool.color} rounded-xl shadow-lg`}>
                        <tool.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700">{tool.name}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">使用率</span>
                      <span className="font-bold text-lg text-blue-600">{tool.usage}%</span>
                    </div>
                    <div className="relative">
                      <Progress value={tool.usage} className="h-3 bg-gray-100" />
                      <div
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${tool.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${tool.usage}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">效率提升</span>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 font-bold">
                        {tool.efficiency}
                      </Badge>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${tool.color} hover:shadow-lg text-white py-3 rounded-xl transition-all duration-300`}
                    >
                      立即使用
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    工具使用统计
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      156
                    </div>
                    <div className="text-gray-600 font-medium">今日使用次数</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      3.2小时
                    </div>
                    <div className="text-gray-600 font-medium">节省时间</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                      89%
                    </div>
                    <div className="text-gray-600 font-medium">满意度</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                      +35%
                    </div>
                    <div className="text-gray-600 font-medium">效率提升</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
