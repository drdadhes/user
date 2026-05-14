import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  path = "",
  image = "https://drdadhesayurandnaturecurellp.com/preview.jpg",
}) => {
  const baseUrl = "https://drdadhesayurandnaturecurellp.com";
  const fullUrl = `${baseUrl}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;