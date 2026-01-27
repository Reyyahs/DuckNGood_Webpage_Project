import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

/**
 * Gemini Service
 * 
 * Handles interaction with the Google Gemini API.
 * Manages the chat session state and sends messages to the model.
 */
class GeminiService {
  private ai: GoogleGenAI;
  private chat: Chat | null = null;

  constructor() {
    // Initialize the Gemini Client with the API Key from environment variables
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  /**
   * Initializes a new Chat session with specific model configurations.
   * This is called lazily when the first message is sent.
   */
  public initChat(): void {
    this.chat = this.ai.chats.create({
      model: 'gemini-3-flash-preview', // Optimized model for speed/cost
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balances creativity with accuracy
      },
    });
  }

  /**
   * Sends a user message to the Gemini model and returns the text response.
   * 
   * @param message - The user's input text
   * @returns The model's response text
   */
  public async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      // Auto-initialize if not ready
      this.initChat();
    }
    
    // Safety check in case initialization failed
    if (!this.chat) {
      return "I apologize, but my connection to the kitchen is currently down. Please try again later.";
    }

    try {
      const response: GenerateContentResponse = await this.chat.sendMessage({ message });
      return response.text || "I'm having trouble thinking of a response right now.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "I apologize, I am experiencing a momentary lapse in concentration. Please ask me again.";
    }
  }
}

// Export a singleton instance of the service
export const geminiService = new GeminiService();