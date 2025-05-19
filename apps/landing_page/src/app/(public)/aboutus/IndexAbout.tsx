import { Img } from "@repo/ui/img";
import React from "react";
import { name_project } from "@repo/lib/titles";
function IndexAboutus() {
  return (
    <div className="py-10 px-4 md:px-0 space-y-12 lg:space-y-20">
      {/*headder */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 items-center space-y-6 md:space-y-0">
          <Img
            src="/images/about.png"
            className="w-full md:col-span-3 md:w-9/12 md:order-last md:justify-self-end"
            width={1000}
            height={1000}
            alt={name_project}
          />
          <div className="col-span-2 space-y-4">
            <h3 className="text-xl lg:text-3xl font-bold">وت وان</h3>
            <p className="text-sm leading-7 md:text-base md:leading-8">
              وت وان، نسل جدید خدمات دامپزشکی
              در وت وان، ما با هدف ایجاد دسترسی آسان، سریع و هوشمند به خدمات دامپزشکی، فعالیت خود را آغاز کردیم. این پلتفرم هوشمند با بهره‌گیری از تکنولوژی‌های نوین و هوش مصنوعی، بستری را فراهم کرده است که دامداران، صاحبان حیوانات خانگی و مراکز پرورش دام بتوانند تنها با چند کلیک به بهترین دامپزشکان و مراکز درمانی متصل شوند.
              ماموریت ما
              ارائه خدمات مشاوره دامپزشکی، آزمایشگاهی، دارویی و درمانی به صورت آنلاین و حضوری، با تمرکز بر کیفیت، سرعت و دقت در سراسر ایران و آسیای میانه.
              چشم‌انداز ما
              تبدیل شدن به بزرگترین و معتبرترین پلتفرم دامپزشکی هوشمند در منطقه، با ارتقای سطح سلامت دام‌ها، تسهیل دسترسی به خدمات و بهبود بهره‌وری دامداری و پرورش حیوانات.
              چرا وت وان؟

              مشاوره تخصصی آنلاین و در محل

              دسترسی به مراکز درمانی، آزمایشگاه‌ها و داروخانه‌های معتبر

              استفاده از سیستم‌های هوشمند برای پیگیری سوابق درمانی

              خدمات ویژه واکسیناسیون، پت‌شاپ و پشتیبانی سریع

              همکاری با دامپزشکان و متخصصان برجسته کشور

              در وت وان، ما همراه همیشگی شما در سلامت دام‌هایتان هستیم.
              {" "}
            </p>
          </div>
        </div>
      </div>
      {/* اماری */}
      <div className="bg-[#333333]">
        <div className="max-w-7xl mx-auto py-8 md:py-16 grid grid-cols-2 gap-y-8 md:gap-y-0 md:grid-cols-4 gap-x-4 md:gap-x-12">
          <div className="text-center">
            <p className="text-lg md:text-3xl text-green_vetone font-bold">
              68
            </p>
            <div className="divider before:bg-gray-500 after:bg-gray-500 my-1 md:my-4"></div>
            <p className="text-[11px] md:text-base text-gray-100"> دامپزشک</p>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-3xl  text-green_vetone font-bold">
              400,000
            </p>
            <div className="divider before:bg-gray-500 after:bg-gray-500 my-1 md:my-4"></div>
            <p className="text-[11px] md:text-base text-gray-100">دامدار</p>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-3xl  text-green_vetone font-bold">
              2680
            </p>
            <div className="divider before:bg-gray-500 after:bg-gray-500 my-1 md:my-4"></div>
            <p className="text-[11px] md:text-base text-gray-100 leading-6">
              {" "}
              بیمارستان و کلینیک
            </p>
          </div>
          <div className="text-center">
            <p className="text-lg md:text-3xl  text-green_vetone font-bold">
              2680
            </p>
            <div className="divider before:bg-gray-500 after:bg-gray-500 my-1 md:my-4"></div>
            <p className="text-[11px] md:text-base text-gray-100 leading-6">
              {" "}
              خدمات انجام شده
            </p>
          </div>
        </div>
      </div>
      {/* درباره خدمات ما */}
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="space-y-4">
          <h3 className="text-xl lg:text-3xl font-bold">چشم‌انداز وت وان
          </h3>
          <p className="text-sm leading-7 md:text-base md:leading-8">
            ما در وت وان بر آنیم تا با ترکیب تخصص دامپزشکی، فناوری‌های نوین و هوش مصنوعی، مسیر ارائه خدمات دامپزشکی را متحول کنیم.
            چشم‌انداز ما تبدیل شدن به:

            پیشروترین پلتفرم دامپزشکی هوشمند در ایران و کشورهای آسیای میانه

            مرجع اول انتخاب دامداران و صاحبان حیوانات برای دریافت خدمات تخصصی، سریع و مطمئن

            درگاه یکپارچه‌ای از خدمات درمانی، آزمایشگاهی، دارویی، آموزشی و مشاوره‌ای با بهره‌گیری از داده‌محوری و هوشمندسازی

            پشتیبان توسعه پایدار دامپروری و بهداشت دام‌ها با ارتقای دسترسی و کیفیت خدمات

            در آینده‌ای نزدیک، وت وان نه‌تنها یک ابزار بلکه یک همراه هوشمند برای مدیریت سلامت دام خواهد بود.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl lg:text-3xl font-bold">ماموریت وت وان
          </h3>
          <p className="text-sm leading-7 md:text-base md:leading-8">
            ماموریت ما در وت وان، فراهم‌سازی بستری نوآورانه، در دسترس و قابل اعتماد برای ارائه خدمات دامپزشکی است که به کمک فناوری روز و هوش مصنوعی، نیازهای واقعی دامداران، صاحبان حیوانات خانگی و فعالان حوزه دامپزشکی را پاسخ دهد.
            ما با تمرکز بر کیفیت، سرعت و دقت در خدمات، در تلاشیم تا:

            فرآیند دریافت مشاوره و خدمات دامپزشکی را برای همه ساده‌تر و هوشمندتر کنیم

            امکان دسترسی آنلاین و در محل به دامپزشکان متخصص را در سراسر کشور و منطقه فراهم کنیم

            پایگاه داده‌ای یکپارچه از اطلاعات سلامت دام‌ها ایجاد کنیم تا تصمیم‌گیری‌های درمانی دقیق‌تر شود

            دامپزشکان را توانمند کنیم تا از طریق ابزارهای دیجیتال، خدمات بهتر و گسترده‌تری ارائه دهند

            و در نهایت، سلامت دام و بهبود بهره‌وری دامداری را در سطح ملی و منطقه‌ای ارتقا دهیم
          </p>
        </div>
      </div>
    </div>
  );
}
export default IndexAboutus;
