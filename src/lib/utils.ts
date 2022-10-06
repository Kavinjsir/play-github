export const calculateAge = (birthInput: string): number => {
  const birthday = new Date(birthInput);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const today = () => new Date().toISOString().slice(0, 10);
