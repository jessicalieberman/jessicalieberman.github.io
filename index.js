const about1 = document.getElementById("about-1")

const startOfPrivatePractice = new Date('January 1, 2015');
const today = new Date();

const differenceInMilliseconds = today.getTime() - startOfPrivatePractice.getTime();
const differenceInYears = differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365);
const yearsSinceStartOfPrivatePractice = Math.round(differenceInYears);

about1.innerText = `Jessica has a Master’s Degree in special education and was a classroom teacher and administrator in public and private schools for 15 years. For the last ${yearsSinceStartOfPrivatePractice} years she has been a Learning Specialist in private practice working with students with learning disabilities, ADHD, and emotional challenges, particularly anxiety.`