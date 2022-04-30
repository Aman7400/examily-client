// ! Call API function

// * Greeting Generator
export function greetings(name = '') {
  const hour = new Date().getHours();

  if (hour < 12) {
    return `Good Morning, ${name}`;
  } else if (hour === 12) {
    return `Good Noon, ${name}`;
  } else {
    return `Good Evening, ${name}`;
  }
}
