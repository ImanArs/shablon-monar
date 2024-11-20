import { userDetail } from '../const';

export const PortfolioTab = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {userDetail.portfolio.reduce((result: string[][], item: string, index: number) => {
          if (index % 2 === 0) result.push([]);
          result[result.length - 1].push(item);
          return result;
        }, []).map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4">
            {column.map((item, imgIndex) => (
              <img
                key={imgIndex}
                src={item}
                alt=""
                className="object-cover rounded-lg w-full"
              />
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-40 my-8 mx-auto">
        <button
          className="w-full mx-auto py-2 px-6 rounded-xl border border-black bg-white text-black"
        >
          Показать еще
        </button>
      </div>
    </div>
  );
};
