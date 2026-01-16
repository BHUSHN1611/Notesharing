import { useNavigate } from 'react-router';

const Question = () => {
    const navigate = useNavigate();
    const courses = [
    {
      title: "System Programming",
      subtitle: "and Compiler Construction",
      gradient: "from-blue-600 to-blue-800",
      accentColor: "bg-blue-400",
      textColor: "text-blue-700",
      hoverColor: "hover:bg-blue-50",
      route:"/spccqp"

    },
    {
      title: "Internet of ",
      subtitle: "Things",
      gradient: "from-purple-600 to-purple-800",
      accentColor: "bg-purple-400",
      textColor: "text-purple-700",
      hoverColor: "hover:bg-purple-50",
      route:"/iotqp"
    },
    {
      title: "Artificial",
      subtitle: "Intelligence",
      gradient: "from-green-600 to-green-800",
      accentColor: "bg-green-400",
      textColor: "text-green-700",
      hoverColor: "hover:bg-green-50",
      route:"/aiqp"
    },
    {
      title: "Cyrptography",
      subtitle: "and System Security",
      gradient: "from-orange-600 to-orange-800",
      accentColor: "bg-orange-400",
      textColor: "text-orange-700",
      hoverColor: "hover:bg-orange-50",
      route:"/cssqp"
    },
    {
      title: "Mobile",
      subtitle: "Computing",
      gradient: "from-red-600 to-red-800",
      accentColor: "bg-red-400",
      textColor: "text-red-700",
      hoverColor: "hover:bg-red-50",
      route:"/mcqp"
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div key={index} className="w-full">
              <div className={`relative bg-linear-to-br ${course.gradient} h-72 sm:h-80 w-full rounded-3xl p-6 flex items-center justify-center flex-col shadow-2xl overflow-hidden group transition-transform duration-300 hover:scale-105`}>
                
                {/* Decorative elements */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${course.accentColor} rounded-full opacity-20 -mr-16 -mt-16`}></div>
                <div className={`absolute bottom-0 left-0 w-24 h-24 ${course.accentColor} rounded-full opacity-20 -ml-12 -mb-12`}></div>
                
                {/* Content */}
                <div className="relative z-10 text-center flex-1 flex items-center justify-center px-2">
                  <h1 className="font-bold text-2xl sm:text-3xl text-white leading-tight drop-shadow-lg">
                    {course.title}<br />
                    <span className="text-blue-200 text-xl sm:text-2xl">{course.subtitle}</span>
                  </h1>
                </div>
                
                {/* Button */}
                <button 
                onClick={()=>{
                    navigate(course.route)
                }}
                className={`relative z-10 bg-white ${course.textColor} font-semibold px-6 sm:px-8 py-3 rounded-xl w-full transition-all duration-300 ${course.hoverColor} hover:shadow-lg hover:-translate-y-1 active:translate-y-0`}>
                  View Question-paper
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Question