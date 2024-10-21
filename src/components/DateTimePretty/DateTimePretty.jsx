import DateTime from "../DateTime/DateTime";

const withDateTimeFormat = WrappedComponent => props => {
  const date = new Date(props.date);
  const now = new Date();

  const timeAgo = () => {
    const diffInMilliseconds = now - date; // Разница в миллисекундах
    const diffInSeconds = Math.floor(diffInMilliseconds / 1000); // Разница в секундах
    const diffInMinutes = Math.floor(diffInSeconds / 60); // Разница в минутах
    const diffInHours = Math.floor(diffInMinutes / 60); // Разница в часах
    const diffInDays = Math.floor(diffInHours / 24); // Разница в днях
  
    if (diffInMinutes < 60) {
      return diffInMinutes === 1 ? '1 минуту назад' : `${diffInMinutes} минут назад`;
    } else if (diffInHours < 24) {
      return diffInHours === 1 ? '1 час назад' : `${diffInHours} часов назад`;
    } else {
      return diffInDays === 1 ? '1 день назад' : `${diffInDays} дней назад`;
    }
  }
  
  return <WrappedComponent {...props} timeAgo={timeAgo()} />;
};

const DateTimePretty  = withDateTimeFormat(DateTime);

export default DateTimePretty;