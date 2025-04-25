export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">About Ethical Eats</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-lg mb-4 text-gray-700 font-semibold">
          At Ethical Eats, we believe that ethical eating should be personal, sustainable, and impactful. We help you make food choices that align with your values while ensuring your health and well-being.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          Every year, millions of people choose to eat more ethically. However, 84% of people who start vegetarian or vegan diets eventually abandon them. This isn't because they don't care - it's because these one-size-fits-all approaches don't account for individual values, priorities, or lifestyles.
        </p>
        <p className="text-lg text-gray-700">
          Through data-driven insights and personalized recommendations, we empower you to make ethical food choices that are both impactful and sustainable, while ensuring your nutritional needs are met. It's not just about what you don't eat—it's about making every meal count toward the change you want to see in the world.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">How We Help</h2>
        <p className="text-lg mb-4 text-gray-700">
          At the core of Ethical Eats is our comprehensive, open-source database that tracks the characteristics and qualities of different foods. This living database ensures our recommendations are always accurate and up-to-date with the latest research and information.
        </p>
        <p className="text-lg mb-4 text-gray-700">
          We combine this data with your personal preferences and values to create a customized approach to ethical eating. Our algorithm considers multiple factors to provide recommendations that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Align with your specific ethical priorities</li>
          <li>Maintain optimal nutritional balance</li>
          <li>Adapt to your lifestyle and dietary needs</li>
          <li>Evolve as new information becomes available</li>
        </ul>
        <p className="text-lg mt-4 text-gray-700">
          By leveraging technology and data science, we make it easier than ever to make informed, impactful food choices that reflect your values while supporting your health and well-being.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Who We Are</h2>
        <p className="text-lg text-gray-700">
          I'm Jack, a data scientist and software engineer.
        </p>
      </section>
    </div>
  );
}