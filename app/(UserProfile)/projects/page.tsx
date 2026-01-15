import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Plus, ExternalLink, Edit, Trash2, Eye, Search } from "lucide-react";

function MyProjects() {
  // Sample project data - replace with actual data from your backend
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A full-stack admin dashboard with analytics, inventory management, and order tracking.",
      tech: ["React", "Node.js", "MongoDB"],
      views: 324,
      likes: 45,
      createdAt: "2 weeks ago"
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI-powered responses and conversation analysis.",
      tech: ["Next.js", "OpenAI", "WebSocket"],
      views: 567,
      likes: 89,
      createdAt: "1 month ago"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "Mobile-first fitness app with workout plans, progress tracking, and social features.",
      tech: ["React Native", "Firebase", "Redux"],
      views: 212,
      likes: 32,
      createdAt: "3 weeks ago"
    }
  ];

  return (
    <main className="px-10 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-medium mb-2">My Projects</h1>
            <p className="text-gray-600">Manage and showcase your amazing work</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">
            <Plus className="size-4" />
            New Project
          </button>
        </div>

        <div className="pb-3">
          <Label className="flex text-center text-xl font-medium gap-1 items-center">Search <Search size={20} className="-translate-y-[-1.5px]"/></Label>
          <Input className="mb-2"></Input>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {/* Project Image/Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Eye className="size-4" /> {project.views}
                  </span>
                  <span>❤️ {project.likes}</span>
                  <span className="ml-auto text-xs">{project.createdAt}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                    <ExternalLink className="size-4" /> View
                  </button>
                  <button className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                    <Edit className="size-4" />
                  </button>
                  <button className="flex items-center justify-center px-3 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 transition-colors">
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default MyProjects;