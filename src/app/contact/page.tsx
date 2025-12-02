import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">联系我</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-8">如果您有任何问题或合作意向，欢迎随时与我联系</p>
        </div>
        
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <Image src="/globe.svg" alt="Website" width={24} height={24} className="mr-4" />
            <div>
              <p className="font-medium text-black dark:text-white">网站</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">https://example.com</a>
            </div>
          </div>
          
          <div className="flex items-center p-4 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
            <Image src="/window.svg" alt="Email" width={24} height={24} className="mr-4" />
            <div>
              <p className="font-medium text-black dark:text-white">邮箱</p>
              <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@example.com</a>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-zinc-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            返回首页
          </Link>
        </div>
      </main>
    </div>
  );
}