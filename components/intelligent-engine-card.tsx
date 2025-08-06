"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, Sparkles, TrendingUp, Zap } from "lucide-react"

export function IntelligentEngineCard() {
  return (
    <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200 shadow-xl hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold flex items-center">
            <Brain className="h-5 w-5 text-indigo-600 mr-2" />
            YanYu AI 智能引擎
          </CardTitle>
          <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
            <Sparkles className="h-3 w-3 mr-1" />
            运行中
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">AI分析进度</span>
            <span className="font-medium text-gray-700">87%</span>
          </div>
          <div className="relative">
            <Progress value={87} className="h-2 bg-gray-200" />
            <div
              className="absolute top-0 left-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: "87%" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-xs font-medium text-gray-700">效率提升</span>
            </div>
            <p className="text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mt-1">
              +34%
            </p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center space-x-2">
              <Zap className="h-4 w-4 text-yellow-600" />
              <span className="text-xs font-medium text-gray-700">智能建议</span>
            </div>
            <p className="text-lg font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mt-1">
              12条
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">最新AI洞察</h4>
          <div className="bg-white rounded-lg p-3 border border-indigo-100 shadow-sm">
            <p className="text-xs text-gray-600">
              基于YanYu Cloud数据分析，建议优化运营流程中的审批环节，预计可提升效率25%
            </p>
          </div>
        </div>

        <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
          查看详细分析
        </Button>
      </CardContent>
    </Card>
  )
}
