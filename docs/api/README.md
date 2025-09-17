# 🔌 Magic AIght Ball API Documentation

Welcome to the Magic AIght Ball API! This RESTful API powers our AI fortune teller with Azure OpenAI integration.

## 🚀 Base URL

```
Development: http://localhost:3001/api
Production: https://your-domain.com/api
```

## 🔑 Authentication

Currently, the API doesn't require authentication, but rate limiting is in place to prevent abuse.

## 📡 Endpoints

### 🎱 Get Magic Prediction

Get an AI-powered prediction for a user's question.

**Endpoint:** `POST /api/prediction`

**Request Body:**
```json
{
  "question": "Will I have a good day tomorrow?",
  "sessionId": "optional-session-identifier"
}
```

**Response:**
```json
{
  "success": true,
  "prediction": "🌟 The stars align in your favour, mate! Tomorrow's looking bright as a summer day in Sydney!",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "sessionId": "abc123"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Question is required",
  "code": "VALIDATION_ERROR"
}
```

### 📊 Health Check

Check if the API is running and healthy.

**Endpoint:** `GET /api/health`

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0"
}
```

## 🚦 Status Codes

- `200` - Success
- `400` - Bad Request (validation error)
- `429` - Too Many Requests (rate limit exceeded)
- `500` - Internal Server Error
- `503` - Service Unavailable (Azure OpenAI down)

## 🛡️ Rate Limiting

- **Rate Limit:** 10 requests per minute per IP
- **Headers:** Response includes rate limit headers
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Time when limit resets

## 🔧 Error Handling

All errors follow this format:
```json
{
  "success": false,
  "error": "Human-readable error message",
  "code": "ERROR_CODE",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

## 📝 Request Validation

### Question Requirements
- **Required:** Must not be empty
- **Length:** 1-500 characters
- **Content:** No inappropriate language (basic filtering)

### Session ID
- **Optional:** For tracking user sessions
- **Format:** Alphanumeric string, max 50 characters

## 🎯 Implementation Examples

### JavaScript/TypeScript
```typescript
async function askMagicBall(question: string): Promise<string> {
  const response = await fetch('/api/prediction', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });
  
  const data = await response.json();
  
  if (data.success) {
    return data.prediction;
  } else {
    throw new Error(data.error);
  }
}
```

### React Hook Example
```typescript
import { useState, useCallback } from 'react';

export const useMagicBall = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const askQuestion = useCallback(async (question: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/prediction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error);
      }
      
      return data.prediction;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { askQuestion, loading, error };
};
```

## 🧪 Testing the API

### Using curl
```bash
# Health check
curl http://localhost:3001/api/health

# Ask a question
curl -X POST http://localhost:3001/api/prediction \
  -H "Content-Type: application/json" \
  -d '{"question": "Will I pass my coding test?"}'
```

### Using Postman
1. Create a new POST request to `http://localhost:3001/api/prediction`
2. Set Content-Type header to `application/json`
3. Add request body: `{"question": "Your question here"}`
4. Send the request

## 🔍 Monitoring and Logging

### Development
- All requests are logged to console
- Error stack traces included
- Debug mode shows additional information

### Production
- Structured logging with timestamps
- Error tracking without sensitive data
- Performance monitoring

## 🛠️ Future Endpoints

### Planned Features
- `GET /api/history/:sessionId` - Get question history
- `POST /api/feedback` - Submit feedback on predictions
- `GET /api/stats` - Anonymous usage statistics

---

**Need help?** Check the [troubleshooting guide](../user-guide/troubleshooting.md) or ask in the project discussions! 🤝