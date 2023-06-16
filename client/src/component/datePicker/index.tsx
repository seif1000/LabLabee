import DatePicker from "react-datepicker";
import "./index.css";

type DatePickerProps = {
  date: Date;
  setDate: Function;
};
const DatePickerComponent = ({ setDate, date }: DatePickerProps) => {
  return (
    <DatePicker
      //dateFormat="dd-MM-yyyy"
      wrapperClassName="datePicker"
      onChange={(date: Date) => setDate(date)}
      selected={date}
      showTimeSelect={true}
      dateFormat="Pp"
    />
  );
};

export default DatePickerComponent;
