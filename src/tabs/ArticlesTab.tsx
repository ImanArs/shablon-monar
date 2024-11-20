export const ArticlesTab = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase font-bold tracking-wide">
        Статьи
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 items-center max-w-2xl w-full">
        <p className="text-base sm:text-lg lg:text-xl text-center text-gray-700 flex-1">
          У этого пользователя пока нет статей
        </p>
      </div>
    </div>
  );
};
