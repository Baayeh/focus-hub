const DaysBubble = ({ day }) => {
  return (
    <section
      id="days-bubble"
      className="w-[30px] h-[30px] text-white rounded-full bg-primaryColor flex items-center justify-center mr-0 lg:mr-2"
    >
      <span className="text-xs font-bold">{day}</span>
    </section>
  );
};

export default DaysBubble;
