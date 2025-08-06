"use client"

import { useState } from "react"
import { NarrowNavigation } from "@/components/narrow-navigation"
import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Bell, Shield, Palette, Globe, Database, Key, Mail, Phone, Save } from 'lucide-react'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100">
      <NarrowNavigation />
      <div className="ml-16">
        <DashboardHeader />
        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                系统设置
              </h1>
              <p className="text-gray-600 mt-2">个性化配置，优化使用体验</p>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg">
              <Save className="h-4 w-4 mr-2" />
              保存设置
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-lg font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                  设置分类
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start bg-orange-50 text-orange-700">
                  <User className="h-4 w-4 mr-3" />
                  个人资料
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-50">
                  <Bell className="h-4 w-4 mr-3" />
                  通知设置
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-50">
                  <Shield className="h-4 w-4 mr-3" />
                  安全设置
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-50">
                  <Palette className="h-4 w-4 mr-3" />
                  界面设置
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-50">
                  <Globe className="h-4 w-4 mr-3" />
                  语言设置
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-orange-50">
                  <Database className="h-4 w-4 mr-3" />
                  数据管理
                </Button>
              </CardContent>
            </Card>

            <div className="lg:col-span-3 space-y-6">
              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    个人资料
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <Avatar className="h-20 w-20 ring-4 ring-orange-200">
                      <AvatarImage src="/placeholder.svg?height=80&width=80" />
                      <AvatarFallback className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-xl">
                        用
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        更换头像
                      </Button>
                      <p className="text-sm text-gray-500">支持 JPG、PNG 格式，文件大小不超过 2MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="username">用户名</Label>
                      <Input id="username" defaultValue="张三" className="border-orange-200 focus:border-orange-400" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">邮箱地址</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                        <Input
                          id="email"
                          type="email"
                          defaultValue="zhangsan@example.com"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">手机号码</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
                        <Input
                          id="phone"
                          defaultValue="138****8888"
                          className="pl-10 border-orange-200 focus:border-orange-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">部门</Label>
                      <Input
                        id="department"
                        defaultValue="技术部"
                        className="border-orange-200 focus:border-orange-400"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    通知设置
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">邮件通知</h4>
                        <p className="text-sm text-gray-500">接收重要事件的邮件提醒</p>
                      </div>
                      <Switch 
                        checked={notifications}
                        onCheckedChange={setNotifications}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">桌面通知</h4>
                        <p className="text-sm text-gray-500">在浏览器中显示通知</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">消息提醒</h4>
                        <p className="text-sm text-gray-500">新消息到达时播放提示音</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">会议提醒</h4>
                        <p className="text-sm text-gray-500">会议开始前15分钟提醒</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    安全设置
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">两步验证</h4>
                        <p className="text-sm text-gray-500">为账户添加额外的安全保护</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        启用
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">修改密码</h4>
                        <p className="text-sm text-gray-500">定期更新密码以保护账户安全</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        <Key className="h-4 w-4 mr-2" />
                        修改
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">登录历史</h4>
                        <p className="text-sm text-gray-500">查看最近的登录记录</p>
                      </div>
                      <Button
                        variant="outline"
                        className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                      >
                        查看
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                    界面设置
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">深色模式</h4>
                        <p className="text-sm text-gray-500">切换到深色主题</p>
                      </div>
                      <Switch 
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">紧凑布局</h4>
                        <p className="text-sm text-gray-500">减少界面元素间距</p>
                      </div>
                      <Switch />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">侧边栏自动收起</h4>
                        <p className="text-sm text-gray-500">鼠标离开时自动收起导航栏</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
