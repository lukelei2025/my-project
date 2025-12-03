import Link from 'next/link';

export default function Projects() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans font-light">
      <main className="w-full max-w-2xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl mb-8 text-center font-light">我的项目</h1>
        
        <div className="space-y-6">
          {/* 第一个项目 */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-light mb-2">第一个网页</h2>
            <p className="text-sm text-gray-600 mb-3">用 AI 生成的静态页面</p>
            <div className="flex justify-end">
              <Link href="#" className="text-sm text-gray-600 underline">查看详情</Link>
            </div>
          </div>
          
          {/* 第二个项目 */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-light mb-2">个人主页</h2>
            <p className="text-sm text-gray-600 mb-3">现在这个站</p>
            <div className="flex justify-end">
              <Link href="/" className="text-sm text-gray-600 underline">返回首页</Link>
            </div>
          </div>
          
          {/* 第三个项目：天气查询 */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-light mb-2">天气查询小工具</h2>
            <p className="text-sm text-gray-600 mb-3">
              可以输入城市名称，实时查看当前的温度和天气情况，是一个练习调用第三方 API 的小项目。
            </p>
            <div className="flex justify-end">
              <Link href="/weather" className="text-sm text-gray-600 underline">
                打开天气查询
              </Link>
            </div>
          </div>
          
          {/* 第四个项目 */}
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-light mb-2">未来想做的产品</h2>
            <p className="text-sm text-gray-600 mb-3">先留一个空位</p>
            <div className="flex justify-end">
              <span className="text-sm text-gray-400">即将上线</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="inline-block px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors">
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}