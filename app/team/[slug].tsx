import { useParams } from "next/navigation"; // App Router
// import { useRouter } from 'next/router'; // Pages Router variant

const TEAM = [
  {
    name: "A.D Adetunji",
    role: "CEO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Driven by innovation, Darren leads strategy and vision at the company, drawing on a lifelong vision for what tech should be.",
  },
  {
    name: "Quadri AbdulBasit",
    role: "CIO",
    imgUrl: "/ADANew.png",
    bio: "Q serves as the engine that continually builds on ADA's innovative ideas, he breaks down complicated matters into easily understood and resonating ideas.",
  },
  {
    name: "Windapo Olaoluwa",
    role: "CDO & Co-founder",
    imgUrl: "/ADANew.png",
    bio: "Windy excels at creating mesmerizing designs that bring to life the innovative details of a project.",
  },
  {
    name: "Mujeeb Ibrahim",
    role: "CTO",
    imgUrl: "/ADANew.png",
    bio: "Mj as he's so fondly known is an extremely important part of the team, his disposition and proficiency in multiple languages making him a useful element of the company..",
  },
];

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = TEAM.find(
    (m) => m.name.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!member) {
    return <div className="p-10 text-center">Team member not found.</div>;
  }

  return (
    <div className="bg-white dark:bg-neutral-900 shadow-xl mx-auto mt-12 p-8 rounded-2xl max-w-2xl">
      <img
        src={member.imgUrl}
        alt={member.name}
        className="shadow mx-auto mb-4 border-4 dark:border-neutral-700 border-blue-100 rounded-full w-32 h-32 object-cover"
      />
      <h2 className="mb-2 font-bold text-blue-700 dark:text-blue-300 text-3xl text-center">
        {member.name}
      </h2>
      <p className="mb-3 font-medium text-blue-500 dark:text-blue-400 text-center">
        {member.role}
      </p>
      <p className="text-gray-700 dark:text-gray-200 text-center">
        {member.bio}
      </p>
      {/* Add more info per member here if you wish */}
    </div>
  );
}
