import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

interface ResearchItem {
  year: string;
  student: string;
  topic: string;
}

interface CategoryData {
  [key: string]: ResearchItem[];
}

const researchData: CategoryData = {
  papers: [
    {
      year: '114',
      student: '陳茹玉',
      topic: '基於技術指標與輿情特徵之交易策略研究',
    },
    {
      year: '113',
      student: '廖劭其',
      topic: '結合大型語言模型與多代理人技術的財金專業問答系統研究',
    },
    {
      year: '113',
      student: '邱書映',
      topic: '結合大型語言模型的對話式葡萄酒推薦系統',
    },
    {
      year: '113',
      student: '蔣孟學',
      topic: '結合 RFM 模型與機器學習技術解決顧客流失問題',
    },
    {
      year: '113',
      student: '謝仲齊',
      topic: '結合大型語言模型與知識圖譜之財金問答系統',
    },
    {
      year: '113',
      student: '游子慧',
      topic: '以機器學習模型探討影響興櫃轉板上市(櫃) 的成功關鍵因素',
    },
    {
      year: '113',
      student: '陳淑玲',
      topic: '結合六標準差與價值溪流圖於採購流程改善之研究-以A工程公司為例',
    },
    {
      year: '113',
      student: '邱安允',
      topic: '用顧客旅程探索關懷聊天機器人功能設計',
    },
    {
      year: '113',
      student: '王晏臻',
      topic: '結合大型語言模型優化財金問答系統的應用研究',
    },
    {
      year: '112',
      student: '周育德',
      topic: '結合知識圖譜之財金專業問答系統',
    },
    {
      year: '112',
      student: '劉蕓題',
      topic: '配對交易應用於台灣股市逐筆交易制度',
    },
    {
      year: '112',
      student: '洪子貽',
      topic: '整合圖譜與評論文本的紅酒推薦系統',
    },
    {
      year: '112',
      student: '林伊薇',
      topic: '結合輿情與盤中逐筆交易數據探索投資者行為',
    },
    {
      year: '112',
      student: '葉茂祥',
      topic: '透過層級分析法（AHP）研究影響葡萄酒風味的關鍵因素- 以紅葡萄酒為例',
    },
    {
      year: '112',
      student: '邱顯富',
      topic: '囤房稅2.0對房地產市場影響之研究',
    },
    {
      year: '112 ',
      student: '黃雪芳',
      topic: '運用顧客旅程地圖探討實體店家建置電商網站轉型線上經營之關鍵要素',
    },
    {
      year: '112',
      student: '郭姵庭',
      topic: '影響中小企業申請IPO之決策因素探討',
    },
    {
      year: '112',
      student: '張禹崴',
      topic: '使用顧客旅程探討人壽保險公司核保部門導入生成式AI知識庫',
    },
    {
      year: '112',
      student: '高國安',
      topic: '六大營造公司逆境中的創新與轉型： 準整合組織架構理論及關鍵要素之研究',
    },
    {
      year: '111',
      student: '黃盺瑜',
      topic: '探索意見領袖在台灣線上股市論壇中的影響',
    },
    {
      year: '111',
      student: 'Polsri, Suyanee',
      topic: 'A Framework for Aspect Sentiment Analysis of Sequel Movie Reviews Using Machine Learning and the Fuzzy QCA Method',
    },
    {
      year: '111',
      student: '侯超旻',
      topic: '基於時間性圖神經網絡的社交媒體特徵及公司關係知識圖譜的異常股票檢測',
    },
    {
      year: '111',
      student: '李育潔',
      topic: '應用立場檢測結合社群特徵及圖神經網路用於股票異常偵測',
    },
    {
      year: '111',
      student: '廖婉伶',
      topic: '應用方法目的鏈探討消費者對有機產品的購買價值',
    },
    {
      year: '111',
      student: '李宗隆',
      topic: '透過顧客旅程探索保險服務價值-以新冠肺炎期間遠距視訊投保為例',
    },
    {
      year: '111',
      student: '楊惠晴',
      topic: '以顧客旅程地圖探討場域價值與線上服務之創新機會─以投保旅遊平安保險為例',
    },
    {
      year: '111',
      student: '賴惠棋',
      topic: '以顧客旅程地圖探討壽險業網路投保風險識別與管控',
    },
    {
      year: '111',
      student: '林子鈞',
      topic: '以顧客旅程探討金融詐騙告警服務對金融機構企業價值之影響',
    },
    {
      year: '110',
      student: '呂韋葶',
      topic: '警示股票與網路留言之探索',
    },
    {
      year: '110',
      student: '尹貽正',
      topic: '整合技術指標與交易策略應用機器學習預測股市漲跌',
    },
    {
      year: '110',
      student: '黃子滔',
      topic: '利用知識圖譜嵌入進行基於序列和服裝搭配的推薦系統',
    },
    {
      year: '110',
      student: '孫健修',
      topic: '基於深度強化式學習多代理人投資組合 自適應交易模型',
    },
    {
      year: '110',
      student: '鄭如涵',
      topic: '基於深度學習以服裝風格特徵建構個人化推薦系統',
    },
    {
      year: '110',
      student: '黃煜為',
      topic: '多任務中文Aspect 類別萃取暨情感極性預測模型',
    },
    {
      year: '110',
      student: '邱春華',
      topic: '無線電信終端產品申請官方認證之創新關鍵服務',
    },
    {
      year: '110',
      student: '黃耀宗',
      topic: '企業併購之ERP系統整合決策探討-以T企業集團併購為例',
    },
    {
      year: '110',
      student: '留秋玉',
      topic: '透過顧客旅程探索銀行的服務價值—以新冠肺炎期間勞工紓困貸款為例',
    },
    {
      year: '110',
      student: '鄭美中',
      topic: '以機器學習為基礎之CEO生涯分析: 以美國大學畢業生為例',
    },
    {
      year: '110',
      student: '邱郁雯',
      topic: '以方法目的鏈探討後疫情時代供應商評選條件',
    },
    {
      year: '110',
      student: '陳明仁',
      topic: '結合顧客旅程與文字探勘以探索顧客意見-以A電信公司門市評論為例',
    },
    {
      year: '109',
      student: '崔昭娟',
      topic: 'A Text Mining Approach To Analyzing User Service Experience: A Case Of Kakaobank Application',
    },
    {
      year: '109',
      student: 'Rhea Sharmayne Legaspi',
      topic: 'A Mixed Method Approach to Analyzing User Service Experience: A Case Study of the Philippines Digital Banking Application Reviews',
    },
  ],
  undergrad: [
    {
      year: '113',
      student: '陳淑玲',
      topic: '結合六標準差與價值溪流圖於採購流程改善之研究-以A工程公司為例',
    },
    {
      year: '113',
      student: '邱安允',
      topic: '用顧客旅程探索關懷聊天機器人功能設計',
    },
  ],
  conference: [
    {
      year: '114',
      student: '張詠翔',
      topic: '應用大語言技術之衛教聊天機器人(政大資管)',
    },
    {
      year: '113',
      student: '黃仁和',
      topic: '基於盤中逐筆交易資料及社群媒體立場分析之強化學習交易代理人(中央資管)',
    },
    {
      year: '111',
      student: '姜依婷',
      topic: '基於身材服裝穿搭推薦系統',
    },
    {
      year: '110',
      student: '陳元熙',
      topic: '以強化式學習建構適性化理財機器人模型-以ETF為標的(政大資管)',
    },
    {
      year: '109',
      student: '侯超旻',
      topic: '基於深度學習建置虛假資訊偵測模型 (北科資財)',
    },
  ],
};

// 大學生專題資料
const undergradProjects: ResearchItem[] = [
  {
    year: '114',
    student: '糖小護',
    topic: '聯新國際智慧健康照護 第二名',
  },
  {
    year: '113',
    student: '碳足跡教育',
    topic: '教育開放資料組 第一名',
  },
  {
    year: '113',
    student: '人工智慧財務健檢戰情室',
    topic: '商業資訊創新應用組第三名',
  },
];

// 競賽資料
const competitions: ResearchItem[] = [
  {
    year: '114',
    student: '糖小護',
    topic: '聯新國際智慧健康照護 第二名',
  },
  {
    year: '113',
    student: '碳足跡教育',
    topic: '教育開放資料組 第一名',
  },
  {
    year: '113',
    student: '人工智慧財務健檢戰情室',
    topic: '商業資訊創新應用組第三名',
  },
  {
    year: '110',
    student: '銀JOY生活─長輩的好朋友',
    topic: '臺北生活好便利創新應用組 佳作',
  },
  {
    year: '109',
    student: '艾菲克特-專屬於你的新聞偵探 Open Data',
    topic: '創意應用開發組 第二名',
  },
  {
    year: '109',
    student: 'HOW PAY好配',
    topic: '經濟與能源空間開放資料服務應用組-應用系統主題 第三名',
  },
  {
    year: '108',
    student: '猜你喜歡─個人化旅遊推薦機器人',
    topic: '產學合作組 第三名',
  },
];

const categories = [
  { id: 'papers', label: '研究生論文' },
  { id: 'undergrad', label: '大學生專題(競賽)' },
  { id: 'conference', label: '大專國科會' },
];

// Table Component
interface TableProps {
  title: string;
  data: ResearchItem[];
  delay?: number;
}

function ResearchTable({ title, data, delay = 0 }: TableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white rounded-lg overflow-hidden w-full"
      style={{ border: '1px solid #e5e7eb' }}
    >
      {/* Table Title */}
      <div
        className="px-8 py-2 text-center font-medium"
        style={{
          backgroundColor: '#10B7A5',
          color: 'white',
          fontSize: '20px',
          fontWeight: 1000
        }}
      >
        {title}
      </div>

      {/* Table Header */}
      <div
        className="grid gap-6 px-8 py-2"
        style={{
          gridTemplateColumns: '80px 120px 1fr',
          backgroundColor: '#f9fafb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="text-[#10B7A5]" style={{ fontSize: '20px', fontWeight: 1000 }}>
          年度
        </div>
        <div className="text-[#10B7A5]" style={{ fontSize: '20px', fontWeight: 1000 }}>
          學生
        </div>
        <div className="text-[#10B7A5]" style={{ fontSize: '20px', fontWeight: 1000 }}>
          成果
        </div>
      </div>

      {/* Table Body - 添加滾動功能 */}
      <div 
        style={{ 
          maxHeight: '200px',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
        className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + 0.1 + index * 0.05 }}
            className="grid gap-6 px-8 py-5 transition-colors duration-200 hover:bg-gray-50"
            style={{
              gridTemplateColumns: '80px 120px 1fr',
              borderBottom: '1px solid #f3f4f6',
            }}
          >
            <div className="text-gray-600" style={{ fontSize: '16px', fontWeight: 400 }}>
              {item.year}
            </div>
            <div className="text-gray-800" style={{ fontSize: '16px', fontWeight: 500 }}>
              {item.student}
            </div>
            <div
              className="text-gray-700"
              style={{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              {item.topic}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function ResearchSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('papers');

  const currentData = researchData[activeCategory] || [];

  return (
    <section
      id="research"
      ref={ref}
      className="relative min-h-screen py-20 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-[#10B7A5] mb-8"
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 600,
              letterSpacing: '0.05em',
              lineHeight: 1.3,
            }}
          >
            我們的研究成果
          </h2>

          {/* Category Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:text-[#10B7A5]'
                }`}
                style={{
                  fontSize: '16px',
                  fontWeight: 800,
                  backgroundColor: activeCategory === category.id ? '#10B7A5' : 'white',
                  border: activeCategory === category.id ? 'none' : '1px solid #e5e7eb',
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Conditional Rendering: Two tables for undergrad, single table for others */}
        {activeCategory === 'undergrad' ? (
          // Two Tables Side by Side for 大學生專題(競賽)
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
            <ResearchTable title="大學生專題" data={undergradProjects} delay={0.4} />
            <ResearchTable title="競賽" data={competitions} delay={0.5} />
          </div>
        ) : (
          // Single Table for other categories
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-lg overflow-hidden"
            style={{ border: '1px solid #e5e7eb' }}
          >
            {/* Table Header */}
            <div
              className="grid gap-6 px-8 py-2"
              style={{
                gridTemplateColumns: '80px 120px 1fr',
                backgroundColor: '#10B7A5',
                borderBottom: '1px solid #e5e7eb',
              }}
            >
              <div style={{ fontSize: '20px', fontWeight: 1000, color: '#FFFFFF' }}>
                年度
              </div>
              <div style={{ fontSize: '20px', fontWeight: 1000, color: '#FFFFFF' }}>
                學生
              </div>
              <div style={{ fontSize: '20px', fontWeight: 1000, color: '#FFFFFF' }}>
                研究
              </div>
            </div>

            {/* Table Body - 添加滾動功能 */}
            <div
              style={{
                maxHeight: '250px',
                overflowY: 'auto',
                overflowX: 'hidden'
              }}
              className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            >
              {currentData.map((item, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="grid gap-6 px-8 py-5 transition-colors duration-200 hover:bg-gray-50"
                  style={{
                    gridTemplateColumns: '80px 120px 1fr',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  <div className="text-gray-600" style={{ fontSize: '16px', fontWeight: 400 }}>
                    {item.year}
                  </div>
                  <div className="text-gray-800" style={{ fontSize: '16px', fontWeight: 500 }}>
                    {item.student}
                  </div>
                  <div
                    className="text-gray-700"
                    style={{
                      fontSize: '16px',
                      fontWeight: 400,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.topic}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}