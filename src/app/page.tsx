export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">
        Bhargav Aswini Kumar Sunkari
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Java Full Stack Developer | Spring Boot | React | Cloud
      </p>

      <p className="mt-6 max-w-2xl text-gray-500">
        I’m a Java Full Stack Developer with 5+ years of experience building
        scalable enterprise applications using Spring Boot, React, and
        cloud-native technologies. I specialize in microservices, CI/CD,
        and production-ready systems.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="mailto:bhargavsunkari7@gmail.com"
          className="px-6 py-3 bg-black text-white rounded-lg"
        >
          Contact Me
        </a>

        <a
          href="/bhargav-portfolio"
          className="px-6 py-3 border rounded-lg"
        >
          View Projects
        </a>
      </div>
    </main>
  );
}
