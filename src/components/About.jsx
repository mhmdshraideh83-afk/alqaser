const IMAGES = [
  { src: '/images/image2.jpg', alt: 'مكسرات طازجة على الحلويات', span: true },
  { src: '/images/image3.jpg', alt: 'تشكيلة الزيتون والمخللات', span: false },
  { src: '/images/image4.jpg', alt: 'قوالب كيك المناسبات', span: false },
];

const BADGES = [
  { value: '+30', label: 'عامًا من الخبرة' },
  { value: '2', label: 'فرعان في إربد' },
  { value: 'يوميًا', label: 'طازج من الفرن' },
];

export default function About() {
  return (
    <section id="about" className="bg-[#fbf6ec] py-[76px]">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-[34px] px-[22px] max-[820px]:grid-cols-1 min-[821px]:grid-cols-[1.05fr_1fr] min-[821px]:gap-14">
        <div>
          <div className="mb-2.5 text-[.9rem] font-bold text-[#c68a3e]">قصتنا</div>
          <h2 className="font-['Aref_Ruqaa'] text-[2.1rem] font-bold leading-[1.25] text-[#221410]">
            الطعم على أصولها
          </h2>
          <p className="mt-3.5 text-[1.02rem] text-[#5a473f]">
            منذ أكثر من ثلاثين عامًا، ومخابز وحلويات القصر الشرقي تقدّم لعائلات إربد نكهة الحلويات الشامية الأصيلة والمخبوزات الطازجة يوميًا، بوصفات محفوظة جيلًا بعد جيل ومكوّنات نغربلها بعناية قبل أن تصل إلى صينية الفرن.
          </p>
          <p className="mt-3.5 text-[1.02rem] text-[#5a473f]">
            من الكنافة النابلسية الساخنة إلى المعجنات والمخبوزات اليومية، ومن أطباق المونة والزيتون إلى قوالب الكيك المناسباتية — كل صنف يخرج من مطبخنا يحمل نفس المعيار الذي بدأنا به أول يوم.
          </p>
          <div className="mt-7 flex flex-wrap gap-[26px]">
            {BADGES.map((b) => (
              <div key={b.label} className="flex flex-col gap-0.5">
                <b className="font-['Aref_Ruqaa'] text-[1.9rem] font-bold leading-[1.25] text-[#5c3a34]">{b.value}</b>
                <span className="text-[.85rem] text-[#7a6a61]">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5 max-[820px]:order-first">
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className={
                'group block aspect-square overflow-hidden rounded-[14px] shadow-[0_18px_40px_-20px_rgba(20,10,6,0.55)] ' +
                (img.span ? 'row-span-2' : '')
              }
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
