import { MapPin } from 'lucide-react';
import { userDetail } from '../const';

export const AboutTab = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase font-bold tracking-wide mb-6">
        О себе
      </h2>
      <ul className="max-w-4xl mx-auto flex flex-col gap-6 text-gray-700">
        {[
          'Ламповые свадебные ужины, для знающих, кто такой Уорхол.',
          'Больше душевно направляю, чем веду)',
          'Погружаюсь в вашу историю, чтобы вечер стал отражением вас самих.',
          'Могу поговорить с гостями о Шопене, о том, что сейчас в музеях и даже обсудить сериал Король и Шут.',
          'Это должно быть максимально комфортно, естественно, музыкально, одним словом — взболтать все эмоции, но не смешивать))',
          'Атмосфера всеобщей лёгкости, счастья и любви)',
          'Свадьба — это делать что хочется, а не то что нужно)',
        ].map((item, index) => (
          <li key={index} className="text-sm sm:text-base lg:text-lg font-light leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
      <p className="flex justify-center items-center gap-2 text-center text-base sm:text-lg lg:text-xl text-gray-800 mt-12">
        <MapPin className="text-gray-500" />
        <span className="font-medium">Выезд:</span>
        <span className="font-light">{userDetail.relocate}</span>
      </p>
      <div className="flex flex-col mx-auto gap-6 mt-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center uppercase font-bold tracking-wide">
          Коллеги по проектам {userDetail.projects}
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 items-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 text-center">
            У этого пользователя пока нет работ с коллегами
          </p>
        </div>
      </div>
    </div>
  );
};
