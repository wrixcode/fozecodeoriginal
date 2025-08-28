import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Enhanced response logic with Fozecode-specific information
    const response = getFozecodeResponse(message);

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}

// Enhanced response generator with Fozecode information
function getFozecodeResponse(query: string): string {
  const normalizedQuery = query.toLowerCase();
  
  // Greetings
  if (normalizedQuery.includes('hello') || normalizedQuery.includes('hi') || normalizedQuery.includes('hey')) {
    return 'Hello! Welcome to Fozecode. I\'m here to help with your web development needs. How can I assist you today?';
  }

  // Services related queries
  if (normalizedQuery.includes('service') || normalizedQuery.includes('offer') || normalizedQuery.includes('provide')) {
    return 'At Fozecode, we offer a comprehensive range of web development services including: frontend development, backend development, e-commerce solutions, UI/UX design, SEO optimization, and custom software development. Which service are you interested in learning more about?';
  }

  // Frontend development
  if (normalizedQuery.includes('frontend') || normalizedQuery.includes('front-end') || normalizedQuery.includes('front end') || 
      normalizedQuery.includes('ui') || normalizedQuery.includes('interface')) {
    return 'Our frontend development team specializes in creating responsive, user-friendly interfaces using modern technologies like React, Next.js, and Tailwind CSS. We focus on delivering fast-loading, accessible, and visually appealing websites that engage your users and represent your brand effectively.';
  }

  // Backend development
  if (normalizedQuery.includes('backend') || normalizedQuery.includes('back-end') || normalizedQuery.includes('back end') || 
      normalizedQuery.includes('server') || normalizedQuery.includes('database')) {
    return 'Fozecode excels in robust backend development using Node.js, Python, and various database technologies. We build secure, scalable APIs and server architectures that power your applications efficiently. Our solutions ensure data integrity, high performance, and seamless integration with frontend systems.';
  }

  // E-commerce
  if (normalizedQuery.includes('ecommerce') || normalizedQuery.includes('e-commerce') || normalizedQuery.includes('shop') || 
      normalizedQuery.includes('store') || normalizedQuery.includes('sell')) {
    return 'Our e-commerce solutions help businesses establish powerful online stores. We work with platforms like Shopify, WooCommerce, and custom solutions to create engaging shopping experiences with secure payment processing, inventory management, and customer relationship tools. We focus on conversion optimization and seamless checkout flows.';
  }

  // UI/UX Design
  if (normalizedQuery.includes('design') || normalizedQuery.includes('ux') || normalizedQuery.includes('ui/ux') || 
      normalizedQuery.includes('user experience')) {
    return 'Fozecode\'s design team creates intuitive and beautiful user experiences. We begin with research and wireframing, then develop high-fidelity prototypes before implementation. Our design philosophy centers on user-centric approaches that balance aesthetics with functionality to increase engagement and conversion rates.';
  }

  // SEO
  if (normalizedQuery.includes('seo') || normalizedQuery.includes('search engine') || normalizedQuery.includes('ranking') || 
      normalizedQuery.includes('google')) {
    return 'Our SEO optimization services help improve your website\'s visibility in search engines. We implement technical SEO best practices, optimize content for relevant keywords, improve site performance, and build quality backlinks. Our goal is to increase organic traffic and improve your search ranking position.';
  }

  // Custom Software
  if (normalizedQuery.includes('custom') || normalizedQuery.includes('bespoke') || normalizedQuery.includes('software') || 
      normalizedQuery.includes('application') || normalizedQuery.includes('app')) {
    return 'Fozecode specializes in custom software solutions tailored to your specific business needs. We develop web applications, internal tools, and specialized platforms that automate processes and solve unique challenges. Our agile development approach ensures we deliver functional, secure, and maintainable software.';
  }

  // Portfolio/Past work
  if (normalizedQuery.includes('portfolio') || normalizedQuery.includes('examples') || normalizedQuery.includes('past work') || 
      normalizedQuery.includes('projects') || normalizedQuery.includes('clients')) {
    return 'We\'ve worked with businesses across multiple industries, from startups to established enterprises. Our portfolio includes e-commerce platforms, corporate websites, web applications, and custom software solutions. We\'d be happy to share relevant case studies during a consultation call. Would you like to schedule one?';
  }

  // Pricing
  if (normalizedQuery.includes('price') || normalizedQuery.includes('cost') || normalizedQuery.includes('fee') || 
      normalizedQuery.includes('budget') || normalizedQuery.includes('quote')) {
    return 'Our pricing is customized based on your project requirements, scope, and timeline. We offer competitive rates with flexible engagement models including fixed-price projects and hourly rates. To provide an accurate quote, we\'d need to understand your project in detail. Would you like to schedule a free consultation to discuss your needs?';
  }

  // Timeline
  if (normalizedQuery.includes('timeline') || normalizedQuery.includes('time') || normalizedQuery.includes('duration') || 
      normalizedQuery.includes('how long') || normalizedQuery.includes('deadline')) {
    return 'Project timelines depend on complexity, scope, and specific requirements. Simple websites might take 2-4 weeks, while complex web applications or e-commerce platforms typically require 8-12 weeks or more. During our initial consultation, we can provide a more accurate timeline based on your project details.';
  }

  // Process
  if (normalizedQuery.includes('process') || normalizedQuery.includes('approach') || normalizedQuery.includes('methodology') || 
      normalizedQuery.includes('how do you') || normalizedQuery.includes('steps')) {
    return 'Our development process includes discovery (requirements gathering), design (wireframes and prototypes), development (coding and testing), deployment, and maintenance. We work in agile sprints, providing regular updates and collecting feedback throughout. This approach ensures transparency and allows us to adapt to changing requirements.';
  }

  // Contact/Consultation
  if (normalizedQuery.includes('contact') || normalizedQuery.includes('call') || normalizedQuery.includes('email') || 
      normalizedQuery.includes('consultation') || normalizedQuery.includes('talk') || normalizedQuery.includes('meet')) {
    return 'We\'d love to discuss your project! You can schedule a free consultation by filling out our contact form or sending an email to contact@fozecode.com. During this call, we\'ll discuss your requirements, answer your questions, and explore how we can help bring your vision to life.';
  }

  // Support/Maintenance
  if (normalizedQuery.includes('support') || normalizedQuery.includes('maintenance') || normalizedQuery.includes('update') || 
      normalizedQuery.includes('after') || normalizedQuery.includes('warranty')) {
    return 'Fozecode offers ongoing maintenance and support services to keep your website secure, up-to-date, and performing optimally. Our support packages include regular updates, security monitoring, performance optimization, content updates, and technical assistance. We can customize a maintenance plan that suits your specific needs.';
  }
  
  // Technologies
  if (normalizedQuery.includes('technology') || normalizedQuery.includes('tech stack') || normalizedQuery.includes('programming') || 
      normalizedQuery.includes('framework') || normalizedQuery.includes('language')) {
    return 'We work with cutting-edge technologies including React, Next.js, Vue.js, Node.js, Python, MongoDB, PostgreSQL, AWS, and more. Our team selects the most appropriate tech stack for each project based on requirements, performance needs, scalability considerations, and long-term maintenance. This ensures efficient development and future-proof solutions.';
  }

  // Default response
  return "Thank you for your interest in Fozecode. I'd be happy to provide more information about our web development services, process, or answer any specific questions you might have. Feel free to ask about our expertise in frontend and backend development, e-commerce, UI/UX design, SEO, or custom software solutions. Would you like to schedule a free consultation to discuss your project?";
} 