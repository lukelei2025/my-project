import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans font-light">
      <main className="w-full max-w-2xl px-4 py-16 text-center">
        {/* 顶部大标题 */}
        <h1 className="text-3xl md:text-4xl font-light mb-12">我是 XXX</h1>
        
        {/* 三段个人介绍 */}
        <div className="mb-16 text-left">
          <div className="mb-8">
            <h2 className="text-lg font-light mb-2">我是谁</h2>
            <p className="text-sm leading-relaxed">
              我是一名对编程充满热情的学习者，目前正在积极探索前端开发和AI技术的结合。我热爱解决问题，喜欢通过代码创造有价值的应用。
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-light mb-2">我为什么学 AI 编程</h2>
            <p className="text-sm leading-relaxed">
              人工智能技术正在迅速改变我们的生活和工作方式。我学习AI编程是因为我相信AI与编程的结合将创造出令人惊叹的可能性，我希望能够掌握这项技能，开发出更智能、更高效的应用。
            </p>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-light mb-2">我接下来想做什么项目</h2>
            <p className="text-sm leading-relaxed">
              接下来，我计划开发一个AI辅助学习平台，帮助用户更高效地学习编程知识。此外，我还想尝试创建一个简单的AI内容生成工具，用于辅助日常工作和创作。
            </p>
          </div>
        </div>
        
        {/* 底部按钮 */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/projects" 
            className="px-6 py-3 border border-black text-black hover:bg-gray-100 transition-colors"
          >
            我的项目
          </Link>
          
          <a 
            href="mailto:example@example.com" 
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            联系我
          </a>
        </div>
      </main>
    </div>
  );
}
