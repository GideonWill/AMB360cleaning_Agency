import Portfolio from '../components/Portfolio';
import SEO from '../components/SEO';

const PortfolioPage = () => {
  return (
    <div className="space-y-0">
      <SEO
        title="Our Cleaning & Fumigation Projects | amb360cleaningagency"
        description="View completed cleaning and fumigation projects by amb360cleaningagency across residential and commercial properties in Accra."
      />
      <Portfolio showTitle={true} />
    </div>
  );
};

export default PortfolioPage;

