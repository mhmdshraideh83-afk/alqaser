export default function Signature() {
  return (
    <section className="relative flex min-h-[56vh] items-center overflow-hidden bg-[#221410] py-[76px]">
      <img
        src="/images/image5.jpg"
        alt="كنافة نابلسية طازجة من القصر الشرقي"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,12,9,.96)_18%,rgba(20,12,9,.35)_62%,rgba(20,12,9,.15)_100%)]" />

      <div className="relative z-2 mx-auto w-full max-w-[1080px] px-[22px]">
        <div className="max-w-[520px]">
          <div className="mb-2.5 text-[.9rem] font-bold text-[#e3b671]">توقيعنا</div>
          <h2 className="font-['Aref_Ruqaa'] text-[2.3rem] font-bold leading-[1.25] text-[#f6ecd9]">
            كنافة نابلسية تُقطع أمامك، ساخنة كل مرة
          </h2>
          <p className="mt-3.5 text-[1.02rem] text-[#efe1c8]">
            جبنة تتمدد، قطر متوازن، وقشرة سميّة ذهبية — القطعة التي جعلت القصر الشرقي اسمًا تعرفه إربد كلها.
          </p>
        </div>
      </div>
    </section>
  );
}
