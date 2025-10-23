'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorProps } from '@monaco-editor/react';
import { BackIcon, ForwardIcon, ReloadIcon, PlayIcon, StopIcon, CodeIcon } from '@/components/icons';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full bg-editor-bg text-gray-400">تحميل المحرر...</div>,
});

const defaultScript = `// هذا مثال لسكربت يمكن تشغيله
// ملاحظة: التشغيل الفعلي يتطلب بيئة Playwright حقيقية
async function runAutomation() {
    console.log('بدء تشغيل السكربت...');

    // يمكنك هنا كتابة أوامر محاكاة
    const pageTitle = "Example Domain";
    console.log(\`عنوان الصفحة: \${pageTitle}\`);

    const data = [
      { bookingId: 'GYG-12345', customer: 'أحمد محمود', status: 'مؤكد' },
      { bookingId: 'VIA-67890', customer: 'فاطمة الزهراء', status: 'قيد الانتظار' }
    ];

    console.log('تم استخراج البيانات بنجاح.');
    
    // لإظهار البيانات في تبويب النتائج، قم بإرجاعها
    return data;
}

runAutomation();
`;

type Status = 'خامل' | 'جاري الاتصال' | 'مباشر' | 'متوقف' | 'تشغيل السكربت';

export default function LiveViewer() {
  const [url, setUrl] = useState('https://supplier.getyourguide.com/');
  const [script, setScript] = useState(defaultScript);
  const [status, setStatus] = useState<Status>('خامل');
  const [results, setResults] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<'editor' | 'results'>('editor');

  const handleRunScript = () => {
    setStatus('تشغيل السكربت');
    setResults(null); // Clear previous results
    // In a real app, this would connect to a backend to execute the script.
    // Here, we'll simulate it.
    setTimeout(() => {
      // A mock result for demonstration
      const mockResult = [
          { bookingId: 'GYG-12345', customer: 'أحمد محمود', status: 'مؤكد', date: '2025-10-28' },
          { bookingId: 'VIA-67890', customer: 'فاطمة الزهراء', status: 'قيد الانتظار', date: '2025-10-29' },
          { bookingId: 'GYG-54321', customer: 'علي حسن', status: 'مؤكد', date: '2025-10-28' },
      ];
      setResults(mockResult);
      setStatus('خامل');
      setActiveTab('results');
    }, 2000);
  };
  
  const handleExportCsv = () => {
    if (!results || !Array.isArray(results) || results.length === 0) {
        alert("لا توجد بيانات لتصديرها.");
        return;
    }

    const headers = Object.keys(results[0]);
    const csvRows = [
        headers.join(','),
        ...results.map(row => 
            headers.map(fieldName => 
                JSON.stringify(row[fieldName], (key, value) => value === null ? '' : value)
            ).join(',')
        )
    ];
    
    const csvString = csvRows.join('\r\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'results.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const editorOptions: EditorProps['options'] = {
    minimap: { enabled: false },
    fontSize: 14,
    wordWrap: 'on',
    scrollBeyondLastLine: false,
    automaticLayout: true,
  };
  
  const pinnedSites = [
    { name: 'GetYourGuide', url: 'https://supplier.getyourguide.com/' },
    { name: 'Viator', url: 'https://supplier.viator.com/' },
    { name: 'Example', url: 'https://example.com/' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 h-screen font-sans">
      {/* Left Panel: Viewer and Controls */}
      <div className="lg:col-span-2 flex flex-col bg-gray-200">
        {/* Controls */}
        <div className="flex-shrink-0 bg-white p-2 shadow-md z-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"><BackIcon /></button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"><ForwardIcon /></button>
              <button onClick={() => setStatus('جاري الاتصال')} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"><ReloadIcon /></button>
            </div>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none text-left"
              dir="ltr"
            />
            <button onClick={() => setStatus('مباشر')} className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-md hover:bg-green-200 text-sm whitespace-nowrap">فتح جلسة</button>
            <button onClick={handleRunScript} className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-md hover:bg-blue-200 text-sm flex items-center gap-2 whitespace-nowrap"><PlayIcon /> تشغيل</button>
            <button onClick={() => setStatus('متوقف')} className="bg-red-100 text-red-800 font-bold px-4 py-2 rounded-md hover:bg-red-200 text-sm flex items-center gap-2 whitespace-nowrap"><StopIcon /> إيقاف</button>
          </div>
        </div>
        {/* Viewer Placeholder */}
        <div className="flex-grow flex items-center justify-center p-4">
          <div className="w-full h-full bg-white rounded-md shadow-inner flex flex-col items-center justify-center border border-gray-300">
            <div className="text-gray-400 mb-4"><CodeIcon /></div>
            <h2 className="text-2xl font-bold text-gray-600">عارض الجلسة المباشرة</h2>
            <p className="text-gray-500 mt-2">الحالة الحالية: <span className="font-bold text-brand-accent">{status}</span></p>
            {status === 'خامل' && <p className="text-sm text-gray-400 mt-2">انقر على "فتح جلسة" للبدء.</p>}
          </div>
        </div>
      </div>

      {/* Right Panel: Editor, Pinned Sites, Results */}
      <div className="lg:col-span-1 flex flex-col bg-white border-r border-gray-300">
        {/* Pinned Sites */}
        <div className="flex-shrink-0 p-3 border-b">
            <h3 className="text-sm font-bold text-gray-500 mb-2">مواقع مثبتة</h3>
            <div className="flex gap-2">
                {pinnedSites.map(site => (
                     <button key={site.name} onClick={() => setUrl(site.url)} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md hover:bg-gray-200">{site.name}</button>
                ))}
            </div>
        </div>
        
        {/* Tabs */}
        <div className="flex-shrink-0 flex border-b">
            <button onClick={() => setActiveTab('editor')} className={`flex-1 py-2 text-sm font-bold ${activeTab === 'editor' ? 'border-b-2 border-brand-accent text-brand-accent' : 'text-gray-500'}`}>السكربت</button>
            <button onClick={() => setActiveTab('results')} className={`flex-1 py-2 text-sm font-bold ${activeTab === 'results' ? 'border-b-2 border-brand-accent text-brand-accent' : 'text-gray-500'}`}>النتائج</button>
        </div>

        {/* Editor / Results Content */}
        <div className="flex-grow relative">
            <div className={`absolute inset-0 transition-opacity ${activeTab === 'editor' ? 'opacity-100 z-10' : 'opacity-0'}`}>
               <MonacoEditor
                  height="100%"
                  language="javascript"
                  theme="vs-dark"
                  value={script}
                  onChange={(value) => setScript(value || '')}
                  options={editorOptions}
                />
            </div>
             <div className={`absolute inset-0 transition-opacity flex flex-col ${activeTab === 'results' ? 'opacity-100 z-10' : 'opacity-0'}`}>
                {results ? (
                    <>
                        <div className="p-3 flex-shrink-0 border-b">
                            <button onClick={handleExportCsv} className="w-full bg-brand-accent text-white font-bold py-2 rounded-md hover:bg-brand-accent-hover text-sm">تصدير إلى CSV</button>
                        </div>
                        <pre className="text-xs p-4 overflow-auto flex-grow bg-gray-50 text-left" dir="ltr">
                            {JSON.stringify(results, null, 2)}
                        </pre>
                    </>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 p-4 text-center">
                        {status === 'تشغيل السكربت' ? 'جاري تنفيذ السكربت...' : 'سيتم عرض النتائج هنا بعد تشغيل السكربت.'}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
