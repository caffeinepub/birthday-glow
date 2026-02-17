import { useState, useEffect } from 'react';
import Page1Entry from './pages/Page1Entry';
import Page2Report from './pages/Page2Report';
import Page3Wish from './pages/Page3Wish';

type PageNumber = 1 | 2 | 3;

function App() {
  const [currentPage, setCurrentPage] = useState<PageNumber>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [page1Unlocked, setPage1Unlocked] = useState(false);

  const navigateToPage = (page: PageNumber) => {
    if (page === 2 && !page1Unlocked) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300);
  };

  const unlockNextPage = () => {
    setPage1Unlocked(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className={`transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {currentPage === 1 && (
          <Page1Entry
            onNext={() => navigateToPage(2)}
            onUnlock={unlockNextPage}
            isUnlocked={page1Unlocked}
          />
        )}
        {currentPage === 2 && (
          <Page2Report
            onPrevious={() => navigateToPage(1)}
            onNext={() => navigateToPage(3)}
          />
        )}
        {currentPage === 3 && (
          <Page3Wish onPrevious={() => navigateToPage(2)} />
        )}
      </div>
    </div>
  );
}

export default App;
