import DatePicker from "react-datepicker";
import "./index.css";

type DatePickerProps = {
  date: Date;
  setDate: Function;
  name: string;
};

// date picker component
const DatePickerComponent = ({ setDate, date, name }: DatePickerProps) => {
  return (
    <DatePicker
      wrapperClassName="datePicker"
      onChange={(date: Date) => setDate(date)}
      selected={date}
      showTimeSelect={true}
      dateFormat="Pp"
      name={name}
    />
  );
};

export default DatePickerComponent;
