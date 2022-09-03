export const getDate = (x) => {
  const date = new Date(x);
  let finalDate = `${date.toLocaleDateString('en-US')} ${date.toLocaleTimeString('en-US')}`
  return finalDate; 
} 