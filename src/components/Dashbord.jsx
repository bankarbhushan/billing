import { Link } from "react-router-dom";

const Dashboard = () => {
  const cards = [
    {
      title: "🧾 Billing",
      path: "/home",
      image: "https://img.icons8.com/fluency/96/invoice.png",
    },
    {
      title: "👨‍🌾 Add Farmer",
      path: "/add-farmer",
      image: "https://img.icons8.com/color/96/farmer.png",
    },
    {
      title: "🥦 Add Vegetable",
      path: "/add-vegetable",
      image: "https://img.icons8.com/color/96/broccoli.png",
    },
    {
      title: "🧑‍💼 Add Vyapari",
      path: "/add-vyapari",
      image: "https://img.icons8.com/color/96/manager.png",
    },
    {
      title: "📋 Farmer List",
      path: "/farmer-list",
      image:
        "https://img.icons8.com/external-flatart-icons-outline-flatarticons/96/external-list-user-interface-flatart-icons-outline-flatarticons.png",
    },
    {
      title: "📋 Vyapari List",
      path: "/vyapari-list",
      image:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/96/external-list-content-management-flaticons-flat-flat-icons.png",
    },
    {
      title: "📋 Vegetable List",
      path: "/vegetable-list",
      image: "https://img.icons8.com/color/96/vegetarian-food.png",
    },
    {
      title: "📋 farmer managemnt",
      path: "/farmer-management",
      image: "https://img.icons8.com/color/96/vegetarian-food.png",
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header/Navbar */}
      <div className="bg-green-700 text-white p-5 shadow-md text-center text-2xl font-bold tracking-wide">
        🌿 माऊली डॅशबोर्ड 🌿
      </div>

      {/* Cards Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            to={card.path}
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-xl transition duration-300 border border-green-200 p-4 flex flex-col items-center text-center"
          >
            <img src={card.image} alt={card.title} className="w-20 h-20 mb-4" />
            <h2 className="text-xl font-semibold text-green-700">
              {card.title}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
