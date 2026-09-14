import Logo from './icons/Logo.jsx';

export default function Hero({ onOpenCart }) {
  const scrollToMenu = () =>
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#532727]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,8,6,.35)_0%,rgba(12,8,6,.45)_30%,rgba(12,8,6,.92)_78%,rgba(12,8,6,.98)_100%)]" />

      <div className="relative z-2 mx-auto flex w-full max-w-[1080px] flex-col items-center gap-[18px] px-[22px] pb-14">
        <div className="mb-0.5 flex items-center gap-3">
          <Logo className="h-11 w-11" />
          <span className="text-[.92rem] tracking-[.02em] text-[#e3b671]">مخابز وحلويات</span>
        </div>

        <h1 className="font-['Aref_Ruqaa'] text-[clamp(2.3rem,7vw,3.6rem)] font-bold leading-[1.25] text-[#f6ecd9]">
          القصر الشرقي
        </h1>
        <p className="mt-0.5 text-[1.15rem] text-[#efe1c8]">الطعم على أصولها</p>
        <div className="text-[.95rem] font-medium tracking-[.02em] text-[#e3b671]">
          مخابز • حلويات • مطعم — منذ أكثر من ٣٠ عامًا في إربد
        </div>

        <div className="mt-2.5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={scrollToMenu}
            className="inline-flex items-center gap-2 rounded-full bg-[#c68a3e] px-[26px] py-[13px] text-[.95rem] font-bold text-[#221410] transition-[transform,box-shadow,background] duration-200 hover:bg-[#e3b671] hover:shadow-[0_18px_40px_-20px_rgba(20,10,6,0.55)] active:scale-[.97]"
          >
            تصفح المنيو
          </button>
          <button
            type="button"
            onClick={onOpenCart}
            className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#f6ecd9]/55 px-[26px] py-[13px] text-[.95rem] font-bold text-[#f6ecd9] transition-[transform,box-shadow,background] duration-200 hover:bg-[#f6ecd9]/10 active:scale-[.97]"
          >
            اطلب الآن عبر واتساب
          </button>
        </div>
      </div>
    </section>
  );
}
