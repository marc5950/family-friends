export const formatAge = (birthDateString) => {
  const birthDate = new Date(birthDateString);
  const now = new Date();

  // Beregn forskel i måneder
  const yearsDiff = now.getFullYear() - birthDate.getFullYear();
  const monthsDiff = now.getMonth() - birthDate.getMonth();
  const totalMonths = yearsDiff * 12 + monthsDiff;

  // Hvis mindre end 12 måneder, vis i måneder
  if (totalMonths < 12) {
    return `${totalMonths} mdr.`;
  }

  // Ellers vis i år (med decimal hvis relevant)
  const years = totalMonths / 12;

  // Hvis der er en betydelig decimal (mere end 0.3), vis den
  if (years % 1 >= 0.3 && years < 10) {
    return `${years.toFixed(1)} år`;
  }

  // Ellers afrund til heltal
  return `${Math.floor(years)} år`;
};
