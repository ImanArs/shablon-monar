import { Instagram, Send, Twitter } from 'lucide-react';
import React, { useState } from 'react';
import { tabs, userDetail } from './const';
import { PortfolioTab } from './tabs/PortfolioTab';
import { VideoTab } from './tabs/VideoTab';
import { ReviewsTab } from './tabs/ReviewsTab';
import { ArticlesTab } from './tabs/ArticlesTab';
import { AboutTab } from './tabs/AboutTab';
import { CalendarTab } from './tabs/CalendarTab';

export const tabContent: Record<string, React.ReactNode> = {
  portfolio: <PortfolioTab />,
  video: <VideoTab />,
  reviews: <ReviewsTab />,
  articles: <ArticlesTab />,
  about: <AboutTab />,
  calendar: <CalendarTab />,
};

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center gap-6 justify-center">
          <div className="w-24 h-24 md:w-36 md:h-36">
            <img
              src={userDetail.avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-black">
              {userDetail.name.toUpperCase()}
            </h1>
            <div className="mt-2 text-gray-500">
              <p>{userDetail.nickname}</p>
              <p>Ведущий - {userDetail.city}</p>
              <p>от {userDetail.price} руб.</p>
            </div>
            <div className="flex gap-4 mt-4 justify-center md:justify-start">
              <button className="px-4 py-2 rounded-full bg-black text-white border border-black">
                написать
              </button>
              <button className="px-4 py-2 rounded-full bg-white text-black border-2 border-black">
                контакты
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-600">{userDetail.quote}</p>
          </div>
        </header>

        <div className="max-w-2xl w-full flex gap-4 mx-auto justify-center mt-8">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`w-full md:w-auto pb-1 px-1 border-b-2 ${
                activeTab.value === tab.value
                  ? 'border-black'
                  : 'border-transparent'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <div className='flex flex-row justify-center md:hidden'>{tab.icon}</div>
              <span className='hidden md:block'>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 min-h-[200px]">
          {tabContent[activeTab.value]}
        </div>
      </div>

      <footer className="bg-black text-white py-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold">someLogo</h2>
          <p className="mt-4 text-gray-400">
            Главный блог о свадьбах и любви. Реальные свадебные истории, советы
            и каталог лучших свадебных профессионалов
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Send className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
