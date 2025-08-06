import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YanYu Cloud Sharing E-center",
  description: "言语云享e中心 - 智能运营管理平台 | 一言一语一成长；一点一滴一翱翔",
  keywords: ["YanYu", "Cloud", "智能管理", "企业运营", "数据分析", "AI助手", "云服务"],
  authors: [{ name: "YanYu Cloud Sharing E-center" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">{children}</div>
      </body>
    </html>
  )
}
