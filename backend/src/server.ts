import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'Magic AIght Ball backend is running! ✨'
  });
});

// Ask question endpoint (placeholder for Azure OpenAI integration)
app.post('/api/ask-question', async (req: Request, res: Response) => {
  try {
    const { question } = req.body;

    // Validate question exists
    if (!question || question.trim().length === 0) {
      return res.status(400).json({
        error: 'Please ask a question!',
        code: 'EMPTY_QUESTION'
      });
    }

    // Sanitize input to prevent code injection
    const sanitizedQuestion = question.trim();
    
    // Check for potentially malicious patterns (basic protection)
    const dangerousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i, // onclick, onload, etc.
      /<iframe/i,
      /eval\s*\(/i,
      /expression\s*\(/i
    ];
    
    const hasDangerousContent = dangerousPatterns.some(pattern => 
      pattern.test(sanitizedQuestion)
    );
    
    if (hasDangerousContent) {
      return res.status(400).json({
        error: 'Invalid question format. Please ask a simple question.',
        code: 'INVALID_INPUT'
      });
    }

    // Validate character length
    if (sanitizedQuestion.length > 500) {
      return res.status(400).json({
        error: 'Please keep questions under 500 characters',
        code: 'QUESTION_TOO_LONG'
      });
    }

    // Count words excluding punctuation
    const countWords = (text: string): number => {
      if (!text.trim()) return 0;
      const cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?'"]/g, '').trim();
      return cleanedText.split(/\s+/).filter(word => word.length > 0).length;
    };

    const wordCount = countWords(sanitizedQuestion);
    const maxWords = 30;

    if (wordCount > maxWords) {
      return res.status(400).json({
        error: `Please keep questions to ${maxWords} words or less. Your question has ${wordCount} words.`,
        code: 'TOO_MANY_WORDS'
      });
    }

    // Check if Azure OpenAI is configured
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_KEY;
    const deploymentName = process.env.AZURE_OPENAI_DEPLOYMENT_NAME;

    if (!endpoint || !apiKey || !deploymentName) {
      // Return a fallback response if Azure OpenAI is not configured
      const fallbackAnswers = [
        'Signs point to yes ✨',
        'Ask again later 🔮',
        'The future is unclear ⭐',
        'My sources say no 🎱',
        'Without a doubt! 💫',
        'Better not tell you now 🌙',
        'Very doubtful 🌟',
        'It is certain ✨'
      ];
      
      const randomAnswer = fallbackAnswers[Math.floor(Math.random() * fallbackAnswers.length)];
      
      return res.json({
        answer: randomAnswer,
        timestamp: new Date().toISOString(),
        note: 'Using fallback responses. Configure Azure OpenAI to enable AI-powered answers.'
      });
    }

    // Azure OpenAI integration will be implemented here later
    // For now, return a placeholder response
    res.json({
      answer: 'Azure OpenAI integration coming soon! ✨',
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing question:', error);
    res.status(500).json({
      error: 'The Magic 8 Ball is feeling dizzy. Please try again!',
      code: 'INTERNAL_ERROR'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🎱 Magic AIght Ball backend is running on port ${PORT}`);
  console.log(`✨ Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔮 Ready to answer questions!`);
});
