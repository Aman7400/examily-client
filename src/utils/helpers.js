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

// * Status Generator
export function getStatusStyles(status = 'active') {
  const styles = {
    active: {
      backgroundColor: '#B9F8D3',
      color: 'green',
      padding: '.5rem 1.5rem',
      borderRadius: '10px',
    },
    expired: {
      backgroundColor: '#FFA8A8',
      color: 'red',
      padding: '.5rem 1.5rem',
      borderRadius: '10px',
    },
  };

  return styles[status];
}
