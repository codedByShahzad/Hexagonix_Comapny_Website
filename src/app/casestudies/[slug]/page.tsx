import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type PageProps = {
  params: {
    slug: string;
  };
};

export const generateMetadata = ({ params }: PageProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
};

const ProjectSlugPage = ({ params }: PageProps) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-[#F8F7FC] min-h-screen py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto">
       

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          {project.title}
        </h1>

        {/* Category */}
        <p className="inline-block mb-8 px-4 py-1 rounded-full text-sm
        bg-gradient-to-r from-[#57007B] to-[#F76680] text-white">
          {project.category}
        </p>

        {/* Hero Image */}
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg mb-14">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-3 gap-14">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8 text-gray-700 text-lg leading-relaxed">
            <p>{project.para1}</p>
            <p>{project.para2}</p>
            <p>{project.para3}</p>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{project.li1}</li>
                <li>{project.li2}</li>
                <li>{project.li3}</li>
                <li>{project.li4}</li>
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Project Info
            </h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Client:</span>{" "}
                {project.info.client}
              </li>
              <li>
                <span className="font-semibold">Category:</span>{" "}
                {project.info.category}
              </li>
              <li>
                <span className="font-semibold">Completed:</span>{" "}
                {project.info.completedOn}
              </li>
            </ul>

            {/* Store Links */}
            <div className="mt-8 space-y-3">
              {project.info.googleStore && (
                <Link
                  href={project.info.googleStore}
                  target="_blank"
                  className="block text-center w-full rounded-lg px-4 py-3
                  bg-gray-900 text-white hover:bg-gray-800 transition"
                >
                  Visit Website / Play Store
                </Link>
              )}

              {project.info.appStore && (
                <Link
                  href={project.info.appStore}
                  target="_blank"
                  className="block text-center w-full rounded-lg px-4 py-3
                  bg-gradient-to-r from-[#57007B] to-[#F76680] text-white"
                >
                  App Store
                </Link>
              )}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ProjectSlugPage;
