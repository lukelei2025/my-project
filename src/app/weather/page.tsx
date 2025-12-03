'use client'
 
import { useState } from 'react'

type WeatherResponse = {
  location: {
    name: string
  }
  current: {
    temp_c: number
    condition: {
      text: string
    }
  }
}
 
export default function WeatherPage() {
  const [city, setCity] = useState('Beijing')
  const [weather, setWeather] = useState<WeatherResponse | null>(null)
  const [loading, setLoading] = useState(false)
 
  const getWeather = async () => {
    setLoading(true)
    try {
      // 注意：这里先硬编码，下一步我们会改进
      const API_KEY = 'YOUR_API_KEY' // ⚠️ 先别这样做！
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
      )
      const data: WeatherResponse = await res.json()
      setWeather(data)
    } catch (error) {
      console.error('获取天气失败', error)
    }
    setLoading(false)
  }
 
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">天气查询</h1>
 
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="输入城市名"
        className="border p-2 mr-2"
      />
 
      <button
        onClick={getWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        查询天气
      </button>
 
      {loading && <p className="mt-4">加载中...</p>}
 
      {weather && (
        <div className="mt-4 p-4 border rounded">
          <h2 className="text-xl">{weather.location.name}</h2>
          <p>温度：{weather.current.temp_c}°C</p>
          <p>天气：{weather.current.condition.text}</p>
        </div>
      )}
    </div>
  )
}