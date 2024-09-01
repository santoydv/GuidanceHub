import Link from "next/link";

const clubData = [
  { "NITR_CLUBS": "AICHE", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "SYNERGY", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "ASTRO", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "AXIOM", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "CYBORG", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "GENESYS", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "ECELL", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "ML4E", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "OPENCODE", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "UDAAN", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "WEBWIZ", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "CLARION", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "COGNIZEN", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "FUSION", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "HOURGLASS", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "INQUIZZITIVE", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "KALAAM", "category": "great for personal goal, supportive community learners, good engagement, very inactive and not worth joining" },
  { "NITR_CLUBS": "ROTARACT", "category": "supportive community learners, good engagement, Not so active" },
  { "NITR_CLUBS": "AKRITI", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "CINEMATICS", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "DNB", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "HEARTBEATS", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "EUPHONY", "category": "great for personal goal, supportive community learners, good engagement, very inactive and not worth joining" },
  { "NITR_CLUBS": "MAVERICKS", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "PANTOMIME", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "RITVIC", "category": "great for personal goal, supportive community learners, good engagement, Active, very inactive and not worth joining" },
  { "NITR_CLUBS": "3RD EYE", "category": "good culture, supportive community learners, Active, very inactive and not worth joining" },
];

const Reviews = () => {
  return (
    <section className="flex flex-col gap-5 px-11 my-5">
      <h1 className="text-3xl uppercase font-semibold">Club Reviews</h1>
      <div className="flex flex-col items-start gap-5 my-10">
        {clubData.map((club, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded-md shadow-sm w-full">
            <h2 className="text-2xl font-bold text-blue-600">{club.NITR_CLUBS}</h2>
            <p className="text-gray-700 mt-2">{club.category}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
