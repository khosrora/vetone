"use client";
import { IconCopy, IconShare } from "@tabler/icons-react";
import { useRef } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { toast } from "sonner";

function Share({ link }: { link: string }) {
  const closeModal = useRef<HTMLButtonElement | null>(null);
  
  return (
    <>
      <div
        onClick={() => {
          if (document) {
            (
              document.getElementById("my_modal_1") as HTMLFormElement
            ).showModal();
          }
        }}
        className=""
      >
        <IconShare className="cursor-pointer" />
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-[#f6f7f8] rounded-md">
          <h3 className="font-black text-base lg:text-lg">
            اشتراک گذاری شبکه های اجتماعی
          </h3>
          <div className="divider"></div>
          <div className="flex flex-row gap-6 lg:gap-6 justify-center">
            <TelegramShareButton className="border-none " url={"/"}>
              <TelegramIcon className="rounded-full cursor-pointer h-10 w-10 md:w-12 md:h-12" />
            </TelegramShareButton>
            <FacebookShareButton className="border-none " url={"/"}>
              <FacebookIcon className="rounded-full cursor-pointer h-10 w-10 md:w-12 md:h-12" />
            </FacebookShareButton>
            <LinkedinShareButton className="border-none " url={"/"}>
              <LinkedinIcon className="rounded-full cursor-pointer h-10 w-10 md:w-12 md:h-12" />
            </LinkedinShareButton>
            <WhatsappShareButton className="border-none " url={"/"}>
              <WhatsappIcon className="rounded-full cursor-pointer h-10 w-10 md:w-12 md:h-12" />
            </WhatsappShareButton>
          </div>
          <div
            onClick={() => {
              navigator.clipboard
                .writeText(link)
                .then(() => {
                  toast.success("رونوشت گرفته شد");
                })
                .catch((err) => {
                  toast.error("خطا در کپی کردن متن");
                  console.error("Clipboard write failed:", err);
                });
              closeModal.current?.click();
            }}
            className="input input-bordered bg-white flex justify-between items-center gap-2 lg:input-lg mt-6"
          >
            <p className="text-xs">{`... ${link.slice(0, 30)}`}</p>
            <IconCopy className="cursor-pointer" />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button ref={closeModal}>close</button>
        </form>
      </dialog>
    </>
  );
}
export default Share;
