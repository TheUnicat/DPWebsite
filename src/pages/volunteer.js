// src/pages/volunteer.js
import Layout from '../app/layout';

export default function Volunteer() {
  return (
    <Layout>
      <section className="my-8">
        <h2 className="text-2xl font-semibold">Volunteer with Us</h2>
        <p className="mt-4">
          We are always looking for passionate individuals to join our team. If you are interested in volunteering, please reach out to us at{' '}
          <a href="mailto:volunteer@myorganization.org" className="text-primary-dark underline">
            volunteer@myorganization.org
          </a>.
        </p>
        <p className="mt-4">
          Volunteer opportunities include:
        </p>
        <ul className="mt-4 list-disc list-inside">
          <li>Event Planning</li>
          <li>Community Outreach</li>
          <li>Fundraising</li>
          <li>Administrative Support</li>
        </ul>
      </section>
    </Layout>
  );
}
