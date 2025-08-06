"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Lightbulb, TrendingUp, Sparkles } from 'lucide-react'

const insights = [
  {
    title: "效率提升建议",
    description: "基于数据分析，建议优化工作流程",
    confidence: 92,
    type: "efficiency"
  },
  {
    title: "资源配置优化",
    description: "发现3个可优化的资源分配点",
    confidence: 87,
    type: "resource"
  },
  {
    title: "团队协作改进",
    description: "识别出潜在的协作瓶颈",
    confidence: 78,
    type: "collaboration"
  },
]

export function IntelligentEngineCard() {
  return (
    <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 border-0 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">智能引擎</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center space-y-2">
          <div className="text-3xl font-bold">AI 助手</div>
          <p className="text-indigo-100">为您提供智能化建议</p>
        </div>

        <div className="space-y-4">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className="p-1 bg-white/20 rounded-lg">
                  <Lightbulb className="h-4 w-4 text-white" />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-semibold text-white">{insight.title}</h4>
                  <p className="text-indigo-100 text-sm">{insight.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-indigo-200">置信度</span>
                    <div className="flex-1 relative">
                      <Progress value={insight.confidence} className="h-2 bg-white/20" />
                      <div
                        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${insight.confidence}%` }}
                      />
                    </div>
                    <span className="text-xs text-white font-semibold">{insight.confidence}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          variant="secondary" 
          className="w-full bg-white text-indigo-600 hover:bg-indigo-50 shadow-lg"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          查看更多建议
        </Button>
      </CardContent>
    </Card>
  )
}
