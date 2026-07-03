import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  schema?: Record<string, any>;
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = `${title} | Kiez - Local Services`;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update canonical tag
    if (canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }

    // Update schema (JSON-LD)
    if (schema) {
      const scriptId = 'seo-schema-script';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount if needed, though usually fine to overwrite on next page
      const script = document.getElementById('seo-schema-script');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonical, schema]);

  return null;
}