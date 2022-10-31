import AlarmBox from "../components/AlarmBox";

const Alarm = () => {
  return (
    <section
      id="bg-white"
      className="min-h-full bg-white py-10 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max"
    >
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />
      <AlarmBox />
    </section>
  );
};
export default Alarm;
