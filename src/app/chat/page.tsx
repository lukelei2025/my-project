'use client'
 
import { useState } from 'react'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}
 
export default function ChatPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
 
  const sendMessage = async () => {
    if (!input.trim()) return
 
    const userMessage: ChatMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)
 
    try {
      // 调用自己的 API Route
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      })

      if (!res.ok) {
        const errorText = await res.text()
        console.error(`聊天接口返回错误：${res.status} ${res.statusText}`, errorText)
        alert('请求失败，请稍后重试')
        setLoading(false)
        return
      }

      const data = await res.json()

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: data.reply
      }
      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('发送失败', error)
      alert('网络异常，请稍后再试')
    }
 
    setLoading(false)
  }
 
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">AI 聊天助手</h1>
 
      <div className="border rounded p-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded ${
              msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}>
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <p className="text-gray-500">AI 正在思考...</p>}
      </div>
 
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="输入消息..."
          className="flex-1 border p-2 rounded"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          发送
        </button>
      </div>
    </div>
  )
}