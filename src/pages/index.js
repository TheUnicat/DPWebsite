import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-primary-light font-sans text-gray-900">
      <Navbar />
      <header className="bg-primary p-4 text-white text-center">
        <h1 className="text-4xl font-bold">The Dignity Project</h1>
        <p className="mt-2">at JH</p>
      </header>
      <main className="p-4">
        <section className="my-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-4">
            We are a dedicated group of individuals working towards a better future.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="mt-4">
            Our mission is to create positive change in our community through various initiatives and projects.
          </p>
        </section>
        <section className="my-8">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4">
            You can reach us at{' '}
            <a href="mailto:contact@myorganization.org" className="text-primary-dark underline">
              contact@myorganization.org
            </a>
          </p>
        </section>
      </main>
      <footer className="bg-primary p-4 text-white text-center">
        <p>&copy; 2024 My Organization. All rights reserved.</p>
      </footer>
    </div>
  );
}
