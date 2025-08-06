"use client"

import { useState } from "react"
import { Bell, Search, User, Settings, LogOut, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications] = useState(3)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    // 这里可以添加实际的主题切换逻辑
  }

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        {/* 左侧：Logo和标题 */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 relative">
              <Image src="/logo.png" alt="YanYu Cloud Logo" width={40} height={40} className="rounded-lg" priority />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                YanYu Cloud Sharing E-center
              </h1>
              <p className="text-sm text-gray-500">言语云享e中心 · 智能运营管理平台</p>
            </div>
          </div>
        </div>

        {/* 中间：搜索框 */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="搜索功能、数据或文档..."
              className="pl-10 pr-4 w-full border-2 border-gray-200 focus:border-blue-400 rounded-lg transition-all duration-300"
            />
          </div>
        </div>

        {/* 右侧：操作按钮 */}
        <div className="flex items-center space-x-4">
          {/* 主题切换 */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleDarkMode}
            className="relative hover:bg-gray-100 rounded-lg transition-all duration-300"
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {/* 通知 */}
          <Button
            variant="ghost"
            size="sm"
            className="relative hover:bg-gray-100 rounded-lg transition-all duration-300"
          >
            <Bell className="h-4 w-4" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-500 text-white">
                {notifications}
              </Badge>
            )}
          </Button>

          {/* 用户菜单 */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full hover:scale-105 transition-transform">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center shadow-lg">
                  <span className="text-white font-medium text-sm">管</span>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">系统管理员</p>
                  <p className="text-xs leading-none text-muted-foreground">admin@yanyu-cloud.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>个人资料</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>系统设置</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>退出登录</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
