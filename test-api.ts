import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function test(model: string) {
  try {
    const response = await ai.models.generateContent({
        model,
        contents: 'hello',
    });
    console.log(`Success with ${model}`);
  } catch (e: any) {
    let msg = e.message;
    if (msg.includes('models/gemini-3.1-pro-preview is not found')) {
      console.log(`${model} is NOT FOUND`);
    } else if (msg.includes('Quota')) {
      console.log(`${model} QUOTA EXCEEDED`);
    } else {
      console.log(`Error with ${model}: ${msg.substring(0, 100)}...`);
    }
  }
}

async function run() {
  await test('gemini-3.1-pro-preview');
  await test('gemini-1.5-flash');
  await test('gemini-1.5-pro');
  await test('gemini-2.0-flash');
}

run();
