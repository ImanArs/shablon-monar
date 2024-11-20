export const ReviewsTab = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase font-bold tracking-wide">
        Отзывы
      </h2>
      <div className="flex flex-col sm:flex-row gap-6 items-center max-w-3xl w-full">
        <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left text-gray-700 flex-1">
          У этого пользователя пока нет отзывов
        </p>
        <button
          className="py-2 px-4 w-full sm:w-auto uppercase rounded-lg border-2 border-black bg-white text-black text-sm sm:text-base font-semibold transition-transform duration-300 hover:bg-black hover:text-white"
        >
          добавить отзыв
        </button>
      </div>
    </div>
  );
};
