import { NextRequest, NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
 
    // 调用 DeepSeek API
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}` // 服务端环境变量，不需要 NEXT_PUBLIC_
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          { role: 'user', content: message }
        ]
      })
    })
 
    if (!response.ok) {
      const errorBody = await response.text()
      console.error('DeepSeek API failed:', response.status, errorBody)
      return NextResponse.json(
        { error: '上游接口错误' },
        { status: response.status }
      )
    }

    const data = await response.json()
 
    return NextResponse.json({
      reply: data.choices[0].message.content
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: '请求失败' }, { status: 500 })
  }
}