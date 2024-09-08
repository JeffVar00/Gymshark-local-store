import { useTranslations } from "next-intl";

const Notification = () => {
  const t = useTranslations("Notification");
  return (
    <div className="px-4 h-12 mt-14 md:mt-16 bg-barriosecundary flex justify-center items-center text-center text-barrioprimary text-xs  md:text-center uppercase font-semibold border-b border-webprimary">
      {t("message")}
    </div>
  );
};

export default Notification;
