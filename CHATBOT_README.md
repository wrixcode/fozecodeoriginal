# Fozecode AI Chatbot Implementation

This document provides information about the AI chatbot implemented on the Fozecode website.

## Features

- Floating chat button in the bottom-right corner of the website
- Expandable chat interface with a message history
- Real-time user interaction
- Fozecode-specific responses about services, pricing, and more
- Mobile-responsive design with Fozecode branding

## Technical Implementation

The chatbot consists of two main components:

1. **Frontend Component (`app/components/Chatbot.tsx`)**
   - Built as a React component using Next.js
   - Uses Framer Motion for animations
   - Responsive design with Tailwind CSS
   - Manages chat state, user input, and message history
   - Branded with Fozecode's color scheme and messaging

2. **Backend API (`app/api/chat/route.ts`)**
   - Next.js API route for processing chat requests
   - Implements domain-specific knowledge about Fozecode services
   - Provides informative responses about web development services, pricing, and process
   - Designed to be easily replaced with more advanced AI solutions

## Fozecode Assistant Capabilities

The chatbot is programmed to provide information about:

- Frontend and backend development services
- E-commerce solutions
- UI/UX design processes
- SEO optimization services
- Custom software development
- Project timelines and processes
- Pricing models and consultation options
- Portfolio and past work information
- Technology stack and expertise

## How to Customize

### Changing the Appearance

The chatbot uses Tailwind CSS classes for styling. You can customize its appearance by modifying the classes in `Chatbot.tsx`.

### Enhancing Domain Knowledge

To add more Fozecode-specific information:

1. Identify common customer questions and topics
2. Update the response patterns in `app/api/chat/route.ts`
3. Add new condition blocks for additional topics in the `getFozecodeResponse` function

### Integrating with Advanced AI

For more natural conversations, integrate with an AI service (like OpenAI, Google Vertex AI):

1. Install the required SDK for your chosen AI service
2. Modify the `app/api/chat/route.ts` file to call the AI service
3. Pass Fozecode-specific context to guide the AI responses

Example for integrating with OpenAI:

```typescript
// In app/api/chat/route.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Call OpenAI with Fozecode-specific system prompt
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { 
          role: "system", 
          content: "You are an AI assistant for Fozecode, a cutting-edge web development agency. Your goal is to help visitors with inquiries about our services, portfolio, pricing, and project timelines. You should provide clear and professional responses, guiding users through our web development solutions, including frontend and backend development, e-commerce, UI/UX design, SEO, and custom software solutions. Offer helpful insights on how we can enhance their online presence and suggest scheduling a free consultation when appropriate. Keep your responses friendly, concise, and informative." 
        },
        { role: "user", content: message }
      ],
    });

    const response = completion.choices[0].message.content;
    return NextResponse.json({ response });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
```

## Future Improvements

- Add conversation history persistence for returning visitors
- Implement user authentication for personalized chat experiences
- Integrate with CRM to track leads generated through the chatbot
- Add ability to schedule consultations directly from the chat
- Implement typing indicators and read receipts
- Expand the knowledge base with case studies and testimonials
- Add support for rich media responses (images, links to portfolio items)
- Implement sentiment analysis to detect user satisfaction
- Create an admin interface to view common questions and improve responses 