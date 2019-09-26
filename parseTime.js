export function addPrefix(number, length = 2) {
  return (Array(length).join('0') + number).slice(-length);
}

export function parseTime(number, precision = 3) {
  switch (precision) {
    case 1: {
      let second = number % 60;
      second = addPrefix(second);
      return {
        second: number,
      };
    }

    case 2: {
      let second = number % 60;
      let minute = Math.floor(number / 60);
      second = addPrefix(second);
      minute = addPrefix(minute);
      return {
        minute,
        second,
      };
    }

    case 3: {
      let second = number % 60;
      let minute = Math.floor(number / 60) % 60;
      let hour = Math.floor(number / 3600);
      second = addPrefix(second);
      minute = addPrefix(minute);
      hour = addPrefix(hour);
      return {
        hour,
        minute,
        second,
      };
    }

    case 4: {
      let second = number % 60;
      let minute = Math.floor(number / 60) % 60;
      let hour = Math.floor(number / 3600) % 24;
      let day = Math.floor(number / 86400);
      second = addPrefix(second);
      minute = addPrefix(minute);
      hour = addPrefix(hour);
      day = addPrefix(day);
      return {
        day,
        hour,
        minute,
        second,
      };
    }

    default: {
      return {
        second: number,
      };
    }
  }
}
