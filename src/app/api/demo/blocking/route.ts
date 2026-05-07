import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText } from 'ai';

const nim = createOpenAICompatible({
  name: 'nim',
  baseURL: 'https://integrate.api.nvidia.com/v1',
  headers: {
    Authorization: `Bearer ${process.env.NIM_API_KEY}`,
  },
});

const result = streamText({
  model: "deepseek-ai/deepseek-v3.2",
  prompt: 'Tell me the history of the Northern White Rhino.',
  experimental_telemetry: {
    isEnabled: true,
    recordInputs: true,
    recordOutputs: true
  }
});

for await (const textPart of result.textStream) {
  process.stdout.write(textPart);
}

console.log();
console.log('Token usage:', await result.usage);
console.log('Finish reason:', await result.finishReason);
