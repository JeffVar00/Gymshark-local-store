const Notification = ({ notification_message }) => {
  return (
    <div className="px-4 h-12 mt-6 md:mt-12 bg-white flex justify-center items-center text-center text-webprimary text-xs  md:text-center uppercase font-semibold border-b border-webprimary">
      {notification_message}
    </div>
  );
};

export default Notification;
