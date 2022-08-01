export const chosenOptions = [
  { key: 'Yes', value: 'Yes', text: 'Yes' },
  { key: 'No', value: 'No', text: 'No' },
  { key: 'Partially', value: 'Partially', text: 'Partially' },
];

export const yearsOptions = [];

function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = max - 60;

  for (let i = max; i >= min; i--) {
    yearsOptions.push({
      key: i,
      value: i,
      text: i,
    });
  }
}
generateArrayOfYears();

export const languageOptions = [
  { key: 'English', value: 'English', text: 'English' },
  { key: 'Spanish', value: 'Spanish', text: 'Spanish' },
  { key: 'German', value: 'German', text: 'German' },
  { key: 'French', value: 'French', text: 'French' },
  { key: 'Mandarin Chinese', value: 'Mandarin Chinese', text: 'Mandarin Chinese' },
  { key: 'Arabic', value: 'Arabic', text: 'Arabic' },
  { key: 'Portuguese', value: 'Portuguese', text: 'Portuguese' },
  { key: 'Japanese', value: 'Japanese', text: 'Japanese' },
  { key: 'Vietnamese', value: 'Vietnamese', text: 'Vietnamese' },
  { key: 'Thaï', value: 'Thaï', text: 'Thaï' },
];

export const durationOptions = [
  { key: 'Less than a month', value: 'Less than a month', text: 'Less than a month' },
  { key: 'Between 1 and 6 months', value: 'Between 1 and 6 months', text: 'Between 1 and 6 months' },
  { key: 'Between 6 months and 1 year', value: 'Between 6 months and 1 year', text: 'Between 6 months and 1 year' },
  { key: 'More than a year', value: 'More than a year', text: 'More than a year' },
];
