import Logo from './icons/Logo.jsx';
import { FacebookIcon, InstagramIcon, WhatsappIcon } from './icons/SocialIcons.jsx';

const SOCIALS = [
  {
    href: 'https://www.instagram.com/alsharqi.sweet?stkn=eHBhZXJjNzM0Z3o1',
    label: 'انستغرام',
    Icon: InstagramIcon,
  },
  { href: 'https://www.facebook.com/share/1FuVRx82MJ/', label: 'فيسبوك', Icon: FacebookIcon },
  { href: 'https://wa.me/962790715653', label: 'واتساب', Icon: WhatsappIcon },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#221410] pt-14 pb-[110px] text-[#efe1c8]">
      <div className="mx-auto max-w-[1080px] px-[22px]">
        <div className="flex flex-wrap items-start justify-between gap-[30px]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-[38px] w-[38px]" />
              <b className="font-['Aref_Ruqaa'] text-[1.3rem] font-bold text-[#f6ecd9]">
                مخابز وحلويات القصر الشرقي
              </b>
            </div>
            <p className="mt-2 max-w-[280px] text-[.9rem] text-[#a4988c]">
              الطعم على أصولها — منذ أكثر من ٣٠ عامًا في إربد.
            </p>
          </div>

          <div className="flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="group flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[#f6ecd9]/22 transition-all duration-200 hover:border-[#c68a3e] hover:bg-[#c68a3e]"
              >
                <Icon className="h-[18px] w-[18px] fill-[#f6ecd9] group-hover:fill-[#221410]" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-[42px] flex flex-wrap justify-between gap-2.5 border-t border-[#f6ecd9]/10 pt-[22px] text-[.82rem] text-[#8a7d71]">
          <span>© القصر الشرقي — جميع الحقوق محفوظة</span>
          <span>إربد، الأردن</span>
        </div>
      </div>
    </footer>
  );
}
