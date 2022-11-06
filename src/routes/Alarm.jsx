import { useState } from "react";
import AlarmBox from "../components/AlarmBox";
import AddAlarm from "../components/addAlarm";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiCheckDouble, BiPlus } from "react-icons/bi";
import { SpeedDial } from "primereact/speeddial";

const Alarm = () => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const [editAlarm, setEditAlarm] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const selectAlarm = (alarm) => {
    setEditAlarm(alarm);
    setDisplayDialog(true);
  };

  const toggleEditButton = () => {
    if (editMode) {
      return {
        label: "update",
        icon: <BiCheckDouble className="text-xl"></BiCheckDouble>,
        command: () => {
          setEditMode(false);
        },
      };
    } else {
      return {
        label: "edit",
        icon: "pi pi-pencil",
        command: () => {
          setEditMode(true);
        },
      };
    }
  };

  const items = [
    {
      label: "Add",
      icon: <BiPlus className="text-xl"></BiPlus>,
      command: () => {
        setDisplayDialog(true);
      },
    },
    toggleEditButton(),
  ];

  return (
    <section id="alarmComponent" className="">
      <AlarmBox selectAlarm={selectAlarm} editMode={editMode} />
      <AlarmBox selectAlarm={selectAlarm} editMode={editMode} />
      <AlarmBox selectAlarm={selectAlarm} editMode={editMode} />
      <AlarmBox selectAlarm={selectAlarm} editMode={editMode} />

      <div className="add-button-container">
        <SpeedDial
          model={items}
          direction="up"
          className={editMode && "p-speeddial-opened"}
          showIcon={<BsPlusCircleDotted />}
        />
      </div>

      <AddAlarm
        editAlarm={editAlarm}
        setEditAlarm={setEditAlarm}
        displayDialog={displayDialog}
        setDisplayDialog={setDisplayDialog}
      />
    </section>
  );
};
export default Alarm;
